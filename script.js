const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")
const submit = document.getElementById("submit")

const result = document.getElementById("result")
const numbers = document.querySelectorAll(".numbers")

submit.addEventListener("click", () => {
    container.style.display = "none"
    container2.style.display = "flex"
})

numbers.forEach((numbers) => {
numbers.addEventListener("click", () => {
    result.innerHTML = numbers.innerHTML
})
})