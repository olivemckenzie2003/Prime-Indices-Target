
//Week 2 – JavaScript (Assignment) 
 
//Task 1: Write a function sumOfEvenIndices that takes an array of numbers as input and 
//returns the sum of the numbers at even indices (0-based). 

function generateNumbers(arrayOfNumbers, Number){
  for(a=0; a<=Number; a++)
  {
    arrayOfNumbers.push(a);
  }
   return arrayOfNumbers;
}

const arrayNum=[];
const newArrays= generateNumbers(arrayNum, 10);
console.log(newArrays);

function indices(array, power) {
  const arrayNew=[];
  let AccValue=0;
  for(let p=0; p<array.length;p++)
  {   
    value=(Math.pow(array[p] , power));    
    arrayNew.push(value); 
    AccValue=AccValue+value;
  }
    return arrayNew;
}

const arraysThree= indices(newArrays, 2);
console.log(arraysThree);

function sumOfEvenIndice(arrayOfIndices){

let totalEvenIndices=0;
 for(let p=0; p<=arrayOfIndices.length;p++)
 {
    if(arrayOfIndices[p] % 2 == 0) {
      totalEvenIndices= totalEvenIndices+arrayOfIndices[p];
    }
 }

  return totalEvenIndices;

}

const indicesArray= sumOfEvenIndice(arraysThree);
console.log(indicesArray);

//input  (11)  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//output (11) [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//Total 220


//Task 2: Write a function countOccurrences that takes an array of numbers and a target 
//number as input, and returns the number of times the target number appears in the array. 
 
function number(array, target){
    let counter=0;
    for(i=0;i<=array.length;i++){
      if(array[i]==target)
      { counter++;}
    }
    return counter;
}

let theTarget = 8;
const theNumbers=[1,3,4,5,8,1,4,6,5,10,3,4,8,8,2,7,7,8];
const thisArray=number(theNumbers, theTarget);
console.log(thisArray);


// input [1,3,4,5,8,1,4,6,5,10,3,4,8,8,2,7,7,8]
//Target number =8;
//output 4


//Task 3: Write a function isPrime that takes a number as input and returns true if the number is 
//prime, and false otherwise.

function findPrimes(start,end){

  let primes=[];

  for (let i=start; i <=end; i++)
  {
    if(isPrime(i)){
      primes.push(i);

    }
  }
  return primes;
}


function isPrime(num){
  if(num <=1) return false;
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num% i===0){
      return false;
    }
  }
  return true;
}

//input number range
console.log(findPrimes(2,20));
//output (8) [2, 3, 5, 7, 11, 13, 17, 19]

//input number range
console.log(findPrimes(30,50));
//Output (5) [31, 37, 41, 43, 47]



 


     

    