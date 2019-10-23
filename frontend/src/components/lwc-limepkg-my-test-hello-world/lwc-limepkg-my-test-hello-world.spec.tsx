import { HelloWorld } from './lwc-limepkg-my-test-hello-world';

describe('lwc-limepkg-my-test-hello-world', () => {
    it('builds', () => {
        expect(new HelloWorld()).toBeTruthy();
    });
});
