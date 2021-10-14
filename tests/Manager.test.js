const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it("Can set value to key using constructor method", () => {
        const employee = new Manager(20, 'Joe', 'joe@gmail.com', 123);
        expect(employee.officeNum).toBe(123);
    });
  
  
    describe('getOfficeNum', () => {
      it('Get office number of the manager', () => {
          const varKey = 123;
          const employee = new Manager(20, 'Joe', 'joe@gmail.com', 123);
          expect(employee.getOfficeNum()).toBe(varKey);
        });
    });

    describe('getRole', () => {
        it('Get role of the employee', () => {
            const varKey = 'Manager';
            const employee = new Manager(20, 'Joe', 'joe@gmail.com', 123);
            expect(employee.getRole()).toBe(varKey);
        });
    });
    
});
