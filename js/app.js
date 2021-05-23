'use strict';
let AddmeObj = [];
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

}
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

console.log(userNameForm);
//function FunctionClick(event) {

 

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