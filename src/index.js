import Logger from './singleton/Logger'

const logger = new Logger();
console.log(logger.getInstance().getName());


