class Account
{
    ACC_ID;
    ACC_NAME;
    ACC_BALANCE=0;
    constructor(ID,NAME,BALANCE)
    {
        this.ACC_ID=ID;
        this.ACC_NAME=NAME;
        this.ACC_BALANCE=BALANCE;
    }
}
let a1=new Account(101,"rahul",50000);
let a2=new Account(102,"priyanka",97000);
console.log(a1);
console.log(a2);