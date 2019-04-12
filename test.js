var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)()
    ]
  });

logger.debug('디버그 로깅');
logger.info('인포 로깅');
logger.error('에러 로깅');