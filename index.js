// Code your solutions in this file
let messages = []

function writeCards(array, msg) {
    for (let i=0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${msg} gift!`)
    }
    return messages
}

function countDown(num) {
    while(num >= 0) {
        console.log(num)
        num--
    }
}