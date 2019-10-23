import { newE2EPage } from '@stencil/core/testing';

describe('lwc-test-webcomponent-hello-world', () => {
    let page;
    beforeEach(async () => {
        page = await newE2EPage();
    });

    describe('render', () => {
        let button;
        beforeEach(async () => {
            await page.setContent(`
                <lwc-test-webcomponent-hello-world></lwc-test-webcomponent-hello-world>
            `);
            await page.find('lwc-test-webcomponent-hello-world');

            // `>>>` means that `limel-button` is inside the
            // shadow-DOM of `lwc-test-webcomponent-hello-world`
            button = await page.find(`
                lwc-test-webcomponent-hello-world >>> limel-button
            `);
        });
        it('displays the correct label', () => {
            expect(button).toEqualAttribute('label', 'Hello World!');
        });
    });
});
