


/*Training on Filter and map */
const objectTest = require('./test.json');
console.log(`The Name of All Users ${objectTest.users.map((el)=>el.name)}`)
console.log("#".repeat(10))
console.log(`Numbers of Users ${objectTest.users.length}`)
console.log("#".repeat(10))
filterActiveUsers = objectTest.users.filter((el)=>el.active === true)
console.log(`Users Active ${filterActiveUsers}`)
console.log("#".repeat(10))
console.log(`Name Users Active ${filterActiveUsers.map(user=>user.name)}`)
console.log("#".repeat(10))
console.log(`Total Active Users ${filterActiveUsers.length}`)
console.log("#".repeat(10))
console.log(`The users older than 25 Years ${objectTest.users.filter((el)=>el.age > 25)}`)
function findUserByEmail(userEmail){
    return objectTest.users.filter((el)=>el.email===userEmail)
}
function addUsers(obj){
    objectTest.users.push(obj)
    return objectTest
}
function removeUsers(idUser){
    return objectTest.users.filter((user)=>user.id != idUser)
}
console.log(findUserByEmail("jane@example.com"))
console.log(addUsers({"id": 5,
    "name": "loay hindi",
    "email": "asas@example.com",
    "age": 12,
    "active": true,
    "skills": ["Python", "HTML", "CSS"]}))

console.log(`Numbers of Users ${objectTest.users.length}`)
console.log("#".repeat(10))    
console.log(removeUsers(1))

function updateUserEmail(idUser,emailUser){
    let = userSpecific = objectTest.users.filter((user)=> user.id === idUser)
    userSpecific.users.email = emailUser
}