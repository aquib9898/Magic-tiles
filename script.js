const board = document.getElementById('canvas1');
const context = board.getContext("2d");
board.height = window.innerHeight;
board.width = window.innerWidth;

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
let spidermanYcoordinate = 180;

const ranbirbg = new Image();
ranbirbg.src = "./ranbirbg.png";
let ranbirWidth = 300;
let ranbirHeight = 470;
let ranbirXcoordinate = 750;
let ranbirYcoordinate = 180;

const gameplayGif = new Image();
gameplayGif.src = "./GifSpidey.gif";

const ranbir1_bg = new Image();
ranbir1_bg.src = "./ranbir1.png";
const ranbir2_bg = new Image();
ranbir2_bg.src = "./ranbir2.png";
const miles2_bg = new Image();
miles2_bg.src = "./miles2.png";
const miles3_bg = new Image();
miles3_bg.src = "./miles3.png";
const miles4_bg = new Image();
miles4_bg.src = "./miles4.png";
const miles5_bg = new Image();
miles5_bg.src = "./miles5.png";
const miles6_bg = new Image();
miles6_bg.src = "./miles6.png";
const miles7_bg = new Image();
miles7_bg.src = "./miles7.png";
const ranbir3_bg = new Image();
ranbir3_bg.src = "./ranbir3.jpg";
const ranbir4_bg = new Image();
ranbir4_bg.src = "./ranbir4.png";
const ranbir5_bg = new Image();
ranbir5_bg.src = "./ranbir5.png";
const menuBgImg = new Image();
menuBgImg.src = "./menuBG.jpg";

let currentState = GAME_STATE.MENU;
let scalespeed = 2.5;
let songSelected = 0;

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
        particles: [],
        particleSpawners: [],
        startTime: 0,
        beatmapIndex: 0,
        tileSpeed: 5,
        score: 0,
        highScore: parseInt(localStorage.getItem('sunflowerHighScore1')) || 0,
        highScoreKey: 'sunflowerHighScore1',
        missMessage: '',
        missMessageTimeout: 0,
        isFreeplay: false,
        isGameOver: false,
        missFadeAlpha: 0,
        missFadeStartTime: 0,
        missFadeState: 'none',
        completionCounter: 0,
        progressMeter: 0,
        meterMax: 100,
        meterIncrement: 3,
        multiplierActive: false,
        multiplierDuration: 5000,
        multiplierValue: 2,
        multiplierStartTime: 0
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
            [105.2, 0], [105.6, 2], [106.0, 1], [106.4, 3], [106.8, 0], [107.2, 2], [107.6, 1], [108.0, 3]
        ],
        tiles: [],
        particles: [],
        particleSpawners: [],
        startTime: 0,
        beatmapIndex: 0,
        tileSpeed: 5,
        score: 0,
        highScore: parseInt(localStorage.getItem('badtameezDilHighScore')) || 0,
        highScoreKey: 'badtameezDilHighScore',
        missMessage: '',
        missMessageTimeout: 0,
        isFreeplay: false,
        isGameOver: false,
        missFadeAlpha: 0,
        missFadeStartTime: 0,
        missFadeState: 'none',
        completionCounter: 0,
        progressMeter: 0,
        meterMax: 100,
        meterIncrement: 5,
        multiplierActive: false,
        multiplierDuration: 5000,
        multiplierValue: 2,
        multiplierStartTime: 0
    }
};

const hitZoneY = board.height - 200;
const keyMap = {
    'a': 0, 'd': 1, 'j': 2, 'l': 3
};
const laneToKeyMap = Object.fromEntries(Object.entries(keyMap).map(([key, value]) => [value, key.toUpperCase()]));

class Tile {
  constructor(lane, type = 'normal') {
      this.type = type;
      this.width = 100;
      this.height = (this.type === 'long' || this.type === 'doubleLong') ? 450 : 150;
      this.lane = lane;
      const playAreaX = (board.width - 400) / 2;
      this.x = playAreaX + (this.lane * 100);
      this.y = -this.height;
      this.color = this.type === 'doubleLong' ? '#FFD700' : 'black';
      this.hit = false;
      this.isHolding = false;
      this.hasBeenHeld = false;
      this.holdStartTime = 0;
      this.key = laneToKeyMap[lane];
  }
}

