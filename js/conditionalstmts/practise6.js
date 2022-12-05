function test(a)
{
    if(a%2===0)
    {
        return("the given number is a even number")
    }
    else
    {
        return("the given number is a odd number")
    }
}
console.log(test(-4));
console.log(test(9));
console.log(test(400));
console.log(test(303));
console.log(test(0));
console.log(test(-13));