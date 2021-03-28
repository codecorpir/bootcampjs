function nameCheker(){
    var x = prompt(" please insert your name : ")
    if (x == "Mahdi"){
       document.write("Welcome Back Mahdi")
    } else {
        nameCheker()
    }
}

// nameCheker();

// document.write("<h1>" + nameCheker() + "</h1>")
// var a = 4;
// var factorial = 1;
// for (i = 1; i <= a ; i++){
//     factorial *= i;
// }
// console.log(factorial);

// 5! = 5 x 4!
// 4! = 4 x 3!
// .
// .
// .
// 2! = 2 x 1
// 1! = 1
function factorial(a){
    if (a == 1){
        return 1
    } else if (a < 1){
        console.log("This number is invalid ");
    } else {
        return factorial(a - 1) * a;
    }
}

console.log(factorial(5)); 


// 0, 1, 1, 2, 3, 5, 8, 13, 21


var a = 15;


a = 15, 18, 16, "hello", "mahdi", true