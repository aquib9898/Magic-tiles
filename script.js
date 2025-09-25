// --- global declars declars ----------------------------------------------------------------------------------------------------------


const board = document.getElementById('canvas1');
const context = board.getContext("2d");
board.height = window.innerHeight;
board.width = window.innerWidth;

// game states
const GAME_STATE = {
    MENU: "menu",
    STAGE1: "stage1",
    STAGE2: "stage2",
    GAME_OVER: "gameOver"
};


const spidermanbg = new Image();
spidermanbg.src = "./spiderman.png";
let spidermanWidth = 300;
let spidermanHeight = 470;
let spidermanXcoordinate = 400;
let spidermanYcoordinate = 100;

const ranbirbg = new Image();
ranbirbg.src = "./ranbirbg.png";
let ranbirWidth = 300;
let ranbirHeight = 470;
let ranbirXcoordinate = 750;
let ranbirYcoordinate = 100;

const gameplayGif = new Image();
gameplayGif.src = "./GifSpidey.gif"; // 

const ranbir1_bg = new Image();
ranbir1_bg.src = "./ranbir1.png";

const ranbir2_bg = new Image();
ranbir2_bg.src = "./ranbir2.png";

const miles2_bg = new Image();
miles2_bg.src = "./miles2.png";

const miles3_bg = new Image();
miles3_bg.src = "./miles3.png";


let currentState = GAME_STATE.MENU;
let scalespeed = 2.5;
let songSelected = 0;

// Menu Buttons
const buttonWidth = 300;
const buttonHeight = 80;
const buttonX = (board.width - buttonWidth) / 2;
const buttonY = board.height - 120;



