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
    console.log(playerChoice);
    
    var landoPic = $(".playersToChoose .landoP");
    var lukePic = $(".playersToChoose .lukeP");
    var soloPic = $(".playersToChoose .soloP");
    var vaderPic = $(".playersToChoose .vaderP");

    //Choosing Character
    if(playerChoice =="Lando"){
        playerChoice = Lando;
        console.log(landoPic);
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
    $(".playersToChoose").hide();
    

//choose enemy    
$(".player").click(function(){

    enemy = $(this).attr("value");
    var landoPic = $(".landoP");
    var lukePic = $(".lukeP");
    var soloPic = $(".soloP");
    var vaderPic = $(".vaderP");
    
    console.log("Enemy is " + enemy);
    if(enemy == "Lando"){
        enemy = Lando;
        $(".defender").append(landoPic);
        $(".enemiesToAttack .lando").hide();
        //need to hide
    }

    if(enemy == "Luke"){
        enemy = Luke;        
        $(".defender").append(lukePic);
        $(".enemiesToAttack .luke").hide();
        //need to hide name and HP too
    }

    if(enemy == "Solo"){
        enemy = Solo;

        $(".defender").append(soloPic);
        //need to hide 
    }

    if(enemy == "Vader"){
        enemy = Vader;
        enemy
        
        $(".defender").append(vaderPic);
        //need to hide 
    }

});

//Attack enemy
$(".attackBtn").click(function(){

    //need to fix attacking
    // enemy.hp-=startingAP;
    // startingAP += playerChoice.ap;
    // playerChoice.hp-=enemy.ca;
    // $(".yourPlayer .hp").html(playerChoice.hp);
    // $(".defender .hp").html(enemy.hp);


    // //write code to change HP?

    // if(playerChoice.hp <= 0){
    //     //set up reset game function
    //     loss = loss+1;
    //     rst();
    // }

    // else if(enemy.hp <= 0){
    //     $(".defender").html(" ");
    //     //replace with next Enemy
    // }

    // console.log("Lando AP" + startingAP);
    // console.log("Enemy HP" + enemy.hp);
    // console.log("Lando HP" + playerChoice.hp);

});

//this resets the game to zero if the player wins or loses.
function rst(){



};


});

























});