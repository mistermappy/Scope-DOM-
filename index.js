//Challenge #1: Buttons arguing 
document.getElementById('btn').onclick = function(){
	document.getElementById('text').innerHTML = "I\'m right!" ;
}

document.getElementById('btn2').onclick = function(){
	document.getElementById('text').innerHTML = 'No, I\'m right!' ;
}

//Challenge #2: Don't Hover Over Text 
document.getElementById('noHoverZone').onmouseover = function(){
	alert('I said don\'t hover over me!');
}

//Challenge #3: Displays which key is pressed
document.getElementById('pressme').onkeypress = function PressedKey(event){
	var x = event.key ; 
	document.getElementById('demo').innerHTML = 'You pressed: ' + x ;
}		


//Challenge #4: Checks user input to see if username has at least one char and password is '12345678'
function mySolution() { 
let x = document.forms['myForm']['username'].value ;
let y = document.forms['myForm']['password'].value ; 
let z = document.forms['myForm']['email'].value ; 
let re = /[0-9]/g ; 
//var xx = /[a-z0-9.+_%-]+@[a-z0-9_-.]+\.[a-z]{3}$/g ;
	if (x.match(re) && y == '12345678') { 
	document.getElementById('validateMe').innerHTML = 'Login Successful' ;
	event.preventDefault(); 
	}
	else {
	alert('Incorrect!');
	}
}