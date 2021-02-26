function validate(){
    let name=document.getElementById("name")
    let mobile=document.getElementsById("mobile")

    if(name.value==""){
    alert("Name field cannot be empty")
    name.focus()
    return false
}
if(isNaN(mobile.value)||mobile.value.lenth!=10){
    alert("invalid mobile number")
    mobile.focus()
    return false
}

}