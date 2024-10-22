let obj = {
    name:"Abbas",
    role:"Student",
    year:1
}
for (const key in obj) {
    const element = obj[key]
    console.log(key,element)
    }
function sum(a,b,c=1)
{
    console.log(a+b+c)
}
sum(1,2)
sum(1,2,0)

const func=(x)=>{
    console.log(x);
}
func(89)