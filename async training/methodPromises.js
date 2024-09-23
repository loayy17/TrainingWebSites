const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("1 err")
    },10000)
})
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("2 error")
    })
})
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("3 Successful")
    })
})

Promise.allSettled([promise1,promise2,promise3])
.then((resolve) => console.log(resolve))
.catch((err) => console.log(err))