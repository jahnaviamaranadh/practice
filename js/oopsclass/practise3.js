class Account
{
    min_bal=500;
    acc_bal=0;
    deposit_Amount(amount)
    {
        this.acc_bal=this.acc_bal+amount;
    }
    get_bal()
    {
        return this.acc_bal-this.min_bal;
    }
}
let a1=new Account();
let a2=new Account();
console.log(a1);
console.log(a2);
console.log("*******after deposit the amount details*******");
a1.deposit_Amount(50000);
a2.deposit_Amount(97000);
console.log(a1);
console.log(a2);
console.log("********to get remaining account balance*******");
let r1=a1.get_bal();
let r2=a2.get_bal();
console.log(r1);
console.log(r2);
