let productsMain = async (url) => {
  let showMenu = "";
  let res = await fetch(url);
  let data = await res.json();

  data.forEach((element) => {
    showMenu += `
      <div class="item">
        <div class="cursor">
          <img src="${element.image}" class="hover" alt=""/>
          <p class="font-main">${element.p}</p>
          <h2 class="p font-main">${element.price}</h2>
        </div>
      </div>
    `;
  });
  document.querySelector("div#root").innerHTML = showMenu;
};


document.addEventListener("DOMContentLoaded", () => productsMain("http://localhost:3000/Products"));


document.getElementById("btn-1").addEventListener("click", () => {
  productsMain("http://localhost:3000/Products");
});

document.getElementById("btn-2").addEventListener("click", () => {
  productsMain("http://localhost:3000/ProductsPage2");
});

document.getElementById("btn-3").addEventListener("click", () => {
  productsMain("http://localhost:3000/ProductsPage3");
});

