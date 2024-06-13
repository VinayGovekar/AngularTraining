var PersonC = /** @class */ (function () {
    function PersonC(_fname, _lname) {
        this._fname = _fname;
        this._lname = _lname;
    }
    PersonC.prototype.sayHi = function () {
        console.log("SayHii");
    };
    PersonC.prototype.disp = function () {
        console.log(this._fname + " " + this._lname);
    };
    return PersonC;
}());
var sachin2 = new PersonC("Sachin", "Tendulkar");
sachin2.sayHi();
