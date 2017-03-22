define({ "api": [
  {
    "type": "post",
    "url": "/clients/login",
    "title": "Authenticate a Client",
    "group": "Client",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Client username <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Client password <strong>(required)</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Shows info about error that occured</p>"
          },
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'failed'. Means the request wasn't successful</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "client",
            "description": "<p>Client information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'success'. Means a successful request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT that would be used to make subsequent requests</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://nikeminimalist.herokuapp.com/api/v1/clients/login"
      }
    ],
    "filename": "src/api/v1/models/client/client.js",
    "groupTitle": "Client",
    "name": "PostClientsLogin"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Authenticate a User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password <strong>(required)</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Shows info about error that occured</p>"
          },
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'failed'. Means the request wasn't successful</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'success'. Means a successful request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT that would be used to make subsequent requests</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://nikeminimalist.herokuapp.com/api/v1/users/login"
      }
    ],
    "filename": "src/api/v1/models/user/user.js",
    "groupTitle": "User",
    "name": "PostUsersLogin"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register a new User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email <strong><strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>User full name <strong><strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone number <strong>(required)</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Shows info about error that occured</p>"
          },
          {
            "group": "Error 500",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'failed'. Means the request wasn't successful</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'success'. Means a successful request</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://nikeminimalist.herokuapp.com/api/v1/users/register"
      }
    ],
    "filename": "src/api/v1/models/user/user.js",
    "groupTitle": "User",
    "name": "PostUsersRegister"
  }
] });
