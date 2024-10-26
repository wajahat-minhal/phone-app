let data = localStorage.getItem("added");
let recieveData = JSON.parse(data);
let cartProducts = document.querySelector(".cartProducts");

recieveData.map((item)=>{
    cartProducts.innerHTML +=`<div class="c-card">
        <h3>Brand: ${item.brand}</h3>
        <h3>Model: ${item.model}</h3>
        <h3>Price: ${item.price}</h3>
        <div>`
})

let total = document.querySelector("#totalPrice")
total.innerHTML = recieveData.reduce((acc, cval)=>{
    let total_Price = acc + cval.price
    return total_Price 
},0)