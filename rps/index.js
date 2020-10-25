function game(a) {
    var computer = Math.floor(Math.random() * (4 - 1) + 1);


    if (computer <= 1) {
        document.getElementById("output").innerHTML = "<img src='./images/rock.png'>"

    } else if (computer <= 2) {
        document.getElementById("output").innerHTML = "<img src='./images/paper.png'>"
    } else {
        document.getElementById("output").innerHTML = "<img src='./images/scissor.png'>"
    }

    const ans = (a, computer) => {
        if (a == 1 && computer == 2) {
            document.getElementById("result").innerHTML = "<h1 >YOU LOOSE</h1>"
        }
        if (a == 1 && computer == 3) {
            document.getElementById("result").innerHTML = "<h1>YOU WIN</h1>";
        }
        if (a == 2 && computer == 1) {
            document.getElementById("result").innerHTML = "<h1>YOU WIN</h1>";
        }
        if (a == 2 && computer == 3) {
            document.getElementById("result").innerHTML = "<h1>YOU LOOSE</h1>";
        }
        if (a == 3 && computer == 1) {
            document.getElementById("result").innerHTML = "<h1>YOU LOOSE</h1>";
        }
        if (a == 3 && computer == 2) {
            document.getElementById("result").innerHTML = "<h1>YOU WIN</h1>";
        }

    }
    ans(a, computer);
    if (a == computer) { document.getElementById("result").innerHTML = "<h1>TIE</h1>" }


}
