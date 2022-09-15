const Engineer = require('../lib/Engineer');

describe('Test Engineer Class', () => {
    it('should create a new engineer object', () => {
        const me = new Engineer(2, 'klulum@yahoo.com', 'lulu', 'katarinamihaylovich');

        expect(typeof me).toBe('object');

    })

    it('can set an email via constructor', () => {
        const me = new Engineer(2, 'klulum@yahoo.com', 'lulu', 'katarinamihaylovich');

        expect(me.email).toEqual('klulum@yahoo.com');
    })

    it('can set a name via constructor', () => {
        const me = new Engineer(2, 'klulum@yahoo.com', 'lulu', 'katarinamihaylovich');

        expect(me.name).toEqual('lulu');
    })

    it('can set an id via constructor', () => {
        const me = new Engineer(2, 'klulum@yahoo.com', 'lulu', 'katarinamihaylovich');

        expect(me.id).toEqual(2);
    })

    it('can get github account name via getGit() method', () => {
        const me = new Engineer(2, 'klulum@yahoo.com', 'lulu', 'katarinamihaylovich');

        expect(me.getGit()).toEqual('katarinamihaylovich');
    })

});