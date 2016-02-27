////////////////////////global variables/////////////////////
$(document).ready(function() {
	// body...

var characters={
	'obi-wan':{
		name:"Obi-Wan Kenobi",
		image:"../images/obi-wan.jpg",
		healthPoints:100,
		attackPower:10,
		counterAttackPower:25
	},
	'luke-skywalker':{
		name:"Luke Skywalker",
		image:"../images/luke-skywalker.jpg",
		healthPoints:100,
		attackPower:10,
		counterAttackPower:25
	},
	'darth-sidious':{
		name:"Darth Sidious",
		image:"../images/darth-sidious.png",
		healthPoints:100,
		attackPower:10,
		counterAttackPower:25
	},
	'darth-maul':{
		name:"Darth Maul",
		image:"../images/darth-maul.jpg",
		healthPoints:100,
		attackPower:10,
		counterAttackPower:25
	},
};


	//move selected character to player panel
	//move remaining characters to enemy panel
function initiateGame(){
/*	console.log($(this).text());*/
	$(this).detach();
	$("#player-panel").html($(this).show("slow"));
	// $(this).addClass("player");
	$("#enemy-panel").html($("#character-panel").html());
	$("#character-panel").remove();



}
// alert("game initiated");

function doBattle(playerCharacter, enemyCharacter){
	var battleMultiplier = playerCharacter.attackPower;
	do {
		enemyCharacter.healthPoints-=playerCharacter.attackPower;
		playerCharacter.healthPoints-=enemyCharacter.attackPower;
		playerCharacter.attackPower+=battleMultiplier;
	}
	while(enemyCharacter.healthPoints > 0 && playerCharacter.healthPoints > 0);

	if (enemyCharacter.healthPoints == 0) {
		alert("enemy defeated");
		//remove enemy from defender area and prompt for new enemy
	}
	else{
		alert("you lost");
	}
}
function stageBattle(){
	console.log("made it to stage battle");
	$(this).detach();
	$("#defender-panel").html($(this).show("slow"));
}
function restart(){
	location.reload();
}

// var characterPanelBuilder = function(){
// 	console.log("called characterPanelBuilder")
// 	for (var i = 0; i < characters.length; i++){
// 		var charBuilder = $('<div class="character-container" id=' + String(characters[i]) + '></div>').html('<header>' + characters[i].name + '</header><img class="character" src=' + characters[i].image + '<footer>' + characters[i].healthPoints + '</footer>');
// 		console.log(charBuilder);
// 		$(".character-panel").append(charBuilder);
// 	}
// }
// characterPanelBuilder();
$("#character-panel > .character-container").click(initiateGame);

// $("#enemy-panel").html($("#character-panel").addClass("enemy"));
$("#enemy-panel > .character-container").click(stageBattle);
// $(".character-container").off("click");

//player chooses a character as their own

//player then chooses a character from the enemy panel to go battle with until there are no more enemies
$("#attack").click(doBattle);
$("#restart").click(restart);

})//program close