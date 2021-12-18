'use strict';
const weekDay = "monday";

switch ("monday") {
  case "monday":
    console.log("wlcome to monday");
    break;
  case "tuesday":
    console.log("tuesday");
    break;

  default:
    console.log("Enter correct ont");
  
}
const name ='prk';
const number =123325346436;

console.log(typeof number);
console.log(typeof name);
//function declaration
function logger(){
console.log("sdhfdhgfhdghfdhf")
}
function fruitJucice(sugarCane ,apple)
{
console.log(sugarCane,apple);
const juice =`apple juice of ${apple} and sugar cane juice of ${sugarCane}`;
return juice;
}
const sugarCaneJuice=fruitJucice(5,0);
console.log(sugarCaneJuice);
//Function exression
const cos2 = function (sugarCane,apple)
{
  const varijuice =`apple juice of ${apple} and sugar cane juice of ${sugarCane}`;
return varijuice;
}
  console.log( cos2(2,4));
  
  //Arrow function

  const calage = birthyear=>
  {

  2040-birthyear;
  const age =calage(1993);
  console.log(age);

  }
  //Arrays

  const bills =[22,100,400];

  const caltrip = function(bill)
  {
   return bill>=40&&bill<=20?bill*0.2:bill*0.3;
  }

  const tips =[caltrip(bills[0]) ,caltrip(bills[1]) ,caltrip(bills[2] )];
  console.log(tips);
  const totalBill =[bills[0]+tips[0] ,bills[1]+tips[1],bills[2]+tips[2] ]
  console.log(totalBill);
  
  const friends =['machile' , 'harathi' , 'sravani'];

  const objectnotation ={
    firstName:'priyanka',
    lastName :'reddy',
    job:'software',
    age:46,
  friends :['machile' , 'harathi' , 'sravani'],
  DriverLicence:false,
   getSummary : function ()
  {
    return(`${this.firstName} is a ${this.age} old ${this.job},and he has ${this.DriverLicence?'a' :'no'} driver's licence`)
  }
};
  console.log(objectnotation.getSummary());
  const nameKey ='Name';
  console.log(objectnotation['last'+nameKey]);
  console.log(`${objectnotation.firstName} has ${objectnotation.friends.length} friends, and his bestfriend is called ${objectnotation.friends[0]}`);

  const bill =[22,295,176,440,37,105,10,1100,86,52];
  const tipss=[];
  const totalsBill=[];
  const calTip = function(bill)
  {
return( bill<=100&&bill>=20 ? bill*0.2:bill*0.5);
  }
   for (let t = 0; t < bill.length; t++) {
     const ti = calTip(bill[t]);
     tipss.push(ti);
     totalsBill.push(bill[t]+ti);
   }
  console.log(bill,tipss,totalsBill);  