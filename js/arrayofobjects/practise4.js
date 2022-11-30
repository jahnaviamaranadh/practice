let multi=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
let multisum=0;
for(let i=0;i<multi.length;i++)
{
    console.log(multi[i]);
    multi[i].forEach(element=>{multisum=multisum+element});
    //console.log(multisum);
}
console.log(multisum);