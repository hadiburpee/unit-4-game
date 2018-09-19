//GLOBAL VARIABLES

//Should this be one Object?

var Lando = {name: "Lando_Calrissian", hp: 175, ap: 20, ca: 15};
var Luke = {name: "Luke_Skywalker", hp: 150, ap: 7, ca: 7};//set luke CA to 300 to test losing
var Solo = {name: "Han_Solo", hp: 150, ap: 5, ca: 25};
var Vader = {name: "Darth_Vader", hp: 200, ap: 10, ca: 10};
var playerChoice;
var didPlayerChoose = false;
var enemySelected = false;
var enemyChosen = 0;
var enemy;
var win = 0;
var loss = 0;
var startingAP = 0;
var incrementAP = 0;
var playerHP = 0;
var enemyHP = 0;




//Code within the ready will only run once the DOM is ready.
$(document).ready(function(){

//Can I grab the html and move it to another class? yes I can.

//need to work this out
function reset(){

    var yourPlay = $(".yourPlayer").html();
    $(".playersToChoose").append(yourPlay);
    $(".yourPlayer").html(" ");
    $(".playersToChoose").show();
    $(".landoP .hp").html(Lando.hp);
    $(".lukeP .hp").html(Luke.hp);
    $(".soloP .hp").html(Solo.hp);
    $(".vaderP .hp").html(Vader.hp);
    startingAP = 0;
    playerHP = 0;
    enemyHP = 0;
    didPlayerChoose = false;
    enemySelected = false;

    
}


//click function for choose players and enemies
$(".player").click(function(){

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
    playerHP = playerChoice.hp;
    console.log(didPlayerChoose);
    
    }

//conditional for once a player chooses his own player.  Now he can choose the enemy
    else{
        
// $(".player").click(function(){
    if(enemySelected == false){
        enemy = $(this).attr("value");
        var landoPicE = $(".enemiesToAttack .landoP");
        var lukePicE = $(".enemiesToAttack .lukeP");
        var soloPicE = $(".enemiesToAttack .soloP");
        var vaderPicE = $(".enemiesToAttack .vaderP");
        
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

        //will not let the player select themselves as the enemy, ie they cannot attack themselves
        if(enemy == playerChoice){
            enemySelected = false;
            return;
        }

    //this makes it so you cannot select more than one enemy at a time    
    enemySelected = true;
    enemyHP = enemy.hp;
    } //enemy selected bracket

    

    }//else bracket


});


//Attack enemy function
$(".attackBtn").click(function(){
    console.log("Player" + playerChoice.name);
    console.log("Enemy" + enemy.name);

//maybe I can leave hte original values and do it like the starting AP
if(enemySelected == true){
    enemyHP-=startingAP;
    startingAP+=playerChoice.ap;
    playerHP-=enemy.ca;

    //displays updated stats as the attack button is clicked.
    $(".defender .hp").html(enemyHP);
    $(".yourPlayer .hp").html(playerHP);

}
    //removes the defender code, may need to fix this
    if(enemyHP < 1 && enemySelected == true){


        var enemyMove = $(".defender").html();
        $(".playersToChoose").append(enemyMove);
        $(".playersToChoose").hide();
        $(".defender").html(" ");

        enemySelected = false;
        enemy.ca = 0;
        enemyChosen++;
        console.log(enemyChosen);
        if(enemyChosen == 3){
            // $(".yourPlayer").html("You Lose");
            win = win + 1;
            $(".wins").html("Wins: " + win);
            console.log("Win" + win);
            reset();
            enemySelected = false;
        }
        // console.log("is an enemy selected " + enemySelected);
    }

    //when you win, it still says you lose
    // console.log(playerChoice.name + " : your player")
    else if(playerHP < 1 && enemySelected == true){
        // $(".yourPlayer").html("You Lose");
        loss = loss + 1;
        $(".losses").html("Losses: " + loss);
        console.log("loss" + loss);
        reset();

    }



    
    });


//Need to write reset function

// }); //end of first click function





}); //end of document ready