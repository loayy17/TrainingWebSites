new Promise((resolve,reject)=>{
    setTimeout(()=>{
        document.getElementById("title1").style.visibility = "visible"
        resolve()
    },1000)
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById("title2").style.visibility = "visible"
            resolve()
        },1000)
    })
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById("title3").style.visibility = "visible"
            resolve()
        },1000)
    })
}).then (()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.getElementById("title4").style.visibility = "visible"
            resolve()
        },1000)
    })
})
.then(()=>{
    setTimeout(()=>{
        document.getElementById("title5").style.visibility = "visible"
    },1000)
})
.catch(()=>{
    setTimeout(()=>{console.log("failed the promise")})
    
})

[1,2,3,4,5]