'use strict';
let AddmeObj = [];
let User_Img = [];

let MajorArray = ['Engineering', 'Information Technology', 'Arts', 'Siences', 'Medical', 'Economy', 'Geographic', 'Others'];
function AddMe(userName, Email, password, gender, major, txtSkills, userimg) {
  this.userName = userName;
  this.Email = Email;
  this.password = password;
  this.gender = gender;
  this.major = major;
  this.txtSkills = txtSkills;
  this.userimg = userimg;
  AddmeObj.push(this);
  User_Img.push(userimg);
  setting();
  
}

let submitform = document.getElementById('submit');
let selectEl = document.getElementById('S_Major');
if(selectEl!==null){
  for (let i = 0; i < MajorArray.length; i++) {
    let optionEl = document.createElement('option');
    selectEl.appendChild(optionEl);
    optionEl.textContent = MajorArray[i];
  }
}
if(submitform!==null){
  submitform.addEventListener('click', FunctionClick);
}

function FunctionClick(event) {
  event.preventDefault();
  var UserN = document.forms["form"]["userName"].value;
  var UserE = document.forms["form"]["email"].value;
  var UserP = document.forms["form"]["passw"].value;
  var UserG;
  
  if (document.getElementById('radiogender1').checked) {
    UserG = document.getElementById('radiogender1').value;
  } else if (document.getElementById('radiogender2').checked) {
    UserG = document.getElementById('radiogender2').value;
  }
  var x = document.getElementById("S_Major").selectedIndex;
  var UserM = document.getElementsByTagName("option")[x].value;
  var UserT = document.forms["form"]["txt_area"].value;
  var UserI = document.forms["form"]["url_txt"].value;

  if (UserN == null || UserE == null || UserP == null || UserG == null
    || UserM == null || UserT == null || UserI == null) {
    alert('Sorry, There are some input empty');
  } else {
    new AddMe(UserN, UserE, UserP, UserG, UserM, UserT, UserI);

  }

}
function setting() {
  let data = JSON.stringify(AddmeObj);
  localStorage.setItem('Add_Me', data);
}


