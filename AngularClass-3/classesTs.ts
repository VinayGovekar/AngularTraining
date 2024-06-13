class Greeting{
    greet(text:string):void{
        console.log("Hello" + text)
    }
}


class Person{
    name:string
    greet(text:string):void{
        console.log("Hello" + text)
    }
}

var ob:Greeting = new Greeting()

ob.greet("World!!!")

var obj:Greeting= new Person()

obj.greet("World")
