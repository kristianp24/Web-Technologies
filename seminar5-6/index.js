const link = "https://jsonplaceholder.typicode.com/posts/";

let postsToUse = [];

headerObj = {
    headers:{
        "Content-Type": "application/json"
    }
}

async function getPosts() {
    const posts = (await axios.get(link)).data
    console.log(posts);
    return posts;
}

async function deletePost(postId) {
    const posts = (await axios.delete(link + postId)).data
    console.log(posts);
    return posts;
}

async function getpostbyId(postId) {
    const posts = (await axios.get(link + postId)).data
    console.log(posts);
    return posts;
}

async function createPost(post){
    const newElem = (await axios.post(link, post, headerObj)).data
    console.log(newElem);
    return newElem;
}

async function updatePost(post, postId){
    const newElem = (await axios.put(link + postId, post, headerObj)).data
    console.log(newElem);
    return newElem;
}

async function callUpdatePost(post, postId) {
    let updateItem = await updatePost(post, postId)
    postsToUse = postsToUse.map(obj => 
        parseInt(obj.id) === parseInt(postId) ? updateItem : obj)
    
    renderTable(postsToUse)
}

async function callGetPostById(postId){
    let item = await getpostbyId(postId)
    if (!item)
        return;

    document.getElementById("putUserId").value = item.userId;
    document.getElementById("putTitle").value = item.title;
    document.getElementById("putBody").value = item.body;
    document.getElementById("putId").textContent = item.id;

}

async function callGetPosts(){

    let table = document.getElementById("tableId");
    if (table)
        return;

    let p = await getPosts();
    postsToUse = JSON.parse(JSON.stringify(p));
    renderTable(postsToUse);
}

async function callCreatePost(post){
    let newPost = await createPost(post);
    postsToUse.push(newPost);
    renderTable(postsToUse);
}

function renderTable(posts){

    if (!posts || posts.length === 0)
        return;

    let oldTable = document.getElementById("tableId");
    if (oldTable){
        document.body.removeChild(oldTable);
    }

    let table = document.createElement("table");
    let tableHeader = document.createElement("thead");
    let tableBody = document.createElement("tbody");

    let headerRow = document.createElement("tr");

    for(let i in posts[0]){
        let columnHeader = document.createElement("th");
        columnHeader.innerText = i;
        headerRow.appendChild(columnHeader);
    }

    tableHeader.appendChild(headerRow);

    for (let item of posts){
        let bodyRow = document.createElement("tr");

        for (let i in item){
            let columnBody = document.createElement("td");
            columnBody.innerText = item[i];
            bodyRow.appendChild(columnBody);
        }

        let updateCell = document.createElement("td")
        let updateBtn = document.createElement("button")
        updateBtn.textContent = "Update"

       updateBtn.addEventListener("click", function(e){
        e.preventDefault()
        e.stopPropagation()

        callGetPostById(item.id)
       })

        updateCell.appendChild(updateBtn)

        let deleteCell = document.createElement("td")
        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        deleteCell.appendChild(deleteBtn)

        deleteBtn.addEventListener("click", function(e){
            e.preventDefault()
            e.stopPropagation();

            let index = posts.indexOf(item)

            deletePost(item.id).
            then(() => {
                postsToUse.splice(index,1)
                renderTable(postsToUse)
            })
        })

        bodyRow.appendChild(updateCell)
        bodyRow.appendChild(deleteCell)
        tableBody.appendChild(bodyRow);
    }

    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    table.id = "tableId"

    document.body.appendChild(table);
}

function createEvent(){
    let btn = document.getElementById("postButton");
    if (!btn)
        return;

    btn.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();

        let userId = document.getElementById("userId")?.value;
        let title = document.getElementById("title")?.value;
        let body = document.getElementById("body")?.value;

        if (!userId || !title || !body){
            alert("Please fill all the data");
            return;
        }

        callCreatePost({userId: userId, id: 101, title: title, body: body})
    })
}

createEvent();

function putForm(e){
    e.preventDefault();
    e.stopPropagation();

    let userId = document.getElementById("putUserId")?.value;
    let title = document.getElementById("putTitle")?.value;
    let body = document.getElementById("putBody")?.value;
    let id = document.getElementById("putId")?.textContent;

    if (!userId || !title || !body || !id){
        alert("Please fill all the data");
        return;
    }

    callUpdatePost({userId: userId, id:id, title:title, body: body}, id)

}