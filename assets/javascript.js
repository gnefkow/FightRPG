$( document ).ready(function() {

// DOM Elements: 
  //BATTLEFIELDS:
    //These are the divs that the cards go in.
    var playerSpotEL
      playerSpotEL = document.getElementById("playerSpot"); 
    var opponentPenEL
      opponentPenEl = document.getElementById("opponentsLeftSpotList");
    var battlefieldEL
      battlefieldEL = document.getElementById("battlefieldSpot"); 

  //SCOREBOARDS
    // Player Scoreboard:
    var playerCounts = document.getElementById("playerCounterContainer");
        playerCounts.style.display = "none";
      var playerCountsEL_HP = document.getElementById("playerHP");
      var playerCountsEL_AP = document.getElementById("playerAP");
    //Opponent Scoreboard:
    var opponentCounts = document.getElementById("opponentCounterContainer");
        opponentCounts.style.display = "none";
      var opponentCountsEL_HP = document.getElementById("opponentHP");
      var opponentCountsEL_AP = document.getElementById("opponentAP");

//CONTROLS
    //Attack Button:
      var controlButtonsEL = document.getElementById("controlButtonSpace");
    
    //Restart Button:
      var restartButton = document.getElementById("restartButton")
        restartButton.onclick = function() {location.reload()};
        restartButton.style.display = "none";  



// CHARACTER OBJECTS
  var characters = {
    Trump : {
      NAME: "Trump",
      HP  : 2500,
      AP  : 400,
      CAP : 400,
      ATTACK: "DUMB TWEET!!",
      EXCUSE: "Donald decided to focus on his social media career",
      CONTENDER : true
      },  
    Sanders : {
      NAME: "Sanders",
      HP  : 2000,
      AP  : 300,
      CAP : 300,
      ATTACK: "Rant about capitalism!!",
      EXCUSE: "Bernie grumbled 'I'm too old for this shit' and moved to Sweden",
      CONTENDER: true
      }, 
    Warren : {
      NAME: "Warren",
      HP  : 1500,
      AP  : 200,
      CAP : 100,
      ATTACK: "Make a plan!!",
      EXCUSE: "Elizabeth decided these plebians are beneath her",
      CONTENDER: true
      }, 
    Biden : {
      NAME: "Biden",
      HP  : 1500,
      AP  : 200,
      CAP : 100,
      ATTACK: "Mention Obama!!",
      EXCUSE: "Joe decided he needed to 'focus on his family'",
      CONTENDER: true
      }
    } 



//Mechanics
  var opponentsLeft = [ characters.Trump, characters.Sanders, characters.Warren, characters.Biden ];
  var player;     //this automatically evaluates to false
  var opponent;   //This one also automatically evaluates to false

  // ENABLES PLAYER TO WIN OR LOOSE:
    //ok, this is a janky-ass thing, but it counts down the number of candidates that still need to be defeated:
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

  // These functions update the counters during a fight:
    function updateOpponentHP() { $(opponentCountsEL_HP).html(opponent.HP);};
    function updatePlayerHP()   { $(playerCountsEL_HP).html(player.HP);};
    function updatePlayerAP()   { $(playerCountsEL_AP).html(player.AP);};

  //Determine Game Outcome:
    function determineGame() {if (contenders <= 0){endgameWin();}};
    function checkPlayerHP() {if (player.HP <= 0 ) {endgameLose();} }; 





// ============================== NEW GAME: ============================== //


// INITIATE GAME:
  
  function initiateGame(){   
    //Displays opponentsLeft array in the DOM - at this point, it has all 4 characters
      for (var i = 0; i < opponentsLeft.length; i++) {
        $( `<li id='${opponentsLeft[i].NAME}' class="characterCard"> ${opponentsLeft[i].NAME}</li>` ).appendTo( opponentPenEl );
      }
    //User can choose a player:
      choosePlayer();
    };


  //Player can chooses cards for...
  function choosePlayer (){
    $(`.characterCard`).on("click", function() {

      // Their character (var player):
      if (!player ) {
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
        //Reduces Opponent HP:
          opponent.HP -= player.AP;
          updateOpponentHP();
        //Player's attack gains power:
          player.AP += 250;
          updatePlayerAP();
        //Check to see if this fight will continue:
          checkOpponent(); 
      })
    }; 


    // CHECK TO SEE IF OPPONENT DIED
    function checkOpponent() {
      if (opponent.HP <= 0 ) {
        //Message
          alert(`Critical hit! ${opponent.EXCUSE} and dropped out of the race!`);
        //Hide the card:
          document.getElementById(opponent.NAME).style.display = "none";
        // Removes the defeated character as a contender:
          opponent.CONTENDER  = false;
        //Resets everything:
          opponent = false;
          controlButtonsEL.style.display = "none";
          opponentCounts.style.display = "none";
        //See if there are any opponents left:
          countContenders();
        // Select the next opponent:
          choosePlayer();
      } else {
        counterAttack();};
      }; 

      
    //COUNTER ATTACK
    function counterAttack(){
      //Message
        if (opponentAP < 700) { alert(`${opponent.NAME} used ${opponent.ATTACK}, it was super effective! ${opponent.AP} damage!!`); 
        } else {                alert(`${opponent.NAME} used ${opponent.ATTACK}, ${opponent.AP} damage!!`); 
        };
      //Update Counts:
        player.HP -= opponent.AP;
        updatePlayerHP();
        checkPlayerHP();
      };
  }
};






//============================== END GAME ============================== //

// -------------------- LOOSE GAME -------------------- //
  function endgameLose(){

  //Hide Battle Elements:    
    document.getElementById("playingField").style.display = "none";
    document.getElementById("endgameTitle").innerHTML = "Well, ya lost,";
    document.getElementById("endgameMessage").innerHTML = "...maybe go write a book like Hillary";
  
  //Display DOM Elements:  
    restartButton.style.display = "block";
  };


  // -------------------- WIN GAME -------------------- //
  function endgameWin(){

  //Hide Battle Elements:    
    document.getElementById("playingField").style.display = "none"; 
    
  //Display DOM Elements:
      document.getElementById("endgameTitle").innerHTML = "Well, you won,";
      document.getElementById("endgameMessage").innerHTML = "If you thought that was tough, just wait until you start the actual job.";
      restartButton.style.display = "block";
  };



//Initialize
initiateGame();

}); //document.ready closer