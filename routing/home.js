const express = require("express");

const getFileFromAbsolutePath = require("../utils/getFileFromAbsolutePath");
const homeRouting = express.Router();

homeRouting.get("/", (_request, response) => {
  response.sendFile(getFileFromAbsolutePath("views", "home.html"));
});

module.exports = { homeRouting };
