'use strict';
let AddmeObj = [];
let item1 = localStorage.getItem('Addme');
if (item1) {
  AddmeObj = JSON.parse(item1);
}

let MajorArray = ['Select','Engineering', 'Information Technology', 'Arts', 'Siences', 'Medical', 'Economy', 'Geographic','Others'];

function AddMe(userName, Email, password, gender, major, txtSkills, userimg) {
  this.userName = userName;
  this.Email = Email;
  this.password = password;
  this.gender = gender;
  this.major = major;
  this.txtSkills = txtSkills;
  this.userimg = userimg;
  AddmeObj.push(this);

  setting();

}

let submitform = document.getElementById('form_submit');
let selectEl = document.getElementById('S_Major');

if (selectEl !== null) {
  for (let i = 0; i < MajorArray.length; i++) {
    let optionEl = document.createElement('option');
    selectEl.appendChild(optionEl);
    optionEl.textContent = MajorArray[i];
  }
}
if (submitform !== null) {
  submitform.addEventListener('submit', FunctionClick);
}



function FunctionClick(event) {
  event.preventDefault();

  let usern = document.forms["form"]["userName"].value;
  let usere = document.forms["form"]["email"].value;
  let userp = document.forms["form"]["passw"].value;
  let userg;

  if (document.getElementById('radiogender1').checked) {
    userg = document.getElementById('radiogender1').value;
  } else if (document.getElementById('radiogender2').checked) {
    userg = document.getElementById('radiogender2').value;
  }
  let majorsel = document.getElementById("S_Major").selectedIndex;
  let userm = document.getElementsByTagName("option")[majorsel].value;
  let usert = document.forms["form"]["txt_area"].value;
  let useri = document.forms["form"]["url_txt"].value;

  if(localStorage.addme !== null){
    new AddMe(usern, usere, userp, userg, userm, usert, useri); 
    window.location.href = 'members.html';
   }
  

}


function setting() {
  let data = JSON.stringify(AddmeObj);
  localStorage.setItem('Addme', data);
}