'use strict';
let AddmeObj=[];

function AddMe(userName,Email,password,gender,major,txtSkills,userimg){
    this.userName=userName;
    this.Email=Email;
    this.password=password;
    this.gender=gender;
    this.major=major;
    this.txtSkills=txtSkills;
    this.userimg=userimg;
    AddmeObj.push(this);

}
let userNameForm = document.getElementById('userName');
let Emailform = document.getElementById('email');
let passwordform = document.getElementById('passw');
let genderform = document.getElementById('radiogender');
let majorform = document.getElementById('major');
let txtSkillsform = document.getElementById('txt_area') ;
let imgform = document.getElementById('browse');
let submitform = document.getElementById('submit');

submitform.addEventListener('click', FunctionClick);


FunctionClick = function(event){
  if(userNameForm == null || Emailform == null || passwordform == null || genderform ||  )
  {
      alert(sorry);
  }
  else
  {
    new AddMe( userNameForm,Emailform,passwordform ,genderform ,majorform , txtSkillsform ,imgform,submitform);

  }

}
