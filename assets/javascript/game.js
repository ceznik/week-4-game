////////////////////////global variables/////////////////////
$(document).ready(function() {
	// body...

var characters={
	'obi-wan':{
		name:"Obi-Wan Kenobi",
		image:"../images/obi-wan.jpg",
		healthPoints:100,
		attackPower:20,
		counterAttackPower:25
	},
	'luke-skywalker':{
		name:"Luke Skywalker",
		image:"../images/luke-skywalker.jpg",
		healthPoints:120,
		attackPower:30,
		counterAttackPower:45
	},
	'darth-sidious':{
		name:"Darth Sidious",
		image:"../images/darth-sidious.png",
		healthPoints:110,
		attackPower:40,
		counterAttackPower:25
	},
	'darth-maul':{
		name:"Darth Maul",
		image:"../images/darth-maul.jpg",
		healthPoints:120,
		attackPower:25,
		counterAttackPower:25
	},
}

$('#obi-wan').find('#health-points').html(characters['obi-wan'].healthPoints);
$('#luke-skywalker').find('#health-points').html(characters['luke-skywalker'].healthPoints);
$('#darth-sidious').find('#health-points').html(characters['darth-sidious'].healthPoints);
$('#darth-maul').find('#health-points').html(characters['darth-maul'].healthPoints);

function initiateGame(){
	// console.log($(this).text());
	
	$(this).remove().effect('blind');
	$("#player-panel").html($(this).show('slow'));
	$("#player-panel").children().addClass("player-character");
	$("#enemy-panel").append($("#character-panel").html()).show('slow');
	$("#enemy-panel").children().addClass("enemies");
	$("#character-panel").remove();
	$(".character-container").unbind();

	console.log($("#enemy-panel").html());

	$(".enemies").on('click',stageBattle);

	function stageBattle(){
		// console.log($(this).text());
		$(this).remove().effect('blind');
		$("#defender-panel").html($(this).show('slow'));
		console.log($('#defender-panel').children().attr('id'));
		$("#attack").on('click', function (){
			//alert("Attack!!!");
			doBattle($(".player-character").attr('id'),$('#defender-panel').children().attr('id'));
			function doBattle(playerCharacter, enemyCharacter) {
			    //alert(playerCharacter + " and " + enemyCharacter + " are about to do battle.");
				var battleMultiplier = characters[playerCharacter].attackPower;
				console.log("battleMultiplier= " + battleMultiplier);
				characters[enemyCharacter].healthPoints-=characters[playerCharacter].attackPower;
				console.log("enemyCharacter: " + characters[enemyCharacter].healthPoints);
				// $(JSON.stringify("#" + enemyCharacter)).find('#healthPoints').text(characters[enemyCharacter].healthPoints);
				console.log($("#defender-panel").html());

				characters[playerCharacter].healthPoints-=characters[enemyCharacter].attackPower;
				console.log("playerCharacter: " + characters[playerCharacter].healthPoints);
				// $('#' + "'" + playerCharacter + "'").find('#healthPoints').text(characters[playerCharacter].healthPoints);
				console.log($("#player-panel").html());
				characters[playerCharacter].attackPower+=battleMultiplier;

				if (characters[enemyCharacter].healthPoints <= 0) {
					alert("enemy defeated");
					//remove enemy from defender area and prompt for new enemy
					$('#defender-panel').empty().effect('explode');
				}
				else if (characters[playerCharacter].healthPoints<=0){
					alert("you lost");
					$('#player-panel').empty().effect('explode');
				}
			
			};
		});
	}//closes stageBattle
}//closes initiateGame


//game begins when user selects a character from the character panel.
$(".character-container").click(initiateGame); 


});//program close