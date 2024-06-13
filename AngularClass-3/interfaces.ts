
interface PersonInterface{
    sayHi:Function
  }

class PersonC implements PersonInterface {
  
    constructor(public _fname: string, public _lname: string) {
      
    }
  
    sayHi():void{
        console.log("SayHii")
    }
    disp(): void {
      console.log(this._fname + " " + this._lname);
    }
  }
  

const sachin2:PersonC = new PersonC("Sachin","Tendulkar")

sachin2.sayHi()