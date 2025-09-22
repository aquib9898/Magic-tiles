board = document.getElementById('canvas1');
board.height = window.innerHeight;
board.width = window.innerWidth;
context=board.getContext("2d");
context.fillStyle

  let backgroundImg=new Image();
  backgroundImg.src="";


   context.fillStyle = 'white';
   context.fillRect(470, 0, 520, window.innerHeight);




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