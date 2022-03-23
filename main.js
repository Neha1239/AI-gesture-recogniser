noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
 canvas=createCanvas(550,550);
 canvas.position(560,150);  
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses); 
}
function draw() {
background('#696969');
document.getElementById("square_sides").innerHTML="Width and Height of a square will be= "+difference+"px";
fill('#ADD8E6');
stroke('#ADD8E6');
square(noseX,noseY,difference);
}
function modelLoaded() {
    console.log('poseNet is initialized');
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" noseY= "+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX= "+leftwristX+" rightwristX= "+rightwristX+" difference= "+difference);
    }
}