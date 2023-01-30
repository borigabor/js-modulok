(function() {

    const DiscgolfProduct = new Product({
        name: "DisCatcher Target",
        category: " Discgolf",
        description: "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
        imageSrc: "images/discatcher.jpg",
        price: 399
    });

    const productInfo = DiscgolfProduct.getInfo();

    const UITemplate = document.querySelector(".js-product");
    const ProductListElement = document.querySelector(".js-product-list");
    const ShopUI = new ProductUI(UITemplate, ProductListElement);

    ShopUI.setUp(productInfo);

    const DiscgolfProduct2 = new Product({
        name: "Hero SuperAero",
        category: " Discgolf",
        description: "a disc that floats like a butterfly, holds up like a SuperHero",
        imageSrc: "images/dog.jpg",
        price: 14
    });

    const productInfo2 = DiscgolfProduct2.getInfo();

    const ShopUI2 = new ProductUI(UITemplate, ProductListElement);
    ShopUI2.setUp(productInfo2);

    UITemplate.remove();

    const cartContainer = document.querySelector(".js-cart");
const cartUI = new CartUI(cartContainer);
const cart = new Cart();

})();