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

startingAP = Lando.ap
console.log(Lando.name);
console.log(Lando.ca); 
console.log("Lukes HP" + Luke.hp);
console.log(Luke.hp -= Lando.ap);
Lando.ap += startingAP;

console.log(Lando.ap);
console.log("Lukes HP" + Luke.hp);
console.log(Luke.hp -= Lando.ap);


//Can I grab the html and move it to another class?
$(".player").click(function(){
    console.log($(this).attr("value"));
    
    playerChoice = $(this).attr("value");
    
    //Choosing Character
    if(playerChoice =="Lando"){

        var code = $(".landoP").html();
        var code2 = $(".lukeP").html();
        var code3 = $(".soloP").html();
        var code4 = $(".vaderP").html();
        console.log(code2);
        $(".yourPlayer").replaceWith(code);
        $(".enemiesToAttack").replaceWith(code2 + code3 + code4);
    
    }

    if(playerChoice =="Luke"){

        var code = $(".landoP").html();
        var code2 = $(".lukeP").html();
        var code3 = $(".soloP").html();
        var code4 = $(".vaderP").html();

        $(".yourPlayer").replaceWith(code2);
        $(".enemiesToAttack").replaceWith(code + code3 + code4);
        
        }
    
    if(playerChoice =="Solo"){

        var code = $(".landoP").html();
        var code2 = $(".lukeP").html();
        var code3 = $(".soloP").html();
        var code4 = $(".vaderP").html();
        
        $(".yourPlayer").replaceWith(code3);
        $(".enemiesToAttack").replaceWith(code + code2 + code4);
        
        }

    if(playerChoice =="Vader"){

        var code = $(".landoP").html();
        var code2 = $(".lukeP").html();
        var code3 = $(".soloP").html();
        var code4 = $(".vaderP").html();
        
        $(".yourPlayer").replaceWith(code4);
        $(".enemiesToAttack").replaceWith(code + code3 + code2);
        
        }    
    

    
    $(".playersToChoose").hide();
});

























});