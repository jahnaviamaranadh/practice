let employee=[
{id:101,name:"rahul",salary:45000},
{id:102,name:"hari",salary:47000},
{id:103,name:"chinni",salary:40000},
{id:104,name:"sita",salary:75000},
{id:105,name:"ram",salary:65000}
]
console.log(employee);
console.log(employee[0].id,employee[0].name,employee[0].salary);
console.log(employee[1].name);
console.log(employee[2].salary);

for(let i=0;i<=employee.length;i++)
{
    console.log(employee[i].id);
    console.log(employee[i].name);
    console.log(employee[i].salary);
    console.log(employee[i].id,employee[i].name,employee[i].salary);
}