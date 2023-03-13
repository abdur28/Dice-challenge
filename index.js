if (window.performance) {
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  var imgs = document.querySelectorAll("img");
  var score = []
  for (var i = 0; i < imgs.length; i++) {
    img = imgs[i];
    var randonValue = Math.floor(Math.random()*6) + 1;
    score.push(randonValue)
    var source = "images/dice" + randonValue + ".png";
    img.setAttribute("src", source);
  };
  if (score[0] > score [1]) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
  } else if (score[0] < score [1]) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
  } else {
    document.querySelector("h1").innerHTML = "Draw"
  }

} else {
  console.info( "This page is not reloaded");
} 
