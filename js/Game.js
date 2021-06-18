class Game {
    constructor(){}

    start(){
        if (gameState === 0){
            background(bg_img);
            if (mousePressedOver(playButton)){
                gameState = 1
            }
            if (gameState === 1){
                clear();
                background(bg_img2);     
            }

        }
        level_1 = createSprite(displayWidth/2-600,displayHeight/2-200);
            level_1.addImage(level1_img);

            level_2 = createSprite(displayWidth/2-300,displayHeight/2-200);
            level_2.addImage(level2_img);

            level_3 = createSprite(displayWidth/2,displayHeight/2-200);
            level_3.addImage(level3_img);

            level_4 = createSprite(displayWidth/2+300,displayHeight/2-200);
            level_4.addImage(level4_img);
            
            level_5 = createSprite(displayWidth/2+600,displayHeight/2-200);
            level_5.addImage(level5_img);
            
            level_6 = createSprite(displayWidth/2-600,displayHeight/2+200);
            level_6.addImage(level6_img);
            level_6.scale = 1.45;
            
            level_7 = createSprite(displayWidth/2-300,displayHeight/2+200);
            level_7.addImage(level7_img);
            level_7.scale = 1.45;
            
            level_8 = createSprite(displayWidth/2,displayHeight/2+200);
            level_8.addImage(level8_img);
            level_8.scale = 1.45;

            level_9 = createSprite(displayWidth/2+300,displayHeight/2+200);
            level_9.addImage(level9_img);
            level_9.scale = 1.45;

            level_10 = createSprite(displayWidth/2+600,displayHeight/2+200);
            level_10.addImage(level10_img);
            level_10.scale = 1.45;

            level_locked = createSprite(displayWidth/2-600,displayHeight/2);
            level_locked.addImage(lockedLevel_img);
            level_locked.scale = 1.45;
    }
    selectscreen(){
        if (gameState === 1){
            drawSprites();
        }
        if (mousePressedOver(level_1)){
            gameState = 2  
        }
    }
    playscreen(){
        player.display();
    }
}