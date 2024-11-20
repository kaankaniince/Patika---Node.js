const readline = require("readline");
const { circleArea, circleCircumference } = require("./circle");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Yarıçapı girin: ", (r) => {
  r = parseFloat(r);

  if (!isNaN(r) && r > 0) {
    console.log(`Daire Alanı: ${circleArea(r)}`);
    console.log(`Daire Çevresi: ${circleCircumference(r)}`);
  } else {
    console.log("Geçerli bir pozitif sayı girin!");
  }

  rl.close();
});
