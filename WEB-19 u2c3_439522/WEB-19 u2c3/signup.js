document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let role = document.getElementById('role').value;
    let password = document.getElementById('password').value;
  
    // Store in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('role', role);
    localStorage.setItem('password', password);
  
    // Redirect to login page
    window.location.href = 'login.html';
  });
  