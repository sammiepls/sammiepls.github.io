const path = require("path");

module.exports = {
  sassOptions: {
    data: '@import "path/to/global.scss";',
    includePaths: [path.join(__dirname, "styles")],
  },
};

