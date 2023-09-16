let products_box = document.querySelector(
    "#products .container .products"
  );
  let cont= document.querySelector(
    ".cont"
  );

  console.log("oooooooooo");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/products/");
  xhr.send("");
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let products = JSON.parse(xhr.responseText).products;
      console.log(products);
      console.log(products[5].images[0]);
      for (let j in products) {
        console.log(`${j} is ${products[j].title}`);
        let product = document.createElement("div");
        product.setAttribute("class", "product");
        let image = document.createElement("img");
        image.src = products[j].images[0];
        let title = document.createElement("h4");
        title.innerText = products[j].title;
        let category = document.createElement("h2");
       category.textContent =`${ products[j].category}`;
        console.log(title);
        let description = document.createElement("p");
        description.innerText = products[j].description;
        product.appendChild(image);
        product.append(title);
        product.append(category);
        product.append(description);
        products_box.appendChild(product);
      }
    }
  };
  let product_id;
  let search_id=document.getElementById("id_search");
search_id.addEventListener("keyup",()=>{
if(search_id.value!=0){
    product_id=search_id.value;
    let peoduct_window= window.location.href="./product.html";
 localStorage.setItem("product_id",search_id.value)


 
}
})