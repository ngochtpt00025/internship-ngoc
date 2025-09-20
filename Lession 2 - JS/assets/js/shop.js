const listProducts = [
  {
    name: "Syltherine",
    subDescription: "Stylish caf chair",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "./assets/images/products/Syltherine.png",
    badge: "-30%",
  },
  {
    name: "Leviosa",
    subDescription: "Stylish caf chair",
    currentPrice: "Rp 2.500.000",
    originalPrice: null,
    image: "./assets/images/products/Leviosa.png",
    badge: null,
  },
  {
    name: "Lolito",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 7.000.000",
    originalPrice: "Rp 8.000.000",
    image: "./assets/images/products/Lolito.png",
    badge: "-50%",
  },
  {
    name: "Repira",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 500.000",
    originalPrice: null,
    image: "./assets/images/products/Repira.png",
    badge: "New",
  },
  {
    name: "Grifo",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 500.000",
    originalPrice: null,
    image: "./assets/images/products/Grifo.png",
    badge: "New",
  },
  {
    name: "Muggo",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 150.000",
    originalPrice: null,
    image: "./assets/images/products/Muggo.png",
    badge: "New",
  },
  {
    name: "Pingky",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "./assets/images/products/Pingky.png",
    badge: "New",
  },
  {
    name: "Potty",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 500.000",
    originalPrice: "Rp 1.000.000",
    image: "./assets/images/products/Potty.png",
    badge: "New",
  },
  {
    name: "Syltherine",
    subDescription: "Stylish caf chair",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "./assets/images/products/Syltherine.png",
    badge: "-30%",
  },
  {
    name: "Leviosa",
    subDescription: "Stylish caf chair",
    currentPrice: "Rp 2.500.000",
    originalPrice: null,
    image: "./assets/images/products/Leviosa.png",
    badge: null,
  },
  {
    name: "Lolito",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 7.000.000",
    originalPrice: "Rp 8.000.000",
    image: "./assets/images/products/Lolito.png",
    badge: "-50%",
  },
  {
    name: "Repira",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 500.000",
    originalPrice: null,
    image: "./assets/images/products/Repira.png",
    badge: "New",
  },
  {
    name: "Grifo",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 500.000",
    originalPrice: null,
    image: "./assets/images/products/Grifo.png",
    badge: "New",
  },
  {
    name: "Muggo",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 150.000",
    originalPrice: null,
    image: "./assets/images/products/Muggo.png",
    badge: "New",
  },
  {
    name: "Pingky",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "./assets/images/products/Pingky.png",
    badge: "New",
  },
  {
    name: "Potty",
    subDescription: "Luxury big sofa",
    currentPrice: "Rp 500.000",
    originalPrice: "Rp 1.000.000",
    image: "./assets/images/products/Potty.png",
    badge: "New",
  },
];

const listProductsUI = document.querySelector(".list-products");

let productCount = 0;
let sortBy = "";

function loadProducts(productCount, sortBy) {
  let listProductsTerm = listProducts.slice(0, productCount);

  if (sortBy === "price-asc") {
    listProductsTerm.sort(
      (a, b) =>
        parseFloat(a.currentPrice.replace(/[^\d]/g, "")) -
        parseFloat(b.currentPrice.replace(/[^\d]/g, ""))
    );
  } else if (sortBy === "price-desc") {
    listProductsTerm.sort(
      (a, b) =>
        parseFloat(b.currentPrice.replace(/[^\d]/g, "")) -
        parseFloat(a.currentPrice.replace(/[^\d]/g, ""))
    );
  } else if (sortBy === "name-asc") {
    listProductsTerm.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  } else if (sortBy === "name-desc") {
    listProductsTerm.sort((a, b) =>
      b.name.toLowerCase().localeCompare(a.name.toLowerCase())
    );
  }
  listProductsUI.innerHTML = "";
  listProductsTerm.forEach((product, index) => {
    listProductsUI.innerHTML += `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image}" alt="product-image">
                </div>
                <div class="product-details">
                    <span class="product-name">${product.name}</span>
                    <p class="product-sub-description">${
                      product.subDescription
                    }</p>
                    <div class="product-price">
                        <ins>${product.currentPrice}</ins>
                        <del>${
                          product.originalPrice !== null
                            ? product.originalPrice
                            : ""
                        }</del>
                    </div>
                </div>
                <div class="product-hover">
                    <button class="add-to-cart" onclick="addToCart(${index})">Add to Cart</button>
                    <div class="product-hover-action">
                        <button>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                                    fill="white" />
                            </svg>
                            Share
                        </button>
                        <button>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z"
                                    fill="white" />
                            </svg>
                            Compare
                        </button>
                        <button>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                                    stroke="white" stroke-width="1.8" />
                            </svg>
                            Like
                        </button>
                    </div>
                </div>
                <div class="product-badge product-badge-${
                  product.badge === "New" ? "new" : "sale"
                }" ${product.badge === null ? 'style="display: none;"' : ""}>
                    <span>${product.badge !== null ? product.badge : ""}</span>
                </div>
            </div>
        `;
  });

  document.querySelector(
    ".shrus"
  ).textContent = `Showing 1 - ${listProductsTerm.length} of ${listProducts.length} results`;
}

let show_number = document.querySelector(".show-number");
let short_by = document.querySelector(".short-by");

show_number.addEventListener("change", () => {
  loadProducts(show_number.value, short_by.value);
});
short_by.addEventListener("change", () => {
  loadProducts(show_number.value, short_by.value);
});

loadProducts(16, "");

export const getCart = () => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  return cart;
};
import { loadCart } from "./off-canvas.js";
function addToCart(index) {
  const cart = getCart();
  const item = listProducts.find((p, i) => index === i);

  console.log(cart);

  let findItem = cart.find((c) => c.id === index);

  if (findItem) {
    console.log(findItem);
    findItem.quantity += 1;
    cart[findItem] = findItem;
  } else {
    cart.push({
      id: index,
      name: item.name,
      image: item.image,
      quantity: 1,
      price: item.currentPrice,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  const offcanvas = document.getElementById("offcanvasRight");
  offcanvas.classList.add("show");
  backdrop.classList.remove("hidden");
  backdrop.classList.add("show");
  document.body.classList.add("no-scroll");
  loadCart();
}

export function removeFromCart(id) {
  const cart = getCart();
  const item = cart.findIndex((c) => c.id === id);
  if (item !== -1) {
    cart.splice(item, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
