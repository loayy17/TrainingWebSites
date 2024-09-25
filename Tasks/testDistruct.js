// let obj = {a:5,b:{c:4}}
// let x = { ...obj }
// x.a = 4
// x.b.c = 1
// obj.b.c = 100
// console.log(obj.b.c)
// console.log(x.b.c)
// console.log(x.a)
// console.log(obj.a)

// let countryZone = {
//     Jordan:3,
//     UAE:4,
//     UK:0,
//     Palestine:2
// }
// const dateZone = new Date()
// console.log(dateZone)
// const differentTimeZone = dateZone.getTimezoneOffset()
// console.log(differentTimeZone)// in minutes
// console.log(differentTimeZone/60)// in hours

// const dateNow = new Date()
// console.log(dateNow.getHours())
// let strDate = 
const date = new Date("2024-01-01T04:10:00.000Z") // UTC ZONE Zero 
console.log(date.getHours()) //the javascript will convert it depend in your country
console.log(date.toJSON())