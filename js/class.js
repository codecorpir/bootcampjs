// class Car{
//     constructor(name, brand, hp){
//         this.name = name;
//         this.brand = brand;
//         this.hp = hp;
//     }


// }

// const car1 = new Car("Mustang", "ford", 700);
// const car2 = new Car("praid", "saipa", 50);

// console.log(car1.name);


// class Rectangel{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     get area(){
//         return this.calcArea();
//     }
//     calcArea(){
//         return this.height * this.width;
//     }

//     static aroun(a, b){
//         const ax = a.height - b.height
//         const bx = a.width - b.width

//         return Math.sin(ax, bx)
//     }
// }

// const p1 = new Rectangel(5,8)
// const p2 = new Rectangel(8,5)

// console.log(Rectangel.aroun(p1,p2));

// const Sq = new Rectangel(5,5);
// console.log(Sq.area);

// var Square = class Rectangel{
    //     constructor(height, width){
        //         this.height = height;
        //         this.width = width;
        //     }
        // }


// let Square = class {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }



class Animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(this.name + 'make a noise');
    }
}

class Dog extends Animal{
    speak(){
        console.log(this.name + "Woff");
    }
}

let dog = new Dog('Rex');

dog.speak();
