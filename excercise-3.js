//Exercise 1
//The following function returns true if the parameter age is greater than 18.

//Otherwise, it asks for a confirmation and returns its result.

 const val1 = (age) =>{ 
 if (age > 18) {
     console.log("hallo");
  } else {
    console.log(" not old");
  }
}
 val1(9);

//Exercise 2
//Write a function pow(x,n) that returns x in power n.
  const pow=(a,b)=>{
    return Math.pow(a,b);


}

let value1=pow(2,3);
console.log(value1);

//Exercise 3
//Replace Function Expressions with arrow functions in the code:

const ask=(question, yes, no) =>{
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)


//Exercise 4
//Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.
let calculator = {
    val1 :0,
    val2 :0,
read(){
 this.val1=Number(prompt("enter the first no"));
 this.val2=Number(prompt("enter the second no"));
},
sum(){ return this.val1+this.val2},
mul(){ return this.val1*this.val2},
};



console.log("jjjj"+calculator.read());
console.log("uuuu"+calculator.sum() );
console.log("ffff"+ calculator.mul() );


//Exercise 5
//Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?

const min=(a,b) =>{
    return a > b? "a greater":"b greater"
}

let min_val=min(9,8);
console.log(min_val);
