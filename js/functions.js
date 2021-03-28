function myfunc(){
    return ("Hello World From My Function");
}

document.write("<h1>" + myfunc() + "</h1>");
document.write("<p>" + myfunc() + "</p>");
// myfunc();


// function add(){
//     var a = 10;
//     var b = 11;
//     document.write(a + b)
// }

function add(a, b){
    return a + b;
}


var temp = add(15, 16);
document.write(add(temp,19))
// document.write(add(10, 19));

// while (true) {
//     if (input == 0){
//         document.write (add())
//     }
//     else {
//         document.write(add(a ,b))
//     }
// }