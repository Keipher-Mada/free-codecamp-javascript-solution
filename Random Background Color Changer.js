//step1 - just add missing ,
const darkColorsArr = [
  '#2C3E50',
  '#34495E',
  '#2C2C2C',
  '#616A6B',
  '#4A235A',
  '#2F4F4F',
  '#0E4B5A',
  '#36454F',
  '#2C3E50',
  '#800020',
];

//step2 - Math operator need to be capital
//step3 - add Math follor function to round the number
function getRandomIndex() {
  console.log(Math.floor(darkColorsArr.length * Math.random()));
}

//step4 - S in querySelector should be capital
const body = document.querySelector('body');

//step5 - ID selector should be #
const bgHexCodeSpanElement = document.querySelector('#bg-hex-code');

console.log(bgHexCodeSpanElement);

//step6 - getRandomIndex need to have a ()
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
changeBackgroundColor();

//step7 - correct the btn id
const btn = document.querySelector('#btn');
console.log(btn);

//step8 - remove call refrence on changeBackgroundColor
btn.onclick = changeBackgroundColor;
