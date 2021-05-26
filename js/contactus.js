
 let popbox = document.getElementById('ENVOYER');
 
 
 if (popbox !== null) {
    popbox.addEventListener('click',function popup(event){  
        // alert('Thank You for contact us 👀👋.');
        Swal.fire({
            title: 'Great!',
            text: 'Thank You for contact us 👀👋.',
            imageUrl: 'https://www.seekpng.com/png/detail/369-3693136_red-check-mark-png-about-us-red-tick.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            
          })
    
    })
  }