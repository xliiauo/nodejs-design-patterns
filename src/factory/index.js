import userFacotry from './userFactory';

const alex = userFacotry('alex', '19900101', 0);
console.log(alex.toString());

const tom = userFacotry('alex', '19950111', 1);
console.log(tom.toString());