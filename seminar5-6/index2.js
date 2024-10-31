let coll = document.getElementsByClassName("myClass")
console.log(coll)

let el = document.querySelector("#myId")
console.log(el)

function test(){
    let btn = document.getElementById("btnId")

    // btn.classList.remove('green')
    // btn.classList.add('green')

    btn.classList.toggle("green")
}
