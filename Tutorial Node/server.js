const os = require('os')
// const math=require('./math')
const path= require('path')
const {add, mul, div ,sub}=require('./math')

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)
console.log(path.parse(__filename))
console.log(sub(11,9))