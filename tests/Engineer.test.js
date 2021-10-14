const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it("Can set value to key using constructor method", () => {
        const employee = new Engineer(20, 'Joe', 'joe@gmail.com','Joe21');
        expect(employee.github).toBe('Joe21');
    });
  
  
    describe('getGithub', () => {
      it('Get GitHub user id of the engineer', () => {
          const varKey = 'Joe21';
          const employee = new Engineer(20, 'Joe', 'joe@gmail.com','Joe21');
          expect(employee.getGithub()).toBe(varKey);
        });
    });

    describe('getRole', () => {
        it('Get role of the employee', () => {
            const varKey = 'Engineer';
            const employee = new Engineer(20, 'Joe', 'joe@gmail.com','Joe21');
            expect(employee.getRole()).toBe(varKey);
        });
    });
    
});
