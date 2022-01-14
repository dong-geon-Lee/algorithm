function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "protein Shake"];
  return items[Math.floor(Math.random() * items.length - 1)];
}

function wakeUp() {
  takeShower();
  let resultMenu = eatBreakfast();
  console.log(`Ok!, first eating ${resultMenu} and ready to go to work!`);
}

wakeUp();
