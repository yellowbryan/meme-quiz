

const showNext = index => {
  const nextEl = document.getElementsByClassName(`hide-${index}`)[0]
  const currentEl = document.getElementsByClassName('show')[0]
  
  nextEl.classList.remove(`hide-${index}`)
  nextEl.classList.add('show')
  
  currentEl.classList.remove('show')
  currentEl.classList.add(`hide-${index-1}`)
}



var one1= () => { document.getElementById("one1").src="img/1/wrong.jpg";  } 
var one2 = () => document.getElementById("one2").src="img/1/correct.jpg";

var two1 = () => { document.getElementById("two1").src="img/2/correct.jpg";  } 
var two2 = () => document.getElementById("two2").src="img/2/wrong.jpg";

var three1 = () =>  document.getElementById("three1").src="img/3/correct.jpg";  
var three2= () => document.getElementById("three2").src="img/3/wrong.jpg";

var four1 = () =>  document.getElementById("four1").src="img/4/correct.jpg";  
var four2 = () => document.getElementById("four2").src="img/4/wrong.jpg";

var five1 = () =>  document.getElementById("five1").src="img/5/wrong.jpg";  
var five2 = () => document.getElementById("five2").src="img/5/correct.jpg";


var six1 = () =>  document.getElementById("six1").src="img/6/wrong.jpg";  
var six2 = () => document.getElementById("six2").src="img/6/correct.jpg";


var seven1 = () =>  document.getElementById("seven1").src="img/7/correct.jpg";  
var seven2 = () => document.getElementById("seven2").src="img/7/wrong.jpg";


var eight1 = () =>  document.getElementById("eight1").src="img/8/wrong.jpg";  
var eight2 = () => document.getElementById("eight2").src="img/8/correct.jpg";

var nine1 = () =>  document.getElementById("nine1").src="img/9/wrong.jpg";  
var nine2 = () => document.getElementById("nine2").src="img/9/correct.jpg";


var ten1 = () =>  document.getElementById("ten1").src="img/10/correct.jpg";  
var ten22 = () => document.getElementById("ten2").src="img/10/wrong.jpg";




/*
	
var next = () => {   
 quiz1.classList.add("hide-me"); 
 quiz2.classList.add("show-me");
 btn.classList.add("hide-me");
 btn2.classList.add("show-me"); } 


var next2 = () => {   
 quiz2.classList.add("hide-me"); 
 quiz3.classList.add("show-me");
 btn2.classList.add("hide-me");
 btn3.classList.add("show-me"); } 

 var next3 = () => {   
 quiz3.classList.add("hide-me"); 
 quiz4.classList.add("show-me");
 btn3.classList.add("hide-me");
 btn4.classList.add("show-me"); } 


*/



/*
var hoverimage = document.getElementsByClassName("memeimg");
hoverimage.addEventListener("mouseover", function(){
	this.style ="box-shadow: 2px 2px 2px grey";
	this.width ="110px"
});



 var changeimgtzuyu = () => document.getElementById("image").src="img/tzuyu.jpg"; 



quiz1.classList.add("hide-me");

var next =

pageCounter++; //to increment so it will change the url everytime the user click ( because we have three source links that have different number on the last address)
if( pageCounter > 3) {
  btn.classList.add("hide-me"); 

*/