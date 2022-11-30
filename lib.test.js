




const lib = require('./lib.js')

describe('absolute', () => {

    it('absolute - should return a positive number.', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    it('absolute - should return a positive number.', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    it('absolute-sould return 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return the greeting message.', () => {
        const result = lib.greet('Ali');
        expect(result).toMatch('Welcome Ali.');
        expect(result).toMatch(/Ali/);
        expect(result).toContain('Ali');
    });
});

describe('all-permissions', () => {
    it('should return all permissions.', () => {
        const result = lib.getCurrencies();
        expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
    });
});

describe('getProduct', () => {
    it('should return the product ', () => {
        const result = lib.getProduct(1);
        expect(result).toEqual({ id: 1, price: 10 });
        expect(result).toMatchObject({ id: 1 });
    });
});

describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false]
        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        });
    });
    it('should return a user object if balid user', () => {
        const result = lib.registerUser('Ahmad');
        expect(result).toMatchObject({ username: 'Ahmad' });
        expect(result.id).toBeGreaterThan(0);
    })
});
