const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utils/logger")
const config = require("./config");
const { productRouting } = require("./routing/product")
const { logoutRouting } = require("./routing/logout")
const { killRouting } = require("./routing/kill")
const { homeRouting } = require("./routing/home")
const { STATUS_CODE } = require("./constants/statusCode.js")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, _res, next) => {
    logger.getInfoLog(req.method, req.url);
    next();
});
app.use("/product", productRouting);
app.use("/logout", logoutRouting);
app.use("/kill", killRouting);
app.use("/", homeRouting);
app.use((req, res) => {
    res.status(STATUS_CODE.NOT_FOUND).sendFile(path.join(__dirname, "views", "404.html"));
    logger.getErrorLog(`404 Not Found: ${req.method} ${req.url}`);
});
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
