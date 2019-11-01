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
  //TODO: refactor Reset Button to be a variable.
  document.getElementById("restartButton").style.display = "none";  





// Character Variables
//consider using a constructor function for this: https://javascript.info/constructor-new , https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor 
var characters = {
  Trump : {
    NAME: "Trump",
    HP  : 1001,
    AP  : 101,
    CAP : 101,
    ATTACK: "DUMB TWEET!!",
    CONTENDER : true
    },  
  Sanders : {
    NAME: "Sanders",
    HP  : 2002,
    AP  : 202,
    CAP : 202,
    ATTACK: "Rant about capitalism!!",
    CONTENDER: true
    }, 
  Warren : {
    NAME: "Warren",
    HP  : 3003,
    AP  : 303,
    CAP : 303,
    ATTACK: "Make a plan!!",
    CONTENDER: true
    }, 
  Biden : {
    NAME: "Biden",
    HP  : 4004,
    AP  : 404,
    CAP : 404,
    ATTACK: "Mention Obama!!",
    CONTENDER: true
    }
  } 

//Mechanics
var opponentsLeft = [ characters.Trump, characters.Sanders, characters.Warren, characters.Biden ];
var player; //this automatically evaluates to false
var playerIsSelected = false;
var opponentIsSelected = false;
var opponent = false;

// ENABLES PLAYER TO WIN OR LOOSE:
  //ok, this is a janky-ass thing, but it enables the player to win:
  var contenders;
  function countContenders(){
    contenders = 0;
    if (characters.Trump.CONTENDER){contenders++;};
    if (characters.Sanders.CONTENDER){contenders++;};
    if (characters.Warren.CONTENDER){contenders++;};
    if (characters.Biden.CONTENDER){contenders++;};
    determineGame();
    return contenders;
  };
  function determineGame() {
    if (contenders <= 0){endgameWin();}
  }


// ============================== NEW GAME: ============================== //


function updateOpponentHP() { $(opponentCountsEL_HP).html(opponent.HP);};


function updatePlayerHP()   {$(playerCountsEL_HP).html(player.HP);};
function checkPlayerHP() { 
  if (player.HP <= 0 ) {endgameLose();} 
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

//Player can chooses cards for...
// Their character (var player)
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

//Their Opponent:    
    } else if (!opponent){ 
        $(this).appendTo( battlefieldEL );
      // chosen enemy becomes "opponent"
        opponent = characters[this.id];
        // opponentIsSelected = true;
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
  controlButtonsEL.style.display = "block";
  round();
  
  function round() {

    // --------------------    FIGHT    -------------------- //
    attack();
    
    // PLAYER's ATTACK:
    function attack(){
      $(`#attack-button`).on("click", function(){
        opponent.HP -= player.AP;
        player.AP += 100;
        
        updateOpponentHP();
        alert(`Critical hit! ${opponent.NAME} took ${player.AP} damage!`);
        
        updatePlayerAP();
        alert(`${player.NAME} gained some press, ${player.ATTACK} now does ${player.AP} damage!`);

        checkOpponent();
        countContenders();
        //TODO: if all opponents are dead, end the game.
        //TODO: If opponent is dead, throw an alert.
          //if not, counter attack

        //  is opponent dead? if (dead){ disposeBody(); } else { counterAttack(); }
      })
    }; 


    // CHECK TO SEE IF OPPONENT DIED
    function checkOpponent() {
      console.log(`we checked the opponent`);
    if (opponent.HP <= 0 ) {
      console.log("Opponent should be dead now.")

      document.getElementById(opponent.NAME).style.display = "none";

      opponent.CONTENDER  = false;
      choosePlayer();
      //TODO: hide the opponent's card?
      opponent = false;
      controlButtonsEL.style.display = "none";
      opponentCounts.style.display = "none";
    } else {counterAttack();};
    }; 


      function counterAttack(){
        console.log(`counterAttack ran!`)
        
        alert(`${opponent.NAME} used ${opponent.ATTACK}, it was super effective! ${opponent.AP} damage!!`);
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
    document.getElementById("playingField").style.display = "none";
    document.getElementById("endgameMessage").innerHTML = "Well, ya lost - maybe go write a book like Hillary";
    document.getElementById("restartButton").style.display = "block";
    document.getElementById("restartButton").onclick = function() {location.reload()};
  };

  // -------------------- WIN GAME -------------------- //
  function endgameWin(){console.log(`endgameWIN ran`)
    document.getElementById("playingField").style.display = "none";
    document.getElementById("endgameMessage").innerHTML = "Well, you won - looks like 4 years of arguing with the house and senate.";
    document.getElementById("restartButton").style.display = "block";
    document.getElementById("restartButton").onclick = function() {location.reload()};
  };



//Call Shit
initiateGame();