const getTodo = async function getTodo() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((element) => {
          console.log(element.completed);
        });
        resolve();
      });
  });
}//below and above is the same but async and await to make javascript wait to finish the request 
const getPost2 = async function getPost2() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json()
    json.forEach(element => {
        console.log(element.title)
    })
  }



const getUser = async function getUser() {
  let responses =  await fetch("https://jsonplaceholder.typicode.com/users")
  let json = await responses.json()
   console.log(json)
   console.log("#".repeat(20))
}

Promise.all([getUser(),getPost2(),getTodo()])
