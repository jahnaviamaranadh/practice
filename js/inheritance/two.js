class Account
{
    get_details()
    {
        console.log("Account Details:");
    }
    get_balance()
    {
        console.log("Account Balance:");
    }
}
class B extends Account
{
    get_details()
    {
        super.get_details()
        super.get_balance()
        console.log("BAHUBALI");
    }
    get_balance()
    {
        console.log("5,00,000");
    }
}
new B().get_details();
new B().get_balance();
let a=new B();
console.log(a);

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