class Particle {
    constructor(x, y, type = 'attract') {
        this.x = x;
        this.y = y;
        this.type = type;
        this.initialSize = Math.random() * 8 + 2;
        this.size = this.initialSize;
        if (this.type === 'attract') {
            this.speedX = Math.random() * 10 - 5;
            this.speedY = Math.random() * 10 - 5;
        } else {
            this.speedX = Math.random() * 4 - 2;
            this.speedY = -Math.random() * 3 - 1;
        }
        this.color = 'white';
        this.life = 1;
    }
    update() {
        if (this.type === 'attract') {
            const playAreaX = (board.width - 400) / 2;
            const meterX = playAreaX - 60;
            const meterWidth = 40;
            const meterHeight = Math.min(350, board.height * 0.5);
            const meterY = 80;
            const targetX = meterX + meterWidth / 2;
            const targetY = meterY + meterHeight / 2;

            const dx = targetX - this.x;
            const dy = targetY - this.y;

            this.speedX += dx * 0.00125;
            this.speedY += dy * 0.00125;
            this.speedX *= 0.92;
            this.speedY *= 0.92;

            this.x += this.speedX;
            this.y += this.speedY;

            const dist = Math.sqrt(dx * dx + dy * dy);
            this.size = Math.min(this.initialSize, this.initialSize * (dist / 200));
            this.life -= 0.01;
        } else {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 0.03;
            this.size *= 0.95;
        }
    }
    draw() {
        context.save();
        context.globalAlpha = this.life;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
    }
}

