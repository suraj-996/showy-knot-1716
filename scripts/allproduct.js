let allProducts = JSON.parse(localStorage.getItem("discription")) || [];


let deskData = [
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/308082/xlarge_3.jpg",
        name : "Izard Mug",
        price : "$6"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/324904/xlarge_1.jpg",
        name : "Classic Flex Notebook",
        price : "$8.25"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/189297/xlarge_white.jpg",
        name : "Get Clicker Pen",
        price : "$2"
    },
];
let container = document.getElementById("desk_product");

deskData.map(element => {
    let linkData = document.createElement("a");
    linkData.setAttribute("href", "cart.html");
    linkData.setAttribute("id", "cartDataLink")

    let productData = document.createElement("div");
    productData.setAttribute("id", "product_data");

    let productImg = document.createElement("div");
    productImg.setAttribute("id", "product_image");

    let image = document.createElement("img");
    image.src = element.image;

    productImg.append(image);

    let productInfo = document.createElement("div");
    productInfo.setAttribute("id", "product_info");

    let name = document.createElement("p");
    name.setAttribute("class", "product_name");
    name.innerText = element.name;

    let price = document.createElement("h2");
    price.setAttribute("class", "product_price");
    price.innerText = element.price;

    productInfo.append(name, price);

    productData.append(productImg, productInfo);
    linkData.append(productData)
    container.append(linkData)
});


let onTheGoData = [
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/185426/xlarge_Umbrella.jpg",
        name : "Crest Umbrella",
        price : "$40"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/189304/xlarge_Dopp_Kit.jpg",
        name : "Drop Kit",
        price : "$45"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/189291/xlarge_Tag2.jpg",
        name : "Lusury Leather Tag",
        price : "$20"
    }
]

let container2 = document.getElementById("on_the_go_product");

onTheGoData.map(element => {
    let linkData = document.createElement("a");
    linkData.setAttribute("href", "cart.html");
    linkData.setAttribute("id", "cartDataLink")

    let productData = document.createElement("div");
    productData.setAttribute("id", "product_data");

    let productImg = document.createElement("div");
    productImg.setAttribute("id", "product_image");

    let image = document.createElement("img");
    image.src = element.image;

    productImg.append(image);

    let productInfo = document.createElement("div");
    productInfo.setAttribute("id", "product_info");

    let name = document.createElement("p");
    name.setAttribute("class", "product_name");
    name.innerText = element.name;

    let price = document.createElement("h2");
    price.setAttribute("class", "product_price");
    price.innerText = element.price;

    productInfo.append(name, price);

    productData.append(productImg, productInfo);
    linkData.append(productData)
    container2.append(linkData)
});


let wearablesData = [
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/415158/xlarge_1.jpg",
        name : "Plant love, grow pride t-shirt",
        price : "$25"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/189300/xlarge_Ankle_Sock_C.jpg",
        name : "Ankle Socks - Stripes",
        price : "Out of Stock"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/192363/xlarge_Ankle_Sock_D.jpg",
        name : "Ankle Socks - Argyle",
        price : "Out of Stock"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/189301/xlarge_Woven_Sock_A.jpg",
        name : "Dress Socks - Stripes",
        price : "Out of Stock"
    },
    {
        image : "https://images.brilliantmade.com/uploads/variant_photo/photo/192364/xlarge_Woven_Sock_B.jpg",
        name : "Dress Socks - Bars",
        price : "Out of Stock"
    }
]

let container3 = document.getElementById("wearables_product");

wearablesData.map(element => {
    let linkData = document.createElement("a");
    // linkData.setAttribute("href", "cart.html");
    linkData.setAttribute("id", "cartDataLink");
    linkData.addEventListener("click", function() {
        disc(element);
    })

    let productData = document.createElement("div");
    productData.setAttribute("id", "product_data");

    let productImg = document.createElement("div");
    productImg.setAttribute("id", "product_image");

    let image = document.createElement("img");
    image.src = element.image;

    productImg.append(image);

    let productInfo = document.createElement("div");
    productInfo.setAttribute("id", "product_info");

    let name = document.createElement("p");
    name.setAttribute("class", "product_name");
    name.innerText = element.name;

    let price = document.createElement("h2");
    price.setAttribute("class", "product_price");
    price.innerText = element.price;

    productInfo.append(name, price);

    productData.append(productImg, productInfo);
    linkData.append(productData)
    container3.append(linkData)
});


function disc(el) {
    console.log(allProducts);
    allProducts.push(el);
    localStorage.setItem("discriptionn", JSON.stringify(allProducts));
    window.location.href = "dicription.html";
}