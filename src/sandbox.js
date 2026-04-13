function greet(){
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


