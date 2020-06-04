/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var roundScore,activePlayer,score,isGaming;
roundScore=0;
activePlayer=0;


document.querySelector('.btn-roll').addEventListener('click',function(){
var dice=Math.floor(Math.random()*6)+1;
document.querySelector('img').src='dice-'+dice+'.png';
if(dice!==1){
	roundScore+=dice;
    document.querySelector('#current-'+activePlayer).innerHTML=roundScore;
}
else{
	roundScore=0;
	document.querySelector('#current-'+activePlayer).innerHTML=roundScore;
	activePlayer=(activePlayer+1)%2
}
});

document.querySelector('.btn-new').addEventListener('click',function(){
console.log('clicked new');
});
document.querySelector('.btn-hold').addEventListener('click',function(){
console.log('clicked hold');
});