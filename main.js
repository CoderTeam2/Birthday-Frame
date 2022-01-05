function preload(){

}

function setup(){
    canvas = createCanvas(800, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    // Ends
    image(video,250,125,300,250);
    fill(255, 255, 0);
    strokeWeight(4);
    rect(50,45,60,60);
    rect(695,45,60,60);
    rect(50,390,60,60);
    rect(695,390,60,60); 

    // Borders
    fill(128, 0, 0); 
    rect(110,63,585,20);
    rect(110,410,585,20);
    rect(70,105,20,285);
    rect(715,105,20,285);
}

function take_snapshot(){
    save("My-Birthday-Selfie.jpeg");
}