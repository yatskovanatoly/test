let random
let arr = []
let arr2 = []
 do {
    random = Math.floor(Math.random() * 1000)
    if (random.toString().length > 2) {
    console.log(random)
    } else if (random.toString().length == 2) { 
        (arr.push(random)) 
    } else (arr2.push(random))
} while (random != 111)
console.log('')
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]) 
} console.log('')
for (i = 0; i < arr2.length; i++) {
    console.log(arr2[i]) 
}