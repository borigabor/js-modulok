class UI {
    constructor(node) {

        this.node = node;

        this.productImageSelector = ".js-product-image";
        this.productNameSelector = ".js-product-name";
        this.productCategorySelector = ".js-product-category";
        this.productDescriptionSelector = ".js-product-description";
        this.productPriceSelector = ".js-product-price";

        this.productImageElement = this.node.querySelector(this.productImageSelector);
        this.productNameElement = this.node.querySelector(this.productNameSelector);
        this.productCategoryElement = this.node.querySelector(this.productCategorySelector);
        this.productDescriptionElement = this.node.querySelector(this.productDescriptionSelector);
        this.productPriceElement = this.node.querySelector(this.productPriceSelector);

    }

    setProductImage(src) {
        this.productImageElement.src = src;
    };

    setProdutcName(name) {
        this.productNameElement.textContent = name;
    };

    setProductCategory(category) {
        this.productCategoryElement.textContent = category;
    };

    setProductDescription(description) {
        this.productDescriptionElement.textContent = description;
    };

    setProductPrice(price) {
        this.productPriceElement.textContent = price;
    };

    appendTo(listElement) {
        listElement.appendChild(this.node);
    }
};

class Product {
    constructor(productInfo) {
        this.imageSrc = productInfo.imageSrc;
        this.name = productInfo.name;
        this.category = productInfo.category;
        this.description = productInfo.description;
        this.price = productInfo.price;
    }

    getImageProduct() {
        return this.imageSrc;
    };

    getNameProduct() {
        return this.name;
    };

    getCategory() {
        return this.category;
    };

    getDescription() {
        return `${this.name} is ${this.description}`;
    };

    getPrice() {
        return this.price;
    }
};

const DiscgolfProduct = new Product({
    name: "DisCatcher Target",
    category: " Discgolf",
    description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
    imageSrc: "images/discatcher.jpg",
    price: 399
});

const productImage = DiscgolfProduct.getImageProduct();
const produtcName = DiscgolfProduct.getNameProduct();
const productCategory = DiscgolfProduct.getCategory();
const productDescription = DiscgolfProduct.getDescription();
const productPrice = DiscgolfProduct.getPrice();

const UITemplate = document.querySelector(".js-product");
const ShopUI = new UI(UITemplate);

ShopUI.setProductImage(productImage);
ShopUI.setProdutcName(produtcName);
ShopUI.setProductCategory(productCategory);
ShopUI.setProductDescription(productDescription);
ShopUI.setProductPrice(productPrice);

const DiscgolfProduct2 = new Product({
    name: "Hero SuperAero",
    category: " Discgolf",
    description: "a disc that floats like a butterfly, holds up like a SuperHero",
    imageSrc: "images/dog.jpg",
    price: 14
});

const productImage2 = DiscgolfProduct2.getImageProduct();
const produtcName2 = DiscgolfProduct2.getNameProduct();
const productCategory2 = DiscgolfProduct2.getCategory();
const productDescription2 = DiscgolfProduct2.getDescription();
const productPrice2 = DiscgolfProduct2.getPrice();

const UIElement2 = UITemplate.cloneNode(true);
const ShopUI2 = new UI(UIElement2);


ShopUI2.setProductImage(productImage2);
ShopUI2.setProdutcName(produtcName2);
ShopUI2.setProductCategory(productCategory2);
ShopUI2.setProductDescription(productDescription2);
ShopUI2.setProductPrice(productPrice2);

const ProductListElement = document.querySelector(".js-product-list");
ShopUI2.appendTo(ProductListElement);