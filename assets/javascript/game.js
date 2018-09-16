//GLOBAL VARIABLES

//Should this be one Object?

var Lando = {name: "Lando_Calrissian", hp: 175, ap: 6, ca: 15};
var Luke = {name: "Luke_Skywalker", hp: 150, ap: 7, ca: 7};
var Solo = {name: "Han_Solo", hp: 150, ap: 5, ca: 25};
var Vader = {name: "Darth_Vader", hp: 200, ap: 10, ca: 20};
var playerChoice;
var enemy;
var enemy2;
var enemy3;
var wins = 0;
var loses = 0;
var startingAP = 0;
var incrementAP = 0;

//Code within the ready will only run once the DOM is ready.
$(document).ready(function(){

    //testing stuff
// startingAP = Lando.ap
// console.log(Lando.name);
// console.log(Lando.ca); 
// console.log("Lukes HP" + Luke.hp);
// console.log(Luke.hp -= Lando.ap);
// Lando.ap += startingAP;

// console.log(Lando.ap);
// console.log("Lukes HP" + Luke.hp);
// console.log(Luke.hp -= Lando.ap);


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
        playerChoice = Lando;
        $(".yourPlayer").append(landoPic);
        $(".enemiesToAttack").append(lukePic + soloPic + vaderPic);
    }

    if(playerChoice =="Luke"){
        playerChoice = Luke;
        $(".yourPlayer").append(lukePic);
        $(".enemiesToAttack").append(landoPic + soloPic + vaderPic);
    }
    
    if(playerChoice =="Solo"){
        playerChoice = Solo;      
        $(".yourPlayer").append(soloPic);
        $(".enemiesToAttack").append(landoPic + lukePic + vaderPic);
    }

    if(playerChoice =="Vader"){
        playerChoice = Vader;  
        $(".yourPlayer").append(vaderPic);
        $(".enemiesToAttack").append(landoPic + soloPic + lukePic); 
    }    
    startingAP = playerChoice.ap;
    // incrementAP = playerChoice.ap;
    $(".playersToChoose").hide();

//choose enemy    
$(".player").click(function(){

    enemy = $(this).attr("value");
    var landoPic = $(".landoP").html();
    var lukePic = $(".lukeP").html();
    var soloPic = $(".soloP").html();
    var vaderPic = $(".vaderP").html();
    
    console.log("Enemy is " + enemy);
    if(enemy == "Lando"){
        enemy = Lando;
        $(".defender").append(landoPic);
        
    }

    if(enemy == "Luke"){
        enemy = Luke;

        $(".defender").append(lukePic);
        //need to hide luke
    }

    if(enemy == "Solo"){
        enemy = Solo;

        $(".defender").append(soloPic);
        //need to hide luke
    }

    if(enemy == "Vader"){
        enemy = Vader;
        enemy
        
        $(".defender").append(vaderPic);
        //need to hide luke
    }

});

$(".attackBtn").click(function(){


    enemy.hp-=startingAP;
    startingAP += playerChoice.ap;
    playerChoice.hp-=enemy.ca;

    if(playerChoice.hp <= 0){
        //set up reset game function
    }

    else if(enemy.hp <= 0){
        $(".defender").html(" ");
        //replace with next Enemy
    }


    console.log("Lando AP" + startingAP);
    console.log("Enemy HP" + enemy.hp);
    console.log("Lando HP" + playerChoice.hp);




});


});

























});