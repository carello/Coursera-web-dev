var target;
var guess_input_color;
var guess_input;
var finished = false;
var guesses = 0;

colors=['black', 'blue', 'brown', 'cyan', 'green', 'magenta', 'orange', 'red', 'yellow']

function do_game() {
  var random_number = Math.random() * 8;
  var random_number_val = Math.floor(random_number);
  target = colors[random_number_val];
  alert(target);

  while (!finished) {
      guess_input_color = prompt("\nI am thinking of one of these colors:\n\n" +
          colors.join(", ") + "\n\nWhat color am I thinking of?");

          guess_input = guess_input_color;
          guesses += 1;
          finished = check_guess();
      }
}

function check_guess() {
  if (colors.indexOf(guess_input) == -1) {
    alert("I don't recognize that color!")
    return false;
  }
  if (guess_input > target) {
    alert("Your input is alphabetically higher than mine!");
    return false;
  }
  if (guess_input < target) {
    alert("Your input is alphabetically lower than mine!");
    return false;
  }
  else if (guess_input == target) {
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=target;
    alert("You are right! " + "You took " + guesses + " guesses!");
    return true;
  }
}
