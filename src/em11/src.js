const btn = document.querySelector("#btn");

btn.addEventListener("click", async function () {
    const module = await import("./module.js");
    module.hello();
});