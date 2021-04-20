//Assigning variables
var opencard, opencardImg;
var playButton, playButtonImg;
var doraRun, doraRunImg;
var arrow, arrowImg;
var nextLevel, nextLevelImg;

var jungle, jungleImg;
var monkey, monkeyImg;
var lion, lionImg;
var bear, bearImg;
var snake, snakeImg;

var l1, l1Img;
var l2, l2Img;
var l3, l3Img;

var fort, fortImg;
var thorn, thornImg;
var invisibleGround;

var doraWalk, doraWalkImg;
var restart, restartImg;
var sadDoraImg;

var hill, hillImg;
var dora, doraImg;
var swiper,swiperImg;
var swiper1,swiper1Img;
var swiper2,swiper2Img;
var swiper3,swiper3Img;

var final;
var paddle1, paddle2;
var gameOver, gameOverImg;
var obstaclesGroup;
var end, endImg;
var treasure, treasureImg;

var score = 0;
var gameState  = "initialState";

//Loading images
function preload() {
    opencardImg   = loadImage("sprites/Openind Card.png");
    playButtonImg = loadImage("sprites/Play button.png");

    l1Img         = loadImage("sprites/L1.png");
    l2Img         = loadImage("sprites/L2.png");
    l3Img         = loadImage("sprites/L3.png");

    fortImg       = loadImage("sprites/Fort.png");
    doraRunImg    = loadAnimation("sprites/Picture1.png", "sprites/Picture2.png");
    thornImg      = loadImage("sprites/thorn.png")
    lostImg       = loadImage("sprites/Lost.png");
    nextLevelImg  = loadImage("sprites/nextLevel.png");
    arrowImg      = loadImage("sprites/arrow.png");
    gameOverImg   = loadImage("sprites/gameOver.png"); 
    restartImg    = loadImage("sprites/restart.png"); 
    sadDoraImg    = loadImage("sprites/sadDora.png"); 

    jungleImg     = loadImage("sprites/Jungle.png");
    monkeyImg     = loadImage("sprites/Monkey.png");
    lionImg       = loadImage("sprites/Lion.png");
    bearImg       = loadImage("sprites/Bear.png");
    snakeImg      = loadImage("sprites/Snake.png");
    doraWalkImg   = loadImage("sprites/Dora walk.png");

    hillImg       = loadImage("sprites/Hill.png");
    doraImg       = loadImage("sprites/dora.png");
    swiperImg     = loadImage("sprites/Swiper.png");
    swiper1Img    = loadImage("sprites/Swiper.png");
    swiper2Img    = loadImage("sprites/Swiper2.png");
    swiper3Img    = loadImage("sprites/Swiper2.png");

    endImg        = loadImage("sprites/End Card.png");
    treasureImg   = loadImage("sprites/Treasure.png");
   
}

