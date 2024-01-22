x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
n=Number(content)
if (Number.isInteger(n)) {
  document.getElementById("status").innerHTML = "Starting to draw apples";  
  draw_apple="set"
  
}
else{
  document.getElementById("status").innerHTML = "Cannot recognise a number";
}
}
function preload() {
  apple=loadImage('apple.png')
  apple.scale=0.2
}

function setup() {
 canvas=createCanvas(window.innerWidth,window.innerHeight- 150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = n + " Apples drawn";
    draw_apple = "";
    for (let i = 0; i < n; i++) {
      x=Math.floor(Math.random()*600)
      y=Math.floor(Math.random()*400)
      image(apple,x,y)
    }
  }
  else{
    document.getElementById("status").innerHTML = "Cannot recognise a number";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
