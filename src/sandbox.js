/*function greet(){
    console.log("Hello World");
}
const speak = () => {
    console.log("Goodbye World");
} 
const speak2 = function(name = "Lulu", time ="afternooon")
{console.log(`Goodbye ${name}`)};

greet();
speak();
speak();
speak2("Alice");

//arrow function
const calArea = (radius) => {
return 3.14*radius**2;
}
console.log(calArea(5));
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));
let resultOne = greet();
console.log(resultOne);
let resultTwo = name.toUpperCase();
console.log(resultTwo);

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

myFunc(value => {
    console.log(value);
});

let people =["mario", "luigi", "toad", "Jacksoni"];
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);
const ul = document.querySelector(".people2");
let html = ``;
const people2 =["mario", "luigi", "ryu", "shaun", "chun-li"];

people2.forEach(function(person){
//html template
    html += '<li style="color: purple">' + person + '</li>';
});
console.log(html);
ul.innerHTML = html;

for (let i = 0; i < 5; i++) {
    console.log("in loop", i);
}

console.log("loop finished");
const names = ["shaun", "mario", "luigi"];
let i = 5;
while  (i < 5) {
console.log('val of i is: ', i);
i++;
}
let i = 4;
  do{
    console.log('val of i is: ', i);
    i++;
  } while (i < 10);
   const age = 25;
   if (age > 20){
    console.log("you're old")
   }
const ninjas = ["shaun", "yoshi", "chun-li", "ryu"];
if (ninjas.length > 3){
    console.log("that's a lot of ninjas");
}
const password = "pass1234@";
if (password.length >= 8 && password.includes("@")){
    console.log("that password is long enough");
}
else if (password.length >= 5  || password.includes("@")){
    console.log("password must be at least 8 characters long");
}
else if (password.length >= 3){
    console.log("password must be at least 5 characters long");
}
let user = false;
if (!user){
console.log("you must be logged in to continue");
}
console.log(!true);
console.log(false);
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
console.log("your score: ", scores[i]);
}
if (scores[i] === 0){
    continue;
}
if (scores[i] === 100){
    console.log("congratulations, you got the top score!");
    break;
}
const grade = "A";

if (grade === "A"){
}
else if (grade === "B"){

}else if (grade === "C"){

}else if (grade === "D"){

}else if (grade === "E"){
} 
const grade = "P";
switch (grade) {
    case "A":
        console.log("you got an A!");
        break;  
        case "B":
        console.log("you got a B!");
        break;
        case "C":
        console.log("you got a C!");
        break;  
        case "D":
        console.log("you got a D!");
        break;
        default:
        console.log("not a valid grade");
}
let age = 25;
if (true){
   let age = 30;
    console.log('inside code block: ', age);
}
console.log('outside code block: ', age);
//object literals
let user = {
name: "John",
age: 18,
email: "luogaluee@gmail.com",
location: "beijing",
blogs: [{"title": "why mac & cheese rules", "likes": 30}, {"title": "10 things to make with marmite", "likes": 25}],
login: function(){
    console.log("the user logged in");
},
logout: function(){
    console.log("the user logged out");
},
logBlogs: function(){
    console.log("this user has written thefollowing blogs:");
    this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
    });
}
};
console.log(user);
console.log(user.name);
console.log(user.age);
user["email"] = "luoga@gmailcom";
console.log(user["email"]);

user.login();
user.logout();
const name = "shaun";

user.logBlogs();
//Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

console.log(random);
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);*/