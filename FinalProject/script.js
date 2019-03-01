// window.scrollTo(1000, 2300);

var posarray = [1,2,3];
console.log("Hello world!"+posarray);
var pic1= "linde2";
var pic2= "kastanie2";


function rotatefunction1(){
	setpic(0,1)
    document.getElementById(pic1).style.left="650px";
    document.getElementById(pic2).style.left="226px";
    swaparray(0,1);
}



function rotatefunction2(){
	setpic(1,2)
    document.getElementById(pic1).style.left="1082px";
    document.getElementById(pic2).style.left="650px";
    swaparray(1,2);
}

function setpic(arrpos1,arrpos2){	
	if(posarray[arrpos1] == 1){
        pic1= "linde2";
    }else{
        if(posarray[arrpos1] == 2){
            pic1= "kastanie2";
        }else{
            pic1= "kokosnuss2";
        }        
    }
	if(posarray[arrpos2] == 1){
        pic2= "linde2";
    }else{
        if(posarray[arrpos2] == 2){
            pic2= "kastanie2";
        }else{
            pic2= "kokosnuss2";
        }        
    }
}

var temp=1;
function swaparray(int1,int2){
    temp=posarray[int1];
    posarray[int1]=posarray[int2];
    posarray[int2]=temp;
    console.log("Hello world!neu"+posarray);
}

var audio1 = document.getElementById("myAudio1");
var audio2 = document.getElementById("myAudio2");

function linkdirection(){
    if(posarray[0]=3 && posarray[1]==2 && posarray[2]==1){
		audio1.play();
        setTimeout(function(){ window.location = "index2.html";}, 1500);
//        window.location = "index2.html";
    }else{
        document.getElementById("answerdiv").style.animation = "answeranimation 5s ease 0s 1 normal none running";
		audio2.play();
        setTimeout(function(){ window.location = "index.html";}, 5000);
        // function myFunction() {
        //     setTimeout(function(){ reset_animation(); }, 5000);            
        // }
          
        
    }
}



// function startAnimation() {
//     document.getElementById("animation").style.animation = "animationName 2s linear 1";
// }



// // retrieve the element
// element = document.getElementById("answerdiv");

// // reset the transition by...
// element.addEventListener("click", function(e) {
//   e.preventDefault;
  
//   // -> removing the class
//   element.classList.remove("run-animation");
  
//   // -> triggering reflow /* The actual magic */
//   // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
//   // Oops! This won't work in strict mode. Thanks Felis Phasma!
//   // element.offsetWidth = element.offsetWidth;
//   // Do this instead:
//   void element.offsetWidth;
  
//   // -> and re-adding the class
//   element.classList.add("run-animation");
// }, false);



// function reset_animation() {
//     var el = document.getElementById('answerdiv');
//     el.style.animation = 'none';
//     el.offsetHeight; /* trigger reflow */
//     el.style.animation = null; 
//   }























