import { newE2EPage } from '@stencil/core/testing';

describe('lwc-limepkg-my-test-hello-world', () => {
    let page;
    beforeEach(async () => {
        page = await newE2EPage();
    });

    describe('render', () => {
        let button;
        beforeEach(async () => {
            await page.setContent(`
                <lwc-limepkg-my-test-hello-world></lwc-limepkg-my-test-hello-world>
            `);
            await page.find('lwc-limepkg-my-test-hello-world');

            // `>>>` means that `limel-button` is inside the
            // shadow-DOM of `lwc-limepkg-my-test-hello-world`
            button = await page.find(`
                lwc-limepkg-my-test-hello-world >>> limel-button
            `);
        });
        it('displays the correct label', () => {
            expect(button).toEqualAttribute('label', 'Hello World!');
        });
    });
});
