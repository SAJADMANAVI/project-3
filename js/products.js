// let productsMain = document.querySelector(".btn-1");
// let showMenu = "";
// let fetchProductsMain = () => {
//   axios
//     .get("http://localhost:3000/Products")
//     .then((res) => {
//       res.data.forEach((element) => {
//         showMenu += `
//         <div class="item">
//         <div>
//           <img src="${element.image}" alt""/>
//           <p>${element.p}</p>
//           <h2>${element.price}</h2>
//         </div>
//         </div>
//             `;
//       });
//       document.getElementById("root").innerHTML = showMenu;
//     })
//     .catch((err) => console.log("err"));
// };

// productsMain.addEventListener("DOMContentLoaded", fetchProductsMain);

// CLASSES START
let productsMain = async () => {
  let showMenu = "";
  let res = await fetch("http://localhost:3000/Products");
  let data = await res.json();

  data.forEach((element) => {
    showMenu += `
    <div class="item">
    <div class="cursor">
    <img src="${element.image}" class="hover" alt""/>
    <p class="font-main">${element.p}</p>
    <h2 class="p font-main">${element.price}</h2>
    </div>
    </div>
    `;
  });
  document.querySelector("div#root").innerHTML = showMenu;
};

document.addEventListener("DOMContentLoaded", productsMain);
// CLASSES END
