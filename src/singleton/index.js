import logger from './Logger'
import { Singleton } from './Logger'

// Singleton pattern for a shared logger - the nodejs way
console.log(logger.name);

logger.name = 'apple';
console.log(logger.name);

logger._name = null;
logger.name = 'apple';
console.log(logger.name);

// Singleton pattern for a shared logger - the general way
const logger2 = new Singleton();
console.log(logger2.instance.name);
