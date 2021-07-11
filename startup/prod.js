const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

var whitelist = [
  "http://localhost:3000",
  "https://vlu-qrcode-client.herokuapp.com",
];

module.exports = function (app) {
  app.use(helmet());
  app.use(
    cors({
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );
  app.use(compression());
};
