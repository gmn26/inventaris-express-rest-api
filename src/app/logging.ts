import winston from "winston";
import path from "path";

export const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(__dirname, 'logs', 'application.log')  // Menyimpan log di folder 'logs'
    })
  ]
});
