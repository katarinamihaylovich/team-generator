const Intern = require('../lib/Intern');

describe('Test Intern Class', () => {
    it('should create a new intern object', () => {
        const me = new Intern(4, 'klulum@yahoo.com', 'lulu', 'UCLA');

        expect(typeof me).toBe('object');

    })

    it('can set an email via constructor', () => {
        const me = new Intern(4, 'klulum@yahoo.com', 'lulu', 'UCLA');

        expect(me.email).toEqual('klulum@yahoo.com');
    })

    it('can set a name via constructor', () => {
        const me = new Intern(4, 'klulum@yahoo.com', 'lulu', 'UCLA');

        expect(me.name).toEqual('lulu');
    })

    it('can set an id via constructor', () => {
        const me = new Intern(4, 'klulum@yahoo.com', 'lulu', 'UCLA');

        expect(me.id).toEqual(4);
    })

    it('can get github account name via getGit() method', () => {
        const me = new Intern(4, 'klulum@yahoo.com', 'lulu', 'UCLA');

        expect(me.getSchool()).toEqual('UCLA');
    })

});