function renderMenu(){
    const menuGradient = context.createLinearGradient(0, 0, 0, board.height);
    menuGradient.addColorStop(0, 'black');
    menuGradient.addColorStop(1, 'navy');
    context.fillStyle = menuGradient;
    context.fillRect(0, 0, board.width, board.height);

    context.save();
    context.globalAlpha = 0.2;
    if(menuBgImg.complete){
        context.drawImage(menuBgImg, 0, 0, board.width, board.height);
    }
    context.restore();

    context.fillStyle = 'white';
    context.font = 'bold 80px cursive';
    context.textAlign = 'center';
    context.fillText('Select Level', board.width / 2, 120);

    if(spidermanbg.complete){
        context.drawImage(spidermanbg, 0, 0, 626, 945, spidermanXcoordinate, spidermanYcoordinate , spidermanWidth, spidermanHeight)
    }

    if(ranbirbg.complete){
        context.drawImage(ranbirbg, 0, 0, 866, 991, ranbirXcoordinate, ranbirYcoordinate , ranbirWidth, ranbirHeight)
    }

    if (songSelected === 1) {
        context.fillStyle = 'white';
        context.font = 'bold 24px sans-serif';
        context.textAlign = 'left';
        context.fillText(`High Score: ${stageConfigs[GAME_STATE.STAGE1].highScore}`, spidermanXcoordinate + 20, spidermanYcoordinate + spidermanHeight - 20);
    } else if (songSelected === 2) {
        context.fillStyle = 'white';
        context.font = 'bold 24px sans-serif';
        context.textAlign = 'left';
        context.fillText(`High Score: ${stageConfigs[GAME_STATE.STAGE2].highScore}`, ranbirXcoordinate + 20, ranbirYcoordinate + ranbirHeight - 20);
    }

    if (songSelected === 1) {
      if (spidermanHeight < 520) { spidermanHeight += scalespeed; }
      if (spidermanWidth < 330) { spidermanWidth += 1.6; }
      if (spidermanXcoordinate > 370) { spidermanXcoordinate -= 1.5; }
      if (spidermanYcoordinate > 150) { spidermanYcoordinate -= 1.5; }
      if (ranbirHeight > 470) { ranbirHeight -= scalespeed; }
      if (ranbirWidth > 300) { ranbirWidth -= 1.6; }
      if (ranbirYcoordinate < 180) { ranbirYcoordinate += 1.5; }
    } else if (songSelected === 2) {
      if (ranbirHeight < 520) { ranbirHeight += scalespeed; }
      if (ranbirWidth < 330) { ranbirWidth += 1.6; }
      if (ranbirYcoordinate > 150) { ranbirYcoordinate -= 1.5; }
      if (spidermanXcoordinate < 400) { spidermanXcoordinate += 1.5; }
      if (spidermanYcoordinate < 180) { spidermanYcoordinate += 1.5; }
      if (spidermanHeight > 470) { spidermanHeight -= scalespeed; }
      if (spidermanWidth > 300) { spidermanWidth -= 1.6; }
    }

    const gradient = context.createLinearGradient(buttonX, buttonY, buttonX + buttonWidth, buttonY + buttonHeight);
    gradient.addColorStop(0, '#8E2DE2');
    gradient.addColorStop(1, '#4A00E0');

    context.fillStyle = gradient;
    context.beginPath();
    context.roundRect(buttonX, buttonY, buttonWidth, buttonHeight, 20);
    context.fill();

    context.fillStyle = 'white';
    context.font = '30px sans-serif';
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

    const drawFadingImage = (img, start, fadeIn, hold, fadeOut) => {
        const end = start + fadeIn + hold + fadeOut;
        if (elapsedTime < start || (fadeOut > 0 && elapsedTime > end)) return;
        let opacity = 0.6;
        const timeIn = elapsedTime - start;
        if (timeIn < fadeIn) {
            opacity = 0.6 * (timeIn / fadeIn);
        } else if (fadeOut > 0 && timeIn > fadeIn + hold) {
            opacity = 0.6 * (1 - (timeIn - fadeIn - hold) / fadeOut);
        }
        context.globalAlpha = Math.max(0, opacity);
        context.drawImage(img, playAreaX, 0, 400, board.height);
    };

    const initialBg = currentState === GAME_STATE.STAGE1 ? gameplayGif : ranbir1_bg;
    drawFadingImage(initialBg, 0, 0, 15, 5);

    const middleBgs = currentState === GAME_STATE.STAGE1
        ? [miles2_bg, miles3_bg, miles4_bg, miles5_bg, miles6_bg]
        : [ranbir2_bg, ranbir3_bg, ranbir4_bg];

    middleBgs.forEach((img, index) => {
        const start = 20 + (index * 20);
        drawFadingImage(img, start, 5, 10, 5);
    });

    const finalBg = currentState === GAME_STATE.STAGE1 ? miles7_bg : ranbir5_bg;
    const finalStart = 20 + (middleBgs.length * 20);
    drawFadingImage(finalBg, finalStart, 5, 9999, 0);

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
    context.font = '30px sans-serif';
    context.textAlign = 'left';
    context.fillText(`Score: ${stageConfig.score}`, 20, 40);

    context.textAlign = 'right';
    context.fillText(`High Score: ${stageConfig.highScore}`, board.width - 20, 40);

    let currentMult = 1;
    if (stageConfig.completionCounter > 0) currentMult *= 2;
    if (stageConfig.multiplierActive) currentMult *= stageConfig.multiplierValue;

    if (currentMult > 1) {
        context.save();
        context.translate(board.width / 2, 120);
        let angle = Math.sin(performance.now() / 300) * 0.25;

        if (currentMult >= 8) {
            angle += (Math.random() - 0.5) * 0.1;
            context.translate((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
        }

        context.rotate(angle);

        if (currentMult >= 8) {
            context.fillStyle = '#E0FFFF';
            context.strokeStyle = '#00FFFF';
            context.shadowColor = '#00FFFF';
            context.shadowBlur = 20;

            if (Math.floor(performance.now() / 50) % 2 === 0) {
                context.save();
                context.strokeStyle = 'rgba(200, 255, 255, 0.8)';
                context.lineWidth = 3;
                context.beginPath();
                for (let k = 0; k < 4; k++) {
                    let lx = (Math.random() - 0.5) * 40;
                    let ly = (Math.random() - 0.5) * 40;
                    context.moveTo(lx, ly);
                    context.lineTo(lx + (Math.random() - 0.5) * 100, ly + (Math.random() - 0.5) * 100);
                    context.lineTo(lx + (Math.random() - 0.5) * 150, ly + (Math.random() - 0.5) * 150);
                }
                context.stroke();
                context.restore();
            }
        } else {
            context.fillStyle = '#FFD700';
            context.strokeStyle = 'white';
        }

        context.lineWidth = 2;
        context.font = 'bold 80px sans-serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.strokeText(`${currentMult}X`, 0, 0);
        context.fillText(`${currentMult}X`, 0, 0);
        context.restore();
    }

    if (stageConfig.isGameOver && stageConfig.missFadeState !== 'none') {
        const now = performance.now();
        const fadeDuration = 200;
        const elapsed = now - stageConfig.missFadeStartTime;
        let textAlpha = 0;
        if (stageConfig.missFadeState === 'in') {
            stageConfig.missFadeAlpha = Math.min(1, elapsed / fadeDuration);
            textAlpha = stageConfig.missFadeAlpha;
        } else if (stageConfig.missFadeState === 'hold') {
            stageConfig.missFadeAlpha = 1;
            textAlpha = 1;
        } else if (stageConfig.missFadeState === 'out') {
            stageConfig.missFadeAlpha = 1 - Math.min(1, elapsed / fadeDuration);
            textAlpha = 0;
        }
        context.fillStyle = `rgba(139, 0, 0, ${stageConfig.missFadeAlpha})`;
        context.fillRect(0, 0, board.width, board.height);
        context.fillStyle = `rgba(255, 255, 255, ${textAlpha})`;
        context.font = '120px sans-serif';
        context.textAlign = 'center';
        context.fillText('Miss!!', board.width / 2, board.height / 2);
    }

    context.fillStyle = stageConfig.isFreeplay ? 'lime' : 'white';
    context.font = '24px sans-serif';
    context.textAlign = 'center';
    context.fillText('Freeplay', board.width / 2, 40);
    context.font = '16px sans-serif';
    context.fillText("(Press 'F' to toggle)", board.width / 2, 65);

    const meterX = playAreaX - 60;
    const meterWidth = 40;
    const meterHeight = Math.min(350, board.height * 0.5);
    const meterY = 80;
    context.strokeStyle = '#888';
    context.lineWidth = 3;
    context.strokeRect(meterX, meterY, meterWidth, meterHeight);
    const fillRatio = Math.max(0, Math.min(1, stageConfig.progressMeter / stageConfig.meterMax));
    const fillH = Math.round(fillRatio * meterHeight);
    const fillY = meterY + (meterHeight - fillH);
    if (stageConfig.multiplierActive) {
        context.fillStyle = 'orange';
    } else {
        context.fillStyle = '#2ecc71';
    }
    context.fillRect(meterX + 3, fillY + 3, meterWidth - 6, fillH - 6);
    context.fillStyle = 'white';
    context.font = '14px sans-serif';
    context.textAlign = 'center';
    context.fillText(stageConfig.multiplierActive ? `${stageConfig.multiplierValue}x` : 'Meter', meterX + meterWidth / 2, meterY + meterHeight + 20);
}

function handleTileHit(config, tile) {
    tile.hit = true;
    let mult = 1;
    if (config.completionCounter > 0) mult *= 2;
    if (config.multiplierActive) mult *= config.multiplierValue;
    const points = (tile.type === 'long' || tile.type === 'doubleLong') ? 30 : 10;
    config.score += points * mult;
    if (config.score > config.highScore) {
        config.highScore = config.score;
        localStorage.setItem(config.highScoreKey, config.highScore);
    }
    if (tile.type === 'doubleLong') {
        config.multiplierActive = true;
        config.multiplierValue = 8;
        config.multiplierStartTime = performance.now();
        config.progressMeter = 0;
    } else if (!config.multiplierActive) {
        if (tile.type === 'long') {
            config.progressMeter += config.meterMax * 0.45;
        } else if (tile.color === 'black') {
            config.progressMeter += config.meterIncrement;
        }
        if (config.progressMeter >= config.meterMax) {
            config.progressMeter = config.meterMax;
            config.multiplierActive = true;
            config.multiplierStartTime = performance.now();
        }
    }
    config.particleSpawners.push({
        x: tile.x + tile.width / 2,
        y: tile.y + tile.height / 2,
        startTime: performance.now(),
        duration: 250,
        count: 20,
        spawned: 0
    });
}

function resetStageConfig(config) {
    if (config.song) {
        config.song.pause();
        config.song.currentTime = 0;
    }
    config.startTime = 0;
    config.beatmapIndex = 0;
    config.tiles = [];
    config.particles = [];
    config.particleSpawners = [];
    config.score = 0;
    config.isGameOver = false;
    config.missFadeState = 'none';
    config.missFadeAlpha = 0;
    config.missFadeStartTime = 0;
    config.completionCounter = 0;
    config.progressMeter = 0;
    config.multiplierActive = false;
    config.multiplierValue = 2;
    config.laneBlockedUntil = [0, 0, 0, 0];
}

function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);
    if(currentState===GAME_STATE.MENU){
        renderMenu();
    } else if (currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2) {
        const config = stageConfigs[currentState];
        if (!config.song) {
            renderStage(config);
            return;
        }
        if (config.startTime === 0) {
            const speedMultiplier = 1 + (config.completionCounter * 0.1);
            config.song.playbackRate = speedMultiplier;
            config.tileSpeed = 5 * speedMultiplier;
            config.startTime = performance.now();
            config.song.currentTime = 0;
            config.song.play();
        }
        const elapsedTime = config.song.currentTime;
        const now = performance.now();
        if (config.isGameOver && config.missFadeState === 'in') {
            if (now > config.missFadeStartTime + 200) {
                config.missFadeState = 'hold';
                config.missFadeStartTime = performance.now();
            }
        } else if (config.isGameOver && config.missFadeState === 'hold') {
            if (now > config.missFadeStartTime + 2000) {
                config.missFadeState = 'out';
                config.missFadeStartTime = performance.now();
            }
        } else if (config.isGameOver && config.missFadeState === 'out') {
            if (now > config.missFadeStartTime + 200) {
                config.missFadeState = 'none';
                setTimeout(() => {
                    currentState = GAME_STATE.MENU;
                }, 500);
            }
        }
        if (!config.isGameOver) {
            while (config.beatmapIndex < config.beatmap.length && elapsedTime >= config.beatmap[config.beatmapIndex][0]) {
                const laneToSpawn = config.beatmap[config.beatmapIndex][1];
                
                if (!config.laneBlockedUntil) config.laneBlockedUntil = [0, 0, 0, 0];
                if (elapsedTime < config.laneBlockedUntil[laneToSpawn]) {
                    config.beatmapIndex++;
                    continue;
                }

                const isDoubleLong = Math.random() < 0.015;
                let spawnedDouble = false;

                if (isDoubleLong) {
                    const possibleLanes = [0, 1, 2, 3].filter(l => l !== laneToSpawn && elapsedTime >= config.laneBlockedUntil[l]);
                    if (possibleLanes.length > 0) {
                        const secondLane = possibleLanes[Math.floor(Math.random() * possibleLanes.length)];
                        config.tiles.push(new Tile(laneToSpawn, 'doubleLong'));
                        config.tiles.push(new Tile(secondLane, 'doubleLong'));
                        config.laneBlockedUntil[laneToSpawn] = elapsedTime + 1.5;
                        config.laneBlockedUntil[secondLane] = elapsedTime + 1.5;
                        spawnedDouble = true;
                    }
                }

                if (!spawnedDouble) {
                    const isLong = Math.random() < 0.05;
                    config.tiles.push(new Tile(laneToSpawn, isLong ? 'long' : 'normal'));
                    if (isLong) {
                        config.laneBlockedUntil[laneToSpawn] = elapsedTime + 1.5;
                    }
                }
                config.beatmapIndex++;
            }
        }
        if (config.multiplierActive) {
            const elapsedMultiplier = now - config.multiplierStartTime;
            if (elapsedMultiplier >= config.multiplierDuration) {
                config.multiplierActive = false;
                config.progressMeter = 0;
                config.multiplierValue = 2;
            } else {
                const remaining = 1 - (elapsedMultiplier / config.multiplierDuration);
                config.progressMeter = Math.max(0, remaining * config.meterMax);

                const playAreaX = (board.width - 400) / 2;
                const meterX = playAreaX - 60;
                const meterWidth = 40;
                const meterHeight = Math.min(350, board.height * 0.5);
                const meterY = 80;
                const fillRatio = Math.max(0, Math.min(1, config.progressMeter / config.meterMax));
                const fillH = Math.round(fillRatio * meterHeight);
                const fillY = meterY + (meterHeight - fillH);

                for (let k = 0; k < 2; k++) {
                    config.particles.push(new Particle(
                        meterX + Math.random() * meterWidth,
                        fillY,
                        'dissipate'
                    ));
                }
            }
        }

        for (let i = config.particleSpawners.length - 1; i >= 0; i--) {
            const spawner = config.particleSpawners[i];
            const elapsed = now - spawner.startTime;
            const particlesToSpawn = Math.floor((elapsed / spawner.duration) * spawner.count);

            for (let j = spawner.spawned; j < particlesToSpawn && j < spawner.count; j++) {
                config.particles.push(new Particle(spawner.x, spawner.y));
                spawner.spawned++;
            }

            if (elapsed >= spawner.duration) {
                for (let j = spawner.spawned; j < spawner.count; j++) {
                    config.particles.push(new Particle(spawner.x, spawner.y));
                }
                config.particleSpawners.splice(i, 1);
            }
        }
        renderStage(config, elapsedTime);
        for (let i = config.particles.length - 1; i >= 0; i--) {
            const p = config.particles[i];
            p.update();
            p.draw();
            if (p.life <= 0) {
                config.particles.splice(i, 1);
            }
        }
        for (let i = config.tiles.length - 1; i >= 0; i--) {
            const tile = config.tiles[i];
            tile.y += config.tileSpeed;
            if (tile.isHolding) {
                const holdDuration = now - tile.holdStartTime;
                const speedMultiplier = 1 + (config.completionCounter * 0.1);
                if (holdDuration >= 300 / speedMultiplier) {
                    handleTileHit(config, tile);
                }
            }
            if (!tile.hit) {
                if ((tile.type === 'long' || tile.type === 'doubleLong') && tile.isHolding) {
                    context.fillStyle = 'gray';
                } else {
                    context.fillStyle = tile.color;
                }
                context.fillRect(tile.x, tile.y, tile.width, tile.height);
                context.fillStyle = 'white';
                context.font = 'bold 40px sans-serif';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(tile.key, tile.x + tile.width / 2, tile.y + tile.height / 2);
            }
            if (tile.y > board.height && !tile.hit && !config.isFreeplay && !config.isGameOver) {
                if ((tile.type === 'long' || tile.type === 'doubleLong') && tile.hasBeenHeld) {
                    // Long tile was touched, so no miss penalty, but no points either.
                } else {
                    config.isGameOver = true;
                    config.song.pause();
                    config.missFadeState = 'in';
                    config.missFadeStartTime = performance.now();
                }
            }
            if (tile.y > board.height + tile.height || tile.hit) {
                config.tiles.splice(i, 1);
            }
        }
        if (!config.isGameOver && config.beatmapIndex >= config.beatmap.length && config.tiles.length === 0) {
            config.completionCounter++;
            config.startTime = 0;
            config.beatmapIndex = 0;
            config.tiles = [];
            config.song.pause();
            config.song.currentTime = 0;
        }
    }
}

