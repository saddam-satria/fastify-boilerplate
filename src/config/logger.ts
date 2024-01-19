import pino, { DestinationStream, LoggerOptions } from 'pino';
import { DEBUG } from './constant';

const reqSerializer = (req) => {
  return {
    method: req.method,
    url: req.url,
    remoteAddress: req.ip,
    userAgent: req.headers['user-agent'],
  };
};

const loggerConfig: LoggerOptions | DestinationStream = {
  level: DEBUG ? 'debug' : 'info',
  serializers: {
    req: reqSerializer,
    res: pino.stdSerializers.res,
  },
};

export default loggerConfig;
