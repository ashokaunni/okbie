function check() {
    //let regex=/^(987)\d{7}$/g
    //let regex=/\d+/
    //let regex=/^\+91\s(987)\d{7}$/g
    let regex = /^\w+\W*@(gmailcom|yahoo.in)$/g
    let data = document.getElementById('data').value
    alert(data.match(regex))
}
if (regex.test(data)) {
    alert("valid email id")
} else {
    alert("invalid emaild id")
}