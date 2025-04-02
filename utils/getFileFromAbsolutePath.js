const path = require("path");

const getFileFromAbsolutePath = (catalog, fileWithFormat) => {
  const filenameDirName = path.dirname(require.main.filename);

  return path.join(filenameDirName, catalog, fileWithFormat);
};

module.exports = getFileFromAbsolutePath;
