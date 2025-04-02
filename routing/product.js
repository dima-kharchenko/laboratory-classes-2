const fileSystem = require("fs");
const path = require("path");
const { STATUS_CODE } = require("../constants/statusCode");
const renderNewProductPage = require('../views/renderNewProductPage');
const express = require("express")

const productRouting = express.Router();

productRouting.get('/add', (req, res) => {
    const filePath = path.join(__dirname, '../views/add-product.html');
    res.sendFile(filePath);
});

const addNewProduct = (request, response) => {
  const body = [];
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const formData = parsedBody.split("&").map((entry) => {
      const [key, value] = entry.split("=");

      return `${key}: ${decodeURIComponent(value)}`;
    });

    fileSystem.writeFile(
      "product.txt",
      `${formData[0]}, ${formData[1]}`,
      (err) => {
        response.statusCode = STATUS_CODE.FOUND;
        response.setHeader("Location", "/product/new");

        return response.end();
      }
    );
  });
};

module.exports = { productRouting };
