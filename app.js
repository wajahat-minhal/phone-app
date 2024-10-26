const phones = [
    {
        brand: "Samsung",
        model: "Galaxy S21",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 799,
    },
    {
        brand: "Apple",
        model: "iPhone 13",
        ram: 4,
        rom: 128,
        camera: "12 megapixel",
        price: 799,
    },
    {
        brand: "OnePlus",
        model: "9",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 729,
    },
    {
        brand: "Google",
        model: "Pixel 6",
        ram: 8,
        rom: 128,
        camera: "50 megapixel",
        price: 599,
    },
    {
        brand: "Xiaomi",
        model: "Mi 11",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 749,
    },
    {
        brand: "Sony",
        model: "Xperia 1 III",
        ram: 12,
        rom: 256,
        camera: "12 megapixel",
        price: 1299,
    },
    {
        brand: "Oppo",
        model: "Find X3 Pro",
        ram: 12,
        rom: 256,
        camera: "50 megapixel",
        price: 1149,
    },
    {
        brand: "Vivo",
        model: "X60 Pro",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 999,
    },
    {
        brand: "Nokia",
        model: "G50",
        ram: 4,
        rom: 128,
        camera: "48 megapixel",
        price: 299,
    },
    {
        brand: "Motorola",
        model: "Edge 20",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 599,
    },
    {
        brand: "Realme",
        model: "GT",
        ram: 12,
        rom: 256,
        camera: "64 megapixel",
        price: 499,
    },
    {
        brand: "Asus",
        model: "ROG Phone 5",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "HTC",
        model: "Desire 21 Pro",
        ram: 8,
        rom: 128,
        camera: "48 megapixel",
        price: 399,
    },
    {
        brand: "Huawei",
        model: "P40 Pro",
        ram: 8,
        rom: 256,
        camera: "50 megapixel",
        price: 899,
    },
    {
        brand: "LG",
        model: "Wing",
        ram: 8,
        rom: 256,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "ZTE",
        model: "Axon 20",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 399,
    },
    {
        brand: "BlackBerry",
        model: "KEY2",
        ram: 6,
        rom: 64,
        camera: "12 megapixel",
        price: 649,
    },
    {
        brand: "Lenovo",
        model: "Legion Phone Duel",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
    },
    {
        brand: "Alcatel",
        model: "3L",
        ram: 4,
        rom: 64,
        camera: "48 megapixel",
        price: 199,
    },
    {
        brand: "TCL",
        model: "10 Pro",
        ram: 6,
        rom: 128,
        camera: "64 megapixel",
        price: 449,
    },
];

// getting data from local storage
let cart;

let retriveData = localStorage.getItem("added");
let previousData = JSON.parse(retriveData);

if(previousData === null){
    cart = [];
} else{
    cart = [...previousData];
}

console.log("cartItems===> ",cart);



// Rendering Products  
let card = document.querySelector(".container");

function renderArr(arr) {
    card.innerHTML = "";
    arr.map((item, index) => {
        card.innerHTML += `<div class="card">
        <h3>Brand: ${item.brand}</h3>
        <h3>Model: ${item.model}</h3>
        <h3>Price: ${item.price}</h3>
        <button onclick="addToCart(${index})">Add to Cart</button>
        <div>`
    })
}

renderArr(phones)


// Add to Cart Function
// let cart = [];

function addToCart(index) {
    let checkCart = cart.indexOf(phones[index]);
    if (checkCart === -1) {
        phones[index].quantity = 1;
        cart.push(phones[index]);

    } else {
        cart[checkCart].quantity++;
    }
    console.log(cart);
}


function checkout() {
    let cartProducts = JSON.stringify(cart);
    localStorage.setItem("added",cartProducts);
    window.location = "cart.html";
}