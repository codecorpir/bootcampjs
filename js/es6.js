// var a = 15;

// // in es6
// let b = 16;
// const c = 17;

// function tester(){
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x);
//     }
//     console.log(x);

//     var x = 15

//     console.log(x)
// }

// tester();

// function tester2(){
//     let x = 1;
//     if (true){
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);

//     // let x = 15;
// }

// tester2();


// // for (let i = 1; i <= 15; i++){
// //     console.log(i);
// // }

// const pi = 3.14;
// // pi = 15;

// // let name = prompt('please insert your name');

// // // let msg = "welcome back " + name;
// // let msg = `welcome ${name}`
// // console.log(msg);

// for (let i = 1; i < 5; i++){
//     for (let j = 1; j < 5; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }

// let obj = {
//     a:1,
//     b:2,
//     c:3
// };

// for (let k in obj){
//     console.log(k);
// }

// let arr = [1,2,3,4,5,6];

// for (let v of arr){
//     console.log(v);
// }

// for (let ch of "mahdi"){
//     console.log(ch)
// }

// // function add(a, b){
// //     var sum = a+b;
// //     console.log(a + " + " + b + " = " + sum);
// // }

// const add = (a, b) => {
//     console.log(`${a} + ${b} = ${a+b}`);
// }
// add(5,6)



// const msg = x => `welcome ${x}`
// console.log(msg("mahdi"))



// // var arr = [2,3,4,5,6];
// // arr.forEach(function(el){
// //     console.log(el * 2)
// // });

// // for (var i = 0; i <= arr.length; i++){
// //     console.log(arr[i] * 2)
// // }

// const arr2 = [2,3,4,5,6,7];
// arr2.forEach(v =>{
//     // v = 5;
//     console.log(v * 2);
// })


const test = (a, b = 3, c = 5) =>{
    return a+b+c
}

console.log(test(4, 15))


// // let car = {
// //     name: "ford",
// //     color : "red",
// //     age: 1969,
// //     yearborn() {
// //         return Date() - this.age
// //     }
// // }


// let brand = "ford";
// let name = "mustang";
// let color = "black";
// let model = 1969;

// let car = {brand, name, color, model};

// console.log(car.brand);


// let prop = 'hsd';
// let id = ['1234','12345','123'];
// let mobile = '+9826589';

// let user ={
//     [prop]: 'mahdi',
//     [`user_${id[2]}`]: `${mobile}`
// };

// console.log(user.hsd);
// console.log(user.user_123);



// let person = {
//     name: 'mahdi',
//     age: 25,
//     eye_color: "black"
// };

// let student = {
//     name: 'reza',
//     age:20,
//     xp: '6'
// };



// let newStudent = Object.assign({}, student, person);


// console.log(newStudent.name);
// console.log(newStudent.age);
// console.log(newStudent.xp);
// console.log(newStudent.eye_color);


// // let newperson = person;
// let newperson = Object.assign({},person, {name: 'john', age: 17});

// // newperson.name = 'john'

// console.log(person.name);
// console.log(newperson.name);
// console.log(newperson.age);

// const obj1 = {
//     a:1,
//     b:2,
//     c:3
// };

// const obj2 = Object.assign({c:5, d:6}, obj1);
// // const obj2 = {
// //     a:1,
// //     b:2,
// //     c:3,
// //     d:6
// // }

// console.log(obj1.d);
// console.log(obj2.c, obj2.d);



// // let arr_a = ['1','2','3','4'];
// // let [one, two, three, four] = arr_a

// // console.log(one);
// // console.log(two);


// let aa = () =>{ return [1,2,3,4]; };
// let [one, ,three,four] = aa()
// console.log(three)


// let x, y, z = 6, w = 12;

// [x, y = 9] = [5];

// [z, w] = [w, z]

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);


// function testy(arr){
//     for (let k = 1; k < arguments.length; k++){
//         let num = arguments[k];
//         if (arr.indexOf(num) === -1){
//             return false
//         }
//     }
//     return true
// }


// function testy(arr, ...nums){
//     for (let num of nums){
//         if (arr.indexOf(num) === -1){
//             return false;
//         }
//     }
//     return true
// }
// let x = [1,2,3,4,5,6]
// console.log(testy(x, 2,3,9));


// function my_func(x,y,z,w) {
//     console.log(x + y + z + w);
// }
// var args = [1,2,3];

// my_func.apply(null,args.concat(4))

// const my_func = (w,x,y,z) => {
//     console.log(w + x + y + z);
// }

// let args = [1,2,3]
// my_func(...args,4)

