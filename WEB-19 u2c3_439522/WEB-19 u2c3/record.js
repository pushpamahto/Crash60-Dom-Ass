
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  
  let name = document.getElementById('name').value;
  let employeeID = document.getElementById('employeeID').value;
  let department = document.getElementById('department').value;
  let exp = document.getElementById('exp').value;
  let email = document.getElementById('email').value;
  let mbl = document.getElementById('mbl').value;

  
  let role;
  if (exp > 5) {
    role = 'Senior';
  } else if (exp >= 2 && exp <= 5) {
    role = 'Junior';
  } else {
    role = 'Fresher';
  }

  
  let tbody = document.querySelector('tbody');
  let newRow = document.createElement('tr');
  let rowValues = [name, employeeID, department, exp, email, mbl, role];

  rowValues.forEach(value => {
    let cell = document.createElement('td');
    cell.textContent = value;
    newRow.appendChild(cell);
  });

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.style.background="transparent";
  deleteButton.style.fontSize="18px";
  deleteButton.style.border="none";
  deleteButton.addEventListener('click', function() {
    deleteRow(this);
  });
  
  let deleteCell = document.createElement('td');
  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);

  tbody.appendChild(newRow);

  document.querySelector('form').reset();
});

function deleteRow(button) {
  let row = button.parentElement.parentElement;
  row.remove();
}







