import PersonBuilder from './PersonBuilder';

const alex = new PersonBuilder('Alex').makeManager().age(30).salary(1000).build();
console.log(alex.toString());