class Account
{
    get_details()
    {
        console.log("good morning.....");
    }
    get_balance()
    {
        console.log("good afternoon.....");
    }
}
class B extends Account
{
    get_details()
    {
        super.get_details()
        super.get_balance()
        console.log("good morning1.....");
    }
    get_balance()
    {
        console.log("good afternoon2.....");
    }
}
new B().get_details();
new B().get_balance();










/*let a=new B();
console.log(a);
console.log(a.get_details);
a.get_details();
console.log(a.get_balance);
a.get_balance();
console.log("_________________________________");
let c=new Account();
console.log(c);
console.log(c.get_details);
c.get_details();
console.log(a.get_balance);
c.get_balance();
new Account().get_details();
new Account().get_balance();
new B().get_details();
new B().get_balance();*/