const stageConfigs = {
    [GAME_STATE.STAGE1]: {
        song: new Audio('./sunflower.mp3'),
        beatmap: [
            [1, 0], [1.8, 1], [2.6, 2], [3.4, 3], [4.2, 0], [4.6, 0], [5.0, 2], [5.8, 1], [6.6, 3], [7.4, 2], [8.2, 0], [8.6, 1], [9.0, 2], [9.4, 3], [10.2, 1], [11, 1], [11.8, 3], [12.6, 3],
            [14, 0], [14.8, 2], [15.6, 1], [16.4, 3], [17.2, 0], [18, 1], [18.8, 2], [19.6, 3], [20.4, 1], [21.2, 2], [22, 0], [22.8, 3], [23.6, 1], [24.4, 2], [25.2, 0], [26, 3],
            [27, 1], [27.8, 2], [28.6, 0], [29.4, 3], [30.2, 1], [31, 2], [31.8, 0], [32.6, 3], [33.4, 1], [34.2, 2], [35, 0], [35.8, 3], [36.6, 1], [37.4, 2], [38.2, 0], [39, 3],
            [40, 0], [40.8, 1], [41.6, 2], [42.4, 3], [43.2, 0], [44, 1], [44.8, 2], [45.6, 3], [46.4, 1], [47.2, 2], [48, 0], [48.8, 3], [49.6, 1], [50.4, 2], [51.2, 0], [52, 3],
            [53, 1], [53.8, 2], [54.6, 0], [55.4, 3], [56.2, 1], [57, 2], [57.8, 0], [58.6, 3], [59.4, 1], [60.2, 2], [61, 0], [61.8, 3], [62.6, 1], [63.4, 2], [64.2, 0], [65, 3],
            [66, 0], [66.8, 1], [67.6, 2], [68.4, 3], [69.2, 0], [70, 1], [70.8, 2], [71.6, 3], [72.4, 1], [73.2, 2], [74, 0], [74.8, 3], [75.6, 1], [76.4, 2], [77.2, 0], [78, 3],
            [79, 1], [79.8, 2], [80.6, 0], [81.4, 3], [82.2, 1], [83, 2], [83.8, 0], [84.6, 3], [85.4, 1], [86.2, 2], [87, 0], [87.8, 3], [88.6, 1], [89.4, 2], [90.2, 0], [91, 3],
            [92, 0], [92.8, 1], [93.6, 2], [94.4, 3], [95.2, 0], [96, 1], [96.8, 2], [97.6, 3], [98.4, 1], [99.2, 2], [100, 0], [100.8, 3], [101.6, 1], [102.4, 2], [103.2, 0], [104, 3],
            [105, 1], [105.8, 2], [106.6, 0], [107.4, 3], [108.2, 1], [109, 2], [109.8, 0], [110.6, 3], [111.4, 1], [112.2, 2], [113, 0], [113.8, 3], [114.6, 1], [115.4, 2], [116.2, 0], [117, 3],
            [118, 0], [118.8, 1], [119.6, 2], [120.4, 3], [121.2, 0], [122, 1], [122.8, 2], [123.6, 3], [124.4, 1], [125.2, 2], [126, 0], [126.8, 3], [127.6, 1], [128.4, 2], [129.2, 0], [130, 3],
            [131, 1], [131.8, 2], [132.6, 0], [133.4, 3], [134.2, 1], [135, 2], [135.8, 0], [136.6, 3], [137.4, 1], [138.2, 2], [139, 0], [139.8, 3], [140.6, 1], [141.4, 2], [142.2, 0], [143, 3],
            [144, 0], [144.8, 1], [145.6, 2], [146.4, 3], [147.2, 0], [148, 1], [148.8, 2], [149.6, 3], [150.4, 1], [151.2, 2], [152, 0], [152.8, 3], [153.6, 1], [154.4, 2], [155.2, 0], [156, 3],
            [157, 1], [157.8, 2], [158.6, 0], [159.4, 3], [160.2, 1]
        ],
        tiles: [],
        startTime: 0,
        beatmapIndex: 0,
        tileSpeed: 5,
        score: 0,
        highScore: localStorage.getItem('sunflowerHighScore1') || 0,
        highScoreKey: 'sunflowerHighScore1',
        missMessage: '',
        missMessageTimeout: 0,
        isFreeplay: false,
        isGameOver: false,
    },
    [GAME_STATE.STAGE2]: {
        song: new Audio('./BadtameezDil.mp3'),
        beatmap: [
    [0.2, 2], [1.9, 0], [2.4, 3], [3.2, 1], [3.6, 0], [4.0, 2], [4.4, 1], [4.8, 3], [5.2, 0], [5.6, 2],
    [6.0, 1], [6.4, 0], [6.8, 3], [7.2, 2], [7.6, 0], [8.0, 1], [8.4, 3], [8.8, 2],
    [9.2, 0], [9.6, 1], [10.0, 3], [10.4, 2], [10.8, 0], [11.2, 1], [11.6, 2], [12.0, 3],
    [12.4, 0], [12.8, 2], [13.2, 1], [13.6, 3], [14.0, 0], [14.4, 1], [14.8, 2], [15.2, 3],
    [15.6, 0], [16.0, 2], [16.4, 3], [16.8, 1], [17.2, 0], [17.6, 2], [18.0, 1], [18.4, 3],
    [18.8, 0], [19.2, 2], [19.6, 1], [20.0, 3], [20.4, 0], [20.8, 2], [21.2, 1], [21.6, 3],
    [22.0, 2], [22.4, 0], [22.8, 3], [23.2, 1], [23.6, 0], [24.0, 2], [24.4, 3], [24.8, 1],
    [25.2, 0], [25.6, 2], [26.0, 1], [26.4, 3], [26.8, 0], [27.2, 2], [27.6, 3], [28.0, 1],
    [28.4, 0], [28.8, 2], [29.2, 3], [29.6, 1], [30.0, 0], [30.4, 2], [30.8, 1], [31.2, 3],
    [31.6, 0], [32.0, 2], [32.4, 3], [32.8, 1], [33.2, 0], [33.6, 2], [34.0, 1], [34.4, 3],
    [34.8, 0], [35.2, 2], [35.6, 3], [36.0, 1], [36.4, 0], [36.8, 2], [37.2, 3], [37.6, 1],
    [38.0, 0], [38.4, 2], [38.8, 1], [39.2, 3], [39.6, 0], [40.0, 2], [40.4, 1], [40.8, 3],
    [41.2, 0], [41.6, 2], [42.0, 3], [42.4, 1], [42.8, 0], [43.2, 2], [43.6, 1], [44.0, 3],
    [44.4, 0], [44.8, 2], [45.2, 1], [45.6, 3], [46.0, 0], [46.4, 2], [46.8, 3], [47.2, 1],
    [47.6, 0], [48.0, 2], [48.4, 3], [48.8, 1], [49.2, 0], [49.6, 2], [50.0, 1], [50.4, 3],
    [50.8, 0], [51.2, 2], [51.6, 3], [52.0, 1], [52.4, 0], [52.8, 2], [53.2, 1], [53.6, 3],
    [54.0, 0], [54.4, 2], [54.8, 3], [55.2, 1], [55.6, 0], [56.0, 2], [56.4, 3], [56.8, 1],
    [57.2, 0], [57.6, 2], [58.0, 1], [58.4, 3], [58.8, 0], [59.2, 2], [59.6, 3], [60.0, 1],
    [60.4, 0], [60.8, 2], [61.2, 3], [61.6, 1], [62.0, 0], [62.4, 2], [62.8, 3], [63.2, 1],
    [63.6, 0], [64.0, 2], [64.4, 1], [64.8, 3], [65.2, 0], [65.6, 2], [66.0, 3], [66.4, 1],
    [66.8, 0], [67.2, 2], [67.6, 1], [68.0, 3], [68.4, 0], [68.8, 2], [69.2, 3], [69.6, 1],
    [70.0, 0], [70.4, 2], [70.8, 1], [71.2, 3], [71.6, 0], [72.0, 2], [72.4, 3], [72.8, 1],
    [73.2, 0], [73.6, 2], [74.0, 3], [74.4, 1], [74.8, 0], [75.2, 2], [75.6, 1], [76.0, 3],
    [76.4, 0], [76.8, 2], [77.2, 3], [77.6, 1], [78.0, 0], [78.4, 2], [78.8, 3], [79.2, 1],
    [79.6, 0], [80.0, 2], [80.4, 1], [80.8, 3], [81.2, 0], [81.6, 2], [82.0, 3], [82.4, 1],
    [82.8, 0], [83.2, 2], [83.6, 1], [84.0, 3], [84.4, 0], [84.8, 2], [85.2, 3], [85.6, 1],
    [86.0, 0], [86.4, 2], [86.8, 1], [87.2, 3], [87.6, 0], [88.0, 2], [88.4, 1], [88.8, 3],
    [89.2, 0], [89.6, 2], [90.0, 3], [90.4, 1], [90.8, 0], [91.2, 2], [91.6, 1], [92.0, 3],
    [92.4, 0], [92.8, 2], [93.2, 3], [93.6, 1], [94.0, 0], [94.4, 2], [94.8, 3], [95.2, 1],
    [95.6, 0], [96.0, 2], [96.4, 1], [96.8, 3], [97.2, 0], [97.6, 2], [98.0, 3], [98.4, 1],
    [98.8, 0], [99.2, 2], [99.6, 1], [100.0, 3], [100.4, 0], [100.8, 2], [101.2, 1], [101.6, 3],
    [102.0, 0], [102.4, 2], [102.8, 3], [103.2, 1], [103.6, 0], [104.0, 2], [104.4, 3], [104.8, 1],
    [105.2, 0], [105.6, 2], [106.0, 1], [106.4, 3], [106.8, 0], [107.2, 2], [107.6, 1], [108.0, 3],
    [108.4, 0], [108.8, 2], [109.2, 3], [109.6, 1], [110.0, 0], [110.4, 2], [110.8, 3], [111.2, 1],
    [111.6, 0], [112.0, 2], [112.4, 1], [112.8, 3], [113.2, 0], [113.6, 2], [114.0, 3], [114.4, 1],
    [114.8, 0], [115.2, 2], [115.6, 1], [116.0, 3], [116.4, 0], [116.8, 2], [117.2, 3], [117.6, 1],
    [118.0, 0], [118.4, 2], [118.8, 1], [119.2, 3], [119.6, 0], [120.0, 2], [120.4, 1], [120.8, 3],
    [121.2, 0], [121.6, 2], [122.0, 3], [122.4, 1], [122.8, 0], [123.2, 2], [123.6, 1]

        ],
        tiles: [],
        startTime: 0,
        beatmapIndex: 0,
        tileSpeed: 5,
        score: 0,
        highScore: localStorage.getItem('badtameezDilHighScore') || 0,
        highScoreKey: 'badtameezDilHighScore',
        missMessage: '',
        missMessageTimeout: 0,
        isFreeplay: false,
        isGameOver: false,
    }
};

