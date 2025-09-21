board = document.getElementById('canvas1');
board.height = window.innerWidth;
board.width = window.innerWidth/2;




// For Radhika to understand. Our game will have 2 stages or states (as of now) for 2 different musics. the other states are basically menu and game Over screen.
 function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);

    if (backgroundImg.complete) {
        context.drawImage(backgroundImg,0,0,boardWidth,boardHeight);
    }


    if(currentState===GAME_STATE.MENU){
        renderMenu();
        }else if(currentState===GAME_STATE.STAGE1){ renderGame1();

    }else if(currentState===GAME_STATE.STAGE2){ renderGame2();

    }else if(currentState===GAME_STATE.GAME_OVER){renderGameOver();}
  }