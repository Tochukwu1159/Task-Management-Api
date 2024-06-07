const loggerMiddleware = (req, res, next) => {
    console.log(`Request: ${req.method} ${req.url} - ${new Date()}`);
    next();
  };
  module.exports = loggerMiddleware;
  