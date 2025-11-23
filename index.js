const loginBtn = document.getElementById("h-login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./login.html";
});

const registrationBtn = document.getElementById("h-registration-btn");

registrationBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./registration.html";
});

function displayProducts(productsArray) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  productsArray.forEach((product) => {
    const cardDiv = document.createElement("div");

    cardDiv.className = "card bg-base-100 w-90 shadow-sm";

    cardDiv.innerHTML = `
        <figure>
        <img 
            src="${product.imageURL}" 
            alt="${product.productName}" 
            onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Default+Shoe+Image';"
        />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${product.productName}</h2>
                    <p>${product.Description}</p>
                    <div class="card-actions justify-end items-center">
                        <p class="font-semibold text-2xl">${product.price}</p>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
    `;

    container.appendChild(cardDiv);
  });
}

const allShoes = document.getElementById("all-shoes");

allShoes.addEventListener("click", function (e) {
  e.preventDefault();

  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => displayProducts(data))
    .catch((error) => console.error("Error loading products:", error));
});

function displayProductss(productsArray) {
  const container = document.getElementById("products-containerr");
  container.innerHTML = "";
  productsArray.forEach((product) => {
    const cardDiv = document.createElement("div");

    cardDiv.className = "card bg-base-100 w-90 shadow-sm";

    cardDiv.innerHTML = `
        <figure>
        <img 
            src="${product.imageURL}" 
            alt="${product.productName}" 
            onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Default+Shoe+Image';"
        />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${product.productName}</h2>
                    <p>${product.Description}</p>
                    <div class="card-actions justify-end items-center">
                        <p class="font-semibold text-2xl">${product.price}</p>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
    `;

    container.appendChild(cardDiv);
  });
}

const allBags = document.getElementById("all-bags");

allBags.addEventListener("click", function (e) {
  e.preventDefault();

  fetch("./bag.json")
    .then((res) => res.json())
    .then((data) => displayProductss(data))
    .catch((error) => console.error("Error loading products:", error));
});




const CartBtn = document.querySelectorAll('.add-to-cart');
for(let cart of CartBtn){
    cart.addEventListener('click', increaseCart)
}
function increaseCart(){
    const oldCoin = document.getElementById('coin-amnt').innerText;
    const OldCoinValue = parseInt(oldCoin);
    const neWvalue = OldCoinValue - 20;
    if(neWvalue < 0){
        alert('not enough coin');
        return;
    }
    document.getElementById('coin-amnt').innerText = neWvalue;

}
