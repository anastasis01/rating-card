
var lista=[0,0,0,0,0];
var temp=0;
$(".ok1").click(function(){
   $(".ok1").css("background-color","hsl(216, 12%, 54%)");
   var i;
   for (i=0; i<=5; i++){
     if (lista[i]==1){
        $(".ok"+(i+1)).css("background-color","hsl(213, 19%, 25%)");
        lista[i]=0;

     }
   }
   lista[0]=1;
  temp=1;
});


$(".ok2").click(function(){
  $(".ok2").css("background-color","hsl(216, 12%, 54%)");
  var i;
  for (i=0; i<=5; i++){
    if (lista[i]==1){
       $(".ok"+(i+1)).css("background-color","hsl(213, 19%, 25%)");
       lista[i]=0;
    }
  }
   lista[1]=1;
   temp=2;
});


$(".ok3").click(function(){
  $(".ok3").css("background-color","hsl(216, 12%, 54%)");
  var i;
  for (i=0; i<=5; i++){
    if (lista[i]==1){
       $(".ok"+(i+1)).css("background-color","hsl(213, 19%, 25%)");
       lista[i]=0;
    }
  }
lista[2]=1;
temp=3;
});

$(".ok4").click(function(){
  $(".ok4").css("background-color","hsl(216, 12%, 54%)");
  var i;
  for (i=0; i<=5; i++){
    if (lista[i]==1){
       $(".ok"+(i+1)).css("background-color","hsl(213, 19%, 25%)");
       lista[i]=0;
    }
  }
lista[3]=1;
temp=4;
});


$(".ok5").click(function(){
  $(".ok5").css("background-color","hsl(216, 12%, 54%)");
  var i;
  for (i=0; i<=5; i++){
    if (lista[i]==1){
       $(".ok"+(i+1)).css("background-color","hsl(213, 19%, 25%)");
       lista[i]=0;
    }
  }
  lista[4]=1;
  temp=5;
});

$(".submit").click(function(){
  $(".container").css("text-align","center");

   $(".temp").html("You selected "+temp+" out 5");
    
   $("h2").html("Thank you!");
   $(".temp").css("color","hsl(25, 97%, 53%)");
   $(".temp").css("background-color","hsl(213, 19%, 25%)")
   $(".temp").css("border-radius","14px");
   $(".temp").css("padding","8px");
   $(".temp").css("margin","5px");
   $(".temp").css("font-size","15px");
   $("p").html("We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!");
   $(".flex-container").remove();
   $(".img1").attr("src","images/illustration-thank-you.svg");
   $(".img1").css("background-color"," hsl(213, 19%, 18%)");
   $(".submit").remove();
})