const hitZoneY = board.height - 200;
const keyMap = {
    'a': 0, 'd': 1, 'j': 2, 'l': 3
};

class Tile {
  constructor(lane) {
      this.width = 100;
      this.height = 150;
      this.lane = lane;
      const playAreaX = (board.width - 400) / 2;  //dont need this but will reduce redundancy
      this.x = playAreaX + (this.lane * 100);     //ez logic
      this.y = -this.height;  
      this.color = 'black';
      this.hit = false; 
  }
}

function renderMenu(){
if(spidermanbg.complete){
        context.drawImage(spidermanbg, 0, 0, 626, 945, spidermanXcoordinate, spidermanYcoordinate , spidermanWidth, spidermanHeight)
    }

    if(ranbirbg.complete){
        context.drawImage(ranbirbg, 0, 0, 866, 991, ranbirXcoordinate, ranbirYcoordinate , ranbirWidth, ranbirHeight)
    }

    if (songSelected === 1) {
      if (spidermanHeight < 520) { spidermanHeight += scalespeed; }
      if (spidermanWidth < 330) { spidermanWidth += 1.6; }
      if(spidermanXcoordinate>370){spidermanXcoordinate-=1.5;}
      if(spidermanYcoordinate > 70) { spidermanYcoordinate -= 1.5; }
      if (ranbirHeight > 470) { ranbirHeight -= scalespeed; }
      if (ranbirWidth > 300) { ranbirWidth -= 1.6; }
      if(ranbirYcoordinate < 100) { ranbirYcoordinate += 1.5; }
    } else if (songSelected === 2) {
      if (ranbirHeight < 520) { ranbirHeight += scalespeed; }
      if (ranbirWidth < 330) { ranbirWidth += 1.6; }
      if(ranbirYcoordinate > 70) { ranbirYcoordinate -= 1.5; }
      if(spidermanXcoordinate<400){spidermanXcoordinate+=1.5;}
      if(spidermanYcoordinate < 100) { spidermanYcoordinate += 1.5; }
      if (spidermanHeight > 470) { spidermanHeight -= scalespeed; }
      if (spidermanWidth > 300) { spidermanWidth -= 1.6; }
    }

    const gradient = context.createLinearGradient(buttonX, buttonY, buttonX + buttonWidth, buttonY + buttonHeight);
    gradient.addColorStop(0, '#8E2DE2'); 
    gradient.addColorStop(1, '#4A00E0'); 

    context.fillStyle = gradient;
    context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText('Start Level', buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);

}