//Creating sprites using varibles
function setup () {

    createCanvas(windowWidth, windowHeight);

    obstaclesGroup = createGroup();

    openCard = createSprite(windowWidth/2, windowHeight/2);
    openCard.addImage("card", opencardImg);
    openCard.scale = 1.4;

    playButton = createSprite(1200, 100, 100, 100);
    playButton.addImage("play", playButtonImg);
    playButton.scale = 0.099;

    l1 = createSprite(400, 590, 100, 100);
    l1.addImage("l1", l1Img);
    l1.scale = 0.7;
    l1.visible = false;

    l2 = createSprite(700, 590, 100, 100);
    l2.addImage("l2", l2Img);
    l2.scale = 0.7;
    l2.visible = false;

    l3 = createSprite(1000, 590, 100, 100);
    l3.addImage("l3", l3Img);
    l3.scale = 0.7;
    l3.visible = false;

    fort = createSprite(800, windowHeight/2, 100, 100);
    fort.addImage("fort", fortImg);
    fort.scale = 2.3;
    fort.visible = false;
    fort.velocityX = -1.2;

    doraRun = createSprite(200, 500, 400, 400);
    doraRun.addAnimation("doraRun", doraRunImg);
    doraRun.addAnimation("sadDora",sadDoraImg);
    doraRun.scale = 0.6;
    doraRun.visible = false; 
    doraRun.setCollider("rectangle",0,0,400,400); 

    invisibleGround = createSprite(width/2, height-20, width, 20);
    invisibleGround.visible = false;

    gameOver = createSprite(width/2, height/2, 10, 10);
    gameOver.addImage("gameOver", gameOverImg);
    gameOver.visible = false;

    nextLevel = createSprite(700, windowHeight/2, 100, 100);
    nextLevel.addImage("nextLevel", nextLevelImg);
    nextLevel.visible = false;

    arrow = createSprite(700, 450, 100, 100);
    arrow.addImage("arrow", arrowImg);
    arrow.scale   = 0.3;
    arrow.visible = false;

    jungle = createSprite(700, 260, 100, 100);
    jungle.addImage("jungle", jungleImg);
    jungle.scale   = 2.2;
    jungle.visible = false;

    monkey = createSprite(640, 610, 400, 400);
    monkey.addImage("monkey", monkeyImg);
    monkey.scale = 0.2;
    monkey.velocityX = 10;
    monkey.visible = false;

    lion = createSprite(900, 240, 400, 400);
    lion.addImage("lion", lionImg);
    lion.scale     = 0.07;
    //lion.velocityX = 10;
    lion.visible   = false;

    bear = createSprite(970, 215, 400, 400);
    bear.addImage("bear", bearImg);
    bear.scale     = 0.09;
    //bear.velocityX = 4;
    bear.visible   = false;

    snake = createSprite(540, 110, 400, 400);
    snake.addImage("snake", snakeImg);
    snake.scale     = 0.06;
    //snake.velocityX = 4;
    snake.visible   = false;

    doraWalk = createSprite(1150, 325, 10, 500);
    doraWalk.addImage("doraWalk", doraWalkImg);
    doraWalk.scale   = 0.062;
    doraWalk.visible = false;

    hill = createSprite(windowWidth/2, windowHeight/2);
    hill.addImage("hill", hillImg);
    hill.scale   = 3.6;
    hill.visible = false;

    dora = createSprite(180, 300, 100, 100);
    dora.addImage("dora", doraImg);
    dora.scale   = 0.2;
    dora.visible = false;

    restart = createSprite(width/2, height/2 + 130, 50, 50);
    restart.addImage("reset", restartImg);
    restart.scale = 0.3;
    restart.visible = false;

    swiper = createSprite(500, 200, 100, 100);
    swiper.addImage("swiper", swiperImg);
    swiper.scale     = 0.3;
    swiper.visible   = false;

    swiper1 = createSprite(900, 65, 100, 100);
    swiper1.addImage("swiper1", swiperImg);
    swiper1.scale   = 0.3;
    swiper1.visible = false;

    swiper2 = createSprite(750, 600, 100, 100);
    swiper2.addImage("swiper2", swiper2Img);
    swiper2.scale   = 0.3;
    swiper2.visible = false;

    swiper3 = createSprite(1150, 600, 100, 100);
    swiper3.addImage("swiper3", swiper2Img);
    swiper3.scale   = 0.3;
    swiper3.visible = false;

    paddle1 = createSprite(680, 02, 1300, 10);
    paddle1.visible = false;

    paddle2 = createSprite(690, 650, 1300, 10);
    paddle2.visible = false;

    final = createSprite(1290, 5, 150, 1700);
    final.visible = false;
    final.shapeColor = "#58A32C";

    one = createSprite(1100, 155, 05, 270);
    one.shapeColor = "brown";
    one.visible = false;

    two = createSprite(300, 330, 05, 620);
    two.shapeColor = "brown";
    two.visible = false;

    three = createSprite(700, 25, 800, 05);
    three.shapeColor = "brown";
    three.visible = false;

    four = createSprite(510, 635, 410, 05);
    four.shapeColor = "brown";
    four.visible = false;

    five = createSprite(1055, 160, 05, 265);
    five.shapeColor = "brown";
    five.visible = false;

    six = createSprite(1060, 467, 05, 277);
    six.shapeColor = "brown";
    six.visible = false;

    seven = createSprite(1025, 415, 05, 243);
    seven.shapeColor = "brown";
    seven.visible = false;

    eight = createSprite(1025, 586, 05, 35);
    eight.shapeColor = "brown";
    eight.visible = false;

    nine = createSprite(1025, 210, 05, 105);
    nine.shapeColor = "brown";
    nine.visible = false;

    ten = createSprite(867, 600, 370, 05);
    ten.shapeColor = "brown";
    ten.visible = false;

    eleven = createSprite(990, 313, 05, 240);
    eleven.shapeColor = "brown";
    eleven.visible = false;

    twelve = createSprite(960, 347, 05, 245);
    twelve.shapeColor = "brown";
    twelve.visible = false;

    thirteen = createSprite(925, 362, 05, 273);
    thirteen.shapeColor = "brown";
    thirteen.visible = false;

    fourteen = createSprite(890, 280, 05, 40);
    fourteen.shapeColor = "brown";
    fourteen.visible = false;

    fifteen = createSprite(890, 415, 05, 170);
    fifteen.shapeColor = "brown";
    fifteen.visible = false;

    sixteen = createSprite(860, 105, 05, 105);
    sixteen.shapeColor = "brown";
    sixteen.visible = false;

    seventeen = createSprite(820, 160, 05, 75);
    seventeen.shapeColor = "brown";
    seventeen.visible = false;

    eighteen = createSprite(790, 175, 05, 37);
    eighteen.shapeColor = "brown";
    eighteen.visible = false;

    nineteen = createSprite(755, 142, 05, 37);
    nineteen.shapeColor = "brown";
    nineteen.visible = false;

    twenty = createSprite(755, 552, 05, 37);
    twenty.shapeColor = "brown";
    twenty.visible = false;

    twentyone = createSprite(720, 552, 05, 37);
    twentyone.shapeColor = "brown";
    twentyone.visible = false;

    twentytwo = createSprite(720, 141, 05, 38);
    twentytwo.shapeColor = "brown";
    twentytwo.visible = false;

    twentythree = createSprite(720, 397, 05, 70);
    twentythree.shapeColor = "brown";
    twentythree.visible = false;

    twentyfour = createSprite(685, 415, 05, 38);
    twentyfour.shapeColor = "brown";
    twentyfour.visible = false;

    twentyfive = createSprite(685, 210, 05, 38);
    twentyfive.shapeColor = "brown";
    twentyfive.visible = false;

    twentysix = createSprite(650, 555, 05, 105);
    twentysix.shapeColor = "brown";
    twentysix.visible = false;

    twentyseven = createSprite(615, 600, 05, 60);
    twentyseven.shapeColor = "brown";
    twentyseven.visible = false;

    twentyeight = createSprite(515, 193, 05, 73);
    twentyeight.shapeColor = "brown";
    twentyeight.visible = false;

    twentynine = createSprite(515, 346, 05, 104);
    twentynine.shapeColor = "brown";
    twentynine.visible = false;

    thirty = createSprite(515, 518, 05, 172);
    thirty.shapeColor = "brown";
    thirty.visible = false;

    thirtyone = createSprite(480, 485, 05, 242);
    thirtyone.shapeColor = "brown";
    thirtyone.visible = false;

    thirtytwo = createSprite(480, 211, 05, 242);
    thirtytwo.shapeColor = "brown";
    thirtytwo.visible = false;

    hundredandtwelve = createSprite(445, 450, 05, 244);
    hundredandtwelve.shapeColor = "brown";
    hundredandtwelve.visible = false;

    thirtythree = createSprite(445, 141, 05, 107);
    thirtythree.shapeColor = "brown";
    thirtythree.visible = false;

    thirtyfour = createSprite(445, 262, 05, 71);
    thirtyfour.shapeColor = "brown";
    thirtyfour.visible = false;

    thirtyfive = createSprite(410, 245, 05, 106);
    thirtyfive.shapeColor = "brown";
    thirtyfive.visible = false;

    thirtysix = createSprite(408, 146, 05, 46);
    thirtysix.shapeColor = "brown";
    thirtysix.visible = false;

    thirtyseven = createSprite(376, 74, 05, 38);
    thirtyseven.shapeColor = "brown";
    thirtyseven.visible = false;

    thirtyeight = createSprite(376, 225, 05, 204);
    thirtyeight.shapeColor = "brown";
    thirtyeight.visible = false;

    thirtynine = createSprite(376, 225, 05, 204);
    thirtynine.shapeColor = "brown";
    thirtynine.visible = false;

    fourty = createSprite(376, 416, 05, 107);
    fourty.shapeColor = "brown";
    fourty.visible = false;

    fourtyone = createSprite(376, 554, 05, 104);
    fourtyone.shapeColor = "brown";
    fourtyone.visible = false;
    
    fourtytwo = createSprite(410, 450, 05, 246);
    fourtytwo.shapeColor = "brown";
    fourtytwo.visible = false;
 
    fourtythree = createSprite(340, 416, 05, 381);
    fourtythree.shapeColor = "brown";
    fourtythree.visible = false;

    fourtyfour = createSprite(340, 124, 05, 140);
    fourtyfour.shapeColor = "brown";
    fourtyfour.visible = false;

    fourtyfive = createSprite(1100, 485, 05, 310);
    fourtyfive.shapeColor = "brown";
    fourtyfive.visible = false;

    fourtysix = createSprite(930, 635, 350, 05);
    fourtysix.shapeColor = "brown";
    fourtysix.visible = false;

    fourtyseven = createSprite(973, 60, 170, 05);
    fourtyseven.shapeColor = "brown";
    fourtyseven.visible = false;

    fourtyeight = createSprite(750, 60, 205, 05);
    fourtyeight.shapeColor = "brown";
    fourtyeight.visible = false;

    fourtynine = createSprite(480, 60, 270, 05);
    fourtynine.shapeColor = "brown";
    fourtynine.visible = false;

    fifty = createSprite(973, 90, 172, 05);
    fifty.shapeColor = "brown";
    fifty.visible = false;

    fiftyone = createSprite(649, 90, 280, 05);
    fiftyone.shapeColor = "brown";
    fiftyone.visible = false;

    fiftytwo = createSprite(410, 90, 80, 05);
    fiftytwo.shapeColor = "brown";
    fiftytwo.visible = false;

    fiftythree = createSprite(391, 125, 40, 05);
    fiftythree.shapeColor = "brown";
    fiftythree.visible = false;

    fiftyfour = createSprite(426, 195, 42, 05);
    fiftyfour.shapeColor = "brown";
    fiftyfour.visible = false;

    fiftyfive = createSprite(426, 295, 42, 05);
    fiftyfive.shapeColor = "brown";
    fiftyfive.visible = false;

    fiftysix = createSprite(320, 230, 42, 05);
    fiftysix.shapeColor = "brown";
    fiftysix.visible = false;

    fiftyseven = createSprite(360, 365, 42, 05);
    fiftyseven.shapeColor = "brown";
    fiftyseven.visible = false;

    fiftyeight = createSprite(395, 330, 42, 05);
    fiftyeight.shapeColor = "brown";
    fiftyeight.visible = false;

    fiftynine= createSprite(460, 330, 42, 05);
    fiftynine.shapeColor = "brown";
    fiftynine.visible = false;

    sixty = createSprite(395, 465, 42, 05);
    sixty.shapeColor = "brown";
    sixty.visible = false;

    sixtyone = createSprite(427, 570, 42, 05);
    sixtyone.shapeColor = "brown";
    sixtyone.visible = false;

    hundredandthirteen = createSprite(427, 605, 116, 05);
    hundredandthirteen.shapeColor = "brown";
    hundredandthirteen.visible = false;

    sixtytwo = createSprite(530, 125, 40, 05);
    sixtytwo.shapeColor = "brown";
    sixtytwo.visible = false;

    hundredandfourteen= createSprite(805, 125, 40, 05);
    hundredandfourteen.shapeColor = "brown";
    hundredandfourteen.visible = false;

    sixtythree = createSprite(775, 155, 40, 05);
    sixtythree.shapeColor = "brown";
    sixtythree.visible = false;

    sixtyfour = createSprite(940, 435, 40, 05);
    sixtyfour.shapeColor = "brown";
    sixtyfour.visible = false;

    sixtyfive = createSprite(1005, 435, 40, 05);
    sixtyfive.shapeColor = "brown";
    sixtyfive.visible = false;

    sixtysix = createSprite(975, 465, 40, 05);
    sixtysix.shapeColor = "brown";
    sixtysix.visible = false;

    sixtyseven = createSprite(700, 540, 40, 05);
    sixtyseven.shapeColor = "brown";
    sixtyseven.visible = false;

    sixtyeight = createSprite(529, 605, 40, 05);
    sixtyeight.shapeColor = "brown";
    sixtyeight.visible = false;

    sixtynine = createSprite(581, 570, 78, 05);
    sixtynine.shapeColor = "brown";
    sixtynine.visible = false;

    seventy = createSprite(581, 535, 78, 05);
    seventy.shapeColor = "brown";
    seventy.visible = false;

    seventytwo = createSprite(784, 570, 70, 05);
    seventytwo.shapeColor = "brown";
    seventytwo.visible = false;

    seventythree = createSprite(942, 570, 175, 05);
    seventythree.shapeColor = "brown";
    seventythree.visible = false;

    seventyfour = createSprite(854, 535, 210, 05);
    seventyfour.shapeColor = "brown";
    seventyfour.visible = false;

    seventyfive = createSprite(802, 500, 314, 05);
    seventyfive.shapeColor = "brown";
    seventyfive.visible = false;

    seventysix = createSprite(971, 125, 170, 05);
    seventysix.shapeColor = "brown";
    seventysix.visible = false;

    seventyeight = createSprite(942, 157, 175, 05);
    seventyeight.shapeColor = "brown";
    seventyeight.visible = false;

    seventynine = createSprite(907, 192, 175, 05);
    seventynine.shapeColor = "brown";
    seventynine.visible = false;

    eighty = createSprite(670, 192, 249, 05);
    eighty.shapeColor = "brown";
    eighty.visible = false;

    eightyone = createSprite(652, 125, 143, 05);
    eightyone.shapeColor = "brown";
    eightyone.visible = false;

    eightytwo = createSprite(617, 160, 216, 05);
    eightytwo.shapeColor = "brown";
    eightytwo.visible = false;

    eightythree = createSprite(580, 230, 141, 05);
    eightythree.shapeColor = "brown";
    eightythree.visible = false;

    eightyfour = createSprite(800, 230, 240, 05);
    eightyfour.shapeColor = "brown";
    eightyfour.visible = false;

    eightyfive = createSprite(823, 260, 143, 05);
    eightyfive.shapeColor = "brown";
    eightyfive.visible = false;

    eightysix = createSprite(600, 260, 234, 05);
    eightysix.shapeColor = "brown";
    eightysix.visible = false;

    eightyseven = createSprite(701, 295, 173, 05);
    eightyseven.shapeColor = "brown";
    eightyseven.visible = false;

    eightyeight = createSprite(545, 295, 71, 05);
    eightyeight.shapeColor = "brown";
    eightyeight.visible = false;

    eightynine = createSprite(1063, 295, 85, 05);
    eightynine.shapeColor = "brown";
    eightynine.visible = false;

    ninety = createSprite(850, 295, 85, 05);
    ninety.shapeColor = "brown";
    ninety.visible = false;

    ninetyone = createSprite(840, 330, 110, 05);
    ninetyone.shapeColor = "brown";
    ninetyone.visible = false;

    ninetytwo = createSprite(820, 365, 140, 05);
    ninetytwo.shapeColor = "brown";
    ninetytwo.visible = false;

    ninetythree = createSprite(666, 330, 175, 05);
    ninetythree.shapeColor = "brown";
    ninetythree.visible = false;

    ninetyfour = createSprite(617, 365, 216, 05);
    ninetyfour.shapeColor = "brown";
    ninetyfour.visible = false;

    ninetyfive = createSprite(617, 400, 144, 05);
    ninetyfive.shapeColor = "brown";
    ninetyfive.visible = false;

    ninetysix = createSprite(562, 500, 105, 05);
    ninetysix.shapeColor = "brown";
    ninetysix.visible = false;

    ninetyseven = createSprite(600, 435, 180, 05);
    ninetyseven.shapeColor = "brown";
    ninetyseven.visible = false;

    ninetyeight = createSprite(751, 435, 71, 05);
    ninetyeight.shapeColor = "brown";
    ninetyeight.visible = false;

    ninetynine = createSprite(700, 465, 314, 05);
    ninetynine.shapeColor = "brown";
    ninetynine.visible = false;

    hundred = createSprite(890, 107, 05, 43);
    hundred.shapeColor = "brown";
    hundred.visible = false;

    hundredandone = createSprite(785, 108, 05, 43);
    hundredandone.shapeColor = "brown";
    hundredandone.visible = false;

    hundredandtwo = createSprite(512, 108, 05, 43);
    hundredandtwo.shapeColor = "brown";
    hundredandtwo.visible = false;

    hundredandthree = createSprite(580, 312, 05, 43);
    hundredandthree.shapeColor = "brown";
    hundredandthree.visible = false;

    hundredandfour = createSprite(789, 312, 05, 43);
    hundredandfour.shapeColor = "brown";
    hundredandfour.visible = false;

    hundredandfive = createSprite(750, 348, 05, 43);
    hundredandfive.shapeColor = "brown";
    hundredandfive.visible = false;

    hundredandsix = createSprite(955, 518, 05, 43);
    hundredandsix.shapeColor = "brown";
    hundredandsix.visible = false;

    hundredandseven = createSprite(547, 550, 05, 40);
    hundredandseven.shapeColor = "brown";
    hundredandseven.visible = false;

    hundredandeight = createSprite(685, 570, 05, 67);
    hundredandeight.shapeColor = "brown";
    hundredandeight.visible = false;

    hundredandnine = createSprite(855, 433, 05, 73);
    hundredandnine.shapeColor = "brown";
    hundredandnine.visible = false;

    hundredandfifteen = createSprite(990, 515, 05, 100);
    hundredandfifteen.shapeColor = "brown";
    hundredandfifteen.visible = false;

    hundredandten = createSprite(1080, 334, 40, 05);
    hundredandten.shapeColor = "brown";
    hundredandten.visible = false;

    hundredandeleven = createSprite(790, 400, 140, 05);
    hundredandeleven.shapeColor = "brown";
    hundredandeleven.visible = false;

}

