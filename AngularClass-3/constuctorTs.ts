class Person {
  
  constructor(public _fname: string, public _lname: string) {
    
  }

  disp(): void {
    console.log(this._fname + " " + this._lname);
  }
}

var p1: Person = new Person("Vinay", "Govekar");

var persons: Person[] = [
  new Person("Sanjay", "Yadav"),
  new Person("Ash", "Ketchup"),
  new Person("Roronoa", "Zoro"),
  new Person("Monkey", "Luffy"),
  new Person("Vinsmoke", "Sanji"),
];

persons.sort((a, b): number => {
  return a._fname > b._fname ? 1 : a._fname < b._fname ? -1 : 0;
});
console.log("\nAscending")
for (let i: number = 0; i < persons.length; i++) {
  persons[i].disp();
}

persons.sort((a, b): number => {
    return a._fname > b._fname ? -1 : a._fname < b._fname ? 1 : 0;
  });
  console.log("\nDescending")
  for (let i: number = 0; i < persons.length; i++) {
    persons[i].disp();
  }

persons.map((x):Person=>{
    x._fname=x._fname.toUpperCase()
    return x;
})

console.log("\Mapped")
  for (let i: number = 0; i < persons.length; i++) {
    persons[i].disp();
  }





