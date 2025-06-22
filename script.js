// Achievements
var SIMPLE_FUN = false;
var MORE_INTO_IT = false;
var THE_BETTER_END = false;
var THE_DEEP_END = false;
var GO_OUTSIDE_AND_TOUCH_SOME_GRASS = false
// Game start
let a = confirm("Ya got lost again? \nok = yes \ncancel = no");

if (a) {
  alert("Allow me to redirect you.");
  window.open('https://www.youtube.com/watch?v=y1fB7ztc1dQ', '_blank');
} else {
  alert("That is good, yet again.");

  let b = confirm("Now, tell me honestly...\nWould you rather unravel a secret or just continue this delightful confusion?\nok = secret \ncancel = continue");

  if (b) {
    alert("Ah, the curious kind. I like that.");
    alert("But secrets have a way of biting back. Are you sure?");
    let secretConfirm = confirm("Last chance. Do you truly seek the truth?");

    if (secretConfirm) {
      alert("Very well. The truth is...");
      alert("You’ve always had the power. The question is... what will you do with it?");
      MORE_INTO_IT = true;
    } else {
      alert("Wise choice. Some doors are best left unopened.");
    }
  } else {
    alert("No shame in that. Some chaos is meant to be embraced, not explained.");
  }

  alert("From now on\nok = yes \ncancel = no");

  let c = confirm("Now wasn't that fun?");
  if (c) {
    alert("Glad you can agree with me.");
    alert("You won...\nCongrats, you got your first achievement!\nSIMPLE FUN");
    SIMPLE_FUN = true;

    let don = confirm("Too simple though?");
    if (don) {
      alert("Fair enough. Try harder for the next one.");
    }
  } else {
    alert("Guess I’ll have to try harder to impress you, hm?");
    let f = confirm("Are you sure?");
    if (f) {
      for (let i = 0; i < 3; i++) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      }
    } else {
      let j = confirm("Impressed now?");
      if (j) {
        alert("That's what I thought.");
var THE_DEEP_END = true

      } else {

      }
    }
  }
}

// === Show achievements at end ===
let earned = [];
if (SIMPLE_FUN) earned.push("SIMPLE FUN");
if (MORE_INTO_IT) earned.push("MORE INTO IT");
if (THE_BETTER_END) earned.push("THE BETTER END");
if (THE_DEEP_END) earned.push("THE DEEP END");
if (GO_OUTSIDE_AND_TOUCH_SOME_GRASS) earned.push("GO OUTSIDE AND TOUCH SOME GRASS");


if (earned.length > 0) {
  alert("Achievements earned:\n" + earned.join("\n"));
          window.close();
} else {
  alert("END GAME \nNo achievements earned. \nIt even takes some effort to not get any.");
          window.close();
}
