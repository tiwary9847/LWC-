import { LightningElement } from 'lwc';

export default class Example1 extends LightningElement {
    name='rupesh kumar';

    callme(event){
        this.name='Raushan kumar';
    }
    listen(event){
        this.name=Event.target.value;
    }
}