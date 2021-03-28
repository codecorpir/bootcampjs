var car = {
    brand : "ford",
    name : "mustang",
    color : "black",
    model : 1969,
    yearold : function(){
        return 2021 - this.model;
        // document.write(2021 - this.model);
    }
}

// var x = car.model

// console.log(x)
// console.log(car.color)

// // console.log(car.yearold());

// console.log(1400 - car.yearold())

var date = new Date();

function persons(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.birthDay = bornYear;
    this.myname = fullName;
}
function bornYear(){
    return date.getFullYear() - this.age
}
function fullName(){
    return this.fname + ' ' + this.lname;
}

var person1 = new persons("mahdi", "rezaee", 18);
var person2 = new persons("sara", "saree", 15);

// document.write(person1.fname + "<br />");
// document.write(person1.birthDay() + "<br />");

// document.write(person1.myname());

console.log(person1.birthDay())



