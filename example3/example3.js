import { LightningElement,track } from 'lwc';

export default class Example3 extends LightningElement {
    @track Num1;
    @track Num2;
    @track Num3;

    Capture(event){
        const wh=event.target.name;
        if(wh=='aval'){
            this.Num1=event.target.value;
        }
        else if(wh=='bval'){
            this.Num2=event.target.value;

        }
        else{
            this.Num3=event.target.value;
        }
    }
    cal(event){
        const a=parseInt(this.Num1);
        const b=parseInt(this.Num2);
        const c=parseInt(this.Num3);
        if(a>b && a>c){
            alert('a is greater'+a);

        }
        else if(b>c && b>a){
            alert('b is greater'+b);
        }
        else{
            alert('c is greater'+c);
        }

    }

    clear(event){
        console.log('start here');
        this.Num1='';
        console.log('this.Num1'+this.Num1);
        this.Num2='';
        this.Num3='';

    }
}
