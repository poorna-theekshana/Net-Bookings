const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth Service API",
      version: "1.0.0",
      description: "API documentation for the Auth Service",
    },
    servers: [
      {
        url: "http://51.20.117.123/",
      },
    ],
  },
  apis: ["./routes/authRoutes.js"],
  // If swaggerConfig.js is in the root of auth-service:
  apis: ["./authRoutes.js"],

  // If your routes are in a 'routes' folder:
  apis: ["./routes/*.js"],

  // Or use an absolute path:
  apis: [__dirname + "/authRoutes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
