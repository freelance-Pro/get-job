'use strict';
let AddmeObj = [];
<<<<<<< HEAD
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
=======
let User_Img = [];
>>>>>>> allTeam1JS

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
  getting();
}
<<<<<<< HEAD
let userNameForm = document.forms["form"]["userName"].value;
AddmeObj.push(userNameForm);
let Emailform = document.getElementById('email');
let passwordform = document.getElementById('passw');
let genderformM = document.getElementById('radiogender');
let genderformF = document.getElementById('radiogender1');
let majorform = document.getElementById('major');
let txtSkillsform = document.getElementById('txt_area');
let imgform = document.getElementById('browse');
let submitform = document.getElementById('submit');
let selectEl = document.getElementById('S_Major');
for (let i = 0; i < MajorArray.length; i++) {
  let optionEl = document.createElement('option');
  selectEl.appendChild(optionEl);
  optionEl.textContent = MajorArray[i];
}



//submitform.addEventListener('click', FunctionClick);
=======

let submitform = document.getElementById('submit');
let selectEl = document.getElementById('S_Major');

for (let i = 0; i < MajorArray.length; i++) {
  let optionEl = document.createElement('option');
  selectEl.appendChild(optionEl);
  optionEl.textContent = MajorArray[i];
}
submitform.addEventListener('click', FunctionClick);

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
  var UserI = document.forms["form"]["browse"].value;
  if (UserN == null || UserE == null || UserP == null || UserG == null
    || UserM == null || UserT == null || UserI == null) {
    alert('Sorry, There are some input empty');
  } else {
    new AddMe(UserN, UserE, UserP, UserG, UserM, UserT, UserI);
>>>>>>> allTeam1JS

console.log(userNameForm);
//function FunctionClick(event) {

<<<<<<< HEAD
 

//}
//console.log(AddmeObj);

//let UserN = event.target.userName.value;
//   let UserE = event.target.email.value;
//   let UserPs = event.target.passw.value;
//   let UserGernar = event.target.radiogender.select;
//   let UserMajor = event.target.S_Major.selectedIndex;
//   let UserDes = event.target.txt_area.value;
//   let UserImg = event.target.browse.value;
// console.log(UserE);
  // if (UserN == null || UserE == null || UserPs == null || UserGernar == null || UserMajor == null ||
  //   UserDes == null || UserImg == null) {
  //   alert('sorry');
  // }
  // else {
  //   new AddMe(UserN, UserE, UserPs, UserGernar, UserMajor, UserDes, UserImg);

 // }
=======
}
function setting() {
  let data = JSON.stringify(AddmeObj);
  localStorage.setItem('Add_Me', data);
}

let img = document.getElementById('img_tag');
// function Members() {
  
//   // for (let index = 0; index < AddmeObj.length; index++) {
//    img.setAttribute('src', samah.jpg);
//   //  lImgEl.setAttribute('src', busmall[leftImgIndex].source);
//     // document.getElementById("img_tag").src = "samah.jpg";
//     console.log('work');
//   // }

// }
function getting() {
  let stringEl = localStorage.getItem('Add_Me');
  let stringGet = JSON.parse(stringEl);
  if (stringGet !== null) {

    img.setAttribute('src', 'samah.jpg');
  }
}
>>>>>>> allTeam1JS
