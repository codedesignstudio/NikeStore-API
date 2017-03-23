var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var Parse = require('parse/node');
var ParseDashboard = require('parse-dashboard');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

const constantsConfig = require('./api/v1/config').constantsConfig;
const apiv1RoutesConfig = require('./api/v1/routes');

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
app.use(constantsConfig.API_V1_ROUTE_PREFIX + 'clients', apiv1RoutesConfig.clientsRoutes);
app.use(constantsConfig.API_V1_ROUTE_PREFIX + 'categories', apiv1RoutesConfig.categoriesRoutes);
app.use(constantsConfig.API_V1_ROUTE_PREFIX + 'products', apiv1RoutesConfig.productsRoutes);

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve api docs from the /apidocs folder
app.use('/docs', express.static(path.join(__dirname, '/apidocs')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Serve the Parse Dashboard on the /dashboard URL prefix
var dashboardPath = process.env.DASHBOARD_MOUNT || '/dashboard';
app.use(dashboardPath, dashboard);

// Initialize the Parse server
Parse.initialize(process.env.APP_ID || 'minimalistAppId');
Parse.serverURL = process.env.SERVER_URL || 'http://localhost:1337/parse';

// Parse Server plays nicely with the rest of your web routes
app.get('/', (req, res) => {
  res.status(200).send('Nike Minimalist Fashion App!');
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, () => {
    console.log('nike minimalist fashion app API server running on port ' + port + '.');
});

// This will enable the Live Query real-time server
// ParseServer.createLiveQueryServer(httpServer);
