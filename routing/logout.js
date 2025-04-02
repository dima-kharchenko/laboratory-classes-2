const express = require("express");
const getFileFromAbsolutePath = require("../utils/getFileFromAbsolutePath");

const logoutRouting = express.Router();

logoutRouting.get("/", (req, res) => {
    res.sendFile(getFileFromAbsolutePath("views", "logout.html"));
});

module.exports = { logoutRouting };
