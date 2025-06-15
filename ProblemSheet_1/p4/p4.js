var a = prompt("Enter a Value.");
var num = Number(a);
function fact(a) 
{
    if (a == 0) 
    {
        return 1;
    }
    else 
    {
        return a * fact(a - 1);
    }
}

console.log("The Factorial : "+fact(num));