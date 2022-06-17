import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    num1;
    num2;

    aval(event){
        this.num1=event.target.value;
    }
    bval(event){
        this.num2=event.target.value;

    }
    Add(event){
        const a=parseInt(this.num1);
        const b=parseInt(this.num2);
        const res=a+b;
        alert('result'+res);
    }
    Sub(event){
        const a=parseInt(this.num1);
        const b=parseInt(this.num2);
        const res=a-b;
        alert('result'+res);
    }
    Mul(event){
        const a=parseInt(this.num1);
        const b=parseInt(this.num2);
        const res=a*b;
        alert('result'+res);
    }
    Div(event){
        const a=parseInt(this.num1);
        const b=parseInt(this.num2);
        const res=a/b;
        alert('result'+res); 
    }
}