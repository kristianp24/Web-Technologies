function square(a,b){
    return a*b
}

console.log(square(2,3))
// in js orice metoda intarce ceva, daca intoarce void insemana ca intoarce undefiened
//cand nu specificam intoarce undefiened
function test(){
    console.log("Print");
}

let t = test();
console.log(test());

const arrSquare = (a,b) => a*b
const arrSquare2 = (a,b) => { return a*b }
//cand am {} treb sa scriem return , se pune cand avem nevoie de mai multe linii de cod
console.log(arrSquare(2,3))
console.log(arrSquare2(2,3))

const arr =Object.freeze(["Ionut", "Mihai"])
//freeze inseamna ca obiectul nu mai poate fi modificat
const ob = Object.freeze({x:0, y:0})

//arr.push("Octav")
console.log(arr)
ob.d = 0;
console.log(ob)

//copierea unui obiect
let ob1 = {color: "blue", age: 20}
function copy(ob){
    let ob2 = ob;  //shallow copy
    let ob3 = JSON.parse(JSON.stringify(ob))  //deep copy
    ob.color="red"
    console.log(ob)
    console.log(ob2)
    console.log(ob3)

}
copy(ob1)
console.log(ob1)

//Recursivitate
function loop(x){
    console.log(x)

    if (x >= 10)
        return;

    x++;
    loop(x);
}

loop(0);

//Rest parameters

//parametri rest adica cu (...) treb sa fie ultimi
function multiplicator(multy, ...numbers){
    for (let i of numbers)
        console.log(i*multy);
}

//multiplicator(2,1,3,6,9,5,8)

function first(second){
    console.log(typeof(second))
    if(typeof(second) !== "function")
        alert("Second param must be a function!")
      second();
      // second() - invoka functia
      //second - trimite fucntioa mai departe
}

function second(){
    console.log("second")
    
}

first(second)  // daca dau cu second() dau mai departe undefiened



//Nested function

function sum(a, b){
    function prod(x){
        return x*x
    }

    return prod(a) + prod(b)
}
console.log(sum(2, 3))

function outsideFunc(x){
    let y = 9
    function insideFunc(y){
        return x*y
    }

    return insideFunc
}

let g= outsideFunc(2);
console.log(g(3));

function Persoana(name){
    let age;
    return {
         getName: () => name,
         setName: (newName) => name = newName,
         getAge: () => age,
         setAge: (newAge) => age = newAge,
         getNameAndAge: () => `${name} are ${age}`
         // `` la fel cu contacenarea cu + doar mai usor
    }
}

let pers = new Persoana("Ionut");
console.log(pers)
pers.setAge(20)
console.log(pers.getNameAndAge())


//array
let myArrO = [
    {id: 1, name: "Ionut", isActive: true},
    {id: 2, name: "Octav", isActive: true},
    {id: 3, name: "Mihai", isActive: false},
]

// similiar cu where in SQL
console.log(myArrO.filter(item => item.isActive))
//filterul intoace mereu un array, daca nu e niciunul intoarce empty array

// find - select top 1 where
console.log(myArrO.find(item => item.isActive))

// verififca daca unul singur indeplineste conditia respectiva
console.log(myArrO.some(item => item.isActive))

// opusul de some, nu e bine de folosit ca pargurge tot arrayul
console.log(myArrO.every(item => item.isActive))

// map - similiar cu select din SQL
console.log(myArrO.map(item => item.name))

// select si where la SQL
console.log(myArrO.filter(item => item.isActive).map(item => item.name))

// asa este neperofrmant
// for(){
//     //do sth
//     
//     let exist = myArrO.some()
// }

let numbers = [1, 2, 3, 4, 5]
console.log(numbers.reduce((previousValue, currentValue) => previousValue + currentValue))

class Om{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    getA = () => this.a
}

let o = new Om(2, 3);
console.log(o)

class Student extends Om{
    constructor(a, b, c){
       super(a, b);
       this.c = c;
    }
}