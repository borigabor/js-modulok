// Module Pattern
/*
const UI = (() => {

    // this is basically our configuration,
    // the part that might have to change when the HTML changes:
    // gathering the selectors for the elements we will be working with
    const productImageSelector = ".js-product-image";
    const productNameSelector = ".js-product-name";
    const productCategorySelector = ".js-product-category";
    const productDescriptionSelector = ".js-product-description";
    const productPriceSelector = ".js-product-price";
  
    // using the selectors above, we store the elements in private variables
    const productImageElement = document.querySelector(productImageSelector);
    const productNameElement = document.querySelector(productNameSelector);
    const productCategoryElement = document.querySelector(productCategorySelector);
    const productDescriptionElement = document.querySelector(productDescriptionSelector);
    const productPriceElement = document.querySelector(productPriceSelector);
  
    // this is the public API for our UI module:
    // methods to change the UI by only changing the
    // content of the privately stored elements
    return {
      setProductImage: (src) => {
        productImageElement.src = src;
      },
      setProductName: (name) => {
        productNameElement.textContent = name;
      },
      setProductCategory: (category) => {
        productCategoryElement.textContent = category;
      },
      setProductDescription: (description) => {
        productDescriptionElement.textContent = description;
      },
      setProductPrice: (price) => {
        productPriceElement.textContent = price;
      },
    };
  })();
  
  // Product module for gathering product related info
  const Product = (() => {
    const name = "DisCatcher Target";
    const category = " Discgolf";
    const description =
      "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
    const imageSrc = "images/discatcher.jpg";
    const price = 399;
  
    // public API for Product module for getting product info
    return {
      getName: () => {
        return name;
      },
      getCategory: () => {
        return category;
      },
      getDescription: () => {
        return `${name} is ${description}.`;
      },
      getImage: () => {
        return imageSrc;
      },
      getPrice: () => {
        return `€${price}`;
      }
    }
  })();
  
  const productImage = Product.getImage();
  const productName = Product.getName();
  const productCategory = Product.getCategory();
  const productDescription = Product.getDescription();
  const productPrice = Product.getPrice();
  
  UI.setProductImage(productImage);
  UI.setProductName(productName);
  UI.setProductCategory(productCategory);
  UI.setProductDescription(productDescription);
  UI.setProductPrice(productPrice);
  */

  // Construcrot Pattern

const UI = function() {

    this.productImageSelector = ".js-product-image";
    this.productNameSelector = ".js-product-name";
    this.productCategorySelector = ".js-product-category";
    this.productDescriptionSelector = ".js-product-description";
    this.productPriceSelector = ".js-product-price";

    this.productImageElement = document.querySelector(this.productImageSelector);
    this.productNameElement = document.querySelector(this.productNameSelector);
    this.productCategoryElement = document.querySelector(this.productCategorySelector);
    this.productDescriptionElement = document.querySelector(this.productDescriptionSelector);
    this.productPriceElement = document.querySelector(this.productPriceSelector);

};

UI.prototype.setImage = function(src) {
    this.productImageElement.src = src;
};

UI.prototype.setName = function(name) {
    this.productNameElement.textContent = name;
};

UI.prototype.setCategory = function(category) {
    this.productCategoryElement.textContent = category;
};

UI.prototype.setDescription = function(description) {
    this.productDescriptionElement.textContent = description;
};

UI.prototype.setPrice = function(price) {
    this.productPriceElement.textContent = price;
};

const Product = function() {

    this.name = "DisCatcher Target";
    this.category = " Discgolf";
    this.description =
      "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
    this.imageSrc = "images/discatcher.jpg";
    this.price = 399;

};

Product.prototype.getImage = function() {
    return this.imageSrc;
};

Product.prototype.getName = function() {
    return this.name;
};

Product.prototype.getCategory = function() {
    return this.category;
};

Product.prototype.getDescription = function() {
    return `${this.name} is ${this.description}`;
};

Product.prototype.getPrice = function() {
    return `€${this.price}`;
};

const DiscgolfProduct = new Product();

const productImage = DiscgolfProduct.getImage();
const productName = DiscgolfProduct.getName();
const productCategory = DiscgolfProduct.getCategory();
const productDescription = DiscgolfProduct.getDescription();
const productPrice = DiscgolfProduct.getPrice();

const ShopUI = new UI();

ShopUI.setImage(productImage);
ShopUI.setName(productName);
ShopUI.setCategory(productCategory);
ShopUI.setDescription(productDescription);
ShopUI.setPrice(productPrice);