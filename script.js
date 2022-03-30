function dlithe()
{
    alert("Wlcome");
}
function dlithe1()
{
    document.write("Welcome to DLithe Boot Camp");
}
function example()
{
    alert("Enter valid name");
}

function addition(){
    var n1=prompt("Enter first number:<br>");
    var n2=prompt("Enter second number:<br>");
    var sum=n1 + n2;
    window.location="task10.html";
    document.write("Addition:"+sum);
}
function sub(){
    var n1=prompt("Enter first number:<br>");
    var n2=prompt("Enter second number:<br>");
    var sum=n1-n2;
    document.write("Substraction:"+sum);
}
function mul(){
    var n1=prompt("Enter first number:<br>");
    var n2=prompt("Enter second number:<br>");
    var sum=n1*n2;
    document.write("Multiplication:"+sum);
}
function change(){
    document.getElementById("color").value;
}
function display(event){
    dm=document.getElementById(message).style;
    dm.left=event.clientx;
    dm.top=event.clienty;
    dm.visibility=visible;
}
function hide()
{
    document.getElementById(message).style.visibility=hide;
}