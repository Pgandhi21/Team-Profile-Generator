const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it("Can set value to key using constructor method", () => {
        const employee = new Employee(20, 'Joe', 'joe@gmail.com');
        expect(employee.id).toBe(20);
        expect(employee.name).toBe('Joe');
        expect(employee.email).toBe('joe@gmail.com');
    });
  
  
    describe('getId', () => {
      it('Get id of the employee', () => {
          const varKey = 20;
          const employee = new Employee(20, 'Joe', 'joe@gmail.com');
          expect(employee.getId()).toBe(varKey);
        });
    });
  
    describe('getName', () => {
        it('Get name of the employee', () => {
            const varKey = 'Joe';
            const employee = new Employee(20, 'Joe', 'joe@gmail.com');
            expect(employee.getName()).toBe(varKey);
        });
    });

    describe('getEmail', () => {
        it('Get email of the employee', () => {
            const varKey = 'joe@gmail.com';
            const employee = new Employee(20, 'Joe', 'joe@gmail.com');
            expect(employee.getEmail()).toBe(varKey);
        });
    });

    describe('getRole', () => {
        it('Get role of the employee', () => {
            const varKey = 'Employee';
            const employee = new Employee(20, 'Joe', 'joe@gmail.com');
            expect(employee.getRole()).toBe(varKey);
        });
    });
    
});
