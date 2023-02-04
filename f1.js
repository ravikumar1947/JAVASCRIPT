console.log("hiii");
console.log(1234);
console.table({ a: 1, b: 2, c: 3 });
let js = "amazing";
console.log(js);
console.log(2 + 3 + 56);
//values and variables
//variable name should be allow letters, $,_
let firstName = "ravi";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
//variable name conventions
let first_name = "ravi";
let $function = "js";

//data types
//premitive(immutable) number,boolean, string, undefine, null, bigint
let javascriptFun = false;
console.log(javascriptFun);
console.log(typeof javascriptFun);
console.log(typeof 'ravi');
javascriptFun='yes';
console.log(typeof javascriptFun);
let year;
console.log(year);
console.log(typeof year);
year=1990;
console.log(typeof year);
console.log(typeof null);

//let ,const, var
let age=28;
age=29;
console.log(age);
const birthYear=1990;
console.log(birthYear);
var job='teacher';
job='software';
console.log(job);
//basic operators
const now1=2023;
const ageAkki=now1-2013;
const ageChai=now1-2017;
console.log(ageAkki, ageChai);
console.clear();
const firstName1='ravi';
const lastName='kumar';
console.log(firstName1 + " " + lastName);
//assignment operator
let x=10+5;
x +=10;
x *=4;
x++;
x--;
--x;
console.log(x);

//comparison operators
console.log(ageAkki<ageChai);
console.log(ageAkki>=10);
const now=2023;
console.log(now-2021 > now-2018);
//operator precedence
console.log(ageAkki>ageChai);
let z,y;
z=y=25-10-5;
z=y=10;
console.log(y,z);
const averageAge=(ageAkki+ageChai)/2;
console.log(averageAge,ageAkki,ageChai);
// coding challenge 1
// const johnMass=78;
// const johnHeight=1.95;
// const markMass=92;
// const markHeight=1.69;
const johnMass=85;
const johnHeight=1.76;
const markMass=95;
const markHeight=1.88;
const johnBMI=78/1.95**2;
const markBMI=92/(1.69*1.69)
const markHigherBMI=markBMI>johnBMI ;   
console.log(markBMI,johnBMI ,markHigherBMI);

//STRINGS AND TEMPLATE LITERALS
const firstName2='ravi';
const lastName2='kumar';
const job2='teacher';
const birthYear2=1994;
const year2=2023;
const ravi=`${firstName2} ${lastName2} a ${year2-birthYear2} year old ${job2}`;
console.log(ravi);





