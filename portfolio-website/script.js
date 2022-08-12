
const input = document.getElementById("searchinput")
const inputForm = document.querySelector(".d-flex")
inputForm.addEventListener("submit",function (event) {
    event.preventDefault()

    location.href= `#${input.value}`
})
