var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0xfb0000});
gameport.appendChild(renderer.view);

//creating our main container: stage
var stage = new PIXI.Container();

//creating sub containers for the edges of the screen
var bound1 = new PIXI.Sprite(PIXI.Texture.fromImage("verticalmines.png"));
var bound2 = new PIXI.Sprite(PIXI.Texture.fromImage("horizontalmines.png"));
var bound3 = new PIXI.Sprite(PIXI.Texture.fromImage("verticalmines.png"));
var bound4 = new PIXI.Sprite(PIXI.Texture.fromImage("horizontalmines.png"));

//creating main objects
var minedodger = new PIXI.Sprite(PIXI.Texture.fromImage("jumper.png"));
var trophy = new PIXI.Sprite(PIXI.Texture.fromImage("trophy.png"));
var sun = new PIXI.Sprite(PIXI.Texture.fromImage("sun.png"));

//creating mines
var mine1 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine2 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine3 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine4 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine5 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine6 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine7 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine8 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine9 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine10 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine11 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine12 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine13 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine14 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine15 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine16 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine17 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine18 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine19 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine20 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine21 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine22 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine23 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine24 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine25 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine26 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine27 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine28 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine29 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine30 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine31 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));
var mine32 = new PIXI.Sprite(PIXI.Texture.fromImage("mine.png"));

//Creating the sky that adds to the stage (completes the stage)
var minefield = new PIXI.Container();
stage.addChild(minefield);

//Creating the bounds that adds to the sky
var bounds = new PIXI.Container();
minefield.addChild(bounds);

//Adding bound for right side of the screen edge
bounds.addChild(bound1);
bound1.width = 400;
bound1.height = 400;
bound1.position.x = 399;
bound1.position.y = 0;

//Adding bound for bottom of the screen edge
bounds.addChild(bound2);
bound2.width = 400;
bound2.height = 0;
bound2.position.x = 1;
bound2.position.y = 400;

//Adding bound for left side of the screen edge
bounds.addChild(bound3);
bound3.width = 1;
bound3.height = 400;
bound3.position.x = 1;
bound3.position.y = 0;

//Adding bound for top of the screen edge
bounds.addChild(bound4);
bound4.width = 400;
bound4.height = 0;
bound4.position.x = 1;
bound4.position.y = -20;


//Adding the minedodger(user) to the sky
minefield.addChild(minedodger);
minedodger.health = 100;
minedodger.position.x = 10;
minedodger.position.y = 10;

//keyboard handler for WASD
function keydownEventHandler(e){
	if (e.keyCode == 87){	// W Key
		minedodger.position.y -= 10;
	}
	if (e.keyCode == 65){ // A Key
		minedodger.position.x -= 10;
	}
	if (e.keyCode == 83) { // S key
   		 minedodger.position.y += 10;
  	}
	if (e.keyCode == 68){ // D Key
		minedodger.position.x += 10;
	}
}
document.addEventListener('keydown', keydownEventHandler);

//Adding a trophy(goal; win condition) to the sky
minefield.addChild(trophy);
trophy.anchor.x = 0.5;
trophy.anchor.y = 0.5;
trophy.position.x = 380;
trophy.position.y = 320;

//Adding a sun to the sky
minefield.addChild(sun);
sun.anchor.x = 0.5;
sun.anchor.y = 0.5;
sun.position.x = 380;
sun.position.y = 20;

//Adding mine1 to minefield
minefield.addChild(mine1);
mine1.anchor.x = 0.5;
mine1.anchor.y = 0.5;
mine1.position.x = 20;
mine1.position.y = 55;

//Adding mine2 to minefield
minefield.addChild(mine2);
mine2.anchor.x = 0.5;
mine2.anchor.y = 0.5;
mine2.position.x = 60;
mine2.position.y = 55;

//Adding mine3 to minefield
minefield.addChild(mine3);
mine3.anchor.x = 0.5;
mine3.anchor.y = 0.5;
mine3.position.x = 150;
mine3.position.y = 15;

//Adding mine4 to minefield
minefield.addChild(mine4);
mine4.anchor.x = 0.5;
mine4.anchor.y = 0.5;
mine4.position.x = 150;
mine4.position.y = 55;

//Adding mine5 to minefield
minefield.addChild(mine5);
mine5.anchor.x = 0.5;
mine5.anchor.y = 0.5;
mine5.position.x = 62;
mine5.position.y = 280;

