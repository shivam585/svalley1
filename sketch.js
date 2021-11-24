
var backgroundimg
var rutuinstart,rutuimageinstart
var messagebox,messageboximage,messagebox2image
var gamestate="serve"
var backbutton1image
var window1,windowimage
var backbutton1,backbutton2
var rutugamelogo,rutugamelogoimage
var   backgroundi
var  foresttile1image, foresttile2image, foresttile3image, foresttile5image
var countdistancex1=0
var rutuinforest
var foresttilesgroup
var rutuinforestrunning,rutuinforestidle,rutuinforestjump
var foresttile1
var brickwallimage
var colaimage
var pizzaimage
var hamburgerimage
var hotdogimage
var invisibleground1, invisiblewall1

function preload()
{
 backgroundimg=loadImage("images/grassyb.png")
citybackgroundimg=loadImage("images/city5.jpg")



 rutuimageinstart=loadAnimation("rutuinforest/idle (1).png")
 dinoimageinstart=loadAnimation("dino/dinoidle1.png")
 messageboximage=loadImage("images/messagebox2.png")
 messagebox2image=loadImage("images/messagebox3.png")
 backbutton1image=loadImage("backbuttons/backbutton2.png")
 windowimage=loadImage("images/Windows.png")
 rutugamelogoimage=loadImage("images/rgamelogo.png")
 levelnextbuttonimage=loadImage("images/fantasynextbutton.png")
 levelbackbuttonimage=loadImage("images/fantasybackbuton2.png")

 
rutuinforestidle=loadAnimation("rutuinforest/rutuidle1.png")
rutuinforestjump=loadAnimation("rutuinforest/Jump (6).png")
rutuinforestrunning=loadAnimation("rutuinforest/Run (1).png","rutuinforest/Run (4).png","rutuinforest/Run (5).png","rutuinforest/Run (7).png","rutuinforest/Run (8).png")

colaimage=loadImage("junkfoodobstacles/cartooncola.png")
pizzaimage=loadImage("junkfoodobstacles/americanpizza.png")
hamburgerimage=loadImage("junkfoodobstacles/cartoonhamburger.png")
hotdogimage=loadImage("junkfoodobstacles/hotdog.png")

}



