import Logger from './singleton/Logger'

// Singleton pattern for a shared logger
const logger = new Logger().getInstance();
console.log(logger.getName());