//Adding mine6 to minefield
minefield.addChild(mine6);
mine6.anchor.x = 0.5;
mine6.anchor.y = 0.5;
mine6.position.x = 162;
mine6.position.y = 150;

//Adding mine7 to minefield
minefield.addChild(mine7);
mine7.anchor.x = 0.5;
mine7.anchor.y = 0.5;
mine7.position.x = 274;
mine7.position.y = 150;

//Adding mine8 to minefield
minefield.addChild(mine8);
mine8.anchor.x = 0.5;
mine8.anchor.y = 0.5;
mine8.position.x = 62;
mine8.position.y = 62;

//Adding mine9 to minefield
minefield.addChild(mine9);
mine9.anchor.x = 0.5;
mine9.anchor.y = 0.5;
mine9.position.x = 80;
mine9.position.y = 200;

//Adding mine10 to minefield
minefield.addChild(mine10);
mine10.anchor.x = 0.5;
mine10.anchor.y = 0.5;
mine10.position.x = 40;
mine10.position.y = 170;

//Adding mine11 to minefield
minefield.addChild(mine11);
mine11.anchor.x = 0.5;
mine11.anchor.y = 0.5;
mine11.position.x = 300;
mine11.position.y = 50;

//Adding mine12 to minefield
minefield.addChild(mine12);
mine12.anchor.x = 0.5;
mine12.anchor.y = 0.5;
mine12.position.x = 300;
mine12.position.y = 20;

//Adding mine13 to minefield
minefield.addChild(mine13);
mine13.anchor.x = 0.5;
mine13.anchor.y = 0.5;
mine13.position.x = 350;
mine13.position.y = 50;

//Adding mine14 to minefield
minefield.addChild(mine14);
mine14.anchor.x = 0.5;
mine14.anchor.y = 0.5;
mine14.position.x = 290;
mine14.position.y = 130;

//Adding mine15 to minefield
minefield.addChild(mine15);
mine15.anchor.x = 0.5;
mine15.anchor.y = 0.5;
mine15.position.x = 380;
mine15.position.y = 260;

//Adding mine16 to minefield
minefield.addChild(mine16);
mine16.anchor.x = 0.5;
mine16.anchor.y = 0.5;
mine16.position.x = 240;
mine16.position.y = 260;

//Adding mine17 to minefield
minefield.addChild(mine17);
mine17.anchor.x = 0.5;
mine17.anchor.y = 0.5;
mine17.position.x = 340;
mine17.position.y = 260;

//Adding mine18 to minefield
minefield.addChild(mine18);
mine18.anchor.x = 0.5;
mine18.anchor.y = 0.5;
mine18.position.x = 220;
mine18.position.y = 150;

//Adding mine19 to minefield
minefield.addChild(mine19);
mine19.anchor.x = 0.5;
mine19.anchor.y = 0.5;
mine19.position.x = 380;
mine19.position.y = 200;

//Adding mine20 to minefield
minefield.addChild(mine20);
mine20.anchor.x = 0.5;
mine20.anchor.y = 0.5;
mine20.position.x = 240;
mine20.position.y = 370;

//Adding mine21 to minefield
minefield.addChild(mine21);
mine21.anchor.x = 0.5;
mine21.anchor.y = 0.5;
mine21.position.x = 120;
mine21.position.y = 370;

//Adding mine22 to minefield
minefield.addChild(mine22);
mine22.anchor.x = 0.5;
mine22.anchor.y = 0.5;
mine22.position.x = 60;
mine22.position.y = 325;

//Adding mine23 to minefield
minefield.addChild(mine23);
mine23.anchor.x = 0.5;
mine23.anchor.y = 0.5;
mine23.position.x = 100;
mine23.position.y = 150;

//Adding mine24 to minefield
minefield.addChild(mine24);
mine24.anchor.x = 0.5;
mine24.anchor.y = 0.5;
mine24.position.x = 62;
mine24.position.y = 62;

//Adding mine25 to minefield
minefield.addChild(mine25);
mine25.anchor.x = 0.5;
mine25.anchor.y = 0.5;
mine25.position.x = 62;
mine25.position.y = 370;

//Adding mine26 to minefield
minefield.addChild(mine26);
mine26.anchor.x = 0.5;
mine26.anchor.y = 0.5;
mine26.position.x = 186;
mine26.position.y = 370;

//Adding mine27 to minefield
minefield.addChild(mine27);
mine27.anchor.x = 0.5;
mine27.anchor.y = 0.5;
mine27.position.x = 300;
mine27.position.y = 370;

