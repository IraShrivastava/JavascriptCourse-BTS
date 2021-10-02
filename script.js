'use strict';

/* function calcAge(birthYear){
    const age = 2021-birthYear;

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output)

        if(birthYear >= 1991 && birthYear <= 1996){
            var millenial = true;
            //creating NEW variable with same name as outer scope's variable
            const firstName = 'Sheena'
            //reassigning outer scope's variable
            output = 'New Output!'
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str)

            function add(a,b){
                return a+b;
            }

        }
        //console.log(str) //Reference Error
        console.log(millenial)
        //add(2,3)
        console.log(output)
    }

    printAge()

    return age;
}

const firstName = 'Ira'
calcAge(1996); */

//Variables
/* console.log(me)
// console.log(job)
// console.log(year)

var me = 'Ira';
let job = 'Job Seeker';
const year = 1996;

//Functions

console.log(addDecl(2,3))
// console.log(addExpr(4,5))
// console.log(addArrow(2,5))

function addDecl(a,b){
    return a+b;
}

const addExpr = function(a,b){
    return a+b;
}

const addArrow = (a,b) => a+b */

//Example

/* if(!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart(){
    console.log('All products deleted')
}

var x=1;
let y=2;
const z=3;

console.log( x === window.x)
console.log( y === window.y)
console.log( z === window.z) */


//console.log(this)
/* const calcAge = function(birthYear) {
    console.log(2037 - birthYear)
    //console.log(this)
}
calcAge(1991)

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear)
    //console.log(this)
}
calcAgeArrow(1980)

const ira = {
    year: 1991,
    calcAge: function(){
        console.log(this)
        console.log(2037 - this.year)
    }
}
ira.calcAge()

const bidisha = {
    year: 2017,
}

bidisha.calcAge = ira.calcAge
bidisha.calcAge()

const f = ira.calcAge;
f() */

//var firstName = 'Bidisha'

/* const ira = {
    firstName: 'Ira',
    year: 1991,
    calcAge: function(){
        //console.log(this)
        console.log(2037 - this.year)

        //Solution 1:
        // const self = this; //self or that
        // const isMillenial = function() {
        //     console.log(self)
        //     console.log(self.year >= 1981 && self.year <=1997)
        //     //console.log(this.year >= 1981 && this.year <=1997)
        // }


        //Solution 2:
        const isMillenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <=1997)
        }

        isMillenial()
    },
    greet: () => {
        console.log(this)
        console.log(`Hey ${this.firstName}`)
    }
}

ira.greet()
ira.calcAge()

//arguments keyword
const addExpr = function(a,b){
    console.log(arguments)
    return a+b;
}

addExpr(2,5)
addExpr(2,5,8,12)

var addArrow = (a,b) => {
    console.log(arguments)
    return a+b;
}

addArrow(2,5,8) */

/* let age = 30;
let oldAge = age;
age = 31;

console.log(age)
console.log(oldAge)

const me = {
    name: 'ira',
    age: 25
}

const friend = me
friend.age = 27
console.log('friend: ',friend)
console.log('me: ', me) */

//Primitive types
let lastName = 'Shrivastava'
let oldLastName = lastName;
lastName = 'Khan'
console.log(lastName, oldLastName)

//Reference types
const ira = {
    firstName: 'Ira',
    lastName: 'Shrivastava',
    age: 25
}

const bidisha = ira;
bidisha.firstName = 'Bidisha'
bidisha.lastName = 'Chakraborty'
console.log('Ira',ira)
console.log('Bidisha', bidisha)

//bidisha = {}

//copying object
const ira2 = {
    firstName: 'Ira',
    lastName: 'Shrivastava',
    age: 25,
    family: ['Alice', 'Bob']
}

const bidisha2 = Object.assign({},ira2)
bidisha2.firstName = 'Bidisha'
bidisha2.lastName = 'Chakraborty'
bidisha2.family.push('Mary')
bidisha2.family.push('John')

console.log('Ira',ira2)
console.log('Bidisha', bidisha2)
