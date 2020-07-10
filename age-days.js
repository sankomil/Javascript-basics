// Turn age into days

function ageday() {
  var birthyear = prompt("Which year were you born in?");
  var currentage = (2020 - birthyear) * 365;
  var h1 = document.createElement("h1");
  var answer = document.createTextNode("You are " + currentage + " days old");
  h1.setAttribute("id", "currentage");
  h1.appendChild(answer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("currentage").remove();
}

// Generate image

function gen_image() {
  var image = document.createElement("img");
  var div = document.getElementById("add-image");
  image.src = "https://picsum.photos/150/150";
  div.appendChild(image);
}

//Rock paper scissors

function rpsgame(choice) {
  var human, bot;
  human = choice.id;
  bot = botchoice();
  results = decidewinner(human, bot);
  message = finalmessage(results);
  console.log(message);
  rpsFrontend(choice.id, bot, message);
}

function botchoice() {
  var choose = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][choose];
}

function decidewinner(human, bot) {
  var rpsdatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { scissors: 0, rock: 1, paper: 0.5 },
    scissors: { scissors: 0.5, rock: 0, paper: 1 },
  };
  var hscore = rpsdatabase[human][bot];
  var bscore = rpsdatabase[bot][human];
  return [hscore, bscore];
}

function finalmessage([hscore, bscore]) {
  if (hscore === 0) {
    return { message: "You lost", color: "red" };
  } else if (hscore === 0.5) {
    return { message: "You tied", color: "yellow" };
  } else if (hscore === 1) {
    return { message: "You won", color: "green" };
  }
}

function rpsFrontend(choice, bot, message) {
  var imagedatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humadiv = document.createElement("div");
  var botdiv = document.createElement("div");
  var messagediv = document.createElement("div");

  humadiv.innerHTML =
    "<img src='" +
    imagedatabase[choice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
  botdiv.innerHTML =
    "<img src='" +
    imagedatabase[bot] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
  messagediv.innerHTML =
    "<h1 style='color: " +
    message["color"] +
    "; font-size:60px; padding:30;'>" +
    message["message"] +
    "</h1>";
  document.getElementById("rps").appendChild(humadiv);
  document.getElementById("rps").appendChild(messagediv);
  document.getElementById("rps").appendChild(botdiv);
}

// Change color of buttons

var allbuttons = document.getElementsByTagName("button");
var copybuttons = [];
for (let x = 0; x < allbuttons.length; x++) {
  copybuttons.push(allbuttons[x].classList[1]);
}

function colorchange(color) {
  if (color.value === "red") {
    buttonred();
  } else if (color.value === "green") {
    buttongreen();
  } else if (color.value === "reset") {
    buttonreset();
  } else if (color.value === "random") {
    buttonrandom();
  }
}

function buttonred() {
  for (let x = 0; x < allbuttons.length; x++) {
    allbuttons[x].classList.remove(allbuttons[x].classList[1]);
    allbuttons[x].classList.add("btn-danger");
  }
}

function buttongreen() {
  for (let x = 0; x < allbuttons.length; x++) {
    allbuttons[x].classList.remove(allbuttons[x].classList[1]);
    allbuttons[x].classList.add("btn-success");
  }
}

function buttonreset() {
  for (let x = 0; x < allbuttons.length; x++) {
    allbuttons[x].classList.remove(allbuttons[x].classList[1]);
    allbuttons[x].classList.add(copybuttons[x]);
  }
}

function buttonrandom() {
  let colordatabase = [
    "btn-primary",
    "btn-success",
    "btn-warning",
    "btn-danger",
  ];

  for (let x = 0; x < allbuttons.length; x++) {
    var choice = colordatabase[Math.floor(Math.random() * 4)];
    allbuttons[x].classList.remove(allbuttons[x].classList[1]);
    allbuttons[x].classList.add(choice);
  }
}
