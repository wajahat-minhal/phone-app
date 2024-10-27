const phones = [
    {
        brand: "Samsung",
        model: "Galaxy S21",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 799,
        image: "./assets/samsung.webp",
    },
    {
        brand: "Apple",
        model: "iPhone 13",
        ram: 4,
        rom: 128,
        camera: "12 megapixel",
        price: 799,
        image: "phone images/iphone13-transformed.webp",    
    },
    {
        brand: "OnePlus",
        model: "9",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 729,
        image: "phone images/oneplus9-transformed.webp",
    },
    {
        brand: "Google",
        model: "Pixel 6",
        ram: 8,
        rom: 128,
        camera: "50 megapixel",
        price: 599,
        image: "phone images/googlepixel6-transformed.webp",
    },
    {
        brand: "Xiaomi",
        model: "Mi 11",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 749,
        image: "phone images/xiaomimi11-removebg-preview.png",
    },
    {
        brand: "Sony",
        model: "Xperia 1 III",
        ram: 12,
        rom: 256,
        camera: "12 megapixel",
        price: 1299,
        image: "phone images/sonyxperia1-removebg-preview.png",
    },
    {
        brand: "Oppo",
        model: "Find X3 Pro",
        ram: 12,
        rom: 256,
        camera: "50 megapixel",
        price: 1149,
        image: "phone images/oppofindx3-removebg-preview.png",
    },
    {
        brand: "Vivo",
        model: "X60 Pro",
        ram: 12,
        rom: 256,
        camera: "48 megapixel",
        price: 999,
        image: "phone images/vivox60-transformed.webp",
    },
    {
        brand: "Nokia",
        model: "G50",
        ram: 4,
        rom: 128,
        camera: "48 megapixel",
        price: 299,
        image: "assets/1-6.webp",
    },
    {
        brand: "Motorola",
        model: "Edge 20",
        ram: 8,
        rom: 256,
        camera: "108 megapixel",
        price: 599,
        image: "phone images/motrollaedge20-transformed.png",
    },
    {
        brand: "Realme",
        model: "GT",
        ram: 12,
        rom: 256,
        camera: "64 megapixel",
        price: 499,
        image: "phone images/relmegt-removebg-preview.png",
    },
    {
        brand: "Asus",
        model: "ROG Phone 5",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
        image: "./assets/asusrog.png",
    },
    {
        brand: "HTC",
        model: "Desire 21 Pro",
        ram: 8,
        rom: 128,
        camera: "48 megapixel",
        price: 399,
        image: "phone images/htc-transformed.webp",
    },
    {
        brand: "Huawei",
        model: "P40 Pro",
        ram: 8,
        rom: 256,
        camera: "50 megapixel",
        price: 899,
        image: "phone images/huawei-removebg-preview.png",
    },
    {
        brand: "LG",
        model: "Wing",
        ram: 8,
        rom: 256,
        camera: "64 megapixel",
        price: 999,
        image: "phone images/lg-removebg-preview.png",
    },
    {
        brand: "ZTE",
        model: "Axon 20",
        ram: 8,
        rom: 128,
        camera: "64 megapixel",
        price: 399,
        image: "./assets/zte.jpg",
    },
    {
        brand: "BlackBerry",
        model: "KEY2",
        ram: 6,
        rom: 64,
        camera: "12 megapixel",
        price: 649,
        image: "phone images/blackberry-removebg-preview.png",
    },
    {
        brand: "Lenovo",
        model: "Legion Phone Duel",
        ram: 16,
        rom: 512,
        camera: "64 megapixel",
        price: 999,
        image: "phone images/lenovolegion-transformed.webp",
    },
    {
        brand: "Alcatel",
        model: "3L",
        ram: 4,
        rom: 64,
        camera: "48 megapixel",
        price: 199,
        image: "phone images/alcatel-removebg-preview.png",
    },
    {
        brand: "TCL",
        model: "10 Pro",
        ram: 6,
        rom: 128,
        camera: "64 megapixel",
        price: 449,
        image: "phone images/images-removebg-preview.png",
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
let card = document.querySelector(".c-container");

function renderArr(arr) {
    card.innerHTML = "";
    arr.map((item, index) => {
        card.innerHTML += `<div class="c-card">
        <div class="flex">
        <img src="${item.image}" alt="${item.model}" class="phone-image" />
        </div>
        <h3>Brand: ${item.brand}</h3>
        <h3>Model: ${item.model}</h3>
        <h3>Price: ${item.price}</h3>
        <button class = "c-button  bg-danger text-white" onclick="addToCart(${index})">Add to Cart</button>
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
    Swal.fire({
        title: "Product added Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}


function checkout() {
    let cartProducts = JSON.stringify(cart);
    localStorage.setItem("added",cartProducts);
    window.location = "cart.html";
}