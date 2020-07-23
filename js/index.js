class ProductList {
  constructor() {
    this._list = [];
  }
  findIndexById(productId) {
    return this._list.findIndex((item) => item.id === productId);
  }
  push(product) {
    this._list.push(product);
  }
}

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
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
    const title = item.querySelector(".product-box__title").innerHTML;
    const price = item.querySelector("p").innerHTML;
    const category = item.querySelector(".product-box__btn").dataset
      .productCategory;
    const product = new Product(index, title, price, category);
    productsList.push(product);
  });

productContainer.addEventListener("click", function (event) {
  let index = productsList.findIndexById(+event.target.dataset.productId);
  // console.log(productsList._list[index]);
});

console.log(productsList);
console.log(productContainer);
console.log(cartElement);
