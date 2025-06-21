function startGame() {
    alert("Welcome to the Dune Universe! You are an heir to a noble House struggling for control over Arrakis.");
    alert("Navigate the political intrigue, fight for spice, and survive the desert to dominate the future of the known universe!");

    let health = 100;
    let spice = 0;
    let influenceFremen = 0;
    let influenceHarkonnen = 0;
    let influenceEmperor = 0;
    let influenceGuild = 0;
    let playing = true;

    while (playing) {
        alert("You arrive on Arrakis. The harsh desert world is filled with dangers, opportunities, and power struggles.");

        let firstChoice = prompt("What do you do?\n1. Seek an alliance with the Fremen\n2. Meet with the Harkonnens to discuss a deal\n3. Begin spice mining operations to increase resources\n4. Explore the desert for secrets");

        if (firstChoice === "1") {
            influenceFremen += 10;
            spice += 5;
            alert("The Fremen welcome you as a potential ally. They share vital spice knowledge with you.");
        } else if (firstChoice === "2") {
            influenceHarkonnen -= 10;
            alert("The Harkonnens are suspicious and hostile. You've made an enemy of them.");
        } else if (firstChoice === "3") {
            spice += 10;
            alert("You secure valuable spice. Your House is starting to grow in influence.");
        } else if (firstChoice === "4") {
            health -= 20;
            alert("You ventured too far into the desert and suffered a sandworm attack. You've lost some health.");
        } else {
            alert("Invalid choice. Try again.");
            continue;
        }

        let secondChoice = prompt("A sandstorm strikes! What do you do?\n1. Take cover in a nearby Fremen sietch\n2. Continue pushing forward, hoping to survive\n3. Seek shelter in your spice mining base");

        if (secondChoice === "1") {
            influenceFremen += 5;
            health += 10;
            alert("The Fremen offer shelter from the storm. You gain their favor and recover some health.");
        } else if (secondChoice === "2") {
            health -= 30;
            alert("The storm proves deadly. You are injured, but barely survive.");
        } else if (secondChoice === "3") {
            spice += 10;
            alert("You find shelter in your spice base and continue your mining operation.");
        } else {
            alert("Invalid choice. Try again.");
            continue;
        }

        let thirdChoice = prompt("A rival House (the Harkonnens) accuses you of smuggling spice. How do you respond?\n1. Defend yourself to the Emperor\n2. Bribe the Spacing Guild to stay neutral\n3. Try to negotiate with the Fremen for their support");

        if (thirdChoice === "1") {
            influenceEmperor += 10;
            alert("The Emperor sides with you, putting pressure on the Harkonnens. You've gained favor in the royal court.");
        } else if (thirdChoice === "2") {
            influenceGuild += 10;
            spice -= 5;
            alert("The Spacing Guild accepts your bribe. You've secured their neutrality, but it cost you some spice.");
        } else if (thirdChoice === "3") {
            influenceFremen += 15;
            alert("The Fremen back you up, providing critical support. You've earned their loyalty.");
        } else {
            alert("Invalid choice. Try again.");
            continue;
        }

        let fourthChoice = prompt("A massive sandworm threatens your spice operation. What will you do?\n1. Evacuate the workers and abandon the site\n2. Attempt to kill the sandworm with explosives\n3. Try to communicate with the Fremen for help");

        if (fourthChoice === "1") {
            health -= 10;
            spice -= 5;
            alert("You abandon the spice field, but your workers are shaken and you lose valuable spice.");
        } else if (fourthChoice === "2") {
            health -= 20;
            spice += 10;
            alert("The sandworm is killed, but the operation costs you in resources and manpower.");
        } else if (fourthChoice === "3") {
            influenceFremen += 20;
            alert("The Fremen arrive just in time to help you subdue the sandworm. You've earned their loyalty.");
        } else {
            alert("Invalid choice. Try again.");
            continue;
        }

        if (health <= 0) {
            alert("You have died. The desert claimed you. Game over!");
            break;
        }

        let finalChoice = prompt("The Emperor offers you control of Arrakis, but at a price. Do you:\n1. Accept the offer and rule Arrakis as his puppet\n2. Reject the Emperor and strike out on your own with the Fremen\n3. Accept, but secretly plot to overthrow the Emperor");

        if (finalChoice === "1") {
            influenceEmperor += 20;
            alert("You accept the Emperor's offer. You now control Arrakis, but you're bound by his authority.");
        } else if (finalChoice === "2") {
            influenceFremen += 30;
            alert("You reject the Emperor and ally with the Fremen. Together, you overthrow the Emperor’s forces.");
        } else if (finalChoice === "3") {
            influenceEmperor -= 10;
            alert("Your plot is discovered! The Emperor retaliates, and your reign over Arrakis ends.");
        } else {
            alert("Invalid choice. Try again.");
            continue;
        }

        alert(`Game Over! Your final stats are:
Health: ${health}
Spice: ${spice}
Influence with Fremen: ${influenceFremen}
Influence with Harkonnens: ${influenceHarkonnen}
Influence with the Emperor: ${influenceEmperor}
Influence with the Guild: ${influenceGuild}`);

        playing = confirm("Do you want to play again?");
    }

    alert("Thanks for playing! May the spice flow freely.");

    let c = confirm("Now wasn't that fun?");
    if (c) {
        alert("Glad you can agree with me.");
    } else {
        alert("Guess I will have to try harder to impress you, hm?");
        let f = confirm("Are you sure?");
        if (f) {
            for (let i = 0; i < 3; i++) {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
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

// Entry point: ask user if they are lost
let a = confirm("Ya got lost again? \nok = yes \ncancel = no");

if (a) {
    alert("Allow me to redirect you.");
    window.open('https://www.youtube.com/watch?v=y1fB7ztc1dQ', '_blank');
} else {
    alert("That is good, yet again.");
    let b = confirm("Would you like to play a little game of Dune or continue this? \nok = Dune \ncancel = continue");
    if (b) {
        startGame(); // ✅ start the game!
    } else {
        alert("Why thank you!");
    }
}
