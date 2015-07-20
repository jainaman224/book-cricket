$(document).ready(function(){
  $('.fd').hide();
  $('.hell').hide();
  $('.hello').hide();
  $('.hi').hide();
  $('.bye').hide();
  $('.gd').hide();
  $('.play').click(function(){
    $('.play').hide();
    $('.gd').fadeIn('slow');
  });
  $('.ba').click(function(){
    $('.ba').hide();
    $('.fd').fadeIn('fast');
  });
  $('.su').click(function(){
    compare();
  $('.hell').fadeIn('fast');
  $('.hello').fadeIn('fast');
  $('.hi').fadeIn('fast');
  $('.bye').fadeIn('fast');
  });
});

var run = 0;
function getCheckedRadioValue(radioGroupName) {
   var rads = document.getElementsByName(radioGroupName),
       i;
   for (i=0; i < rads.length; i++)
      if (rads[i].checked)
          return rads[i].value;
   return null;}
var compare=function (){
var checkedValue = getCheckedRadioValue("mode");
var userChoice = parseInt(checkedValue);
var choice1= userChoice;
var computerChoice = Math.random();
if (computerChoice < 0.21) {
computerChoice = 1;
} 
else if(computerChoice < 0.41) {
  computerChoice = 2;
} 
else if(computerChoice < 0.61){
  computerChoice = 3;
} 
else if(computerChoice < 0.81){
  computerChoice = 4;
}
else{
  computerChoice = 6;
}
document.getElementsByClassName('hell')[0].innerHTML="Your Choice : " + userChoice;
document.getElementsByClassName('hello')[0].innerHTML="Computer Choice : " + computerChoice;
var choice2 = computerChoice;
	if(choice1 === choice2){
    if ($('bat').click()){
      document.getElementsByClassName('bye')[0].innerHTML="USER OUT on";
    }
    else {
      document.getElementsByClassName('bye')[0].innerHTML="COMPUTER OUT on";
    }
    document.getElementsByClassName('hi')[0].innerHTML=run;
    run=0;
	}
	else {
    run = run + choice1;
    if ($('bat').click()){
      document.getElementsByClassName('bye')[0].innerHTML="USER";
    }
    else {
      document.getElementsByClassName('bye')[0].innerHTML="COMPUTER";
    }
    document.getElementsByClassName('hi')[0].innerHTML=run;
	}
}

  