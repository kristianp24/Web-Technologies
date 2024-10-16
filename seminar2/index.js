//var, const, let
var x = 5
const y = 6
let z = 4

console.log(x)

if(1==1){
    var a = 8
    let b= 10
}

console.log(a)
//console.log(b)

// operatori
console.log(3+3)
console.log(3-3)

console.log(3 + "3") // se concateneaza, orice Number este un String asa ca se concateneaza 3 cu 3
console.log(3 -"3") // aici ii face cast stringului la number

console.log(3+"Ana")
console.log(3-"Ana") // Not a number

console.log(1 + 2 + 3)
console.log(1+"2"+3 )
console.log(1 + +"2"+3 )  //+ suplimentar face cast, face cast stringului la number si asa se face adunarea (nu se recomanda pt cast)

console.log(typeof("2"))
console.log(typeof(+"2"))

if(1 == "1"){   // face comparatie decat pe valoare 1=1 fie ca e string fie ca e int
    console.log("A intrat")
}
else{
    console.log("Nu a intrat")
}

if(1 === "1"){   // face comparatie pe tip si valoare (se recomanda cu asta)
    console.log("A intrat")
}
else{
    console.log("Nu a intrat")
}

let c = false   // 0 e tratat ca falsy value
if (!c)
    console.log("Null check")

if (null == undefined)  // cu === nu merge
    console.log("null si undefiened")


let arr = ["Ionut", "Mihai", "Enea"]
// for in similiar cu forul clasic
for(let i in arr)
    console.log(i)

// foreach ul
for(let i of arr)
    console.log(i)

let ob ={
    x:0,
    y:1
}
// se poate pentru ca afiseaza indexele
for(let i in ob)
    console.log(i)

// da eroare pt of se fol doar pt iterabili
// for(let i of ob)
//     console.log(i)

arr.push("Mirela","Octavian","Mihai")
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift("aaaa")  // adauga la inceput
console.log(arr)

arr.shift() // scoate la inceput
console.log(arr)

arr.splice(2, 0, "xxx")
console.log(arr)

arr.splice(2,2,"ssss","qqqq")
console.log(arr)


arr.forEach((item,index) =>{
    console.log(item+index)
})

