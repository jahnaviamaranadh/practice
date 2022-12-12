class Account
{
    open_Account()
    {
        console.log("new account");
    }
    deposit_Account()
    {
        console.log("deposit amount");
    }
    get_Statement()
    {
        console.log("get statement");
    }
    get_Balance()
    {
        console.log("get balance");
    }
    withdrawal_Account()
    {
        console.log("withdrawal amount");
    }
    close_Account()
    {
        console.log("close account");
    }
}
let a1=new Account();
console.log(a1);
console.log(a1.open_Account);
console.log(a1.deposit_Account);
console.log(a1.get_Statement);
console.log(a1.get_Balance);
console.log(a1.withdrawal_Account);
console.log(a1.close_Account);
