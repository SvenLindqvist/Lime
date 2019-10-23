import {
    LimeWebComponent,
    LimeWebComponentContext,
    LimeWebComponentPlatform,
} from '@limetech/lime-web-components-interfaces';
import { Component, Element, h, Prop } from '@stencil/core';

@Component({
    tag: 'lwc-limepkg-my-test-hello-world',
    shadow: true,
    styleUrl: 'lwc-limepkg-my-test-hello-world.scss',
})
export class HelloWorld implements LimeWebComponent {
    @Prop()
    public platform: LimeWebComponentPlatform;

    @Prop()
    public context: LimeWebComponentContext;

    @Element()
    public element: HTMLElement;

    public render() {
        return (
            <div class='container-background'>
                <h3>Icon gorilla</h3>
                <lwc-limepkg-gorilla-component></lwc-limepkg-gorilla-component>
                <lwc-limepkg-gorilla-component></lwc-limepkg-gorilla-component>
            </div>
        );
    }
}
