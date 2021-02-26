function check() {
let regex = /^\w+\W*@(gmail.com|yahoo.in)$/g
    let data = document.getElementById('data').value
    //alert(data.match(regex))

if (regex.test(data)) {
    alert("valid email id")
} else {
    alert("invalid emaild id")
}
var input="my phone number is 9876543210 and office number"+
"is (0474)-2553435"+
"and fax no is 0474-2333123"
}