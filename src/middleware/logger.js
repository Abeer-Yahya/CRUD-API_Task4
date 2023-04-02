const logger = (req, res, next) => {
  const method = req.method;
  const EndPoint = req.originalUrl;
  const status = res.statusCode;
  const IP = req.ip;
  const log = ` ${method}: ${EndPoint} ${status} ${IP}`;
  console.log(log);
  next();
};

module.exports = logger;
