const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(typeof me).toBe('object');

    })

    it('can set a name via constructor', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(me.name).toEqual('lulu');
    })

    it('can set an id via constructor', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(me.id).toEqual(1);
    })

    it('can set an email via constructor', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(me.email).toEqual('klulum@yahoo.com');
    })

    it('can get email via getEmail() method', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(me.getEmail()).toEqual('klulum@yahoo.com');
    })

    it('can get email via getName() method', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(me.getName()).toEqual('lulu');
    })

    it('can get email via getId() method', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(me.getId()).toEqual(1);
    })
    
    it('can get email via getRole() method', () => {
        const me = new Employee(1, 'klulum@yahoo.com', 'lulu');

        expect(me.getRole()).toEqual('Employee');
    })
});