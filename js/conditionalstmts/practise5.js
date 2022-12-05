function test(x)
{
    if(x>99&&x<1000)
    {
        return("x is a 3 digit number")
    }
    else
    {
        return("x is not a 3 digit number");
    }
}
console.log(test(99));
console.log(test(100));
console.log(test(1000));
console.log(test(1));
console.log(test(10));
console.log(test(228));