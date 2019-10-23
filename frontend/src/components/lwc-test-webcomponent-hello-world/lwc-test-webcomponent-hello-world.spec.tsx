import { HelloWorld } from './lwc-test-webcomponent-hello-world';

describe('lwc-test-webcomponent-hello-world', () => {
    it('builds', () => {
        expect(new HelloWorld()).toBeTruthy();
    });
});
