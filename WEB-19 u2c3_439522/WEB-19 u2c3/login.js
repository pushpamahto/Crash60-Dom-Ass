document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
  
    // Check credentials from localStorage
    let storedName = localStorage.getItem('name');
    let storedPassword = localStorage.getItem('password');
    let storedRole = localStorage.getItem('role');
  
    if (name === storedName && password === storedPassword) {
      if (storedRole === 'HR') {
        window.location.href = 'index.html'; // Redirect HR to employee records
      } else if (storedRole === 'Employee') {
        window.location.href = 'employee_view.html'; // Redirect Employee to view
      } else {
        alert('Invalid role!');
      }
    } else {
      alert('Invalid credentials!');
    }
  });
  