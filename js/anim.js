window.onload = function() {
    var pos = 0;

    var box = document.getElementById('box');

    var a = setInterval(move, 10);

    function move() {
        if ( pos >= 150){
            clearInterval(a);
        } else {
            pos += 1;
            box.style.left = pos + 'px';
        }
    }
}


