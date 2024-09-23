function solution (roman) {
    converter ={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
    let result = 0
    for (let i = 0; i <roman.length; i++){
        result += converter[roman[i]]
    }
    return result
  }

  console.log(solution('IV'))