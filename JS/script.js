//**INI ADALAH HALAM JAVASCRIPT */

document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Display form values in the result box
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultDob').textContent = dob;
    document.getElementById('resultGender').textContent = gender;
    document.getElementById('resultMessage').textContent = message;

    // Get the current time and display it
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toUTCString();
});