function setup() {
  createCanvas(windowWidth-20,windowHeight-40);
  foresttilesgroup=new Group()
  forestobstaclegroup=new Group()


 citybackground=createSprite(width/2,height/2,width+1000000,height+1000)
 citybackground.addImage(citybackgroundimg)
  citybackground.scale=0.29
  citybackground.visible=false
 

  
  invisibleground1=createSprite(width/2,650,width,30)
  invisibleground1.visible=false

  invisiblewall1=createSprite(40,height/2,30,height)
  invisiblewall1.visible=false


//g=createSprite(400,400,20,20)
rutuinstart=createSprite(1000,400,40,40)
rutuinstart.addAnimation("rutuinstart",rutuimageinstart)

rutuinforest=new forestrutu()
rutuinforest.spt.visible=false
rutuinforest.spt.setCollider("rectangle",-170,150,100,150)

dinoinstart=createSprite(330,600,40,40)
dinoinstart.addAnimation("dinoinstart",dinoimageinstart)
dinoinstart.scale=0.8
dinoinstart.visible=false

messagebox2=createSprite(700,250,50,50)
messagebox2.scale=1.3
messagebox2.visible=false
messagebox2.addImage(messageboximage)

messagebox3=createSprite(500,350,50,50)
messagebox3.scale=0.9
messagebox3.visible=false
messagebox3.addImage(messagebox2image)

backbutton1=createSprite(60,60,30,30)
backbutton1.addImage(backbutton1image)
backbutton1.visible=false

backbutton2=createSprite(60,60,30,30)
backbutton2.addImage(backbutton1image)
backbutton2.visible=false

backbutton3=createSprite(60,60,30,30)
backbutton3.addImage(backbutton1image)
backbutton3.visible=false



window1=createSprite(width/2,height/2,100,100)
window1.addImage(windowimage)
window1.visible=false


messagebox=createSprite(1050,350,50,50)
messagebox.scale=0.9
messagebox.addImage(messageboximage)
messagebox.visible=false

rutugamelogo=createSprite(800,50,100,40)
rutugamelogo.addImage(rutugamelogoimage)

levelnextbutton=createSprite(1100,600,50,50)
levelnextbutton.addImage(levelnextbuttonimage)
levelnextbutton.scale=0.6
levelnextbutton.visible=false

levelbackbutton=createSprite(400,600,50,50)
levelbackbutton.addImage(levelbackbuttonimage)
levelbackbutton.scale=0.6
levelbackbutton.visible=false

this.submitbutton= createButton('done');
this.submitbutton.position(1000,370);
this.submitbutton.hide();

this.submitbutton.mousePressed(()=>{
            
this.input1.hide();
this.submitbutton.hide()
 gamestate="iknowname"

 
});



this.input1 = createInput("player");
this.input1.position(950, 330);
this.input1.hide()

if(gamestate==="serve"){
this.storyButton = createButton("Adventures");
this.storyButton.position(300, height / 2 -5);
this.storyButton.class("customButton")

this.minigamesButton = createButton("mini games");
this.minigamesButton.position(300,400);
this.minigamesButton.class("customButton")

this.instructionButton = createButton("About game");
this.instructionButton.position(300, 460);
this.instructionButton.class("customButton")

this.aboutButton = createButton("About me");
this.aboutButton.position(300, 520);
this.aboutButton.class("customButton")
this.aboutButton.hide()

this.storynextbutton1=createButton("next")
this.storynextbutton1.position(1150,350)
this.storynextbutton1.class("nextButton")
this.storynextbutton1.hide();

this.storypreviousbutton1=createButton("prev")
this.storypreviousbutton1.position(900,350)
this.storypreviousbutton1.class("previousButton")
this.storypreviousbutton1.hide();

this.storynextbutton2=createButton("next")
this.storynextbutton2.position(1150,350)
this.storynextbutton2.class("nextButton")
this.storynextbutton2.hide();

this.storypreviousbutton2=createButton("prev")
this.storypreviousbutton2.position(900,350)
this.storypreviousbutton2.class("previousButton")
this.storypreviousbutton2.hide();

this.storynextbutton3=createButton("next")
this.storynextbutton3.position(1150,350)
this.storynextbutton3.class("nextButton")
this.storynextbutton3.hide();

this.storypreviousbutton3=createButton("prev")
this.storypreviousbutton3.position(900,350)
this.storypreviousbutton3.class("previousButton")
this.storypreviousbutton3.hide();

this.level1=createButton("junckfood fighters")
this.level1.position(670,150)
this.level1.class("levelButton")
this.level1.hide()

this.level2=createButton("santa help")
this.level2.position(670,240)
this.level2.class("levelButton")
this.level2.hide()

this.level3=createButton("swampy zombie")
this.level3.position(670,330)
this.level3.class("levelButton")
this.level3.hide()

this.level4=createButton("save rutu")
this.level4.position(670,420)
this.level4.class("levelButton")
this.level4.hide()




}


this.aboutButton.mousePressed(()=>{

 
  messagebox2.visible=true
  backbutton1.visible=true
  rutuinstart.y=600
  rutuinstart.x=900
  gamestate="tellaboutme"

  });

  this.instructionButton.mousePressed(()=>{
    backbutton2.visible=true
    window1.visible=true
    gamestate="tellinstruction"
    });

    this.storyButton.mousePressed(()=>{
      backbutton3.visible=true
      this.input1.show()
      rutuinstart.y=600
      rutuinstart.x=1000
      gamestate="storywise1"
      });
    
      this.storypreviousbutton1.mousePressed(()=>{
        backbutton3.visible=true
        this.storypreviousbutton1.hide()
        this.storynextbutton1.hide()

        this.input1.show()
        rutuinstart.y=600
        rutuinstart.x=1000
        gamestate="storywise1"
        });
    
        this.storynextbutton1.mousePressed(()=>{
          backbutton3.visible=true
          this.storypreviousbutton1.hide()
          this.storynextbutton1.hide()
          text("and i am going to help you in" ,870,320)
          rutuinstart.y=600
          rutuinstart.x=1000
          gamestate="storywise2"
          });

          this.storypreviousbutton2.mousePressed(()=>{
            backbutton3.visible=true
            this.storypreviousbutton2.hide()
            this.storynextbutton2.hide()
                rutuinstart.y=600
            rutuinstart.x=1000
            gamestate="iknowname"
            });
        
            this.storynextbutton2.mousePressed(()=>{
              backbutton3.visible=true
              this.storypreviousbutton2.hide()
              this.storynextbutton2.hide()
              rutuinstart.y=600
              rutuinstart.x=1000
              gamestate="storywise3"
              });
    
              this.storypreviousbutton3.mousePressed(()=>{
                backbutton3.visible=true
                this.storypreviousbutton3.hide()
                this.storynextbutton3.hide()
                   
                gamestate="storywise2"
                dinoinstart.visible=false
                messagebox3.visible=false
                messagebox.visible=true

                });
    
                this.storynextbutton3.mousePressed(()=>{
                  backbutton3.visible=true
                  this.storypreviousbutton3.hide()
                  this.storynextbutton3.hide()
                  rutuinstart.y=400
                  rutuinstart.x=1100
                  messagebox.visible=false
                  messagebox3.visible=false
                  gamestate="levels"
                

                  });
    
    this.level1.mousePressed(()=>{
backbutton3.visible=true

gamestate="level1story"

    })

   
    
    
    
    }

 

