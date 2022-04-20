//document.getElementById("result").innerHTML="Hello world";
 
/*var result = document.getElementById("result");
 
var x = 5, y = 10, age = 17;
var num = 0;

    if (num > 0)
    {
        result.innerHTML = "Dodatnia";
    }
    else if (num==0)
    {
        result.innerHTML = "Wartość równa 0"
    }
    else
    {
        result.innerHTML = "Ujemna";
    }

    age >= 18 ? result.innerHTML = "Pełnoletni" : result.innerHTML = "NIepełnoletni" ;


var k = 0;
var box = document.getElementById("result")
while(k<10)
{
    box.innerHTML += k + "<br>";
    k++;
}
var j = 2;
var box2 = document.getElementById("result2")

do
{
    box2.innerHTML += j + "<br>"
    j++;
}while(j<10);

var box3 = document.getElementById("result3")
for(var i = 0; i<10;i++)
{
    if(i % 2 == 1)
    {
       // continue;
    }
box3.innerHTML += i + "<br>"
}

var znak = "+"
switch(znak)
{
    case "+":
        
    box.style.backgroundColor = "red";
    break;
    case "blue":
    box2.style.backgroundColor = "blue";
    break;
    case "green":
    box3.style.backgroundColor = "green";
    break;
default:
alert("Źle");
}

var result = document.getElementById("result");

function add(a,b)
{
    return a+b;
}
result.innerHTML += "Wynik dodawania " + add(5,1);*/


var result2 = document.getElementById("result2");

function silnia(n)
{
     
    if(n==1)
    return 1;
    else
    return n * silnia(n-1);
}
result2.innerHTML += "Silnia z" + " liczby n" + "=" + silnia(5);