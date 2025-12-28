var button = document.querySelector(".show-cat");
// console.log(button.outerHTML);
var cat = document.querySelector(".cat");
// console.log(cat.outerHTML);

//Clicking on the button reveals a cat image, by adding the ".cat" class with an opacity style of 1.
button.addEventListener("click", function () {
  button.innerText = "Meow!";
  cat.classList.add("show");
});