function draw () {
    
    background("black");

    if(gameState == "initialState"){
        if(mousePressedOver(playButton)){
            playButton.visible = false;
            l1.visible         = true;
            l2.visible         = true;
            l3.visible         = true;
        }
    
        if(mousePressedOver(l1)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            fort.visible     = true;
            doraRun.visible  = true;
            gameState        = "level1Play";

        }

        if(mousePressedOver(l2)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level2Play";
            move();
        }

        if(mousePressedOver(l3)){
            openCard.visible = false;
            l1.visible       = false;
            l2.visible       = false;
            l3.visible       = false;
            gameState        = "level3Play";
            stepUp();
        }
    }

    drawSprites();   

    if(gameState == "level1Play"){
        fort.visible = true;
        if(fort.x < 650) {
           fort.x = 700;
        }

         obstacle();

         textSize(35);
         stroke("yellow");
         fill("#ff006e");
         text("SCORE : " + score, 50, 50);

         textSize(28);
         //stroke("pink");
         fill("brown");
         textFont('Comic Sans Ms');
         text("PRESS SPACE TO JUMP AND REACH 200 TO MOVE TO NEXT LEVEL", 300, 100);

         if(keyDown("space")) {
            doraRun.velocityY = -12;
         }

         //giving gravity to dora
         doraRun.velocityY = doraRun.velocityY + 0.8;

         //to make dora stand on the invisible line
         doraRun.collide(invisibleGround);

         if(obstaclesGroup.isTouching(doraRun)){
             gameState = "level1End";
         }

         if(keyDown("space")) {
            score = score + 1;
         }  

         if(score > 200) {  
            gameState = "level2Play";
             reset();
         }

         if(gameState === "level2Play" && mousePressedOver(arrow)){
            move(); 
         }
 
         line = createSprite(680, 02, 1300, 10);
         line.visible = false;
         doraRun.collide(line);

    }

    if(gameState == "level1End"){
       fort.visible = false;
       doraRun.changeAnimation("sadDora",sadDoraImg);
       doraRun.scale = 0.23;
       gameOver.visible = true;
       restart.visible = true;
       doraRun.velocityY = 0;
       obstaclesGroup.setLifetimeEach(-1);
       obstaclesGroup.setVelocityXEach(0);

       if(mousePressedOver(restart)) {
        level1reset();
       }
    }

         if(gameState === "level2Play"){

        if (keyDown("LEFT_ARROW")) {
            doraWalk.x = doraWalk.x - 4;
        }

        if (keyDown("RIGHT_ARROW")) {
            doraWalk.x = doraWalk.x + 4;
        }

        if (keyDown("UP_ARROW")) {
            doraWalk.y = doraWalk.y - 4;
        }

        if (keyDown("DOWN_ARROW")) {
            doraWalk.y = doraWalk.y + 4;
        }

        monkey.bounceOff(fourtyfive);
        monkey.bounceOff(twentyseven);

        lion.bounceOff(thirtytwo);
        lion.bounceOff(thirteen);

        bear.bounceOff(eleven);
        bear.bounceOff(twentyfive);

        snake.bounceOff(hundredandone);
        snake.bounceOff(hundredandtwo);

        doraWalk.bounceOff(one);
        doraWalk.bounceOff(two);
        doraWalk.bounceOff(three);
        doraWalk.bounceOff(four);
        doraWalk.bounceOff(five);
        doraWalk.bounceOff(six);
        doraWalk.bounceOff(seven);
        doraWalk.bounceOff(eight);
        doraWalk.bounceOff(nine);
        doraWalk.bounceOff(ten);

        doraWalk.bounceOff(eleven);
        doraWalk.bounceOff(twelve);
        doraWalk.bounceOff(thirteen);
        doraWalk.bounceOff(fourteen);
        doraWalk.bounceOff(fifteen);
        doraWalk.bounceOff(sixteen);
        doraWalk.bounceOff(seventeen);
        doraWalk.bounceOff(eighteen);
        doraWalk.bounceOff(nineteen);
        doraWalk.bounceOff(twenty);

        doraWalk.bounceOff(twentyone);
        doraWalk.bounceOff(twentytwo);
        doraWalk.bounceOff(twentythree);
        doraWalk.bounceOff(twentyfour);
        doraWalk.bounceOff(twentyfive);
        doraWalk.bounceOff(twentysix);
        doraWalk.bounceOff(twentyseven);
        doraWalk.bounceOff(twentyeight);
        doraWalk.bounceOff(twentynine);
        doraWalk.bounceOff(thirty);

        doraWalk.bounceOff(thirtyone);
        doraWalk.bounceOff(thirtytwo);
        doraWalk.bounceOff(thirtythree);
        doraWalk.bounceOff(thirtyfour);
        doraWalk.bounceOff(thirtyfive);
        doraWalk.bounceOff(thirtysix);
        doraWalk.bounceOff(thirtyseven);
        doraWalk.bounceOff(thirtyeight);
        doraWalk.bounceOff(thirtynine);
        doraWalk.bounceOff(fourty);

        doraWalk.bounceOff(fourtyone);
        doraWalk.bounceOff(fourtytwo);
        doraWalk.bounceOff(fourtythree);
        doraWalk.bounceOff(fourtyfour);
        doraWalk.bounceOff(fourtyfive);
        doraWalk.bounceOff(fourtysix);
        doraWalk.bounceOff(fourtyseven);
        doraWalk.bounceOff(fourtyeight);
        doraWalk.bounceOff(fourtynine);
        doraWalk.bounceOff(fifty);

        doraWalk.bounceOff(fiftyone);
        doraWalk.bounceOff(fiftytwo);
        doraWalk.bounceOff(fiftythree);
        doraWalk.bounceOff(fiftyfour);
        doraWalk.bounceOff(fiftyfive);
        doraWalk.bounceOff(fiftysix);
        doraWalk.bounceOff(fiftyseven);
        doraWalk.bounceOff(fiftyeight);
        doraWalk.bounceOff(fiftynine);
        doraWalk.bounceOff(sixty);

        doraWalk.bounceOff(sixty);
        doraWalk.bounceOff(sixtyone);
        doraWalk.bounceOff(sixtytwo);
        doraWalk.bounceOff(sixtythree);
        doraWalk.bounceOff(sixtyfour);
        doraWalk.bounceOff(sixtyfive);
        doraWalk.bounceOff(sixtysix);
        doraWalk.bounceOff(sixtyseven);
        doraWalk.bounceOff(sixtyeight);
        doraWalk.bounceOff(sixtynine);
        doraWalk.bounceOff(seventy);

        doraWalk.bounceOff(seventy);
        doraWalk.bounceOff(seventytwo);
        doraWalk.bounceOff(seventythree);
        doraWalk.bounceOff(seventyfour);
        doraWalk.bounceOff(seventyfive);
        doraWalk.bounceOff(seventysix);
        doraWalk.bounceOff(seventyeight);
        doraWalk.bounceOff(seventynine);
        doraWalk.bounceOff(eighty);

        doraWalk.bounceOff(eighty);
        doraWalk.bounceOff(eightyone);
        doraWalk.bounceOff(eightytwo);
        doraWalk.bounceOff(eightythree);
        doraWalk.bounceOff(eightyfour);
        doraWalk.bounceOff(eightyfive);
        doraWalk.bounceOff(eightysix);
        doraWalk.bounceOff(eightyseven);
        doraWalk.bounceOff(eightyeight);
        doraWalk.bounceOff(eightynine);
        doraWalk.bounceOff(ninety);

        doraWalk.bounceOff(ninety);
        doraWalk.bounceOff(ninetyone);
        doraWalk.bounceOff(ninetytwo);
        doraWalk.bounceOff(ninetythree);
        doraWalk.bounceOff(ninetyfour);
        doraWalk.bounceOff(ninetyfive);
        doraWalk.bounceOff(ninetysix);
        doraWalk.bounceOff(ninetyseven);
        doraWalk.bounceOff(ninetyeight);
        doraWalk.bounceOff(ninetynine);
        doraWalk.bounceOff(hundred);

        doraWalk.bounceOff(hundred);
        doraWalk.bounceOff(hundredandone);
        doraWalk.bounceOff(hundredandtwo);
        doraWalk.bounceOff(hundredandthree);
        doraWalk.bounceOff(hundredandfour);
        doraWalk.bounceOff(hundredandfive);
        doraWalk.bounceOff(hundredandsix);
        doraWalk.bounceOff(hundredandseven);
        doraWalk.bounceOff(hundredandeight);
        doraWalk.bounceOff(hundredandnine);
        doraWalk.bounceOff(hundredandten);

        doraWalk.bounceOff(hundredandeleven);
        doraWalk.bounceOff(hundredandtwelve);
        doraWalk.bounceOff(hundredandthirteen);
        doraWalk.bounceOff(hundredandfourteen);
        doraWalk.bounceOff(hundredandfifteen);

        if(doraWalk.isTouching(bear) || doraWalk.isTouching(snake) || doraWalk.isTouching(lion) || doraWalk.isTouching(monkey)) {
            doraWalk.x = 1150;
            doraWalk.y = 325;
        }

    }

    if(gameState === "level3Play"){

        swiper.bounceOff(paddle1);
        swiper.bounceOff(paddle2);

        swiper1.bounceOff(paddle1);
        swiper1.bounceOff(paddle2);

        swiper2.bounceOff(paddle1);
        swiper2.bounceOff(paddle2);

        swiper3.bounceOff(paddle1);
        swiper3.bounceOff(paddle2);

        dora.collide(paddle1);
        dora.collide(paddle2);

        if(keyDown("LEFT_ARROW")){
           dora.x = dora.x - 5;
        }

        if(keyDown("RIGHT_ARROW")){
            dora.x = dora.x + 5;
         }

         if(keyDown("UP_ARROW")){
            dora.y = dora.y - 5;
         }

         if(keyDown("DOWN_ARROW")){
            dora.y = dora.y + 5;
         }
        
        if(dora.isTouching(swiper) || dora.isTouching(swiper1) || dora.isTouching(swiper2) || dora.isTouching(swiper3)) {
            dora.x = 180;
            dora.y = 300;
        }

        if(dora.isTouching(final)){
            dora.visible    = false;
            hill.visible    = false;
            swiper.visible  = false;
            swiper1.visible = false;
            swiper2.visible = false;
            swiper3.visible = false;
            final.visible   = false;

            end = createSprite(width/2, height/2, width, height);
            end.addImage("end",endImg);
            end.scale = 2;

            treasure = createSprite(160, 500, 100, 100);
            treasure.addImage(treasureImg);
            treasure.scale = 0.7;

            var a = color(random(0, 255), random(0, 255), random(0, 255));
            fill(a);
            textSize(35);
            text("YOU WON ", 50, 50, 50, 50);
        }
        
        
        noStroke();
        var c = color(random(0, 255), random(0, 255), random(0, 255));
        fill(c);
        textSize(30);
        text("YOUR ", width-120,height/2-250);
        textSize(25);
        text("TREASURE ", width-150,height/2-100);
        textSize(30);
        text("IS ", width-100,height/2+50);
        text("HERE ", width-120,height/2+200);

    }  

}

