let a = 123; let b = "123"
if (a === b) {
    console.log("a and b are equal")
    console.log(a + b)
}
else if(typeof b=="string"){
    let s = parseInt(b)
console.log(typeof s)
}
else {
    let sum = parseInt(b) + a
    console.log(sum)
}
