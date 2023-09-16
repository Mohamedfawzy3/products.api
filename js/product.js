xhr.open(
  "GET",
  `https://dummyjson.com/products/${localStorage.getItem("product_id")}`
);
xhr.send("");
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let productAllDetails = JSON.parse(xhr.responseText);
    console.log(productAllDetails);
    let product = document.createElement("div");
    // product.setAttribute("class", "product");
    let image = document.createElement("img");
    image.src = productAllDetails.images[0];
    let title = document.createElement("h4");
    title.innerText = productAllDetails.title;
    let category = document.createElement("h2");
    category.textContent = `${productAllDetails.category}`;
    console.log(title);
    let description = document.createElement("p");
    description.innerText = productAllDetails.description;
    product.appendChild(image);
    product.append(title);
    product.append(category);
    product.append(description);
    let brande = document.createElement("div");
    brande.innerText = productAllDetails.brand;
    product.append(brande);
    let price = document.createElement("div");
    price.innerText = productAllDetails.price;
    product.append(price);
    let descount = document.createElement("div");
    descount.innerText = productAllDetails.discountPercentage;
    product.append(descount);
    let stock = document.createElement("div");
    stock.innerText = productAllDetails.stock;
    product.append(stock);
    let rate = document.createElement("div");
    rate.innerText = productAllDetails.rating;
    product.append(rate);
// this another method under testing to put css style
    cont.appendChild(product);
    for (let i in productAllDetails) {
      if (i === "images" || i === "id" || i === "thumbnail") {
        console.log("iamge");
        continue;
      }
      let element = document.createElement("div");
      element.innerText = `${i}: ${productAllDetails[i]}`;
      document.body.append(element);
    }
  }
};
document.querySelector("button").addEventListener("click", () => {
  window.location.replace("./allproducts.html");
});
