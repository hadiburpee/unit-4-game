//GLOBAL VARIABLES

//Should this be one Object?

var Lando = {name: "Lando_Calrissian", hp: 175, ap: 6, ca: 15};
var Luke = {name: "Luke_Skywalker", hp: 150, ap: 7, ca: 7};
var Solo = {name: "Han_Solo", hp: 150, ap: 5, ca: 25};
var Vader = {name: "Darth_Vader", hp: 200, ap: 10, ca: 20};
var playerChoice;
var didPlayerChoose = false;
var enemyChosen = 0;
var enemy;
var wins = 0;
var losses = 0;
var startingAP = 0;
var incrementAP = 0;


//Code within the ready will only run once the DOM is ready.
$(document).ready(function(){

//Can I grab the html and move it to another class? yes I can.



$(".playersToChoose .player").click(function(){
    if(didPlayerChoose == false){

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
        didPlayerChoose = true;
        
    }

    else if(playerChoice =="Luke"){
        playerChoice = Luke;
        $(".yourPlayer").append(lukePic);
        $(".enemiesToAttack").append(landoPic, soloPic, vaderPic);
        didPlayerChoose = true;
    }
    
    else if(playerChoice =="Solo"){
        playerChoice = Solo;      
        $(".yourPlayer").append(soloPic);
        $(".enemiesToAttack").append(landoPic, lukePic, vaderPic);
        didPlayerChoose = true;
    }

    else if(playerChoice =="Vader"){
        playerChoice = Vader;  
        $(".yourPlayer").append(vaderPic);
        $(".enemiesToAttack").append(landoPic, soloPic, lukePic);
        didPlayerChoose = true;
    }    
    startingAP = playerChoice.ap;
    // incrementAP = playerChoice.ap;
    // $(".playersToChoose").hide();
    console.log(didPlayerChoose);
    }
    else{
        
// $(".player").click(function(){
    if(enemyChosen < 4){
    enemy = $(this).attr("value");
    var landoPicE = $(".enemiesToAttack .landoP");
    var lukePicE = $(".enemiesToAttack .lukeP");
    var soloPicE = $(".enemiesToAttack .soloP");
    var vaderPicE = $(".enemiesToAttack .vaderP");
    
    console.log(landoPicE);
    console.log("Enemy is " + enemy);  

    if(enemy == "Lando"){
        enemy = Lando;

        $(".defender").append(landoPicE);

    }

    if(enemy == "Luke"){
        enemy = Luke;
             
        $(".defender").append(lukePicE);

    }

    if(enemy == "Solo"){
        enemy = Solo;

        $(".defender").append(soloPicE);
     
    }

    if(enemy == "Vader"){
        enemy = Vader;
        
        $(".defender").append(vaderPicE);
      
    }
    }
    enemyChosen++;
    console.log(enemyChosen);
    // });//End of Enemy c
    }
});

    //Attack enemy
$(".attackBtn").click(function(){
    console.log("Player" + playerChoice.name);
    console.log("Enemy" + enemy.name);

    enemy.hp-=startingAP;
    startingAP+=playerChoice.ap;
    playerChoice.hp-=enemy.ca;

    $(".defender .hp").html(enemy.hp);
    $(".yourPlayer .hp").html(playerChoice.hp);


    if(enemy.hp < 1){
        $(".defender").html(" ");
       
    }

    if(playerChoice.hp < 1){
        $(".yourPlayer").html("You Lose");
        losses++;
        $(".losses").html("Losses: " + losses);
        console.log(losses);

    }

    });




// }); //end of first click function





}); //end of document ready