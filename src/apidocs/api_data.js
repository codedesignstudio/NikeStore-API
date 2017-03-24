define({ "api": [
  {
    "type": "delete",
    "url": "/categories/:id/delete",
    "title": "Delete a category",
    "group": "Category",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Category to delete -- Should be passed as a request parameter <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'success'. Means a successful request</p>"
          }
        ]
      }
    },
    "filename": "src/api/v1/routes/categories.js",
    "groupTitle": "Category",
    "name": "DeleteCategoriesIdDelete"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "Get all categories",
    "group": "Category",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid token should be used here (Client or Customer) -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "categories",
            "description": "<p>Categories information</p>"
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
    "filename": "src/api/v1/routes/categories.js",
    "groupTitle": "Category",
    "name": "GetCategories"
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "Get a single category",
    "group": "Category",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Category to retrieve -- Should be passed as a request parameter <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid token should be used here (Client or Customer) -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "category",
            "description": "<p>Category information</p>"
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
    "filename": "src/api/v1/routes/categories.js",
    "groupTitle": "Category",
    "name": "GetCategoriesId"
  },
  {
    "type": "get",
    "url": "/categories/:id/products",
    "title": "Get products in a category",
    "group": "Category",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Category to retrieve it's products -- Should be passed as a request parameter <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid token should be used here (Client or Customer) -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "products",
            "description": "<p>List of products in Category</p>"
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
    "filename": "src/api/v1/routes/categories.js",
    "groupTitle": "Category",
    "name": "GetCategoriesIdProducts"
  },
  {
    "type": "post",
    "url": "/categories/create",
    "title": "Create a new category",
    "group": "Category",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachment_url",
            "description": "<p>Category image URL <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "category",
            "description": "<p>Category information</p>"
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
        "url": "https://nikeminimalist.herokuapp.com/api/v1/categories/create"
      }
    ],
    "filename": "src/api/v1/routes/categories.js",
    "groupTitle": "Category",
    "name": "PostCategoriesCreate"
  },
  {
    "type": "put",
    "url": "/categories/:id/edit",
    "title": "Edit details of a category",
    "group": "Category",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachment_url",
            "description": "<p>Category image URL <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Category to edit -- Should be passed as a request parameter <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "category",
            "description": "<p>Category information</p>"
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
        "url": "https://nikeminimalist.herokuapp.com/api/v1/categories/categoryId/edit"
      }
    ],
    "filename": "src/api/v1/routes/categories.js",
    "groupTitle": "Category",
    "name": "PutCategoriesIdEdit"
  },
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
    "filename": "src/api/v1/routes/clients.js",
    "groupTitle": "Client",
    "name": "PostClientsLogin"
  },
  {
    "type": "delete",
    "url": "/products/:id/delete",
    "title": "Delete a product",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Product to delete -- Should be passed as a request parameter <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Value is 'success'. Means a successful request</p>"
          }
        ]
      }
    },
    "filename": "src/api/v1/routes/products.js",
    "groupTitle": "Product",
    "name": "DeleteProductsIdDelete"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Get details of a Product",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of Product to retrieve -- Should be passed as a request parameter <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid token should be used here (Client or Customer) -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "product",
            "description": "<p>Product information</p>"
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
    "filename": "src/api/v1/routes/products.js",
    "groupTitle": "Product",
    "name": "GetProductsId"
  },
  {
    "type": "post",
    "url": "/products/create",
    "title": "Add a Product to a Category",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>ID of Category to add the product to <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "images",
            "description": "<p>Array of Product image URLs -- Minmum:1, Maximum:5 <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "sizes",
            "description": "<p>Array of Product Sizes <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "colors",
            "description": "<p>Array of Product Colors <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Product price <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lorem",
            "description": "<p>Product description <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "product",
            "description": "<p>Product information</p>"
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
        "url": "https://nikeminimalist.herokuapp.com/api/v1/products/create"
      }
    ],
    "filename": "src/api/v1/routes/products.js",
    "groupTitle": "Product",
    "name": "PostProductsCreate"
  },
  {
    "type": "post",
    "url": "/products/:id/changecategory",
    "title": "Change the Category a Product belongs to",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Product -- Should be passed as a request parameter <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_category",
            "description": "<p>ID of the new Category <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "product",
            "description": "<p>Product information</p>"
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
    "filename": "src/api/v1/routes/products.js",
    "groupTitle": "Product",
    "name": "PostProductsIdChangecategory"
  },
  {
    "type": "put",
    "url": "/products/:id/edit",
    "title": "Edit details of a product",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of Product to edit <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "images",
            "description": "<p>Array of Product image URLs -- Minmum:1, Maximum:5 <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "sizes",
            "description": "<p>Array of Product Sizes <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "colors",
            "description": "<p>Array of Product Colors <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Product price <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lorem",
            "description": "<p>Product description <strong>(required)</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong></p>"
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
            "field": "product",
            "description": "<p>Product information</p>"
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
        "url": "https://nikeminimalist.herokuapp.com/api/v1/products/producId/edit"
      }
    ],
    "filename": "src/api/v1/routes/products.js",
    "groupTitle": "Product",
    "name": "PutProductsIdEdit"
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
    "filename": "src/api/v1/routes/users.js",
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
    "filename": "src/api/v1/routes/users.js",
    "groupTitle": "User",
    "name": "PostUsersRegister"
  }
] });