function renderStage(stageConfig, elapsedTime = 0) {
    const bgGradient = context.createLinearGradient(0, 0, 0, board.height);
    bgGradient.addColorStop(0, '#2c3e50');
    bgGradient.addColorStop(1, '#3498db');
    context.fillStyle = bgGradient;
    context.fillRect(0, 0, board.width, board.height);

    const playAreaX = (board.width - 400) / 2;
    context.fillStyle = 'white';
    context.fillRect(playAreaX, 0, 400, board.height);

    
    context.save();
    context.globalAlpha = 0.6; 
    const fadeOutStartTime = 15;
    const fadeOutDuration = 5;
    const fadeInStartTime = 20;
    const fadeInDuration = 5;

    const fadeOut2_StartTime = fadeInStartTime + fadeInDuration + 10; // 35s
    const fadeOut2_Duration = 5;
    const fadeIn2_StartTime = fadeOut2_StartTime + fadeOut2_Duration; // 40s
    const fadeIn2_Duration = 5;

    if (currentState === GAME_STATE.STAGE1) {
        if (elapsedTime < fadeOutStartTime + fadeOutDuration) {
            let opacity = 0.6;
            if (elapsedTime > fadeOutStartTime) {
                const progress = (elapsedTime - fadeOutStartTime) / fadeOutDuration;
                opacity = 0.6 * (1 - progress);
            }
            context.globalAlpha = Math.max(0, opacity);
            context.drawImage(gameplayGif, playAreaX, 0, 400, board.height);
        }

        // fadeout-----------------------------------------------------------------------------------------------------------------------------------
        if (elapsedTime > fadeInStartTime && elapsedTime < fadeOut2_StartTime + fadeOut2_Duration) {
            let opacity = 0.6;
            if (elapsedTime < fadeInStartTime + fadeInDuration) { 
                const progress = (elapsedTime - fadeInStartTime) / fadeInDuration;
                opacity = 0.6 * progress;
            } else if (elapsedTime > fadeOut2_StartTime) { 
                const progress = (elapsedTime - fadeOut2_StartTime) / fadeOut2_Duration;
                opacity = 0.6 * (1 - progress);
            }
            context.globalAlpha = Math.max(0, opacity);
            context.drawImage(miles2_bg, playAreaX, 0, 400, board.height);
        }

        // fadein-----------------------------------------------------------------------------------------------------------------------------------
        if (elapsedTime > fadeIn2_StartTime) {
            const progress = Math.min(1, (elapsedTime - fadeIn2_StartTime) / fadeIn2_Duration);
            context.globalAlpha = 0.6 * progress;
            context.drawImage(miles3_bg, playAreaX, 0, 400, board.height);
        }

    } else if (currentState === GAME_STATE.STAGE2) {
        // fadeout---------------------------------------------------------------------------------------------------------------------------------
        if (elapsedTime < fadeOutStartTime + fadeOutDuration) {
            let opacity1 = 0.6;
            if (elapsedTime > fadeOutStartTime) {
                const progress = (elapsedTime - fadeOutStartTime) / fadeOutDuration;
                opacity1 = 0.6 * (1 - progress);
            }
            context.globalAlpha = Math.max(0, opacity1);
            context.drawImage(ranbir1_bg, playAreaX, 0, 400, board.height);
        }

        // fadein--------------------------------------------------------------------------------------------------------------------------------------
        if (elapsedTime > fadeInStartTime) {
            const progress = Math.min(1, (elapsedTime - fadeInStartTime) / fadeInDuration);
            context.globalAlpha = 0.6 * progress;
            context.drawImage(ranbir2_bg, playAreaX, 0, 400, board.height);
        }
    }
    context.restore();

    context.strokeStyle = '#bdc3c7';
    context.lineWidth = 2;
    for (let i = 1; i < 4; i++) {
          const lineX = playAreaX + (100 * i);
          context.beginPath();
          context.moveTo(lineX, 0);
          context.lineTo(lineX, board.height);
          context.stroke();
      }

      context.strokeStyle = 'red';
      context.lineWidth = 4;
      context.strokeRect(playAreaX, hitZoneY, 400, 50);

      
      context.fillStyle = 'white';
      context.font = '30px Arial';
      context.textAlign = 'left';
      context.fillText(`Score: ${stageConfig.score}`, 20, 40);

      context.textAlign = 'right';
      context.fillText(`High Score: ${stageConfig.highScore}`, board.width - 20, 40);

      if (stageConfig.missMessage && performance.now() < stageConfig.missMessageTimeout) {
          context.fillStyle = 'rgba(255, 0, 0, 0.8)';
          context.font = '60px Arial';
          context.textAlign = 'center';
          context.fillText(stageConfig.missMessage, board.width / 2, board.height / 2);
      }

      context.fillStyle = stageConfig.isFreeplay ? 'lime' : 'white';
      context.font = '24px Arial';
      context.textAlign = 'center';
      context.fillText('Freeplay', board.width / 2, 40);
      context.font = '16px Arial';
      context.fillText("(Press 'F' to toggle)", board.width / 2, 65);
}


 function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);
    if(currentState===GAME_STATE.MENU){
        renderMenu();
        
//stage reset krne ke liye

        for (const stageKey in stageConfigs) {
            const config = stageConfigs[stageKey];
            if (config.song && !config.song.paused) {
                config.song.pause();
                config.song.currentTime = 0;
            }
            config.startTime = 0;
            config.beatmapIndex = 0;
            config.tiles = [];
            config.score = 0;
            config.isGameOver = false;
        }

    } else if (currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2) {
        const config = stageConfigs[currentState];

        
        if (!config.song) {
            renderStage(config); 
            return;
        }

        if (config.startTime === 0) {
            config.startTime = performance.now();
            config.song.currentTime = 0;
            config.song.play();
        }

        const elapsedTime = (performance.now() - config.startTime) / 1000; 

        if (!config.isGameOver) {
            if (config.beatmapIndex < config.beatmap.length && elapsedTime >= config.beatmap[config.beatmapIndex][0]) {
                const laneToSpawn = config.beatmap[config.beatmapIndex][1];
                config.tiles.push(new Tile(laneToSpawn));
                config.beatmapIndex++;
            }
        }

        renderStage(config, elapsedTime);

        for (let i = config.tiles.length - 1; i >= 0; i--) {
            const tile = config.tiles[i];
            tile.y += config.tileSpeed;
            if (!tile.hit) {
                context.fillStyle = tile.color;
                context.fillRect(tile.x, tile.y, tile.width, tile.height);
            }
            
            if (tile.y > board.height && !tile.hit && !config.isFreeplay && !config.isGameOver) {
                config.isGameOver = true;
                config.missMessage = 'Miss!';
                config.missMessageTimeout = performance.now() + 500;
                setTimeout(() => {
                    currentState = GAME_STATE.MENU;
                }, 2000); 
            }

            if (tile.y > board.height + tile.height || tile.hit) {
                config.tiles.splice(i, 1);
            }
        }
    }
}

