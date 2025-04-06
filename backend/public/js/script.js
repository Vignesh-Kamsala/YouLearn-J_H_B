$(document).ready(function () {
    $('#loginBtn').click(function () {
      const email = $('#email').val().trim();
      const password = $('#password').val().trim();
  
      if (!email || !password) {
        $('#loginResult').text("Email and password required.");
        return;
      }
  
      $.ajax({
        url: '/api/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ email, password }),
        success: function (res) {
          $('#loginResult').text("✅ Login successful!");
        },
        error: function (xhr) {
          $('#loginResult').text("❌ Login failed: " + xhr.responseJSON?.message);
        }
      });
    });
  });
  