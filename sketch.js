var ball1, database, position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball1 = createSprite(249,250,10,10);
   // ball2 = createSprite(255,250,10,10);
    ball1.shapeColor = "blue";
   // ball2.shapeColor = "red";

   var ballPosRef = database.ref('ball/position')
   ballPosRef.on("value",readPosition)
}

function draw(){
    background("white");
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    }
    
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x : position.x + x,
        y : position.y + y
    })

}

function readPosition(data){
  position =data.val();
  ball1.x =position.x;
  ball1.y = position.y;
}
