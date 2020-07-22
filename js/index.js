class ProductList {
  constructor() {
    this._list = [];
  }
  find(productId, name = null, price = null) {
    this._list.find((item) => {
      for (const key in item) {
      }
      if (item.id === productId) {
        console.log(item);
        return item;
      }
      return -1;
    });
  }
  sort() {}
  push(product) {
    this._list.push(product);
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(id, productId, count) {
    this.id = id;
    this.count = count;
    this.productId = productId;
  }
}

const user = { userId: null, firstName: null, email: null };
const cart = { orders: null, userId: null };
const productsList = new ProductList();

function getInputValue(selector, node = null) {
  return node !== null
    ? node.querySelector(selector)
    : document.querySelector(selector);
}

const cartElement = document.querySelector(".top-cart-info__item");
const productContainer = document.querySelector(".products-box");

productContainer
  .querySelectorAll(".product-box__item")
  .forEach((item, index) => {
    const title = item.querySelector(".product-box__title");
    const price = item.querySelector("p");
    const product = new Product(index, title, price);
    productsList.push(product);
  });

productContainer.addEventListener("click", function (event) {
  console.log("1");
  productsList.find(event.target.dataset.productId);
});

console.log(productsList);
console.log(productContainer);
console.log(cartElement);
