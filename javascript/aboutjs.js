  document.addEventListener("DOMContentLoaded", function() {
    var contactHeading = document.querySelector('.tag.contact');
    var contactFormContainer = document.querySelector('.contact-form-container');
    var whatTag = document.querySelector('.tag.what');
    var popup = document.querySelector('.popup');
    
    contactHeading.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click event from reaching the document
      contactFormContainer.style.display = 'block';
      popup.style.display = 'none'; // Close the "What is Sewerhead" popup if open
    });
  
    whatTag.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click event from reaching the document
      popup.style.display = 'block';
      contactFormContainer.style.display = 'none'; // Close the contact form if open
    });
  
    document.addEventListener('click', function(event) {
      if (!contactFormContainer.contains(event.target) && event.target !== contactHeading) {
        contactFormContainer.style.display = 'none';
      }
      if (!popup.contains(event.target) && event.target !== whatTag) {
        popup.style.display = 'none';
      }
    });
  });



