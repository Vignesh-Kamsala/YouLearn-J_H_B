$(document).ready(function () {
    $('#signupBtn').click(function () {
      const email = $('#signupEmail').val().trim();
      const password = $('#signupPassword').val().trim();
  
      if (!email || !password) {
        $('#signupResult').text("Both fields are required.");
        return;
      }
  
      $.ajax({
        url: '/api/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email, password }),
        success: function (res) {
          $('#signupResult').text("✅ Account created! Redirecting...");
          setTimeout(() => {
            window.location.href = "/login.html";
          }, 2000);
        },
        error: function (xhr) {
          $('#signupResult').text("❌ Error: " + xhr.responseJSON?.message || "Signup failed.");
        }
      });
    });
  });
  