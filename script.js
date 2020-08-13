//select HTML elements
const selectImg = document.querySelector("img");
const selectPadding = document.querySelector("#padding");
const selectBlur = document.querySelector("#blur");
const selectBaseColor = document.querySelector("#base-color");
const selectColor = document.querySelector(".color");

//setInterval executes the function and assigns the value of selectPadding.value to the padding of selectImg by a certain amount of pixels.
setInterval(() => selectImg.style.padding = selectPadding.value + "px");

//select the image and assign the blur value in pixels based on the input range.
setInterval(() => selectImg.style.filter = `blur(${selectBlur.value}px)`);

//listens for any input from the color changer and then assigns selecBaseColor.value.
document.querySelector("#base-color").addEventListener("input", () => {
  selectColor.style.color = selectBaseColor.value;
  selectImg.style.background = selectBaseColor.value;
});