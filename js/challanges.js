// var x = 13 ;

// if (x % 2 == 0){
//     document.write(x + " is even");
// } else {
//     document.write(x + " is odd");
// }

// var a = 15;
// var b = 6;
// var c = 20;
// var d = 5;

// if (a > b){
//     if (c > d){
//         if (a > c){
//             console.log(a);
//         } else {
//             console.log(c);
//         }
//     } else {
//         if (a > d){
//             console.log(a);
//         } else {
//             console.log(d);
//         }
//     }
// } else {
//     if (c > d){
//         if (b > c){
//             console.log(b);
//         } else {
//             console.log(c);
//         }
//     } else {
//         if (b > d){
//             console.log(b);
//         } else {
//             console.log(d);
//         }
//     }

// }
// var i = 100;
// while (i >= 0 ) {
//     console.log(i);
//     i--;
// }

// for (var i = 1; i <= 1500; i++){
//     if (i % 2 !== 0){
//         continue;
//     }
//     console.log(i);

// }
// var a = 15;
// for (var i = 2; i < a; i++){
//     if (a % i != 0){
//         continue
//     }
//     console.log(i);
// }

var a = parseInt(prompt("Please insert your number :"));
var b = parseInt(prompt("Please insert your number :"));
var c = parseInt(prompt("Please insert your number :"));
var d = parseInt(prompt("Please insert your number :"));

if (a > b || c > b || d > b){
    if (a > d || c > d){
        if (a > c){
            console.log(a);
        } else {
            console.log(c);
        }
    } else {
        console.log(d);
    }
}else {
    console.log(b);
}


function primenumber(a){
    // isPrime = true;

    var i = 2;
    // while (i < a){
    //     if ()
    // }
    for (i = 2; i < a; i++){
        if (a % i == 0){
            return false;
            // isPrime = false;
            // break;
        }
    }
    return true
}

// if (primenumber(15)){
//     console.log(" is Prime");
// } else {
//     console.log(" is Not Prime");
// }



// var y = parseInt(prompt("Please insert your number : "));

// console.log(x + y);
// var x = prompt("Please insert your number : ");
// stars(x);

// function stars(a){
//     for (i = 1; i < a; i++){
//         for( j = a; j >= i ; j--){
//             document.write("*");
//         }
//         document.write("<br />")
//     }
// }

// var x = parseInt(prompt("Please insert your number : "));

// var i = 1;

// while(i <= 150){
//     i++;
//     if (i % 2 != 0){
//         continue;
//     }
//     console.log(i);

// }

// var x = parseInt( prompt("please insert your number : "));
// var y = parseInt( prompt("please insert your number : "));

// console.log(x + y)
