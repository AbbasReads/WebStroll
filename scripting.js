let n1 = {
    1:"Crazy",
    2:"Fire",
    3:"Amazing"
}
let n2 = {
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let n3 = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
let rand1=Math.random();
rand1=Math.ceil(rand1*3);
let s1=n1[rand1];
let rand2=Math.random();
rand2=Math.ceil(rand2*3);
let s2=n2[rand2];
let rand3=Math.random();
rand3=Math.ceil(rand3*3);
let s3=n3[rand3];
console.log(s1+" "+s2+" "+s3)