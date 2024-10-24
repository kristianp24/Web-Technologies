const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
]


function getPost(){
    setTimeout(() => {
        let output = []
        posts.forEach((post)=> {
            output.push(post)
        })

        console.log(output)
    }, 1000)
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post)
        console.log("Adaugare")
        callback();
    }, 2000)
}

// getPost();
// createPost({title: "Post 3", body: "This is post 3"}, getPost)

function createPostPromise(post){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
        posts.push(post)
        console.log("Adaugare Promisiune")

        const error = false
        if (!error)
            resolve()
        else 
           reject("Error")
        
    }, 2000)
    })
   
}

// createPostPromise({title: "Post 3", body: "This is post 3"}).then(getPost)
// .catch(e => console.log(e))
// .finally(() => console.log("finally"))

const promise1 = Promise.resolve("Hello")
const promise2= new Promise((resolve,reject) => {
    setTimeout(resolve, 2000, "Bye")
})

const promise3 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

Promise.all([promise1,promise2,promise3]).then(values => console.log(values))

//orice metoda declarat cu async e un function
async function createElem(){
    await createPostPromise({title: "Post 3", body: "This is post 3"});
    getPost()
}
createElem()
console.log(1)

// async function fetchData(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")

//     console.log(res)
//     let data= await res.json()
//     console.log(data)
// }
// fetchData()

// functii generatoare
function* square(number){
    while(true){
        yield number*number;
        number *= number;
    }
}

const generator = square(2)
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.return())
console.log(generator.next())

let btn = document.getElementById("btnId")
if (btn){
    btn.addEventListener('click', function(e){
        
        console.log(2)
        e.preventDefault()
        e.stopPropagation()
    })
}