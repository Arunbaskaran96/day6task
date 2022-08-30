//Write a “person” class to hold all the details.

// class Person{
//     constructor(name, age, from){
//         this.name = name,
//         this.age = age,
//         this.from = from
//     }
// };

// const person1 = new Person ("Arun",25,"Kumbakonam");
// console.log(person1);
// const person2 = new Person("Kavin",25,"Thanjavur");
// console.log(person2);

//write a class to calculate the uber price.

// class uber{
//     constructor(km){
//         this.km = km,
//         this.price = this.km *5
//     }

// getprice(){
//     return `The amount is ${this.price}`

// }

// applydiscount(){
//     var discount = (25/this.price)*100
//     var discountprice = this.price - discount
//     return `The discount price is ${discountprice}`
// }

// }

// var price = new uber (20);
// console.log(price.getprice());
// console.log(price.applydiscount())



///circle

// class Circle{
//     constructor(radius,color){
//         this.radius=radius,
//         this.color = color
//     }

//     getradius(){
//         return `The radius is ${this.radius}`
//     }

//     getcolor(){
//         return `The color is ${this.color}`
//     }
//     getarea(){
//         var pi =3.14;
//         console.log(`The area is ${pi * (this.radius *this.radius)}`)
//     }
//     getcircumference(){
//         var pi =3.14;
//         console.log(`The circumference is ${2 * pi *this.radius}`)
//     }
// }

// const object = new Circle (2,"black")

// console.log(object.getradius());
// console.log(object.getcolor());
// console.log(object.getarea());
// console.log(object.getcircumference());


//movie

class Movie{
    constructor(title,studio,rating){
        this.title = title,
        this.studio = studio;
        if(rating ==null){
            return this.rating = "PG"
        }
        else{
            return this.rating=rating
        }
    }
    getpg(array){
        var result = array.filter(n=>n.rating =="PG")
        return result
    }
}


const movie1 = new Movie("valiami","zee","PG113");
const movie2 = new Movie("bigil","sun","PG111");
const movie3 = new Movie("rrr","lyca");
const movie4 = new Movie("kgf","vff","xyz");

const array = [movie1,movie2,movie3,movie4]

console.log(array)

let moviedetail = new Movie()
console.log(movie1.getpg(array));

let movies = new Movie("Casino Royale","Eon Productions","PG­13")
console.log(movies)



