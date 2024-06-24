let passwordInput = document.getElementById('floatingPassword');
let togglePasswordButton = document.getElementById('showhide_button');
let eyeIcon = document.getElementById('showhide_vector');

togglePasswordButton.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = 'images/vector_eye_show.png';
  } else {
      passwordInput.type = 'password';
      eyeIcon.src = 'images/vector_eye_hide.png';
  }
});

document.getElementById("login_form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
    
  // Get values from form
  let email = document.getElementById("floatingInput").value;
  let password = document.getElementById("floatingPassword").value;
    
  // Your validation logic here
  if (email === "iniaku@email.com" && password === "pass12345") {
    // Redirect to home page or do any other action for successful login
    window.location.href = "html/home.html";
  } else {
    // Display error message
    alert("Email or password is wrong!");
  }
});
    