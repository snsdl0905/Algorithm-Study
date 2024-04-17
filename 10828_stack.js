const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...arr] = fs.readFileSync("test.txt").toString().trim().split("\n");
let stack = [];

function Stack(line){
    const [command, num] = line.split(' ');
    switch(command){
        case "push":
            stack.push(Number(num));
            return;
        case "pop":
            if(stack.length==0) return -1;
            return stack.pop();
        case "size":
            return stack.length;
        case "empty":
            if(stack.length==0) return 1;
            return 0;
        case "top":
            if(stack.length==0) return -1;
            return stack[stack.length - 1];
        default: return;
    }
}

let resultArr = [];
arr.forEach(line => {
    let res = Stack(line);
    if(res!==undefined) resultArr.push(res);
})
console.log(resultArr.join('\n'));
