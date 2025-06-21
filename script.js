let a = confirm("Ya got lost again? \nok = yes \ncancel = no");

if (a) {
    alert("Allow me to redirect you.");
    window.open('https://www.youtube.com/watch?v=y1fB7ztc1dQ', '_blank');
} else {
    alert("That is good, yet again.");
    let b = confirm("Would you like to play a little game of Dune or continue this? \nok = Dune \ncancel = continue");

    if (b) {
        alert("Oops! The Dune game is currently unavailable. Guess we’ll have to make do with other mischief...");
        // You can add more alternate content here if you want
    } else {
        alert("Why thank you!");
    }

    alert("From now on, \nok = yes \ncancel = no");
    let c = confirm("Now wasn't that fun?");
    if (c) {
        alert("Glad you can agree with me.");
    } else {
        alert("Guess I will have to try harder to impress you, hm?");
        let f = confirm("Are you sure?");
        if (f) {
            for (let i = 0; i < 3; i++) {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
            }
        } else {
            let j = confirm("Impressed now?");
            if (j) {
                alert("That's what I thought.");
            } else {
                window.close();
            }
        }
    }
}
