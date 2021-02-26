let i = 50; let j = 60; let k = 55
        if (i > j && i > k) {
            console.log(i, "is the largest element")
        }
        else if (j > k && j > i) {
            console.log(j, "is the largest element")
        }
        else {k > i && k > j
            console.log(k, "is the largest element")
        }
        let choice="+"
        switch(choice){
            case"+":{
                console.log(i+j)
                break}
            case"-":{
                console.log(i-j)
                break
            }
            default:
                console.log("invalid operation......")
        }