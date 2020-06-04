/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var roundScore,activePlayer,score,isGaming;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(isGaming){
		var dice=Math.floor(Math.random()*6)+1;
	document.querySelector('img').src='dice-'+dice+'.png';
	if(dice!==1){
		roundScore+=dice;
    document.querySelector('#current-'+activePlayer).innerHTML=roundScore;
	}
	else{
	
	nextPlayer();
	}

}

	
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	score[activePlayer]+=roundScore
	document.querySelector('#score-'+activePlayer).innerHTML=score[activePlayer];
	if(score[activePlayer]>=20){
		
		document.querySelector('#score-'+activePlayer).innerHTML="Winner!";
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		isGaming=false;
		

	}
	else{
		nextPlayer();
	}
	

});

function nextPlayer(){
	roundScore=0;
	activePlayer=(activePlayer+1)%2
	document.querySelector('#current-0').innerHTML=0;
	document.querySelector('#current-1').innerHTML=0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}
function init(){
	isGaming=true;
	roundScore=0;
	activePlayer=0;
	score=[0,0];
	document.querySelector('#score-0').innerHTML=0
	document.querySelector('#score-1').innerHTML=0;
	document.querySelector('#current-0').innerHTML=0;
	document.querySelector('#current-1').innerHTML=0;
	}



document.querySelector('.btn-new').addEventListener('click',init);
