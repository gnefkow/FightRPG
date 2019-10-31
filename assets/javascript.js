//TO DO:

//add document.ready
//create HTML FIle


// DOM Elements: Battle Fields
var playerSpotEL
  playerSpotEL = document.getElementById("playerSpot"); 
var opponentPenEL
  opponentPenEl = document.getElementById("opponentsLeftSpotList");
var battlefieldEL
  battlefieldEL = document.getElementById("battlefieldSpot"); 

//DOM Elements: SCOREKEEPING
var playerCounts
    playerCounts = document.getElementById("playerCounterContainer");
    playerCounts.style.display = "none";
  var playerCountsEL_HP
    playerCountsEL_HP = document.getElementById("playerHP");
  var playerCountsEL_AP
    playerCountsEL_AP = document.getElementById("playerAP");
var opponentCounts
    opponentCounts = document.getElementById("opponentCounterContainer");
    opponentCounts.style.display = "none";
  var opponentCountsEL_HP
    opponentCountsEL_HP = document.getElementById("opponentHP");
  var playerCountsEL_AP
    opponentCountsEL_AP = document.getElementById("opponentAP");

//DOM Controls
var controlButtonsEL
  controlButtonsEL = document.getElementById("controlButtonSpace");
  
  




// Character Variables
//consider using a constructor function for this: https://javascript.info/constructor-new , https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor 
var characters = {
  Trump : {
    NAME: "Trump",
    HP  : 1001,
    AP  : 101,
    CAP : 101,
    ATTACK: "Tweet!",
    CONTENDER : true
    },  
  Sanders : {
    NAME: "Sanders",
    HP  : 2002,
    AP  : 202,
    CAP : 202,
    ATTACK: "Yell!!",
    CONTENDER: true
    }, 
  Warren : {
    NAME: "Warren",
    HP  : 3003,
    AP  : 303,
    CAP : 303,
    ATTACK: "Plan!!",
    CONTENDER: true
    }, 
  Biden : {
    NAME: "Biden",
    HP  : 4004,
    AP  : 404,
    CAP : 404,
    ATTACK: "Tell a story!!",
    CONTENDER: true
    }
  } 

//Mechanics
var opponentsLeft = [ characters.Trump, characters.Sanders, characters.Warren, characters.Biden ];
var player; //this automatically evaluates to false
var playerIsSelected = false;
var opponentIsSelected = false;
// var playerHP
// var playerAP
var opponent
// var opponentHP
// var opponentCAP



// ============================== NEW GAME: ============================== //


function updateOpponentHP() { $(opponentCountsEL_HP).html(opponent.HP);};
function checkOpponent() {
if ($(opponent.HP) > 0 ) {endgameLose();} 
}; 

function updatePlayerHP()   {$(playerCountsEL_HP).html(player.HP);};
function checkPlayerHP() { 
  if (player.HP > 0 ) {endgameLose();} 
}; 
function updatePlayerAP()   {$(playerCountsEL_AP).html(player.AP);};

        



// Initiate Game:
function initiateGame(){   //Displays opponentsLeft array in the DOM - at this point, it has all 4 characters
  for (var i = 0; i < opponentsLeft.length; i++) {
    $( `<li id='${opponentsLeft[i].NAME}' class="characterCard"> ${opponentsLeft[i].NAME}</li>` ).appendTo( opponentPenEl );
  }
  console.log(`function initiateGame ran`)
  choosePlayer();
};

//Player can choose a character:

function choosePlayer (){
  $(`.characterCard`).on("click", function() {
    if (!playerIsSelected ) { //(IF PLAYER IS NOT SELECTED)
        $(this).appendTo( playerSpotEL );

      // The chosen character becomes var player
        player = characters[this.id];
        playerIsSelected = true;
        player.CONTENDER = false;
      //Player's HP and AP are displayed
        playerCounts.style.display = "block";
        updatePlayerHP();
        updatePlayerAP();

    //Selects Opponent:    
    } else if (!opponentIsSelected){ 
        $(this).appendTo( battlefieldEL );
      // chosen enemy becomes "opponent"
        opponent = characters[this.id];
        opponentIsSelected = true;
      //Opponent's HP and AP are displayed
        opponentCounts.style.display = "block";
        updateOpponentHP();
        $(opponentCountsEL_AP).html(opponent.AP);
        battle();
    }
  });
   
};
  




// ======================================== BATTLE ======================================== //
 
function battle(){
  console.log(`function battle ran`)

  //display attack button
  $(controlButtonsEL).html( `<button type="button" class="btn btn-danger" id="attack-button">${player.ATTACK}</button>` );
  round();
  
  function round() {

    // --------------------    FIGHT    -------------------- //
    attack();
    // .on(click attack button, function() {
    function attack(){
      $(`#attack-button`).on("click", function(){
        opponent.HP -= player.AP;
        updateOpponentHP();
        counterAttack();
      })

    }; 
        // opponentHP is reduced by playerAP
        //  is opponent dead? if (dead){ disposeBody(); } else { counterAttack(); }

      function counterAttack(){
        console.log(`counterAttack ran!`)
        alert(`${opponent.NAME} used ${opponent.ATTACK}!!`);
        player.HP -= opponent.AP;
        updatePlayerHP();
        checkPlayerHP();
      };
        
        // reduces playerHP by opponentCAP
        // run: checkPlayerHP():
        
      function disposeBody(){}; 
        // removes the opponent from the battleFieldEl
        // run: checkOpponentsLeft();
        // count CONTENDERS - if CONTENDERS = 0, then win
  // selectOpponent();
  }
};

// =|=|=|=|=|=|=|=|=|=|=|=|=|=|=| /BATTLE =|=|=|=|=|=|=|=|=|=|=|=|=|=|=| //



//============================== END GAME ============================== //

// -------------------- LOOSE GAME -------------------- //
function endgameLose(){
  console.log(`Game Over, ${player.NAME} is knocked out of the race!`)
};

// -------------------- WIN GAME -------------------- //
function checkContenders(){console.log(`function checkOpponentsLeft ran - but isn't written yet`)}; //if opponentLeft.length == 0, player wins


//Call Shit
initiateGame()