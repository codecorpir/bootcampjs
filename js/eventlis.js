// element.addEventListener(event, function);

var btn = document.getElementById("test");

btn.addEventListener("click", myfunc);

function myfunc(){
    alert(Math.random());
    btn.removeEventListener("click", myfunc);
}