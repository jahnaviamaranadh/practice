class Teacher
{
    ma()
    {
        console.log("hello");
    }
}
class Student extends Teacher
{
    mi()
    {
        console.log("world");
    }

}
//new Student().m1()==new Student().m2();//
//console.log(new Student().m1()new Student().m2());
let a=new Student()
let b=new Student()
//console.log(a.ma()==b.mi());//
