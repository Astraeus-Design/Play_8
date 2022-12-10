let password="pworddfddfdf";

console.log((password.length)>7);

let height=125;


if( (height>=150) && (typeof(height)==="number") ){

    console.log("you can go on the ride");
}
else{
    console.log("no you cant go on the ride");
}

let a=Math.floor(Math.random()*6+1);
let b=Math.floor(Math.random()*6+1);

console.log(a);
console.log(b);

if((a==6)&&(b==6)){
    console.log(`${a} and ${b} you win a bear`);
}
else if((a==b))
{ console.log(`${a} and ${b} you win free throws`);}
else if ( ( a== 2 || a==4 || a==6 || b==2 || b==4 || b==6 )){
    console.log(`${a} and ${b} you win one throw`);
}
else{
    console.log(`${a} and ${b}you lose`);
}
