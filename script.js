board = document.getElementById('canvas1');
context=board.getContext("2d");
board.height = window.innerHeight;
board.width = window.innerWidth;







// state object
 let GAME_STATE = {
    MENU: "menu",
    STAGE1: "stage1",
    STAGE2: "stage2",
    GAME_OVER: "gameOver"
  };

  //other objects/variables I will need
  let spidermanbg=new Image();
  spidermanbg.src="./spiderman.png";
  let spidermanWidth=350;
  let spidermanHeight=550;
  spidermanXcoordinate=400;
  spidermanYcoordinate=150;
  

  let ranbirbg=new Image();
  ranbirbg.src="./ranbirbg.png";
  let ranbirWidth=350;
  let ranbirHeight=550;
  ranbirXcoordinate=750;
  ranbirYcoordinate=150;

  

//defining initial states 
let currentState=GAME_STATE.MENU;
scalespeed=2.5;
let songSelected=0;



//adding event listeners for long key press
// document.addEventListener("keydown",handleKeyDown);
// document.addEventListener("keyup",handleKeyUp);


document.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    
    if(currentState===GAME_STATE.MENU){songSelected=1;}
  }
  
  else if (event.key === '2') {
    
    if(currentState===GAME_STATE.MENU){songSelected=2;}
  }
});

document.addEventListener('keydown', (event) => {
  
  if (event.key === 'Enter') {
    if(currentState===GAME_STATE.MENU){if(songSelected===1){currentState=GAME_STATE.STAGE1}}
    if(currentState===GAME_STATE.MENU){if(songSelected===2){currentState=GAME_STATE.STAGE2}}
  }
});

class Tile {
  constructor(lane) {
      this.width = 100;
      this.height = 150;
      this.lane = lane;
      const playAreaX = (board.width - 400) / 2;  //dont need this but will reduce redundancy
      this.x = playAreaX + (this.lane * 100);     //ez logic
      this.y = -this.height;  //hide the tiles
      this.color = 'black';
      this.hit = false; 
  }
}



renderMenu();
//This secetion will have all the functions i need. Hopefully
 function renderMenu(){
if(spidermanbg.complete){
        context.drawImage(spidermanbg, 0, 0, 626, 945, spidermanXcoordinate, spidermanYcoordinate , spidermanWidth, spidermanHeight)
    }

//image resize logic on clicking 1 or 2
    if(ranbirbg.complete){
        context.drawImage(ranbirbg, 0, 0, 866, 991, ranbirXcoordinate, ranbirYcoordinate , ranbirWidth, ranbirHeight)
    }
    if (songSelected === 1) {
      if (spidermanHeight < 600) { spidermanHeight += scalespeed; }
      if (spidermanWidth < 382) { spidermanWidth += 1.6; }
      if(spidermanXcoordinate>370){spidermanXcoordinate-=1.5;}
      if(spidermanYcoordinate > 120) { spidermanYcoordinate -= 1.5; }
      if (ranbirHeight > 550) { ranbirHeight -= scalespeed; }
      if (ranbirWidth > 350) { ranbirWidth -= 1.6; }
      if(ranbirYcoordinate < 150) { ranbirYcoordinate += 1.5; }
    } else if (songSelected === 2) {
      if (ranbirHeight < 600) { ranbirHeight += scalespeed; }
      if (ranbirWidth < 382) { ranbirWidth += 1.6; }
      if(ranbirYcoordinate > 120) { ranbirYcoordinate -= 1.5; }
      if(spidermanXcoordinate<400){spidermanXcoordinate+=1.5;}
      if(spidermanYcoordinate < 150) { spidermanYcoordinate += 1.5; }
      if (spidermanHeight > 550) { spidermanHeight -= scalespeed; }
      if (spidermanWidth > 350) { spidermanWidth -= 1.6; }
    }

    

    const buttonX = 580;
    const buttonY = board.height - 150;
    const buttonWidth = 300;
    const buttonHeight = 80;


    const gradient = context.createLinearGradient(buttonX, buttonY, buttonX + buttonWidth, buttonY + buttonHeight);
    gradient.addColorStop(0, '#8E2DE2'); 
    gradient.addColorStop(1, '#4A00E0'); 

    context.fillStyle = gradient;
    context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

    
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText('Start Level', buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
    }


    function renderStage1(){
     
      const bgGradient = context.createLinearGradient(0, 0, 0, board.height);
      bgGradient.addColorStop(0, '#2c3e50'); 
      bgGradient.addColorStop(1, '#3498db'); 
      context.fillStyle = bgGradient;
      context.fillRect(0, 0, board.width, board.height);
  
   
      const playAreaX = (board.width - 400) / 2;
      context.fillStyle = 'white';
      context.fillRect(playAreaX, 0, 400, board.height);
  
    
      context.strokeStyle = '#bdc3c7'; 
      context.lineWidth = 2;
      for (let i = 1; i < 4; i++) {                //adding looop logic to make 4 lines at a distnce of 100 each
          const lineX = playAreaX + (100 * i);
          context.beginPath();
          context.moveTo(lineX, 0);
          context.lineTo(lineX, board.height);
          context.stroke();
      }
    }



    function renderStage2(){
     
      const bgGradient = context.createLinearGradient(0, 0, 0, board.height);
      bgGradient.addColorStop(0, '#2c3e50'); 
      bgGradient.addColorStop(1, '#3498db'); 
      context.fillStyle = bgGradient;
      context.fillRect(0, 0, board.width, board.height);
  
   
      const playAreaX = (board.width - 400) / 2;
      context.fillStyle = 'white';
      context.fillRect(playAreaX, 0, 400, board.height);
  
    
      context.strokeStyle = '#bdc3c7'; 
      context.lineWidth = 2;
      for (let i = 1; i < 4; i++) {                //adding looop logic to make 4 lines at a distnce of 100 each
          const lineX = playAreaX + (100 * i);
          context.beginPath();
          context.moveTo(lineX, 0);
          context.lineTo(lineX, board.height);
          context.stroke();
      }
    }



    




    























 





   context.fillStyle = 'white';
   context.fillRect(470, 0, 520, window.innerHeight);




// For Radhika to understand. Our game will have 2 stages or states (as of now) for 2 different musics. the other states are basically menu and game Over screen.


requestAnimationFrame(update)

 function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);

   




    if(currentState===GAME_STATE.MENU){
        renderMenu();
    }else if(currentState===GAME_STATE.STAGE1){
      renderStage1();
    }else if(currentState===GAME_STATE.STAGE2){
      renderStage2();}
  }