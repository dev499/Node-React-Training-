// const fs= require('fs')
const fsPromises = require('fs').promises

const fileOps= async () => {
    try{
        const data= await fsPromises.readFile('./name.txt','utf-8')
        console.log(data)
        await fsPromises.unlink('./name.txt')
        await fsPromises.writeFile('./first.txt', data)
        await fsPromises.appendFile('./first.txt','\n\nMy second text!!')
        await fsPromises.rename('./first.txt','./firstPromise.txt')
        const newData= await fsPromises.readFile('./firstPromise.txt','utf-8')
        console.log(newData)

    } catch (err) {
        console.error(err)
    }
}


fileOps()


// fs.readFile('./name.txt', (err, data) => {
//     if(err) throw err
//     console.log(data.toString())
// })


// console.log('hello....')

// fs.writeFile('./reply.txt','Nice To Meet You!!', (err) => {
//     console.log(err)
//     console.log('Operation Completed')
// })

// fs.appendFile('./test.txt','Testing test!!', (err) => {
//     console.log(err)
//     console.log('Append Completed')
// })

process.on('uncaughtException', err => {
    console.error(`There was an uncauhght error: ${err}`)
    process.exit(1)
})