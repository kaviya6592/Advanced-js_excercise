//Exercise 1
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

//The function should not modify the array. It should return the new array. For instance:

let arr5 = [5, 3, 8, 1]

let final_arr=filteredRange(arr5, 1, 4);
console.log(final_arr);



function filteredRange(arr,a,b) {
     // Use the .filter() method to choose only the elements between a and b
    return arr.filter(function(element)
     {
               return element >= a && element <= b;
    });



}


//Exercises 2
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

//For instance:

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ];
//cart.map(x => x.name)      

let names =users.map(x =>x.name)
//console.log(names);

//alert( names ) // John, Pete, Mary

//Exercises 3
////Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

//The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

let john1 = { name: "John", age: 25 }
let pete1 = { name: "Pete", age: 30 }
let mary1 = { name: "Mary", age: 29 }

let arr = [ john1, pete1, mary1 ]
let age=[];
let sum_of_no=0;
function getAverageAge(users1){
for (i=0;i<users1.length;i++){
    //console.log(users1);

    age=users1.map(x=>x.age)
   // console.log("ggggg"+age[i]);
    sum_of_no=sum_of_no+age[i];
    //console.log(sum_of_no);

}
let avg=sum_of_no/3;
console.log("avg"+avg);
}

getAverageAge(arr);


