const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

module.exports = function (app) {
  app.use(helmet());
  app.use(
    cors({
      origin: "https://vlu-qrcode-client.herokuapp.com/",
    })
  );
  app.use(compression());
};
