var resumeForm = document.getElementById("resume-form");
var display = document.getElementById("resume-display");
// handle form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate resume dynamically
    var resumeHTML = "\n        <h2><b>Resume<b></h2>\n        <h3> Personal Information</h3>\n\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <p><b>Education:</b> ").concat(education, "</p>\n        <p><b>Experience:</b> ").concat(experience, "</p>\n        <p><b>Skills:</b> ").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (display) {
        display.innerHTML = resumeHTML;
    }
});
