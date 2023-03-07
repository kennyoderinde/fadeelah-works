// const pupils = true;
// pupils = "Ade"
// console.log(pupils)

//PRIMITIVE AND VALUE TYPES
let hand = 2
let blood = "0+"
let legs = 2

/*
//NON-PRIMITIVE OR REFERENCE TYPES

let person = {
    hand: 2,
    blood: "0+",
    legs: 2,
    body: "slim

}
let house = {
    type: "Duplex",
    location: "Lagos State",
    apartments: 20,
    color: "Blue",
    Residence: true
}

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);


let bakers = [
    {id: 10, bn: "roseline"},
    {id: 11, bn: "preetypatel"},
    {id: 13, bn: "all-bread"},
    {id: 14, bn: "bread-life"},
    {id: 15, bn: "canes&wheat"},
    {id: 16, bn: "dentist cakes "}
]
bakers.sort((a, b) => {
    if(a.bn < b.bn) return -1
    if(a.bn > b.bn) return 1
    return 0
})
console.log(bakers)

let h = 0;
while(h < 5){
  console.log("hello")
  h++
}


for(let k = 0; k < 5; k++) {
  console.log("KEnny")
}
*/
// let i = 1;
// while(i < 25) {
//   if(i % 2 !== 0) 
//   console.log(i)
//   i++

// }

// for(let num = 1; num < 25; num++ ){
//   if(num % 2 !== 0)
//   console.log( num)
//   num++
// }


let person = {
  name: "Fadeelah",
  address: "Ikopodu",
  gender: "Female"
}
person["name"] = "Kehinde"
person["address"] = "YABA"
person["gender"] = "male"


let selection = "I dont know yet";
person[selection] = "Asa"
console.log(person)




let car = {
  brand: "Toyota",
  color: "red",
  year: "2008",
  mileage: "200000km"
}

console.log(car)

// let cookies = [
//     {
//       id: 10, 
//       bn: "roseline"
//     },
//     {
//       id: 11, 
//       bn: "preetypatel"
//     },
//     {
//       id: 13, 
//       bn: "all-bread"
//     },
// //ARRAY
//     ["Keny", "wale", "ojo", "Chukwu"],

//     function names() {

//     },
//     names()
// ]

let shirt = ["xl", 2, {shoulder: 20}, undefined, { waist: null }, [2, 3, 6, "heloo"], true  ]
console.log(shirt)



























/*function evenNum() {
  let num = 1

  while( num < 25){
    if(num % 2 !== 0)
    console.log(num)
    num++
  }
}
evenNum()
*/

function evenNum() {
  for(let i = 1; i < 25; i++){
    if(i % 2 !== 0)
    console.log(i, "odd")
  } 
}
evenNum()


//Create a javascript program that calculates and displays a multiplication table of the first 10 prime numbers
function isPrime(num) {
    // function to check if a number is prime
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }











  function getPrimes(num) {
    // function to generate the first num prime numbers
    const primes = [];
    let i = 2;
    while(primes.length < num) {
      if(isPrime(i)) {
        primes.push(i);
      }
      i++;
    }
    return primes;
  }
  
  function generateTable(primes) {
    // function to generate the multiplication table
    const table = [];
    for(let i = 0; i < primes.length; i++) {
      const row = [];
      for(let j = 0; j < primes.length; j++) {
        row.push(primes[i] * primes[j]);
      }
      table.push(row);
    }
    return table;
  }
  
  const primes = getPrimes(10);
  const table = generateTable(primes);
  
  // display the table in the console
  console.log(table);
  //This code defines two functions, getPrimes() and generateTable(), that generate the first 10 prime numbers 
  //and the multiplication table of those prime numbers, respectively. The isPrime() function is a helper function that checks if a number is prime.
  
  //To use this code in a React application, you would need to create a component that renders the table in the user interface. 
  //You could use a table element to display the table, or you could use a grid layout if you prefer. 
  //You could also add user input to allow the user to choose how many prime numbers to generate and display.
  
  
  

 // React code 
  
