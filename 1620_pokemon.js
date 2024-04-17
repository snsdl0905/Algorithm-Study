const fs = require('fs');
// const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...arr] = fs.readFileSync("test.txt").toString().trim().split("\n");
const [N, M] = n.split(' ');
const dictionary = arr.slice(0,N);
const problems = arr.slice(N,);
let answer = [];

const dic = [];
dictionary.map((word, index) => {
    dic[word] = index; 
})
console.log(dic);


problems.forEach((problem) => {
    if(isNaN(problem)){
        answer.push(dic[problem] + 1);
    }
    else{
        answer.push(dictionary[problem-1]);
    }
})

console.log(answer.join('\n'));