function draw() {
  background(backgroundimg)
  fill("black")
  textSize(40)
text(mouseX+":"+mouseY,200,100)
if(gamestate==="level1game"){
//translate(  -rutuinforest.spt.x + width/2 , 0);


if(citybackground.x<500){
  citybackground.x= width/2  
    
  }
}


  drawSprites();

if(gamestate==="serve"){
aboutButton.show();
storyButton.show();
instructionButton.show();
minigamesButton.show();
this.storypreviousbutton1.hide();
this.storynextbutton1.hide();
this.storypreviousbutton2.hide()
this.storynextbutton2.hide()
rutugamelogo.visible=true
}
  
if(gamestate==="storywise1"){

  messagebox.visible=true
this.submitbutton.show()

this.aboutButton.hide()
this.minigamesButton.hide()
this.instructionButton.hide()
this.storyButton.hide()

fill("red")
textSize(40)
textFont("comfortaa")
  text("HELLO",980,250)
  textSize(30)
  text("can I know your name",900,280)}
 
  if(gamestate==="iknowname"){
    fill("green")
textSize(40)
textFont("comfortaa")
    text("Hello "+this.input1.value(),940,250)
    textSize(30)
  

    text("I am rutu.." ,980,290)
   // text("and i am going to help you in" ,870,320)
    this.storynextbutton1.show();
    this.storypreviousbutton1.show()

  }

  if(gamestate==="storywise2"){
    fill("red")
textSize(40)
textFont("comfortaa")
    text("And ",1000,250)
    textSize(30)
  

    text("you have to help me " ,920,280)
    text("to complete this adventures " ,880,310)
    text("and save the world" ,970,340)
  
    this.storypreviousbutton2.show()
    this.storynextbutton2.show()
  }


 if(  gamestate==="tellaboutme"){
  this.aboutButton.hide()
  this.minigamesButton.hide()
  this.instructionButton.hide()
  this.storyButton.hide()
  rutugamelogo.visible=false
    fill("red")
    textSize(40)
    textFont("Algerian")
      text("my maker is shivam",500,100)
      fill("blue")
      text("A proud",600,150)
      text(" whitehat junior coder",430,200)
      fill("yellow")
      text("completed C-48",520,250)}


      if(  gamestate==="tellinstruction"){
        this.aboutButton.hide()
        this.minigamesButton.hide()
        this.instructionButton.hide()
        this.storyButton.hide()
        rutuinstart.y=height/2
        rutugamelogo.visible=false
rutuinstart.x=width/2
          fill("red")
          textSize(40)
          textFont("Source Code Pro")
            text("my maker is shivam",500,100)
            fill("blue")
            text("A proud",600,150)
            text(" whitehat junior coder",430,200)
            fill("yellow")
            text("completed C-48",520,250)}

            if(  gamestate==="storywise3"){
              this.aboutButton.hide()
              this.minigamesButton.hide()
              this.instructionButton.hide()
              this.storyButton.hide()
               messagebox.visible=true
            this.storypreviousbutton3.show();
            this.storynextbutton3.show();

            fill("green")
            textSize(40)
            textFont("comfortaa")
              text("so lets start",974,270)
              fill("green")
              text("with this astonishing",890,310)
              text("adventure",980,340)


          
            }

            if(gamestate==="levels"){

              this.level1.show()
              this.level2.show()
              this.level3.show() 
              this.level4.show()
            }

            if(gamestate==="level1story"){
              this.level1.hide()
              this.level2.hide()
              this.level3.hide()
              this.level4.hide()
              level1story();
              levelbackbutton.visible=true
              levelnextbutton.visible=true
            }

            if(gamestate==="level1game"){
              rutugamelogo.visible=false
              rutuinstart.visible=false
              citybackground.visible=true
             rutuinforest.spt.visible=true

             rutuinforest.rutuapplyGravity();
             rutuinforest.spt.collide(foresttilesgroup);
             rutuinforest.spt.collide(invisibleground1);
             rutuinforest.spt.collide(invisiblewall1);
             spawnforestobstacles()
             forestobstaclegroup.setVelocityEach(-1,0)
              citybackground.velocityX=0
            
             
             //Calling various function to controll mario
            if (keyDown("left"))  
             { 
              rutuinforest.rutumoveLeft();
             
             }
             if (keyDown("right")) 
             { 
              rutuinforest.spt.changeAnimation("rutuinforestrunning1",rutuinforestrunning);
              citybackground.velocityX=-4
              forestobstaclegroup.setVelocityEach(-8,0)
             }

             if (keyDown("up") && rutuinforest.spt.velocityY===0) 
             {
              rutuinforest.rutujump();
             }

             if( rutuinforest.spt.y<500){
              rutuinforest.spt.changeAnimation("rutuinforestjump",rutuinforestjump);

             }
            }


      if(mousePressedOver(backbutton1)&&gamestate==="tellaboutme"){
gamestate="serve"
messagebox2.visible=false
backbutton1.visible=false
rutuinstart.y=400
rutuinstart.x=1000


      }

      if(mousePressedOver(backbutton2)&&gamestate==="tellinstruction"){
        gamestate="serve"
        messagebox2.visible=false
        backbutton2.visible=false
        rutuinstart.y=400
        rutuinstart.x=1000
        window1.visible=false
        
              }

              
      if(mousePressedOver(backbutton3)&&gamestate==="storywise1"){
        gamestate="serve"
        messagebox2.visible=false
        backbutton3.visible=false
        rutuinstart.y=400
        rutuinstart.x=1000
        messagebox.visible=false
        this.input1.hide()
        this.submitbutton.hide()
        
              }

              if(mousePressedOver(backbutton3)&&gamestate==="iknowname"){
                gamestate="serve"
                messagebox2.visible=false
                backbutton3.visible=false
                rutuinstart.y=400
                rutuinstart.x=1000
                messagebox.visible=false
                this.input1.hide()
                this.submitbutton.hide()
                
                      }

                      if(mousePressedOver(backbutton3)&&gamestate==="storywise2"){
                        gamestate="serve"
                        messagebox2.visible=false
                        backbutton3.visible=false
                        rutuinstart.y=400
                        rutuinstart.x=1000
                        messagebox.visible=false
                        this.input1.hide()
                        this.submitbutton.hide()
                        
                              }

              if(mousePressedOver(backbutton3)&&gamestate==="storywise3"){
                gamestate="serve"
                messagebox2.visible=false
                backbutton3.visible=false
                rutuinstart.y=400
                rutuinstart.x=1000
                messagebox.visible=false
                messagebox3.visible=false
                dinoinstart.visible=false
                this.storypreviousbutton3.hide();
                this.storynextbutton3.hide();

                

                      }

                      if(mousePressedOver(backbutton3)&&gamestate==="levels"){
                        gamestate="serve"
                        messagebox2.visible=false
                        backbutton3.visible=false
                        rutuinstart.y=400
                        rutuinstart.x=1000
                        messagebox.visible=false
                        messagebox3.visible=false
                        dinoinstart.visible=false
                        this.storypreviousbutton3.hide();
                        this.storynextbutton3.hide();
                        this.level1.hide()
                        this.level2.hide()
                        this.level3.hide() 
                        this.level4.hide()
                        
        
                              }

                              if(mousePressedOver(backbutton3)&&gamestate==="level1story"){
                                gamestate="serve"
                                messagebox2.visible=false
                                backbutton3.visible=false
                                rutuinstart.y=400
                                rutuinstart.x=1000
                                messagebox.visible=false
                                messagebox3.visible=false
                                dinoinstart.visible=false
                                this.storypreviousbutton3.hide();
                                this.storynextbutton3.hide();
                                levelnextbutton.visible=false
                                levelbackbutton.visible=false
                                
                
                                      }

                                      

                                      if(mousePressedOver(levelbackbutton)&&gamestate==="level1story"){
                                        this.level1.show()
                                        this.level2.show()
                                        this.level3.show() 
                                        this.level4.show()
                                        gamestate="levels"
                                        levelnextbutton.visible=false
                                        levelbackbutton.visible=false
                                        



                                      }

                                      if(mousePressedOver(levelnextbutton)&&gamestate==="level1story"){
gamestate="level1game"
levelbackbutton.visible=false
levelnextbutton.visible=false
                                    

                                      }
                      


  
}

