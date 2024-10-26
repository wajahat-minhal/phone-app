let data = localStorage.getItem("added");
let recieveData = JSON.parse(data);
let cartProducts = document.querySelector(".cartProducts");

recieveData.map((item)=>{
    cartProducts.innerHTML +=`<div class="card">
        <h3>Brand: ${item.brand}</h3>
        <h3>Model: ${item.model}</h3>
        <h3>Price: ${item.price}</h3>
        <div>`
})