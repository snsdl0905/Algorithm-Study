const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...arr] = fs.readFileSync("test.txt").toString().trim().split("\n");

function Parenthesis(string){
    let stack = [];
    console.log(string);
    let arr = [...string];
    console.log(arr)
    console.log(stack);
    arr.forEach(char => {
        console.log(`char: ${char}`);
        console.log(`stackBefore: ${stack}`);
        if (char=='('){
            stack.push('(');

        }
        else {
            if(stack.length == 0) return "NO";
            const popped = stack.pop();
            if (popped !== '(') return "NO"
        }
        console.log(stack);
        console.log(`stackAfter: ${stack}`);
    })
    console.log('------------------');
    if (stack.length !== 0 ) return "NO";
    return "YES";

}

let res = [];
arr.forEach((input)=>{
    res.push(Parenthesis(input));
})
console.log(res.join('\n'));