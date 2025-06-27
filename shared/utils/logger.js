const winston = require('winston');

const createLogger = (serviceName) => {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.printf(({ timestamp, level, message, service, ...meta }) => {
        return `${timestamp} [${service || serviceName}] ${level}: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
      })
    ),
    defaultMeta: { service: serviceName },
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        )
      }),
      new winston.transports.File({ filename: `logs/${serviceName}.log` })
    ]
  });
};

module.exports = { createLogger };
