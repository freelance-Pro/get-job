'use strict'
getting();
function getting() {
   let get_tag_ul = document.getElementById('section_ul');
   if ( localStorage.Addme !== undefined )
   {
      const get_member = JSON.parse(localStorage.Addme);
      
      
      get_tag_ul = document.getElementById('section_ul');
      for (let index = 0; index < get_member.length; index++) {
         
         let user_img = document.createElement('span');
         get_tag_ul.appendChild(user_img);
         
         let user_img_url = document.createElement('img');
         user_img.appendChild(user_img_url);

         let user_name = document.createElement('h1');
         get_tag_ul.appendChild(user_name);
         user_name.textContent = "User name :  " + get_member[index].userName ;

         let user_email = document.createElement('h3');
         get_tag_ul.appendChild(user_email);
         user_email.textContent = "Email : " + get_member[index].Email ;

         let user_gender = document.createElement('h3');
         get_tag_ul.appendChild(user_gender );
         user_gender.textContent = "Gender : " + get_member[index].gender;

         let user_major = document.createElement('h3');
         get_tag_ul.appendChild(user_major );
         user_major.textContent ="Major : " + get_member[index].major;
         
         let user_skills = document.createElement('p');
         get_tag_ul.appendChild(user_skills );
         user_skills.textContent = "Skills : " + get_member[index].txtSkills;
         
         user_img_url.setAttribute('src',get_member[index].userimg);
         user_img_url.setAttribute('title',get_member[index].userimg);
      
      }
       
   }
   else
      {
         let divIt = document.createElement('div');
         get_tag_ul.appendChild(divIt);
         divIt.setAttribute('class','divItem');
         let user = document.createElement('img');
         divIt.appendChild(user);
         user.setAttribute('src','https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png');
         user.setAttribute('title','img');
         user.style.width = '600px';
         user.style.height='600px';
         user.style.marginLeft = '400px';
      

      }
 }
 