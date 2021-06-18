const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player,bg_img2,player_animation,bg_img,bg_img3;
var level1_img,level2_img,level3_img,level4_img,level5_img,level6_img,
    level7_img,leve8l_img,level9_img,level10_img,lockedLevel_img,
    level_1,level_2,level_3,level_4,level_5,level_6,level_7,level_8,level_9,level_10,level_locked
var gameState = 0;
var game;
var playButton;
var displayWidth, displayHeight;

function preload(){

    player_animation = loadAnimation("img/PC1.png","img/PC2.png","img/PC3.png","img/PC4.png",
                                        "img/PC5.png","img/PC6.png","img/PC7.png","img/PC8.png");
    bg_img = loadImage("img/mainmenu1.png");
    bg_img2 = loadImage("img/selectbg.png");
    bg_img3 = loadImage("img/bg.png");
    level1_img = loadImage("img/level1.png");
    level2_img = loadImage("img/level2.png");
    level3_img = loadImage("img/level3.png");
    level4_img = loadImage("img/level4.png");
    level5_img = loadImage("img/level5.png");
    level6_img = loadImage("img/level6.png");
    level7_img = loadImage("img/level7.png");
    level8_img = loadImage("img/level8.png");
    level9_img = loadImage("img/level9.png");
    level10_img = loadImage("img/level10.png");
    lockedLevel_img = loadImage("img/lockedlevel.png");

}

function setup(){

    createCanvas(displayWidth,displayHeight);

    engine = Engine.create();
    world = engine.world;

    game = new Game();
    player = new Player(displayWidth/2-600,displayHeight/2+200,100,100)

    playButton = createSprite(displayWidth/2+3,displayHeight/2+275,150,130);
    playButton.visible = false;

}

function draw(){

    Engine.update(engine);
    if (gameState === 0){
        game.start();
    }
    if (gameState === 1){
        game.selectscreen();
    }
    if (gameState === 2){
        // clear();
        background(bg_img3);
        game.playscreen();
        // player.display();
        hide();
    }


}
function hide(){
    level_1.visible = false;
    level_2.visible = false;
    level_3.visible = false;
    level_4.visible = false;
    level_5.visible = false;
    level_6.visible = false;
    level_7.visible = false;
    level_8.visible = false;
    level_9.visible = false;
    level_10.visible = false;
    level_locked.visible = false;
}