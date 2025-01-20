document.getElementById('contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    // contact form data
    const name= document.getElementById('name').value;
    const email= Document.getElementById('email').value;
    const message= document.getElementById('massage').value

    // simple form validation
    if (name && email && message) {
        document.getElementById('form-massage').innertext = 'your massage has been send successfully!';
        document.getElementById('contact-form').requestFullscreen();
    } else {
        document.getElementById('form-massage').innetext = 'please fill out all filds';
        document.getElementById('form-massage').style.color = 'red'
    }
     
})
