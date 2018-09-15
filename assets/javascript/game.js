//GLOBAL VARIABLES

var Luke = {name: "Luke_Skywalker", hp: 150, ap: 7, ca: 7};
var Vader = {name: "Darth_Vader", hp: 200, ap: 10, ca: 20};
var Solo = {name: "Han_Solo", hp: 125, ap: 5, ca: 25};
var Lando = {name: "Lando_Calrissian", hp: 175, ap: 6, ca: 15};
var playerChoice;
var enemy1;
var enemy2;
var enemy3;
var wins = 0;
var loses = 0;
var startingAP;

//Code within the ready will only run once the DOM is ready.
$(document).ready(function(){

    //testing stuff
startingAP = Lando.ap
console.log(Lando.name);
console.log(Lando.ca); 
console.log("Lukes HP" + Luke.hp);
console.log(Luke.hp -= Lando.ap);
Lando.ap += startingAP;

console.log(Lando.ap);
console.log("Lukes HP" + Luke.hp);
console.log(Luke.hp -= Lando.ap);


//Can I grab the html and move it to another class? yes I can.
$(".player").click(function(){
    console.log($(this).attr("value"));
    
    playerChoice = $(this).attr("value");
    
    var landoPic = $(".landoP").html();
    var lukePic = $(".lukeP").html();
    var soloPic = $(".soloP").html();
    var vaderPic = $(".vaderP").html();

    //Choosing Character
    if(playerChoice =="Lando"){
        $(".yourPlayer").replaceWith(landoPic);
        $(".enemiesToAttack").replaceWith(lukePic + soloPic + vaderPic);
    }

    if(playerChoice =="Luke"){
        $(".yourPlayer").replaceWith(lukePic);
        $(".enemiesToAttack").replaceWith(landoPic + soloPic + vaderPic);
    }
    
    if(playerChoice =="Solo"){      
        $(".yourPlayer").replaceWith(soloPic);
        $(".enemiesToAttack").replaceWith(landoPic + lukePic + vaderPic);
    }

    if(playerChoice =="Vader"){  
        $(".yourPlayer").replaceWith(vaderPic);
        $(".enemiesToAttack").replaceWith(landoPic + soloPic + lukePic); 
    }    
    
    $(".playersToChoose").hide();

//choose enemy    
$(".player").click(function(){

    enemy1 = $(this).attr("value");

    if(enemy1 == "Luke"){
        var dode = $(".lukeP").html();
        $(".defender").replaceWith(dode);
        //need to hide luke
    }
});

});

























});