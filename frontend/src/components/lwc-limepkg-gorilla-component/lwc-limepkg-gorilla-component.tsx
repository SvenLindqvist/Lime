import {
    LimeWebComponent,
    LimeWebComponentContext,
    LimeWebComponentPlatform,
} from '@limetech/lime-web-components-interfaces';
import { Component, Element, h, Prop } from '@stencil/core';

@Component({
    tag: 'lwc-limepkg-gorilla-component',
    shadow: true,
    styleUrl: 'lwc-limepkg-gorilla-component.scss',
})
export class GorillaIcon implements LimeWebComponent {
    @Prop()
    public platform: LimeWebComponentPlatform;

    @Prop()
    public context: LimeWebComponentContext;

    @Element()
    public element: HTMLElement;

    public render() {
        return (
            <div class='sellable-orange'>
                <limel-icon name="gorilla" size="large"/>
            </div>
        );
    }
}
