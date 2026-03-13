let confirmButton = document.querySelector(".confirm-btn")
confirmButton.addEventListener("click", () => {
    alert("Delivery Confirmado!")
})

const items = document.querySelectorAll(".item")
items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("selected")
    })

})

document.querySelector(".icon").addEventListener("mouseover", () => {
    alert("Fire Safety Information");
});