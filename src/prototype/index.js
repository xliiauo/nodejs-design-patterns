import Employee from './Employee';
import employeeProto from './employee_proto'

let tom = employeeProto.clone();
tom.addSkill('docker');
console.log(tom.skills);

let alex = employeeProto.clone();
console.log(alex.skills);