//  EVENT LISTENERS SECTION----------------------------------------------------------------------------------

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    
    if (currentState === GAME_STATE.MENU) {
    }
    else if ((currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2) && !stageConfigs[currentState].isGameOver) {
        const config = stageConfigs[currentState];
        if (key === 'f') {
            config.isFreeplay = !config.isFreeplay;
        }

        const lanePressed = keyMap[key];
        if (lanePressed !== undefined) {
            const targetTile = config.tiles.find(tile =>
                !tile.hit &&
                tile.lane === lanePressed &&
                tile.y + tile.height > (hitZoneY - 40) && 
                tile.y < hitZoneY + 50
            );

            if (targetTile) {
                targetTile.hit = true;
                config.score += 10;
                if (config.score > config.highScore) {
                    config.highScore = config.score;
                    localStorage.setItem(config.highScoreKey, config.highScore);
                }
            }
        }
    }
});

board.addEventListener('click', (event) => {
    if (currentState === GAME_STATE.MENU) {
        if (event.clientX > spidermanXcoordinate && event.clientX < spidermanXcoordinate + spidermanWidth && event.clientY > spidermanYcoordinate && event.clientY < spidermanYcoordinate + spidermanHeight) {
            songSelected = 1;
        } else if (event.clientX > ranbirXcoordinate && event.clientX < ranbirXcoordinate + ranbirWidth && event.clientY > ranbirYcoordinate && event.clientY < ranbirYcoordinate + ranbirHeight) {
            songSelected = 2;
        } else if (songSelected !== 0 && event.clientX >= buttonX && event.clientX <= buttonX + buttonWidth && event.clientY >= buttonY && event.clientY <= buttonY + buttonHeight) {
            if (songSelected === 1) { currentState = GAME_STATE.STAGE1; }
            if (songSelected === 2) { currentState = GAME_STATE.STAGE2; }
        }
    }
});

// --- INITIAL EXECUTION ---
update();