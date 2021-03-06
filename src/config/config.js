import dotenv from 'dotenv';
dotenv.load();

export default {
  appName: 'camelot',
  version: process.env.VERSION || 'development',
  api: {
    port: 7331
  },
  logging: {
    errorFile: 'logs/error.log',
    logFile: 'logs/combined.log'
  },
  mode: {
    environment: process.env.NODE_ENV || 'development'
  }
};
