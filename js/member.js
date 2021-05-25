'use strict'
getting();

function getting() {

   if ( localStorage.Addme !== undefined )
   {
      const get_member = JSON.parse(localStorage.Addme);
      
      let get_tag_ul = document.getElementById('section_ul');
      
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
         let messagebox = document.getElementById('messagebox');
         let user = document.createElement('h1');
         messagebox.appendChild(user);

         user.textContent = "SORRY "  ;

      }
 }
 