const myArray = [42, 'apple', 27, 'banana', 'cherry'];
console.log(myArray); 

const firstElement = myArray[0]; 
const lastElement = myArray[myArray.length - 1]; 
const middleElement = myArray[Math.floor(myArray.length / 2)]; 

console.log(firstElement); 
console.log(lastElement); 
console.log(middleElement); 

const arrayLength = myArray.length;
console.log(arrayLength); 

myArray.push('date');
console.log(myArray); 

const removedElement = myArray.pop();
console.log(myArray); 
console.log(removedElement); 

myArray.splice(1, 1, 'orange'); 
console.log(myArray); 

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.forEach((element) => {
    console.log(element);
});
const [first, second, ...rest] = myArray;
console.log(first); 
console.log(second); 
console.log(rest); 
