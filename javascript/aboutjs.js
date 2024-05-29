  document.addEventListener("DOMContentLoaded", function() {
    var contactHeading = document.querySelector('.tag.contact');
    var contactFormContainer = document.querySelector('.contact-form-container');
    
    contactHeading.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click event from reaching the document
      contactFormContainer.style.display = 'block';
    });
  
    document.addEventListener('click', function(event) {
      if (!contactFormContainer.contains(event.target)) {
        contactFormContainer.style.display = 'none';
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var whatTag = document.querySelector('.tag.what');
    var popup = document.querySelector('.popup');
    
    whatTag.addEventListener('click', function() {
      popup.style.display = 'block';
    });
  
    document.addEventListener('click', function(event) {
      if (!popup.contains(event.target) && event.target !== whatTag) {
        popup.style.display = 'none';
      }
    });
  });