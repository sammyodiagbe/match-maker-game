( function() {

    "use strict";
    // grabbing the first pick object in the dom
    const gameBoard = document.getElementById("board");
    const mainContent = document.getElementById("main-content");
    const boardContainer = document.getElementById("board-container");
    const play = document.getElementById("play");
    const moves = document.getElementById("moves");
    const corrects = document.getElementById("correct");
    let correct = 0;
    let move = 0;
    //setting the game board 
    const closebtn = document.getElementById("close");


    const game_board = [];
    var firstPick, secondPick, firstElement, secondElement;
    let id = [1, 2, 3, 4, 5];

    window.onload = function() {
        mainContent.style.height = (window.innerHeight - 60) + "px";
        //boardContainer.style.height = (window.innerHeight) + "px";
    } 

    play.onclick = function() {
        boardContainer.style.left ="0";
    }

    closebtn.onclick = function() {
        boardContainer.style.left = "100%";
    }

    randomizePos(id);

    function randomizePos(id) {
        for(let a = 0 ; a < id.length; a++) {
            for(let b = 0 ; b < 20; b++) {
                game_board.push(id[a]);
            }
        }
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            //get a random position in the board
            j = Math.floor(Math.random() * (i + 1));
            //store the current value in x
            x = a[i];
            //switch the value of the current position with the random position
            a[i] = a[j];
            //switch the value of the random position with the current position
            a[j] = x;
        }
    }
    

    shuffle(game_board);

    game_board.forEach( (elem, indx) => {
        var v;
        let element = document.createElement("div");
        element.addEventListener("click", processIt, false);
        element.setAttribute("id", 'p-' + indx);
        let color = ['#f0a', "#08f", "#33d3c1"];
        let rand = Math.floor(Math.random() * (color.length));
        element.classList.add("btn");
        element.style.background = color[rand];
        gameBoard.appendChild(element);

    });

    function processIt(e) {
        //check to see if this is the first pick
        let element = e.target;
        let currentElementid = Number(element.getAttribute("id").toString().substr(2));
        var src;
        switch(game_board[currentElementid]) {
            case 1 :
                src = "./images/light.png"
                break;
            case 2 :
                src = "./images/star.png";
                break;
            case 3 :
                src = "./images/heart.png";
                break;
            case 4 :
                src = "./images/poly.png";
                break;
            case 5 :
                src = "./images/tri.png";
                break;
            default: 
                break;
        }
        
        if(firstPick != undefined && firstPick != null) {
            //grab element
            secondPick = game_board[currentElementid];
            secondElement = document.getElementById("p-" + currentElementid);
            secondElement.style.background = "url(" + src + ")";
            move += 1;
            moves.innerText = move;

            if((firstElement === secondElement )|| secondElement.hasAttribute("disabled") || firstElement.hasAttribute("disabled") ) {
                //let the user know they cannot pick the same element over again
                return;
            }else {
                if(firstPick === secondPick) {
                    correct += 1;
                    corrects.innerText = correct;
                    firstElement.setAttribute("disabled", "true");
                    secondElement.setAttribute("disabled", "true");
                    firstElement.style.opacity =  ".2";
                    secondElement.style.opacity = ".2";
                } else {
                        setTimeout(function() {
                            firstElement.style.background = "";
                            secondElement.style.background = "";
                        }, 300);               
                }              
            }
            firstPick = null;
            secondPick = null;
            //firstElement = null;
            //secondElement = null;
        }else {      
            firstElement = document.getElementById("p-" + currentElementid);
            if(firstElement.hasAttribute("disabled")){
                return;
            }
            firstPick = game_board[currentElementid];
            console.log(src);
            firstElement.style.background = "url(" + src + ")";
        }
    }


})();