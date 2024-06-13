var Person = /** @class */ (function () {
    function Person(_fname, _lname) {
        this._fname = _fname;
        this._lname = _lname;
    }
    Person.prototype.disp = function () {
        console.log(this._fname + " " + this._lname);
    };
    return Person;
}());
var p1 = new Person("Vinay", "Govekar");
var persons = [
    new Person("Sanjay", "Yadav"),
    new Person("Ash", "Ketchup"),
    new Person("Roronoa", "Zoro"),
    new Person("Monkey", "Luffy"),
    new Person("Vinsmoke", "Sanji"),
];
persons.sort(function (a, b) {
    return a._fname > b._fname ? 1 : a._fname < b._fname ? -1 : 0;
});
console.log("\nAscending");
for (var i = 0; i < persons.length; i++) {
    persons[i].disp();
}
persons.sort(function (a, b) {
    return a._fname > b._fname ? -1 : a._fname < b._fname ? 1 : 0;
});
console.log("\nDescending");
for (var i = 0; i < persons.length; i++) {
    persons[i].disp();
}
persons.map(function (x) {
    x._fname = x._fname.toUpperCase();
    return x;
});
console.log("\Mapped");
for (var i = 0; i < persons.length; i++) {
    persons[i].disp();
}
