let menuMain = async (url) => {
  let showMenuMain = "";
  let res = await fetch(url);
  let data = await res.json();

  data.forEach((element) => {
    showMenuMain += `
        <div class="text-center">
        <div class="w-full flex justify-center">
            <img src="${element.image}" class="bg-none duration-300 hover:scale-110"/>
        </div>
            <h3>${element.title}</h3>
            <h3>${element.mainTitleShot}</h3>
            <div class="flex justify-evenly">
                <div>
                    <p>${element.singleShot}</p>
                    <p>${element.priceSingle}</p>
                </div>
                <div>
                    <p>${element.doubleShot}</p>
                    <p>${element.priceDouble}</p>               
                </div>
            </div>
            <p>${element.src}</p>
        </div>
        `;
  });
  document.getElementById("root").innerHTML = showMenuMain;
};

document.addEventListener("DOMContentLoaded", () =>
  menuMain("http://localhost:3000/menuMainOfHot")
);

document.getElementById("btm-1").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHot");
});
document.getElementById("btm-2").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage1");
});
document.getElementById("btm-3").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage2");
});
document.getElementById("btm-4").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage3");
});
document.getElementById("btm-5").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage4");
});
document.getElementById("btm-6").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage5");
});
document.getElementById("btm-7").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage6");
});
document.getElementById("btm-8").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage7");
});
document.getElementById("btm-9").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage8");
});
document.getElementById("btm-10").addEventListener("click", () => {
  menuMain("http://localhost:3000/menuMainOfHotPage9");
});
