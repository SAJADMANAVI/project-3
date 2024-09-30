let branches = async (url) => {
  let showBranches = "";
  let res = await fetch(url);
  let data = await res.json(url);

  data.forEach((element) => {
    showBranches += `
    <div class="flex flex-col justify-center items-center">
    <img src="${element.image}" />
    <p class="paragraph font-main">${element.paragraph}</p>
    </div>
    `;
  });
  document.getElementById("branches").innerHTML = showBranches
};
document.addEventListener("DOMContentLoaded", () => branches("http://localhost:3000/branches"));
