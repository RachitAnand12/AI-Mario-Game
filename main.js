function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_die = loadSound("mariodie.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	gameOver = loadSound("gameover.wav");
	kick = loadSound("kick.wav");
	
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on("pose", gotPoses);
}
function modelLoaded() {
	console.log("POSENET has loaded!!!!!!!!!!!!!!!!!!!!!!");
}

function gotPoses(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(results);
	}
}
function draw() {
	game()
}






