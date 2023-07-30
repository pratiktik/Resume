document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch form inputs
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Here, you can perform further validation or data handling as needed

  // Example: Log the form data and send an email
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Send email
  var mailtoLink = 'mailto:pratikshekhare@gmail.com' +
                   '?subject=New message from ' + encodeURIComponent(name) +
                   '&body=' + encodeURIComponent(message);
  window.location.href = mailtoLink;

  // Optionally, you can display a success message or reset the form fields
  // For simplicity, let's just log a success message here
  console.log('Form submitted successfully!');
});
