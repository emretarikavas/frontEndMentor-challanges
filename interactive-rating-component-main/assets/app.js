const numbers = document.querySelectorAll("#number");
const submit = document.querySelector("#submit");
const numberValue = document.querySelector("#number-value");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");

submit.addEventListener("click", () => {
    rating.style.display = "none";
    thanks.classList.remove("none");
});

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        numberValue.innerHTML = number.innerHTML;
    });
});
