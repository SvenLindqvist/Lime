import {
    LimeWebComponent,
    LimeWebComponentContext,
    LimeWebComponentPlatform,
    //NotificationService,
    PlatformServiceName,
    HttpService,
} from '@limetech/lime-web-components-interfaces';
import { Component, Element, h, Prop, State } from '@stencil/core';

@Component({
    tag: 'lwc-test-webcomponent-hello-world',
    shadow: true,
    styleUrl: 'lwc-test-webcomponent-hello-world.scss',
})

export class HelloWorld implements LimeWebComponent {

    @Prop()
    public platform: LimeWebComponentPlatform;

    @Prop()
    public context: LimeWebComponentContext;
      
    @Element()
    public element: HTMLElement;


    @State()
    private section: Object = [];

    @State()
    private hasLoaded = false;

 

 
    private http: HttpService;
 

//Det är den här som anropas innan komponenten laddas.
public componentWillLoad() {

    this.http = this.platform.get(PlatformServiceName.Http); 
   // this.state = this.platform.get(PlatformServiceName.LimeobjectsState);
    console.log("componentWillLoad");
     this.http.get(`https://localhost/lime/limepkg-sprint/test/?limetype=deal`).then(res => {
        this.section = {res};
    });
    
    this.hasLoaded = true;
}


private async handleClick() {
   //let response =  this.http.get(`https://localhost/lime/limepkg-sprint/test/?limetype=deal`);
   
    //console.log(this.section);
    this.render();
    console.log("section")
    console.log(this.section);
}
    
    public render() {
    console.log("Render()");
    let output  = [];
     let array = []
        
     if(this.hasLoaded) {
         array = Object.keys(this.section).map(el => this.section[el]);
         output = array.map(el => {
           <div>
                <p>{el.name}</p>
                <p>{el.company}</p>
            </div>
         }
        )
        console.log("output");
        console.log( output);
    }
    
        
        return (
            <limel-flex-container align={'center'} direction={"horisontal"}>
                <limel-flex-container align={'center'} direction={"vertical"}>
                    <limel-button
                    label={"Detta är en knapp"}
                    outlined={true}
                    icon={'house_stark'}
                    onClick={this.handleClick.bind(this)}
                />
                </limel-flex-container>
                {output}
            </limel-flex-container>
            
        );
    }
}
