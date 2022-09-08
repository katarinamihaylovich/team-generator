const Employee = require('../lib/Employee');

describe('Test Employee class', () => {
    it('should create a new employee object', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(typeof me).toBe('object');

    })

    // it('can set a name via constructor'), () => {
    //     const me
    // }
})