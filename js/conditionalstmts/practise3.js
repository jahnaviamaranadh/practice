function test(x)
{
    if(x>0)
    {
        return("x is a positive integer");
    }
    else if(x==0)
    {
        return("x is zero");
    }
    else
    {
        return("x is a negative integer");
    }
}
console.log(test(0));
console.log(test(-1));
console.log(test(12));
console.log(test(6));