//Adding mine28 to minefield
minefield.addChild(mine28);
mine28.anchor.x = 0.5;
mine28.anchor.y = 0.5;
mine28.position.x = 186;
mine28.position.y = 260;

//Adding mine29 to minefield
minefield.addChild(mine29);
mine29.anchor.x = 0.5;
mine29.anchor.y = 0.5;
mine29.position.x = 62;
mine29.position.y = 280;

//Adding mine30 to minefield
minefield.addChild(mine30);
mine30.anchor.x = 0.5;
mine30.anchor.y = 0.5;
mine30.position.x = 80;
mine30.position.y = 240;

//Adding mine31 to minefield
minefield.addChild(mine31);
mine31.anchor.x = 0.5;
mine31.anchor.y = 0.5;
mine31.position.x = 380;
mine31.position.y = 50;

//Adding mine32 to minefield
minefield.addChild(mine32);
mine32.anchor.x = 0.5;
mine32.anchor.y = 0.5;
mine32.position.x = 290;
mine32.position.y = 260;

//game loop
function animate() {
	requestAnimationFrame(animate);
	
	//static sprite animation example
	sun.rotation += 0.1;
	
	//collision detection for checking to keep jumper in the screen
	if (hitTestRectangle(minedodger, bound1) || (hitTestRectangle(minedodger, bound2)) 						|| (hitTestRectangle(minedodger, bound3)) || (hitTestRectangle(minedodger, bound4))){
		minedodger.position.x = 20;
		minedodger.position.y = 20;
	}
	//collision detection for checking if the minedodger hit a mine
	if ( hitTestRectangle(minedodger, mine1) 
		|| hitTestRectangle(minedodger, mine2) 
		|| hitTestRectangle(minedodger, mine3) 
		|| hitTestRectangle(minedodger, mine4) 
		|| hitTestRectangle(minedodger, mine4) 
		|| hitTestRectangle(minedodger, mine5)
		|| hitTestRectangle(minedodger, mine6)
		|| hitTestRectangle(minedodger, mine7)
		|| hitTestRectangle(minedodger, mine8)
		|| hitTestRectangle(minedodger, mine9) 
		|| hitTestRectangle(minedodger, mine10) 
		|| hitTestRectangle(minedodger, mine11) 
		|| hitTestRectangle(minedodger, mine12) 
		|| hitTestRectangle(minedodger, mine13)
		|| hitTestRectangle(minedodger, mine14)
		|| hitTestRectangle(minedodger, mine15)
		|| hitTestRectangle(minedodger, mine16)
		|| hitTestRectangle(minedodger, mine17) 
		|| hitTestRectangle(minedodger, mine18) 
		|| hitTestRectangle(minedodger, mine19) 
		|| hitTestRectangle(minedodger, mine20) 
		|| hitTestRectangle(minedodger, mine21)
		|| hitTestRectangle(minedodger, mine22)
		|| hitTestRectangle(minedodger, mine23)
		|| hitTestRectangle(minedodger, mine24)
		|| hitTestRectangle(minedodger, mine25) 
		|| hitTestRectangle(minedodger, mine26) 
		|| hitTestRectangle(minedodger, mine27) 
		|| hitTestRectangle(minedodger, mine28) 
		|| hitTestRectangle(minedodger, mine29)
		|| hitTestRectangle(minedodger, mine30)
		|| hitTestRectangle(minedodger, mine31)
		|| hitTestRectangle(minedodger, mine32) ){
		minedodger.position.x = 10;
		minedodger.position.y = 10;
	};
	//collison detection for the wind condition
	if (hitTestRectangle(minedodger,trophy)){
		trophy.position.x = 380;
		trophy.position.y = 20;
		var text = new PIXI.Text("You win!", {font:"50px Arial", fill:"yellow" });
		stage.addChild(text);
		text.position.x = 200;
		text.position.y = 200;
	};
	
	renderer.render(stage);
}
//starting the game
animate();

//collision function for testing two sprites colliding
function hitTestRectangle(r1, r2) {

  //Define the variables we'll need to calculate
  var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {
    //A collision might be occuring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {
      //There's definitely a collision happening
      hit = true;
    } else {
      //There's no collision on the y axis
      hit = false;
    }
  } else {
    //There's no collision on the x axis
    hit = false;
  }
  //`hit` will be either `true` or `false`
  return hit;
};
//make calls to the clouds that the player will collide with (8 calls)
