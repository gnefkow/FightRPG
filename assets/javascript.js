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


  
  

var opponentCountsEL


// Character Variables
//consider using a constructor function for this: https://javascript.info/constructor-new , https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor 
var characters = {
  Trump : {
    NAME: "Trump",
    HP  : 1001,
    AP  : 100,
    CAP : 200,
    alive : true
    },  
  Sanders : {
    NAME: "Sanders",
    HP  : 1000,
    AP  : 300,
    CAP : 200
    }, 
  Warren : {
    NAME: "Warren",
    HP  : 1000,
    AP  : 100,
    CAP : 200
    }, 
  Biden : {
    NAME: "Biden",
    HP  : 1000,
    AP  : 100,
    CAP : 200
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
      //Player's HP and AP are displayed
        playerCounts.style.display = "block";
        $(playerCountsEL_HP).html(player.HP);
        $(playerCountsEL_AP).html(player.AP);


    //Selects Opponent:    
    } else if (!opponentIsSelected){ 
        $(this).appendTo( battlefieldEL );
      // chosen enemy becomes "opponent"
        opponent = characters[this.id];
        opponentIsSelected = true;
      //Opponent's HP and AP are displayed
        opponentCounts.style.display = "block";
        $(opponentCountsEL_HP).html(opponent.HP);
        $(opponentCountsEL_AP).html(opponent.AP);
    } else {
        battle();
    }
  });
   
};
  




// ======================================== BATTLE ======================================== //
 
function battle(){
  console.log(`function battle ran`)
          //display attack button

      //     attack();
      //   });
      // }; 
              
              



    // --------------------    FIGHT    -------------------- //

    // .on(click attack button, function() {
    function attack(){
      console.log(`the attack function ran - but it doesn't do anything yet`)}; 
        // opponentHP is reduced by playerAP
        //  is opponent dead? if (dead){ disposeBody(); } else { counterAttack(); }

      function counterAttack(){};
        // reduces playerHP by opponentCAP
        // run: checkPlayerHP():
        
      function disposeBody(){}; 
        // removes the opponent from the battleFieldEl
        // run: checkOpponentsLeft();
  // selectOpponent();
      };

// =|=|=|=|=|=|=|=|=|=|=|=|=|=|=| /BATTLE =|=|=|=|=|=|=|=|=|=|=|=|=|=|=| //



//============================== END GAME ============================== //

// -------------------- LOOSE GAME -------------------- //
function checkPlayerHP(){console.log(`function checkPlayerHP ran - but isn't written yet`)}; //if hp < 1, game over

// -------------------- WIN GAME -------------------- //
function checkOpponentsLeft(){console.log(`function checkOpponentsLeft ran - but isn't written yet`)}; //if opponentLeft.length == 0, player wins


//Call Shit
initiateGame()