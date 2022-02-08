const num=new Set();
num.add(1)
num.add(2)
num.add(3)
num.add('dev')
num.add('Dev')
num.add('ved')
console.log(num);
// has returns boolean values
console.log(num.has(4));