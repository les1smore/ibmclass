// Add patien data
const addPatientButton = document.getElementById("addPatient");
// see analysis report displayed
const report = document.getElementById("report");
// display the search results when clicked
const btnSearch = document.getElementById('btnSearch');
// store the collexted patient data
const patients = [];

// capture user-entered data from the html form elements
function addPatient() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    // append the patents' detail to the patient array
    if (name && gender && age && condition) {
      patients.push({ name, gender: gender.value, age, condition });
      resetForm(); // reset the form fields to clear the input filds for the next entry
      generateReport(); // trigger to update and display the analysis report based on the newly added patient data
    }
  }

  // clear the value of all fields in the html form by setting them to empty strings 
  function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
  }

// calculate and constrcut an analysis report bsed on the collected patient data stored in the patient array
  function generateReport() {
    const numPatients = patients.length; // total # of patients gathered
    const conditionsCount = {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
      Male: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
      Female: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
    };

    for (const patient of patients) {
      conditionsCount[patient.condition]++;
      genderConditionsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
      report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
      report.innerHTML += `${gender}:<br>`;
      for (const condition in genderConditionsCount[gender]) {
        report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
      }
    }
  }

addPatientButton.addEventListener("click", addPatient);

// retrieve health condition info based on user input
// fetch the health condition data from the health.json
// and search for a matching condition based on user input
// then it displays the condition details or an error message in a designated HTML element
function searchCondition() {
    // retrieve the value entered in the input field and convert to lowercase
    const input = document.getElementById('conditionInput').value.toLowerCase();
    // retrieve the html element with the id "result", clear any previous content
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    // convert the fetched response into JSON format
    // search for a health condition that matches the user input
    fetch('health_analysis.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);

        if (condition) {
          const symptoms = condition.symptoms.join(', ');
          const prevention = condition.prevention.join(', ');
          const treatment = condition.treatment;

          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);