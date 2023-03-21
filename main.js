/* const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    edithA() {
        this.a = 'AAAA';
    }
};

//JSON.parse & JSON.stringify
const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);

// it doesn't work with methods */

// function recursive() {
//     if(/* validation */) {  
//     // recursive callbacks
//     } else {
//     // normal calls, non-recursive
//     }
// }

const numbers = [1,2,3,4,5,6,7,8,9,376873,32,46,3,6,7];
// let number = 0;
// for(let index = 0; index < numbers.length; index++) {
//     number = numbers[index];
//     console.log({index,number});
// }

function recursive(numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);

        numbersArray.shift();
        recursive(numbersArray);
    }
}