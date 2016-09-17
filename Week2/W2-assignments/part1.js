var target;
var guess_input_color;
var guess_input;
var finished = false;
var guesses = 0;

colors=['black', 'blue', 'brown', 'cyan', 'green', 'magenta', 'orange', 'red', 'yellow'];

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
          if (guess_input === target) {
            finished = true;
          }
      }
}
