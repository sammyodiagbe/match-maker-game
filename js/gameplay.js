( function() {
    const gameBoard = document.getElementById("board");
    const game_board = [0, 0, 0, 0];
    let oldrandomPos = undefined;
    
    let id = [1, 2];

    randomizePos(id, 2, 0);

    function randomizePos(arr, v, cindex) {
        for(let a = 0 ; a < arr.length; a++) {
            for(let b = cindex ; b < v; b++) {
                if(game_board[b] <= 0 ) {
                    game_board[b] = arr[a];
                    continue;
                }else {
                    randomizePos(arr, 2, b);
                }
            }
        }
    }
    

    console.log(game_board);


})();