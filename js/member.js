'use strict'
getting();

function getting() {

   if ( localStorage.Add_Me !== undefined)
   {
      const get_member = JSON.parse(localStorage.Add_Me)
      
      let get_tag_ul = document.getElementById('section_ul');
      
      for (let index = 0; index < get_member.length; index++) {
         let user_name = document.createElement('li');
         get_tag_ul.appendChild(user_name );

         let user_email = document.createElement('li');
         get_tag_ul.appendChild(user_email );

         let user_gender = document.createElement('li');
         get_tag_ul.appendChild(user_gender );

         let user_major = document.createElement('li');
         get_tag_ul.appendChild(user_major );

         let user_skills = document.createElement('li');
         get_tag_ul.appendChild(user_skills );

         let user_img = document.createElement('li');
         get_tag_ul.appendChild(user_img);
         
         let user_img_url = document.createElement('img');
         user_img.appendChild(user_img_url);

         user_name.textContent = get_member[index].userName;
         user_email.textContent = get_member[index].Email;
         user_gender.textContent = get_member[index].gender;
         user_major.textContent = get_member[index].major;
         user_skills.textContent = get_member[index].txtSkills;
         user_img_url.setAttribute('src',get_member[index].userimg);
         user_img_url.setAttribute('title',get_member[index].userimg);
      }
      
   }
   else
      {
         alert('sorry');
      }
 }
 