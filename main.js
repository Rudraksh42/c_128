song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {

    song = loadSound("music.mp3");

}

function setup() {

    canvas = createCanvas(600, 600);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is READY");
}

function gotPoses(results) {

    if (results.length > 0) {
    
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("value of left wrist x" + leftWristX , "value of left wrist y" + leftWristY );

        rightWristX = results[0].pose.leftWrist.x;
        rightWristY= results[0].pose.leftWrist.y;
        console.log("value of right wrist x" + rightWristX , "value of right wrist y" + rightWristY );
    }
};


function draw() {

    image(video, 0, 0, 600, 600);
}

function playMusic() {

    song.play();
    song.setVolume(1);
    song.rate(1)

}
