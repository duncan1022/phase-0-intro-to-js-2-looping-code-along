const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
  let gift = [];
  event = "surprise";
  for (let i = 0; i < names.length; i++) {
    gift[i] = 'Thank you, ' + names[i] + ', for the wonderful ' + event + ' gift!';
  }
  return gift;
}

let number = 10;
function countDown (number) {
  while (number >= 0) {
    console.log(number--);
  }
}
