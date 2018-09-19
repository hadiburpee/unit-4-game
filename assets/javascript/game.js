//GLOBAL VARIABLES

//Should this be one Object?

var Lando = {name: "Lando_Calrissian", hp: 175, ap: 6, ca: 15};
var Luke = {name: "Luke_Skywalker", hp: 150, ap: 7, ca: 300};//set luke CA to 300 to test losing
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


//click function for choose players and enemies
$(".playersToChoose .player").click(function(){

    //conditional for if player is not yet chosen.
    if(didPlayerChoose == false){

    console.log($(this).attr("value"));
    playerChoice = $(this).attr("value");
    console.log(playerChoice);
    
    var landoPic = $(".playersToChoose .landoP");
    var lukePic = $(".playersToChoose .lukeP");
    var soloPic = $(".playersToChoose .soloP");
    var vaderPic = $(".playersToChoose .vaderP");

    //Choosing Character conditional
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
    console.log(didPlayerChoose);

    }

//conditional for once a player chooses his own player.  Now he can choose the enemy
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
//Enemy is now stored, and there is an enemy chosen counter.
    }
});


//Attack enemy function
$(".attackBtn").click(function(){
    console.log("Player" + playerChoice.name);
    console.log("Enemy" + enemy.name);

    enemy.hp-=startingAP;
    startingAP+=playerChoice.ap;
    playerChoice.hp-=enemy.ca;

    //displays updated stats as the attack button is clicked.
    $(".defender .hp").html(enemy.hp);
    $(".yourPlayer .hp").html(playerChoice.hp);


    //removes the defender code, may need to fix this
    if(enemy.hp < 1){
        $(".defender").html(" ");
       
    }

    //should update losses once you lose, but not working
    if(playerChoice.hp < 1){
        $(".yourPlayer").html("You Lose");
        losses++;
        $(".losses").html("Losses: " + losses);
        console.log(losses);

    }

    });




// }); //end of first click function





}); //end of document ready