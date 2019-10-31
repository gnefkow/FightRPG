//TO DO:

//add document.ready
//create HTML FIle


// DOM Elements
var opponentPenEL
var battlefieldEL
var playerSpotEL
var playerCountsEL
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
opponentPenEl = document.getElementById("opponentsLeftSpotList");
playerSpotEL = document.getElementById("playerSpot"); 



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
        // player = this.id;  //this is pulling a string with the rignt name, but... its a string
        player = characters[this.id];
        console.log(`Now player is ${player}`);
        playerIsSelected = true;
        battle();
    } else if (!opponentIsSelected){ 
        $(this).appendTo( battlefieldEL );
        opponent = characters[this.id];
        console.log(`The player has chosen ${opponent} as the opponent.`)
        opponentIsSelected = true;
    } else {
        battle();
    }
  });
   
  // sets playerHP == character's HP
  // playerHP == player.HP;
  // sets playerAP == character's AP
  // Remove character from opponentsLeft array
};
  




// ======================================== BATTLE ======================================== //
 
function battle(){
  battlefieldEL = document.getElementById("battlefieldSpot"); 
  
  console.log(`function battle ran`)

    // -------------------- CHOOSE OPPONENT -------------------- //
    


    //CHOOSE ENEMY:

          
          
          

          // chosen enemy becomes "opponent"
          // opponentHP == character's HP
          // opponentCAP == character's CAP
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