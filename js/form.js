function validation() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');

    if (n1.value != '' && n2.value != ''){
        if (n1.value == n2.value){
            return true;
        }
    }
    alert("the inputs is not equal");
    return false;
}