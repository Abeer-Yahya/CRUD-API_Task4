const Log = require("../../models/logs");

const test = async (log) => {
  const entry = await Log.create({
    text: log,
  });
};

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const status = res.statusCode;
  const ipAddress = req.socket.remoteAddress;
  const log = `${method}:${url} ${status} ${ipAddress}`;
  console.log(log);
  test(log);
  next();
};

module.exports = logger;
