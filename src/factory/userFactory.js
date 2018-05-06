import Employee from './Employee';
import Customer from './Customer';

export default (name, dob, cat) => {
    if (cat === 0) {
        return new Employee(name, dob);
    } else {
        return new Customer(name, dob);
    }
};