// Achievements
var SIMPLE_FUN = false;
var MORE_INTO_IT = false;
var THE_BETTER_END = false;
var THE_DEEP_END = false;
var GO_OUTSIDE_AND_TOUCH_SOME_GRASS = false;
var EMOTIONAL_DAMAGE = false;

// Game start
var a = confirm("Ya got lost again? \nok = yes \ncancel = no");

if (a) {
  alert("Allow me to redirect you.");
  window.open('https://www.youtube.com/watch?v=y1fB7ztc1dQ', '_blank');
} else {
  alert("That is good, yet again.");

  var b = confirm("Now, tell me honestly...\nWould you rather unravel a secret or just continue this delightful confusion?\nok = secret \ncancel = continue");

  if (b) {
    alert("Ah, the curious kind. I like that.");
    alert("But secrets have a way of biting back. Are you sure?");
    var secretConfirm = confirm("Last chance. Do you truly seek the truth?");

    if (secretConfirm) {
      alert("Very well. The truth is...");
      alert("You’ve always had the power. The question is... what will you do with it? \nyou earned: more into it award");
      MORE_INTO_IT = true;
    } else {
      alert("Wise choice. Some doors are best left unopened.");
    }
  } else {
    alert("No shame in that. Some chaos is meant to be embraced, not explained.");
  }

  alert("From now on\nok = yes \ncancel = no");

  var c = confirm("Now wasn't that fun?");
  if (c) {
    alert("Glad you can agree with me.");
    alert("You won... \nyou earned: simple fun award");
    SIMPLE_FUN = true;

    var don = confirm("Whats that? Too easy?");
    if (don) {
      alert("Fair enough.");
        alert("Come back when you...");
          window.open('https://www.harvard.edu/', '_blank');
          window.open('https://www.spaceforce.com/apply-now', '_blank');
           window.open('https://www.spaceforce.com/apply-now', '_blank');
            window.open('https://www.goarmy.com/apply', '_blank');
            alert("very funny, you just closed all the tabs and came back expecting more? \nyou earned: emotional damage award");
     
            

        
            
    }
  } else {
    alert("Guess I’ll have to try harder to impress you, hm?");
    var f = confirm("Are you sure?");
    if (f) {
      for (var i = 0; i < 30; i++) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      }
    } else {
      var j = confirm("Impressed now?");
      if (j) {
        alert("That's what I thought.");
        THE_DEEP_END = true;  // <-- fix: assign to existing var, no "var" keyword here
      } else {
        // do nothing
      }
    }
  }
}

// === Show achievements at end ===
var earned = [];
if (SIMPLE_FUN) earned.push("SIMPLE FUN");
if (MORE_INTO_IT) earned.push("MORE INTO IT");
if (THE_BETTER_END) earned.push("THE BETTER END");
if (THE_DEEP_END) earned.push("THE DEEP END");
if (GO_TOUCH_SOME_GRASS) earned.push("GO TOUCH SOME GRASS");
if (EMOTIONAL_DAMAGE) earned.push("EMOTIONAL DAMAGE");
if (earned.length > 0) {
  alert("Achievements earned:\n" + earned.join("\n"));
  window.close();
} else {
  alert("END GAME \nNo achievements earned. \nIt even takes some effort to not get any.");
  window.close();
}