function level1story(){

  textFont("Algerian")
  fill("blue")
  textSize(50)
  stroke("black")
  text("JunkFood fighters",550,150)
  textFont("Algerian")
  fill("green")
  textSize(30)
  text(" Rutu is so determined to his words.",500,200)
  text("one day he promised his mom that he ",500,250)
  text(" will always eat fruits and vegetables ",500,300)
  text("and he will not eat junk food  ",500,350)
  text("doing this was not less than a adventure. ",500,400)
  text("you have to help him do this. eat only fruits and vegetables",500,450)
  text(" nothing other than that ",500,500)

}

function spawnforestobstacles(){
  if(frameCount%200===0){
    forestobstacle=createSprite(width/1,height/1.1,30,30) 
    forestobstacle.velocityX=-8;
    forestobstaclegroup.add(forestobstacle)
    //car.debug=true
    //forestobstacle.setCollider("rectangle",0,0,50,80)
    
    var forestobstacleimage=Math.round(random(1,4))
    switch(forestobstacleimage){
      case 1:forestobstacle.addImage(hotdogimage) 
      forestobstacle.scale=0.2;
      break;
       case 2:forestobstacle.addImage(hamburgerimage) 
       forestobstacle.scale=0.25;
      break;
       case 3:forestobstacle.addImage(colaimage) 
       forestobstacle.scale=0.1;
      break;
      case 4:forestobstacle.addImage(pizzaimage) 
      forestobstacle.scale=0.3;
     break;
      
    
        
        
    }  
    }


















}