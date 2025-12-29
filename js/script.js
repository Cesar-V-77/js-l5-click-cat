var button = document.querySelector(".show-cat");
// console.log(button.outerHTML);
var cat = document.querySelector(".cat");
// console.log(cat.outerHTML);

//Clicking on the button toggles the cat image and descriptive text
button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    // console.log("Yes, the cat is shown.");
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    // console.log("No, the cat is hidden.");
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
  }
});
