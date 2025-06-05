//Exercise 1
////We have a simple object:

//let user = {
 // name: "John",
  //years: 30
//}
//Write the destructuring assignment that reads:

//name property into the variable name.
////years property into the variable age.
//isAdmin property into the variable isAdmin (false if absent)
//let user={
   // name:"kani",
    //age:40,
    //isAdmin:true
//}

//var{name,age,isAdmin}=user;
//console.log(name,age,isAdmin);
//name="arun";
//age=56;
//console.log(name);

//Exercise 2
//Give the right name:

//Create the variable with the name of our planet. How would you name such a variable?-
// answer:var earth="";
//Create the variable to store the name of the current visitor. How would you name that variable?
// answer:var curr_visitor=" ";

//Exercise 3
//Look at the code. What will be the result of the call at the last line and why?

//let phrase = "Hello"

//if (true) {
 // let user = "John";
 // console.log(user);
  //function sayHi() {
   // alert(`${phrase}, ${user}`)
  //}
//}

//sayHi()
// hello is global variable it can access inside the function
//output for this program is "Hallo John"  

//Exercise 4
//Write the code, one line for each action:

//1.Create an empty object user1.
//2.Add the property name with the value John.
//3.Add the property surname with the value Smith.
//4.Change the value of the name to Pete1.
//5.Remove the property name from the object.

//const user1={
  //name:"john",
  //surname:"simith"
 //}
 //var text;
// console.log("gggg"+(user1.name = "pete1"))
 //delete user1.surname;
 //for(let x in user1){
  // text +=user1[x];
   // console.log("hhhh"+text);

 //}


//Exercise 5

//const user_details1 = {
 //  name: "John"
//}

// does it work?
//user_details1.name = "Pete"
//console.log(user_details1.name);

//it works fine. u can change the object key values outside  of the class

//Exercise 6
//We have an object storing the salaries of our team:

//Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
let text=Object.values(salaries);
//Object.values() returns an array of the values of an object.
console.log(text);
var sum=0;
for (i=0;i<text.length;i++){
  sum +=text[i];
  
}console.log("sumof salaries"+sum);


//Exercise 7
//Rewrite this if using the ternary operator '?':

//if (a + b < 4) {
  result = 'Below';
//} else {
  result = 'Over';
//}
var a=3;
var b=5;
var res=(a+b<4)?'Below':'over';
console.log("output"+" "+res);

//Exercise 8
//Rewrite if..else using multiple ternary operators '?'.

let message;

//if (login == 'Employee') {
  message = 'Hello';
//} else if (login == 'Director') {
 // message = 'Greetings';
//} else if (login == '') {
 // message = 'No login';
//} else {
 // message = '';
//}
age=25;
var result = age>18   ? 'you can enter'
         :age===19 ?'you enter with adult only'
         :age===18?'you are corrct age'
        :"end";

 console.log(result);      
