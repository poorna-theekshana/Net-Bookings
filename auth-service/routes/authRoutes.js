// filepath: e:\SLIIT\CTSE\Net-Bookings\auth-service\swaggerConfig.js
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
        url: "http://localhost:8000", // Replace with your EC2 instance URL
      },
    ],
  },
  apis: ["./authRoutes.js"], // Path to your route files
};
// Example route 11
router.get("/", (req, res) => {
  res.json({ message: "Auth Service is working!" });
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
