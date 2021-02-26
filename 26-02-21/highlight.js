function highlight(){
    let word=document.getElementById("word").value;
    let content=document.getElementById("content").value;
    let regex= new RegExp(word,"g")
    let s=content.replace(regex,"<span style='background-color:brown'>"+word+"</span>")
    document.getElementById("newcontent").innerHTML=s
    
        
        
    }
