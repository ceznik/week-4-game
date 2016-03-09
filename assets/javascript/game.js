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
	console.log($(this).text());
	$(this).remove();
	$("#player-panel").html($(this).show("slow"));
	$("#player-panel").children().addClass("player-character");
	$("#enemy-panel").html($("#character-panel").html());
	$("#enemy-panel").children().addClass("enemies");
	$("#character-panel").remove();
	$(".character-container").unbind();

	console.log($("#enemy-panel").html());

	$(".enemies").on('click',stageBattle);

	function stageBattle(){
		alert("stageBattle");
		console.log($(this).text());
		$(this).remove();
		$("#defender-panel").html($(this).show("slow"));
		console.log($('#defender-panel').children().attr('id'));
	

		$("#attack").click(doBattle($(".player-character").attr('id')),$('#defender-panel').children().attr('id'));

		function doBattle(playerCharacter, enemyCharacter){
			var battleMultiplier = playerCharacter.attackPower;
			do {
				characters.enemyCharacter.healthPoints-=characters.playerCharacter.attackPower;
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


	}

}


function restart(){
	location.reload();
}

$(".character-container").click(initiateGame);


// $("#enemy-panel").delegate('.character-container', 'click', stageBattle);
// $("#restart").click(restart);

})//program close