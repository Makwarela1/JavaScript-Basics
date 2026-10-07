/*let africa = ["cape town", "PTA", "JHB", "angola"];
africa.shift("cape town");
africa.unshift("addis and ababa");

if (africa.includes("cape town")) {
  console.log("This is a city in Africa");
} else {
  console.log("This city was not found!!");
}

if (africa.includes("addis and ababa")) {
  console.log("This city is found in Ethiopia");
} else {
  console.log("City was not found!!");
}

const fruits = ["orange "];*/

/*let emp = [
    {empNum: 45789, employmentType: 'contract', empName: 'Sam'}, 
    {empNum: 59782, employmentType: 'part-time', empName: 'Joe'}, 
    {empNum: 86954, employmentType: 'contract', empName: 'Sarah'}
]

console.log(emp[0].empNum, emp[2].empName);

function groceryList(quantity, price){
    quantity = 3 ;
    price = 2.20; 

    return (quantity * price)
}
console.log(groceryList());
onst car = {
  type: "Fiat",
  model: "500",
  color: "white"
};*/

/*const product = [
    {name : "Laptop", model: "Dell", price: 1200, color:"white"},
    {name: "Cellphone", model: "Samsung", price: 12000, color:"black"}
];
function devices (product){
    // return product.name[0] + '\n' + product.price[1] + '\n' + product.color[1]
    return product[1].name + '\n'+ product[0] .model + '\n'+product[1].price;
}
console.log(devices(product))*/

const customer = {
    name: "Makwa",
    amount: 540,
        products: [
        {keyboard: 200, brand:"dell"},
            {mouse:150, brand:"apple"}
      ]
}

function buy (customer){
    return (customer.amount - (customer.products[0].keyboard))*2;
}
console.log(buy(customer))



