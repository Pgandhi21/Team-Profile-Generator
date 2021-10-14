const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it("Can set value to key using constructor method", () => {
        const employee = new Intern(20, 'Joe', 'joe@gmail.com','GaTech');
        expect(employee.school).toBe('GaTech');
    });
  
  
    describe('getSchool', () => {
      it('Get School of the intern', () => {
          const varKey = 'GaTech';
          const employee = new Intern(20, 'Joe', 'joe@gmail.com','GaTech');
          expect(employee.getSchool()).toBe(varKey);
        });
    });

    describe('getRole', () => {
        it('Get role of the employee', () => {
            const varKey = 'Intern';
            const employee = new Intern(20, 'Joe', 'joe@gmail.com','GaTech');
            expect(employee.getRole()).toBe(varKey);
        });
    });
    
});