/*
import React from "react";
import "./IsPrime.css"
// import "./IsPrime.test"


  function isPrime(num) {
    // function to check if a number is prime
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  
  function getPrimes(num) {
    // function to generate the first num prime numbers
    const primes = [];
    let i = 2;
    while(primes.length < num) {
      if(isPrime(i)) {
        primes.push(i);
      }
      i++;
    }
    return primes;
  }
  
  function generateTable(primes) {
    // function to generate the multiplication table
    const table = [];
    for(let i = 0; i < primes.length; i++) {
      const row = [];
      for(let j = 0; j < primes.length; j++) {
        row.push(primes[i] * primes[j]);
      }
      table.push(row);
    }
    return table;
  }

function MultiplicationTable(num) {
    const primes = getPrimes(num);
    const table = generateTable(primes);
  
    return (
    <div className="container">
      <h1>Prime Numbers Multiplication Table</h1>
      <table className="table">
        <thead className="thead">
          <tr>
            <th></th>
            {primes.map((prime) => (
              <th key={prime}>{prime}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {primes.map((prime, i) => (
            <tr key={prime}>
              <th>{prime}</th>
              {table[i].map((product, j) => (
                <td key={j}>{product}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  
  export default MultiplicationTable;

  
  //This code defines the same isPrime(), getPrimes(), and generateTable() functions as the previous code example. 
  //The MultiplicationTable() function is a React component that generates the table using these functions.

//The component uses a table element to display the table, with the prime numbers displayed in the table header and 
//leftmost column. The primes.map() method is used to generate the header row of the table, and the table[i].map() method 
//is used to generate the rest of the table.

//To use this component in your React application, simply import it and include it in your JSX code like any other React component. 
//For example:

//javascript
//Copy code
import React from "react";
import MultiplicationTable from "./MultiplicationTable";

function App() {
  return (
    <div>
      <h1>Multiplication Table</h1>
      <MultiplicationTable />
    </div>
  );
}

export default App;
//This code imports the MultiplicationTable component and includes it in the App component's JSX code. 
//The result is a web page that displays the multiplication table of the first 10 prime numbers.







//JEST UNIT TEST


import React from "react";
import { render } from "@testing-library/react";
import MultiplicationTable from "./MultiplicationTable";

test("generates the correct list of primes", () => {
  const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const primes = MultiplicationTable.generatePrimes(10);
  expect(primes).toEqual(expected);
});

test("generates the correct multiplication table", () => {
  const expected = [
    [4, 6, 10, 14, 22, 26, 34, 38, 46, 58],
    [6, 9, 15, 21, 33, 39, 51, 57, 69, 87],
    [10, 15, 25, 35, 55, 65, 85, 95, 115, 145],
    [14, 21, 35, 49, 77, 91, 119, 133, 161, 203],
    [22, 33, 55, 77, 121, 143, 187, 209, 253, 319],
    [26, 39, 65, 91, 143, 169, 221, 247, 299, 377],
    [34, 51, 85, 119, 187, 221, 289, 323, 391, 493],
    [38, 57, 95, 133, 209, 247, 323, 361, 437, 551],
    [46, 69, 115, 161, 253, 299, 391, 437, 529, 667],
    [58, 87, 145, 203, 319, 377, 493, 551, 667, 841],
  ];
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const table = MultiplicationTable.generateTable(primes);
  expect(table).toEqual(expected);
});

test("renders the multiplication table", () => {
  const { getByText } = render(<MultiplicationTable />);
  const headers = ["", "2", "3", "5", "7", "11", "13", "17", "19", "23", "29"];
  const cells = [
    ["2", "4", "6", "10", "14", "22", "26", "34", "38", "46", "58"],
    ["3", "6", "9", "15", "21", "33", "39", "51", "57", "69", "87"],
    ["5", "10", "15", "25", "35", "55", "65", "85", "95", "115", "145"],
    ["7", "14", "21", "35", "49", "77", "91", "119", "133", "161", "203"],
    ["11", "22", "33", "55", "77", "121", "143", "187", "209", "253", "319"],
    ["13", "26", "39", "65", "91", "143", "169"],

  ]
})
//Regenerate response



//Create a Reactjs program that calculates and displays a multiplication table of the first 10 prime numbers. 
//Add an input box to the program that allows users to request more than or less than the number specified above

import React, { useState } from 'react';

// function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// function to generate the first num prime numbers
function generatePrimes(numPrimes) {
  let primes = [];
  let i = 2;
  while (primes.length < numPrimes) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes;
}

// function to generate the multiplication table
function MultiplicationTable() {
  const [numPrimes, setNumPrimes] = useState(10);
  const [primes, setPrimes] = useState(generatePrimes(numPrimes));

  function handleNumPrimesChange(event) {
    const newNumPrimes = parseInt(event.target.value);
    setNumPrimes(newNumPrimes);
    setPrimes(generatePrimes(newNumPrimes));
  }

  return (
    <div>
      <label>
        Number of primes:
        <input type="number" value={numPrimes} onChange={handleNumPrimesChange} />
      </label>
      <table>
        <thead>
          <tr>
            <th></th>
            {primes.map(prime => <th key={prime}>{prime}</th>)}
          </tr>
        </thead>
        <tbody>
          {primes.map(prime1 => (
            <tr key={prime1}>
              <th>{prime1}</th>
              {primes.map(prime2 => (
                <td key={prime2}>{prime1 * prime2}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MultiplicationTable;
*/