function level1reset(){
    gameState = "level1Play";
    gameOver.visible = false;
    restart.visible  = false; 
    doraRun.changeAnimation("doraRun", doraRunImg); 
    doraRun.scale = 0.6;
    obstaclesGroup.destroyEach();
    score = 0;
    openCard.destroy();
    l1.destroy();
    l2.destroy();
    l3.destroy();
}

//creating obstacles
function obstacle () {
    if(frameCount % 70 === 0) {
        thorn = createSprite(width,610,40,10);
        thorn.velocityX = -9;
        thorn.lifetime  = 150;
        thorn.addImage(thornImg);
        thorn.scale = 0.7;

        obstaclesGroup.add(thorn);
    }
}

function reset () {
    nextLevel.visible = true;
    arrow.visible     = true;
    doraRun.destroy();
    fort.destroy();
    obstaclesGroup.destroyEach();    
}

function move () {
    gameState = "level2Play";
    openCard.visible = false;
    l1.visible       = false;
    l2.visible       = false;
    l3.visible       = false;

    jungle.visible   = true;
    monkey.visible   = true;
    lion.visible     = true;
    bear.visible     = true;
    snake.visible    = true;

    doraWalk.visible = true;

    one.visible   = true;
    two.visible   = true;
    three.visible = true;
    four.visible  = true;
    five.visible  = true;
    six.visible   = true;
    seven.visible = true;
    eight.visible = true;
    nine.visible  = true;
    ten.visible   = true;

    eleven.visible    = true;
    twelve.visible    = true;
    thirteen.visible  = true;
    fourteen.visible  = true;
    fifteen.visible   = true;
    sixteen.visible   = true;
    seventeen.visible = true;
    eighteen.visible = true;
    nineteen.visible  = true;
    twenty.visible    = true;

    twentyone.visible    = true;
    twentytwo.visible    = true;
    twentythree.visible  = true;
    twentyfour.visible   = true;
    twentyfive.visible   = true;
    twentysix.visible    = true;
    twentyseven.visible  = true;
    twentyeight.visible  = true;
    twentynine.visible   = true;
    thirty.visible       = true;

    thirtyone.visible    = true;
    thirtytwo.visible    = true;
    thirtythree.visible  = true;
    thirtyfour.visible   = true;
    thirtyfive.visible   = true;
    thirtysix.visible    = true;
    thirtyseven.visible   = true;
    thirtyeight.visible  = true;
    thirtynine.visible   = true;
    fourty.visible       = true;

    fourtyone.visible   = true;
    fourtytwo.visible   = true;
    fourtythree.visible = true;
    fourtyfour.visible  = true;
    fourtyfive.visible  = true;
    fourtysix.visible   = true;
    fourtyseven.visible = true;
    fourtyeight.visible = true;
    fourtynine.visible  = true;
    fifty.visible       = true;

    fiftyone.visible    = true;
    fiftytwo.visible    = true;
    fiftythree.visible  = true;
    fiftyfour.visible   = true;
    fiftyfive.visible   = true;
    fiftysix.visible    = true;
    fiftyseven.visible  = true;
    fiftyeight.visible  = true;
    fiftynine.visible   = true;
    sixty.visible       = true;

    sixtyone.visible    = true;
    sixtytwo.visible    = true;
    sixtythree.visible  = true;
    sixtyfour.visible   = true;
    sixtyfive.visible   = true;
    sixtysix.visible    = true;
    sixtyseven.visible  = true;
    sixtyeight.visible  = true;
    sixtynine.visible   = true;
    seventy.visible     = true;

    seventytwo.visible   = true;
    seventythree.visible = true;
    seventyfour.visible  = true;
    seventyfive.visible  = true;
    seventysix.visible   = true;
    seventyeight.visible = true;
    seventynine.visible  = true;
    eighty.visible       = true;

    eightyone.visible   = true;
    eightytwo.visible   = true;
    eightythree.visible = true;
    eightyfour.visible  = true;
    eightyfive.visible  = true;
    eightysix.visible   = true;
    eightyseven.visible = true;
    eightyeight.visible = true;
    eightynine.visible  = true;
    ninety.visible      = true;

    ninetyone.visible   = true;
    ninetytwo.visible   = true;
    ninetythree.visible = true;
    ninetyfour.visible  = true;
    ninetyfive.visible  = true;
    ninetysix.visible   = true;
    ninetyseven.visible = true;
    ninetyeight.visible = true;
    ninetynine.visible  = true;
    hundred.visible     = true;

    hundredandone.visible   = true;
    hundredandtwo.visible   = true;
    hundredandthree.visible = true;
    hundredandfour.visible  = true;
    hundredandfive.visible  = true;
    hundredandsix.visible   = true;
    hundredandseven.visible = true;
    hundredandeight.visible = true;
    hundredandnine.visible  = true;
    hundredandten.visible   = true;

    hundredandeleven.visible   = true;
    hundredandtwelve.visible   = true;
    hundredandthirteen.visible = true;
    hundredandfourteen.visible = true; 
    hundredandfifteen.visible  = true;
}

function stepUp () {

  gameState = "level3Play";
  openCard.visible = false;
  l1.visible       = false;
  l2.visible       = false;
  l3.visible       = false;

  hill.visible    = true;
  dora.visible    = true;
  swiper.visible  = true;
  swiper1.visible = true;
  swiper2.visible = true;
  swiper3.visible = true;

  final.visible   = true;

  swiper.velocityY  = 10;
  swiper1.velocityY = 10;
  swiper2.velocityY = 10;
  swiper3.velocityY = 10;
   
}