function check() {
    let regex = /^\(my phone number|office number|fax number)$/g
    let data = document.getElementById('data').value
    var input  = "my phone number is 9876543210 and office number" +
        "is (0474)-2553435" +
        "and fax number is 0474-2333123"
        if (regex.test(data)) {
            alert("my phone number is 9876543210")
        } else {
            alert("invalid emaild id")
            input.match(regex)
}}