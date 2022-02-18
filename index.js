$(document).ready(function(){
  $("html").keypress(function(){
    var audio = new Audio("Press.wav");
    audio.volume = 0.05;
    audio.play();
  });
}); 

function blink() {
  $(".blinking").fadeOut(500);
  $(".blinking").fadeIn(500);
}
setInterval(blink, 2000);

$(document).ready(function(){
  $(".future").mouseover(function(){
    var div = $(".future  ");  
    div.animate({left: '100px'}, 300);
    div.animate({fontSize: '3em'}, 300);
    var kz = new Audio("Voice.mp3");
    kz.volume = 0.05;
    kz.play();
  });
});

$(document).ready(function(){
  $("button").click(function(){
    let name = prompt("Please enter your full name: ", "Bekzhan Seitov");
    let ent = prompt("Please enter your UNT score: ", "106");
    if (name != "" && ent != "" && ent > 80) {
      alert("Congratulations. From now on you are a student of AITU!");
      var app = new Audio("Application.mp3");
      app.volume = 0.05;
      app.play();
    }
    else {
      alert("Sorry, you did not enter the AITU =(");
      var sad = new Audio("Sponge.mp3");
      sad.volume = 0.05;
      sad.play();
    }
  });
});