document.addEventListener('keyup', (event) => {
    if (currentState === GAME_STATE.MENU) return;
    const key = event.key.toLowerCase();
    const lane = keyMap[key];
    if (lane !== undefined && (currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2)) {
        const config = stageConfigs[currentState];
        const heldTile = config.tiles.find(t => t.lane === lane && t.isHolding);
        if (heldTile) heldTile.isHolding = false;
    }
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (currentState === GAME_STATE.MENU) {
        return;
    }
    if ((currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2) && !stageConfigs[currentState].isGameOver) {
        const config = stageConfigs[currentState];
        if (key === 'f') {
            config.isFreeplay = !config.isFreeplay;
            return;
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
                if (targetTile.type === 'long' || targetTile.type === 'doubleLong') {
                    if (!targetTile.isHolding) {
                        targetTile.isHolding = true;
                        targetTile.hasBeenHeld = true;
                        targetTile.holdStartTime = performance.now();
                    }
                } else {
                    handleTileHit(config, targetTile);
                }
            }
        }
    }
});

board.addEventListener('mouseup', (event) => {
    if (currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2) {
        const config = stageConfigs[currentState];
        config.tiles.forEach(t => t.isHolding = false);
    }
});

board.addEventListener('mousedown', (event) => {
    if (currentState === GAME_STATE.STAGE1 || currentState === GAME_STATE.STAGE2) {
        const config = stageConfigs[currentState];
        for (let i = config.tiles.length - 1; i >= 0; i--) {
            const tile = config.tiles[i];
            if (!tile.hit && event.clientX >= tile.x && event.clientX <= tile.x + tile.width && event.clientY >= tile.y && event.clientY <= tile.y + tile.height) {
                if (tile.type === 'long' || tile.type === 'doubleLong') {
                    tile.isHolding = true;
                    tile.hasBeenHeld = true;
                    tile.holdStartTime = performance.now();
                } else {
                    handleTileHit(config, tile);
                }
                break;
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
            if (songSelected === 1) { 
                resetStageConfig(stageConfigs[GAME_STATE.STAGE1]);
                currentState = GAME_STATE.STAGE1; 
            }
            if (songSelected === 2) { 
                resetStageConfig(stageConfigs[GAME_STATE.STAGE2]);
                currentState = GAME_STATE.STAGE2; 
            }
        }
        return;
    }
});

update();
