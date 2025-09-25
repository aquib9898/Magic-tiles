// --- GLOBAL VARIABLES & CONSTANTS ---

// Canvas Setup
const board = document.getElementById('canvas1');
const context = board.getContext("2d");
board.height = window.innerHeight;
board.width = window.innerWidth;

// state object
const GAME_STATE = {
    MENU: "menu",
    STAGE1: "stage1",
    STAGE2: "stage2",
    GAME_OVER: "gameOver"
};

// Game Assets & Menu Variables
const spidermanbg = new Image();
spidermanbg.src = "./spiderman.png";
let spidermanWidth = 350;
let spidermanHeight = 550;
let spidermanXcoordinate = 400;
let spidermanYcoordinate = 150;

const ranbirbg = new Image();
ranbirbg.src = "./ranbirbg.png";
let ranbirWidth = 350;
let ranbirHeight = 550;
let ranbirXcoordinate = 750;
let ranbirYcoordinate = 150;

// Initial Game State
let currentState = GAME_STATE.MENU;
let scalespeed = 2.5;

// Menu Button Dimensions
const buttonX = 580;
const buttonY = board.height - 150;
const buttonWidth = 300;
const buttonHeight = 80;


// Stage Configuration
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
        // Example for a future stage
        // song: new Audio('./another-song.mp3'),
        // beatmap: [],
        tiles: [],
        startTime: 0,
        beatmapIndex: 0,
        tileSpeed: 5,
        score: 0,
        highScore: localStorage.getItem('anotherSongHighScore') || 0,
        highScoreKey: 'anotherSongHighScore',
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
      this.y = -this.height;  //hide the tiles
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

    const gradient = context.createLinearGradient(buttonX, buttonY, buttonX + buttonWidth, buttonY + buttonHeight);
    gradient.addColorStop(0, '#8E2DE2'); 
    gradient.addColorStop(1, '#4A00E0'); 

    context.fillStyle = gradient;
    context.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText('Start Level', buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);

    // highscore menu
    context.fillStyle = 'white';
    context.font = '30px Arial';
    context.textAlign = 'left';
    context.fillText(`Spiderman High Score: ${stageConfigs[GAME_STATE.STAGE1].highScore}`, 20, 40);
}

function renderStage(stageConfig) {
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


    




    







   context.fillStyle = 'white';
   context.fillRect(470, 0, 520, window.innerHeight);






requestAnimationFrame(update)

 function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);
    if(currentState===GAME_STATE.MENU){
        renderMenu();
        
        // Reset all stages when returning to menu
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

        const elapsedTime = (performance.now() - config.startTime) / 1000; // in seconds

        if (!config.isGameOver) {
            if (config.beatmapIndex < config.beatmap.length && elapsedTime >= config.beatmap[config.beatmapIndex][0]) {
                const laneToSpawn = config.beatmap[config.beatmapIndex][1];
                config.tiles.push(new Tile(laneToSpawn));
                config.beatmapIndex++;
            }
        }

        renderStage(config);

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
    
    if ((currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2) && !stageConfigs[currentState].isGameOver) {
        const config = stageConfigs[currentState];
        if (key === 'f') {
            config.isFreeplay = !config.isFreeplay;
        }

        const lanePressed = keyMap[key];
        if (lanePressed !== undefined) {
            const targetTile = config.tiles.find(tile =>
                !tile.hit &&
                tile.lane === lanePressed &&
                tile.y + tile.height > hitZoneY &&
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
        if (event.clientX > buttonX && event.clientX < buttonX + buttonWidth && event.clientY > buttonY && event.clientY < buttonY + buttonHeight) {
            currentState = GAME_STATE.STAGE1;
        }
    }
});

// --- INITIAL EXECUTION ---
requestAnimationFrame(update);