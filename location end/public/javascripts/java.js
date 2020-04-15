var slider_content = document.getElementById('box');

// contain images in an array
var image = ['a','b', 'c', 'd','e', 'f'];

var i=0 ;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i+=1;
  }else{
      i = 1;
  }
  slider_content.innerHTML = "<img src=../public/images/"+image[i-1]+".jpg>";
}


// function for prew slide

function prewImage(){

  if ( i>1) {
      i-= 1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img src=../public/images/"+image[i-1]+".jpg>";

}


// script for auto image slider

  // setInterval(nextImage , 3000);
  // start valide full name
  function validename(){
    var name = document.getElementById('name').value;
    var er = document.getElementById('erreur1');
    if(name.match(/^[A-Za-z]+ [A-Za-z]{3,}$/)){
      text = 'le nom est valid';
      er.innerHTML = text;
      er.style.color = "green";
      return true;
    }else{
      text = "le nom est n'est pas valid";
      er.innerHTML = text;
      er.style.color = "red";
      return false;
    }
  }
   // end valide full name

// start validation email
function validemail(){
  var email = document.getElementById('email').value;
  var er = document.getElementById('erreur2');
  if (email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text = "email est valide";
    er.innerHTML = text;
    er.style.color = "green";
    return true;
  }else{
    text = "email est invalide";
    er.innerHTML = text;
    er.style.color = "red";
    return false;
    
  }

}
// end validation email
// start valid pass
function validpass(){
  var pass = document.getElementById("pass1").value;
  var er = document.getElementById('erreur3');
  if(pass.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
    text = "mot de passe est valid";
    er.innerHTML = text;
    er.style.color = "green";
    return true;
  }else{
    text = "mot de passe est INvalid";
    er.innerHTML = text;
    er.style.color = "red";
    return false;
  }
}
// end valid pass

  // start ravalidpass
  function revalidpass(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var er = document.getElementById("erour");
    if(pass1 == pass2){
      text = "mot de passe correct";
      er.innerHTML = text;
      er.style.color = "green";
      return true;


    }else{
      text = "Vous n'avez pas saisi deux fois le même mot de passe";
      er.innerHTML = text;
      er.style.color= "red";

      return false;
    }
  }
  // end ravalidpass
  // start submit validation
  function validation(){
    // var btn = document.getElementById('sub');
    if( validename() == true && validemail() == true && validpass() == true && revalidpass() == true){
      alert('votre infor est envoye ');
      // window.location.href="res.ejs";
    }else{
      alert("votre infor est n'est pas envoye ");
    }
  }
    // end submit validation


    // start res
    function res()
{
    let i = 0;
    let im = document.getElementById("i++").src;
    sessionStorage.setItem("pos",im);
    window.location.href="res2";
    
}
var gr;
function affichermoto()
{
  document.getElementById('here').src=sessionStorage.getItem("pos");
 gr  = sessionStorage.getItem("pos");
 
 }
// start validation de numero de tele
function validenum(){
  var numero = document.getElementById('mobile').value;
  var er = document.getElementById('erreur4');
  if(numero.match(/(?=.*(05|06|07))[0-9]{10,}/)){
    text = "votre numero est valid";
    er.innerHTML = text;
    er.style.color = "green";
    return true;
  } else{
    
      text = "votre numero est n'est pas valid";
      er.innerHTML = text;
      er.style.color = "red";
      return false;
    
  }

}
// end validation de numero de tele
// sebmit res2
function validationre2(){
  var pop = document.getElementById("popup-id");
  var name = document.getElementById('name').value;
  var nowDate = new Date(Date.now());
  var dateBirth = new Date(document.getElementById('naissance').value);
  var thisYear = nowDate.getFullYear();
  var yearOfBirth = dateBirth.getFullYear();
  var age = thisYear - yearOfBirth;
  var firstDat = new Date(document.getElementById('date1').value);
    var lastDat = new Date(document.getElementById('date2').value);
    
    var periode = (lastDat - firstDat) / (3600*1000*24);
    var persons = document.getElementById('per-select').value;

  document.getElementById('popup-name').innerHTML = name;
  document.getElementById('popup-age').innerText = age;
  document.getElementById('popup-periode').innerText = periode;
  document.getElementById('popup-personne').innerText = persons;

  // if(periode<1){
  //   alert(verifie la duree de reservtion);
  // }
  
  if(validename()==true && validemail()==true && validenum()==true && verification()==true){

    // console.log( document.getElementById('here').src);
    // document.getElementsByClassName("here")[1].src = gr;
    pop.style.display = "block";
    
    

  }else{
    alert("verifie votre information")
  }
}
// start function de verification la duree de location 
function verification(){
  var firstDat = new Date(document.getElementById('date1').value);
  var lastDat = new Date(document.getElementById('date2').value);
  
  var periode = (lastDat - firstDat) / (3600*1000*24);
  var duree = document.getElementById('hideduree');
  duree.value = periode;
  if(periode<1){
    alert("verifie la duree de reservation");
    return false;
  }
  else{
    return true;
  }

}
// end function de verification la duree de location
// start partie jQ 
$('#btncon').click(function (e) { 
  $(".confir").show(2000,);
  // $(".confir").animate({
  //   left:'35%',
  //   top:'-300px'
  // });
  
});