const Manager = require('../lib/Manager');

describe('Test Manager Class', () => {
    it('should create a new intern object', () => {
        const me = new Manager(3, 'klulum@yahoo.com', 'lulu', '12345');

        expect(typeof me).toBe('object');

    })

    it('can set an email via constructor', () => {
        const me = new Manager(3, 'klulum@yahoo.com', 'lulu', '12345');

        expect(me.email).toEqual('klulum@yahoo.com');
    })

    it('can set a name via constructor', () => {
        const me = new Manager(3, 'klulum@yahoo.com', 'lulu', '12345');

        expect(me.name).toEqual('lulu');
    })

    it('can set an id via constructor', () => {
        const me = new Manager(3, 'klulum@yahoo.com', 'lulu', '12345');

        expect(me.id).toEqual(3);
    })

    it('can get github account name via getGit() method', () => {
        const me = new Manager(3, 'klulum@yahoo.com', 'lulu', '12345');

        expect(me.getOfficeNumber()).toEqual('12345');
    })

});