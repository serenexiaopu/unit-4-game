$(document).ready(function() {

var comValue = Math.floor(Math.random()*102 + 18);
$('#numberBox').text(comValue);

var blueRanValue = Math.ceil(Math.random()*12);
var greenRanValue = Math.ceil(Math.random()*12);
var yellowRanValue = Math.ceil(Math.random()*12);
var pinkRanValue = Math.ceil(Math.random()*12);
var userValue = 0;
var showValue = $('#numberBox2').text(userValue);
console.log(userValue);


console.log(blueRanValue);
console.log(greenRanValue);
console.log(yellowRanValue);
console.log(pinkRanValue);

var imageNumB = $('#blueD').attr('value',blueRanValue);
var imageNumG = $('#greenD').attr('value',greenRanValue);
var imageNumY = $('#yellowD').attr('value',yellowRanValue);
var imageNumP = $('#pinkD').attr('value',pinkRanValue);


// reset values!------------------------------------------
function reset(){

	 comValue = Math.floor(Math.random()*102 + 18);
$('#numberBox').text(comValue);

 blueRanValue = Math.ceil(Math.random()*12);
 greenRanValue = Math.ceil(Math.random()*12);
 yellowRanValue = Math.ceil(Math.random()*12);
 pinkRanValue = Math.ceil(Math.random()*12);
 userValue = 0;
 showValue = $('#numberBox2').text(userValue);
console.log(userValue);


console.log(blueRanValue);
console.log(greenRanValue);
console.log(yellowRanValue);
console.log(pinkRanValue);

 imageNumB = $('#blueD').attr('value',blueRanValue);
 imageNumG = $('#greenD').attr('value',greenRanValue);
 imageNumY = $('#yellowD').attr('value',yellowRanValue);
 imageNumP = $('#pinkD').attr('value',pinkRanValue);


 $('img').on('click',function(){


userValue = userValue + parseInt($(this).attr('value'));
var updateuserValue = userValue; 

if(updateuserValue < comValue){

showValue = $('#numberBox2').text(updateuserValue);
console.log(updateuserValue);

}

if(updateuserValue > comValue){
	showValue = $('#numberBox2').text(updateuserValue);
    console.log(updateuserValue);
	alert('you lose!');
	reset();
}else if( updateuserValue === comValue){
	showValue = $('#numberBox2').text(updateuserValue);
    console.log(updateuserValue);
	alert('you win!')
	reset();
}


});

}




$('img').on('click',function(){


userValue = userValue + parseInt($(this).attr('value'));
var updateuserValue = userValue; 

if(updateuserValue < comValue){

showValue = $('#numberBox2').text(updateuserValue);
console.log(updateuserValue);

}

if(updateuserValue > comValue){
	showValue = $('#numberBox2').text(updateuserValue);
    console.log(updateuserValue);
	alert('You lose! Your number is: ', updateuserValue );
	reset();
}else if( updateuserValue === comValue){
	showValue = $('#numberBox2').text(updateuserValue);
    console.log(updateuserValue);
	alert('you win!')
	reset();
}


});

});


