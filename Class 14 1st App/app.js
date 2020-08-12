function getnum(num){
var a = document.getElementById("number");
a.value += num;
}

function clr(){
    var a = document.getElementById("number");
    a.value = "";   
}

function clearCE(){
    var a = document.getElementById("number");
    a.value = "0";   
}

function result(){
    var a = document.getElementById("number");
    a.value = eval(number.value);

}