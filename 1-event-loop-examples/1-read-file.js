const {readFile} = require('fs')
const { result } = require('lodash')

console.log('started the first task')

// check the file path!!!!
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed the first task')
})

console.log('starting the next task')

 