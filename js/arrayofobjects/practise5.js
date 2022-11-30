let three=[[[1,2,3]],[[4,5,6]],[[7,8,9]]];
let threesum=0;
for(let i=0;i<three.length;i++)
{
    three[i].forEach(element=>{
        for(let j=0;j<element.length;j++)
        {
            threesum=threesum+element[j];
        }
    });
}
console.log(threesum);