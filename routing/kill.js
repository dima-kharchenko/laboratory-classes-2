const express = require("express");
const { getProcessLog } = require("../utils/logger");

const killRouting = express.Router();

killRouting.get("/", (req, res) => {
    getProcessLog("Application is shutting down");
    res.send("Server is shutting down");
    process.exit();
});

module.exports = { killRouting };
