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

//Can I grab the html and move it to another class? yes I can.
$(".player").click(function(){
    console.log($(this).attr("value"));
    playerChoice = $(this).attr("value");
    console.log(playerChoice);
    
    var landoPic = $(".playersToChoose .landoP");
    var lukePic = $(".playersToChoose .lukeP");
    var soloPic = $(".playersToChoose .soloP");
    var vaderPic = $(".playersToChoose .vaderP");

    //Choosing Character
    if(playerChoice =="Lando"){
        playerChoice = Lando;
        $(".yourPlayer").append(landoPic);
        $(".enemiesToAttack").append(lukePic, soloPic, vaderPic);
        
    }

    else if(playerChoice =="Luke"){
        playerChoice = Luke;
        $(".yourPlayer").append(lukePic);
        $(".enemiesToAttack").append(landoPic, soloPic, vaderPic);
        
    }
    
    else if(playerChoice =="Solo"){
        playerChoice = Solo;      
        $(".yourPlayer").append(soloPic);
        $(".enemiesToAttack").append(landoPic, lukePic, vaderPic);
        
    }

    else if(playerChoice =="Vader"){
        playerChoice = Vader;  
        $(".yourPlayer").append(vaderPic);
        $(".enemiesToAttack").append(landoPic, soloPic, lukePic);
         
    }    
    startingAP = playerChoice.ap;
    // incrementAP = playerChoice.ap;
    // $(".playersToChoose").hide();
    
}); //end of playerchoose click

    //choose enemy    
$(".player").click(function(){

    enemy = $(this).attr("value");
    var landoPic = $(".enemiesToAttack .landoP");
    var lukePic = $(".enemiesToAttack .lukeP");
    var soloPic = $(".enemiesToAttack .soloP");
    var vaderPic = $(".enemiesToAttack .vaderP");
    
    console.log("Enemy is " + enemy);  

    if(enemy == "Lando"){
        enemy = Lando;
        $(".defender").append(landoPic);
        // $(".enemiesToAttack .lando").hide();
        //need to hide
    }

    if(enemy == "Luke"){
        enemy = Luke;
             
        $(".defender").append(lukePic);
        // $(".enemiesToAttack .luke").hide();
        //need to hide name and HP too
    }

    if(enemy == "Solo"){
        enemy = Solo;

        $(".defender").append(soloPic);
        //need to hide 
    }

    if(enemy == "Vader"){
        enemy = Vader;
        
        $(".defender").append(vaderPic);
        //need to hide 
    }

    });//End of Enemy c

    //Attack enemy
$(".attackBtn").click(function(){
    enemy.hp-=startingAP;
    startingAP+=playerChoice.ap;
    playerChoice.hp-=enemy.ca;

    console.log("enemy HP" + enemy.hp);
    console.log("player AP" + playerChoice.ap);
    console.log("player HP" + playerChoice.hp);

    });




// }); //end of first click function





}); //end of document ready