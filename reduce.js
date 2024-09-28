let arr = ["12","+","5.5","*","10"]
let operator = ''
let result = arr.reduce((a,b)=>{
    if(isNaN(b)){
        operator = b
    }
    else{
        if(operator === "+"){
            a = parseFloat(a) + parseFloat(b)
        }
        else if(operator === "-"){
            a = parseFloat(a) - parseFloat(b)
        }
         else if(operator === "*"){
            a = parseFloat(a) * parseFloat(b)
        }
        else if(operator === "/"){
            a = parseFloat(a) / parseFloat(b)
        }
    }
    return a
})
console.log(result)