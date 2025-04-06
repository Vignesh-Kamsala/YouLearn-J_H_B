$(document).ready(function () {
    $('#loginBtn').click(function () {
      const email = $('#loginEmail').val().trim();
      const password = $('#loginPassword').val().trim();
  
      if (!email || !password) {
        $('#loginResult').text("Both fields are required.");
        return;
      }
  
      $.ajax({
        url: '/api/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email, password }),
        success: function (res) {
          $('#loginResult').text("✅ Login successful! Redirecting...");
          setTimeout(() => {
            window.location.href = "/video"; // change to your dashboard or main app
          }, 2000);
        },
        error: function (xhr) {
          $('#loginResult').text("❌ Login failed: " + xhr.responseJSON?.message || "Try again.");
        }
      });
    });
  });
  