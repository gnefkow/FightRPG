//TO DO:

//add document.ready
//create HTML FIle
//Link this file, jQuery, Bootstrap, and the CSS file

// DOM Elements
var opponentPenEL
var battlefieldEL // a variable tied to a <div id="battlefield">
var playerSpotEL

// Variables
var Trump = "TRUMP";   // Needs to be opbect with three keys: HP, Attack Power, & Counter-attack power
var Sanders = "SANDERS"; // Needs to be opbect with three keys: HP, Attack Power, & Counter-attack power
var Warren = "WARREN";  // Needs to be opbect with three keys: HP, Attack Power, & Counter-attack power
var Biden = "BIDEN";   // Needs to be opbect with three keys: HP, Attack Power, & Counter-attack power

var opponentsLeft = [ Trump, Sanders, Warren, Biden ];
var player
var playerHP
var playerAP







// ============================== NEW GAME: ============================== //
opponentPenEl = document.getElementById("opponentsLeftSpotList");
playerSpotEL = document.getElementById("playerSpot"); 

// Initiate Game:
function initiateGame(){   //Displays opponentsLeft array in the DOM - at this point, it has all 4 characters
  for (var i = 0; i < opponentsLeft.length; i++) {
    $( `<li id='card-${opponentsLeft[i]}' class="characterCard"> ${opponentsLeft[i]}</li>` ).appendTo( opponentPenEl );
  }
  console.log(`function initiateGame ran`)
  choosePlayer();
};

//Player can choose a character:
function choosePlayer (){
  $(`.characterCard`).on("click", function() {
    $(this).appendTo( playerSpotEL );
    console.log(`The player chose a card`)
  });
  // sets the character == player
  // sets playerHP == character's HP
  // sets playerAP == character's AP
  // Remove character from opponentsLeft array
  battle();
};
  




// ======================================== BATTLE ======================================== //
 
function battle(){
    // -------------------- CHOOSE OPPONENT -------------------- //
    var opponent
    var opponentHP
    var opponentCAP

    //CHOOSE ENEMY:
      function selectOpponent(){}; // - moves their selection to the battlefield (battlefield can be a div tied to an element)
              // chosen enemy becomes "opponent"
              // opponentHP == character's HP
              // opponentCAP == character's CAP
              //display attack button
              



    // --------------------    FIGHT    -------------------- //

    // .on(click attack button, function() {
    function attack(){}; 
        // opponentHP is reduced by playerAP
        //  is opponent dead? if (dead){ disposeBody(); } else { counterAttack(); }

      function counterAttack(){};
        // reduces playerHP by opponentCAP
        // run: checkPlayerHP():
        
      function disposeBody(){}; 
        // removes the opponent from the battleFieldEl
        // run: checkOpponentsLeft();

      };

// =|=|=|=|=|=|=|=|=|=|=|=|=|=|=| /BATTLE =|=|=|=|=|=|=|=|=|=|=|=|=|=|=| //



//============================== END GAME ============================== //

// -------------------- LOOSE GAME -------------------- //
function checkPlayerHP(){console.log(`function checkPlayerHP ran - but isn't written yet`)}; //if hp < 1, game over

// -------------------- WIN GAME -------------------- //
function checkOpponentsLeft(){console.log(`function checkOpponentsLeft ran - but isn't written yet`)}; //if opponentLeft.length == 0, player wins


//Call Shit
initiateGame()