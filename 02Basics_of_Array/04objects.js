// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-sigleton object

tinderUser.id = "123abc"
tinderUser.name = "Suraj"
tinderUser.isLogedIn = false
console.log(tinderUser);

console.log(typeof tinderUser.isLogedIn);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({}, obj1, obj2, obj3) 
console.log(obj4);

const newObj = {...obj1, ...obj2, ...obj3}
console.log(newObj);


const user = [
        {
            id: 1,
            name: "Suraj",
            email: "sk@gmail.com"
        },
        {
            id: 2,
            name: "Suraj",
            email: "sk@gmail.com"
        },
        {
            id: 3,
            name: "Suraj",
            email: "sk@gmail.com"
        }
        , {
            id: 4,
            name: "Suraj",
            email: "sk@gmail.com"
        }
]
console.log(user[0])
console.log(user[1])

console.log(user[0].email)
console.log(user[1].id)

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogedIn'));


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

// course.courseInstructor

const {courseInstructor: teacher} = course

// console.log(courseInstructor);
console.log(teacher);

// const navbar = ({company}) => {

// }

// navbar(company = "Suraj")

// {
//     "name": "Suraj",
//     "courseName": "js in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]