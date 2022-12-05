//check if a number is multiple of 3 or not
function test3(x)
{
    if(x%3===0)
    {
        return ("x is multiple of 3");
    }
    else
    {
        return ("x is not a multiple of 3");

    }
}
console.log(test3(12));
console.log(test3(14));
console.log(test3(10));
console.log(test3(11));