var os = require('os');

// info about current user 
const user = os.userInfo()
console.log(user)

// return the system uptime 
console.log(`the system uptime is ${os.uptime()} seconds`)

// info about the system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)