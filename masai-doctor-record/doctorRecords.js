function determineRole(experience) {
  if (experience > 5) {
    return 'Senior';
  } else if (experience >= 2 && experience <= 5) {
    return 'Junior';
  } else {
    return 'Trainee';
  }
}

// creating dotor data to append

function createRow(doctorData) {
  var tableBody = document.getElementById('doctorRecords');
  var newRow = document.createElement('tr');

  Object.values(doctorData).forEach(function(value) {
    var cell = document.createElement('td');
    cell.textContent = value;
    newRow.appendChild(cell);
  });

  var role = determineRole(doctorData.experience);
  var roleCell = document.createElement('td');
  roleCell.textContent = role;
  newRow.appendChild(roleCell);

  // Button Created for deleting row

  var deleteCell = document.createElement('td');
  deleteCell.style.backgroundColor="Red";
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    tableBody.removeChild(newRow);
  });
  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);

  tableBody.appendChild(newRow);
}

document.getElementById('doctorForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var name = document.getElementById('name').value;
  var doctorId = document.getElementById('doctor_id').value;
  var specialization = document.getElementById('specialization').value;
  var experience = document.getElementById('experience').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;

  var doctorData = {
    name: name,
    doctorId: doctorId,
    specialization: specialization,
    experience: experience,
    email: email,
    mobile: mobile
  };

  createRow(doctorData);

  // Resetting functionality
  document.getElementById('doctorForm').reset();
});
document.getElementById('filter').addEventListener('change', function() {
  var selectedSpecialization = this.value;
  var tableRows = document.querySelectorAll('#doctorRecords tr');

  tableRows.forEach(function(row) {
    var specializationCell = row.querySelector('td:nth-child(3)');
    if (selectedSpecialization === '' || specializationCell.textContent === selectedSpecialization) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
    });
  });