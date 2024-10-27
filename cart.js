let data = localStorage.getItem("added");
let recieveData = JSON.parse(data);
let cartProducts = document.querySelector(".cartProducts");

recieveData.map((item, index) => {
    cartProducts.innerHTML += `<div class="c-card">
        <div class="flex">
        <img src="${item.image}" alt="${item.model}" class="phone-image" />
        </div>
        <h3>Brand: ${item.brand}</h3>
        <h3>Model: ${item.model}</h3>
        <h3>Price: ${item.price}</h3>
        <div class="flex quantity">
            <button class="quantity-btn" onclick="decrement(${index})">-</button>
            <h3 id="multiple-${index}">1</h3>
            <button class="quantity-btn" onclick="increment(${index})">+</button>
    
        </div>
        <div>`
})

function increment(index) {
    let plus = document.querySelector(`#multiple-${index}`);
    plus.innerHTML++
}

function decrement(index) {
    let minus = document.querySelector(`#multiple-${index}`);
    if (minus.innerHTML > '0') {
        minus.innerHTML--;

    }

}

let total = document.querySelector("#totalPrice")
total.innerHTML = recieveData.reduce((acc, cval) => {
    let total_Price = acc + cval.price
    return total_Price
}, 0)