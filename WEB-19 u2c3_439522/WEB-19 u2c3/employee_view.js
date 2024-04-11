document.addEventListener('DOMContentLoaded', function() {
    displayEmployeeRecords();
  });
  
  function displayEmployeeRecords() {
    let employeeRecords = JSON.parse(localStorage.getItem('employeeRecords')) || [];
  
    let tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = '';
  
    employeeRecords.forEach(function(employee) {
      let row = `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.employeeID}</td>
          <td>${employee.department}</td>
          <td>${employee.exp}</td>
          <td>${employee.email}</td>
          <td>${employee.mbl}</td>
          <td>${employee.role}</td>
        </tr>
      `;
      tableBody.insertAdjacentHTML('beforeend', row);
    });
  }
  