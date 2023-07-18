const calculateSum = (num1:number, num2:number) : number => num1 + num2;

console.log('calculateSum --> ', calculateSum(3, 4));
console.log('calculateSum --> ', calculateSum(78, 33));
console.log('calculateSum --> ', calculateSum(876.23, 4.4));
console.log('calculateSum --> ', calculateSum(53, 54));
console.log('calculateSum --> ', calculateSum(0, 1));



const isEven = (num:number) : boolean => num % 2 === 0;

console.log('isEven --> ', isEven(4));
console.log('isEven --> ', isEven(7));
console.log('isEven --> ', isEven(0));
console.log('isEven --> ', isEven(-2));



const reverseString = (str:string) : string => {
    let result:string = '';
    
    for (let index = str.length -1; index >= 0; index--) {
        
        result += str.charAt(index);

    }

    return result;
};

console.log('reverseString --> ', reverseString('Hola mundo'));
console.log('reverseString --> ', reverseString('TENET película'));



const calculateAverage = (nums: number[]): number => {
    const sum = nums.reduce((memo, num) => memo + num, 0);
    return sum / nums.length;
};
  
console.log('calculateAverage --> ', calculateAverage([2, 4, 6, 8, 10])); 
console.log('calculateAverage --> ', calculateAverage([5,3,4,6,8,6,3,3,6,543,3,4])); 
console.log('calculateAverage --> ', calculateAverage([0,4,3,3,4,5])); 
console.log('calculateAverage --> ', calculateAverage([-3,5,23,3-100,3,899])); 



type MathOperation = (num1:number, num2:number) => number;

const multiply : MathOperation = (a:number, b:number) : number => a * b;

console.log('multiply --> ', multiply(3, 5));
console.log('multiply --> ', multiply(1, 2));
console.log('multiply --> ', multiply(0, 8));
console.log('multiply --> ', multiply(9, 3));
