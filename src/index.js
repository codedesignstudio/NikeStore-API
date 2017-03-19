var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

import { constantsConfig } from './api/v1/config';
import * as apiv1RoutesConfig from './api/v1/routes';

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/minimalist',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'minimalistAppId',
  masterKey: process.env.MASTER_KEY || 'minimalistMasterKey', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  // Don't forget to change to https if needed
  // liveQuery: {
  //   classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  // }
});

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": process.env.SERVER_URL || "http://localhost:1337/parse",
      "appId": process.env.APP_ID || "minimalistAppId",
      "masterKey": process.env.MASTER_KEY || "minimalistMasterKey",
      "appName": "Nike Minimalist Fashion App"
    }
  ],
  "users": [
    {
      "user": "nike",
      "pass": "minimalist"
    }
  ]
}, true);

var app = express();

// Use morgan for logging and bodyParser to dissect request body
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mount routes
app.use(constantsConfig.API_V1_ROUTE_PREFIX + 'users', apiv1RoutesConfig.usersRoutes);

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Serve the Parse Dashboard on the /dashboard URL prefix
var dashboardPath = process.env.DASHBOARD_MOUNT || '/dashboard';
app.use(dashboardPath, dashboard);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('Nike Minimalist Fashion App!');
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('nike minimalist fashion app API server running on port ' + port + '.');
});

// This will enable the Live Query real-time server
// ParseServer.createLiveQueryServer(httpServer);
