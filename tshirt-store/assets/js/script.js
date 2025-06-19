document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");

    // Example t-shirt data
    const tshirts = [
        { name: "Classic White Tee", image: "assets/images/white-tshirt.jpg", price: "$20" },
        { name: "Black V-Neck", image: "assets/images/black-tshirt.jpg", price: "$25" },
        { name: "Graphic Tee", image: "assets/images/graphic-tshirt.jpg", price: "$30" },
    ];

    // Dynamically create t-shirt cards
    tshirts.forEach(tshirt => {
        const tshirtDiv = document.createElement("div");
        tshirtDiv.classList.add("tshirt");

        tshirtDiv.innerHTML = `
            <img src="${tshirt.image}" alt="${tshirt.name}">
            <h3>${tshirt.name}</h3>
            <p>${tshirt.price}</p>
            <button>Add to Cart</button>
        `;

        productList.appendChild(tshirtDiv);
    });
});