document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("sign-in");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const errorMessage = document.getElementById("error-message");
  
      let valid = true;
      errorMessage.innerHTML = "";
  
      if (!email.value) {
        valid = false;
        errorMessage.innerHTML += "<p>Please enter your email.</p>";
      } else if (!validateEmail(email.value)) {
        valid = false;
        errorMessage.innerHTML += "<p>Please enter a valid email address.</p>";
      }
  
      if (!password.value) {
        valid = false;
        errorMessage.innerHTML += "<p>Please enter your password.</p>";
      } else if (password.value.length < 6) {
        valid = false;
        errorMessage.innerHTML += "<p>Password must be at least 6 characters long.</p>";
      }
  
      if (valid) {
        form.submit();
      }
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  