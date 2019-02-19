// alert('Welcome to DCI');

// function showhide(){
//     if (document.getElementById('img').style.display =='block'){
//         document.getElementById('img').style.display ='none';
//         document.getElementById('showhide').innerHTML='Show';
//     }
//     else {
//         document.getElementById('img').style.display ='block';
//         document.getElementById('showhide').innerHTML='Hide';
//     }
// }
function changestyle(){
           
           newborder='50px';
           document.body.style.background='lightgray';
           document.getElementById('first').style.background='lightblue';
           document.getElementById('first').style.borderRadius=newborder;
           document.getElementById('first').style.color='red';            
           document.getElementById('j').style.background='red';            
           var welcome='Welcome to DCI';           
           document.getElementById('first').innerHTML=welcome;      
           

}
function changelanguage(){
    var wilkommen='Wilkommen bei DCI';    
        
    document.getElementById('first').innerHTML=wilkommen;    
}
function welcome(fname,lname){
    var wilkommen='Wilkommen bei DCI'; 
    document.getElementById('first').innerHTML=wilkommen +' '+fname+' '+lname;

  
}


function changestyle2(){
    document.getElementById('myDiv').style.transition='all 3s';
}


function changestyle3(){
    document.getElementById('myDiv').style.transform='rotate(750deg)';
}


function changestyle3(){
    document.getElementById('myDiv').style.transform='rotate(750deg)';
}

// document.getElementsByClassName('para')[0].style.background='red';

// document.getElementById('first').innerHTML=' <div class="para" > <h1> h1 text</h1> </div> '

// document.getElementsByClassName('para')[2].style.background='red'; document.getElementsByClassName('para')[0].style.textAlign='center';


// document.getElementsByClassName('para')[2].style.background='yellow'


// var x ='some new text'
// document.write(x);

// document.getElementById('first').style.border='20px dashed green';

// document.getElementById('first').style.transform='rotate(-750deg)';

console.log(document.getElementById('Fullname').style.transition);


function changestyle4(){
    // prompt('please enter your name','default name');
    var newname=prompt('please enter your name','default name')
    console.log(newname);
    
    // document.getElementById('Fullname').innerHTML='<h1>' + newname + '</h1>';

    if(newname != '') {
        document.getElementById('h1').innerHTML=newname;
    }
}
















