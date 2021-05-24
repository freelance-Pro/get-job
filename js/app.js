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
  getting();
}

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

  }

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
