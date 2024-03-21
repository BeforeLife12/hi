img="";
noseX=0;
noseY=0;
marioX=350;
marioY=350;

function preload() {
	img=loadImage("mario.jpg");
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kill = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800 , 400);
	video.parent('video_console');
	instializeInSetup(mario);
	posenet=ml5.poseNet(video , modelLoaded);
	posenet.on('pose' , gotPoses);
	

}

function draw() {
	game();
	
	
}

function modelLoaded(){
	console.log("model is loaded!");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		
	}
}





