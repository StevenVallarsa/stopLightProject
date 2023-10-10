const turnRight = document.getElementById("turnRight");
const turnLeft = document.getElementById("turnLeft");
const stop = document.getElementById("stop");
const goStraight = document.getElementById("goStraight");
const light = document.getElementById("light");
const response = document.getElementById("response");
let lightColor;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};

const setUp = () => {
  console.log("HERE");
  switch (getRandomNumber()) {
    case 0:
      lightColor = "RED";
      break;
    case 1:
      lightColor = "Green";
      break;
    case 2:
      lightColor = "Turn Right";
      break;
    case 3:
      lightColor = "Turn Left";
      break;
    default:
      lightColor = "OUT OF ORDER";
  }
  light.textContent = lightColor;
  if (lightColor === "RED") {
    light.style.color = "red";
  } else {
    light.style.color = "green";
  }
};

const checkMatch = (lightColor, click) => {
  if (lightColor === click) {
    response.textContent = "Good job!";
    light.textContent = "";
    setUp();
  } else {
    response.textContent = "Failed! You lose. Game over!";
  }
};

turnRight.addEventListener("click", () => {
  checkMatch(lightColor, "Turn Right");
});

turnLeft.addEventListener("click", () => {
  checkMatch(lightColor, "Turn Left");
});

stop.addEventListener("click", () => {
  checkMatch(lightColor, "RED");
});

goStraight.addEventListener("click", () => {
  checkMatch(lightColor, "Green");
});

setUp();
