function setup(){
canvas=createCanvas(700,700);
canvas.center();
video=createCapture(VIDEO);
video.hide();
canvas.position(700,700);
classifier=ml5.imageClassifier("MobileNet",popocatepl)
}
function popocatepl(){
console.log("ya nos cargo el payaso");
}
function draw(){
image(video,0,0,700,700);
classifier.classify(video,tocktock)
}
function tocktock(error,resultado){
if (error){
console.log("wakawakaee");
}
else{
if(resultado[0].confidene>0.9){
document.getElementById("troncktronck").innerHTML=resultado[0].label;
document.getElementById("dronckdronck").innerHTML=resultado[0].confidence;
}
}
}