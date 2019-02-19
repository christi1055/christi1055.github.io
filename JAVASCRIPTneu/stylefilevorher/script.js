// alert('Welcome to DCI');

// function showhide(){
//     if(document.getElementById('img').style.display == 'block'){
//         document.getElementById('img').style.display = 'none';
//         document.getElementById('showhide').innerHTML='Show';
//     }
//     else{
//         document.getElementById('img').style.display = 'block';
//         document.getElementById('showhide').innerHTML='Hide';
//     }

// }

function changestyle(){
    document.body.style.background='lightgray';
    document.getElementById('first').style.background='lightblue';
    document.getElementById('first').style.border='4px solid blue';
    document.getElementById('first').style.borderRadius='20px';
    document.getElementById('first').style.fontFamily='Cambria';
    document.getElementById('first').style.color='red';
    document.getElementById('test').innerHTML='Show';
    // document.getElementById('test').style.backgroundColor='darkblue';

    // document.getElementsByClassName('j')[0].style.background='red';
    // document.getElementsByClassName('j')[1].style.background='red';
    // document.getElementsByClassName('j')[2].style.background='red';


    var x = document.getElementsByClassName('j');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "red";
    }

    var newwidth="200px";
    var welcome="Welcome to DCI2";
    alert(newwidth);
    alert(welcome);
    newborder="50px";
    document.getElementById('first').innerHTML=welcome;
    document.getElementById('first').innerHTML=welcome;

}

function changelanguage(){
    // var willkommen = "Willkommen bei DCI";
    // document.getElementById('first').innerHTML=willkommen;
    document.getElementById('first').innerHTML=willkommen;
    var firstname="Hans ";
    var lastname= "Meier "
    var willkommen = "Willkommen " + firstname + lastname + "bei DCI";
    document.getElementById('first').innerHTML=willkommen;
}

function welcome(fname,lastname){
    document.getElementById('first').innerHTML='Welcome to DCI ' + fname + ' ' +  lastname;
}





