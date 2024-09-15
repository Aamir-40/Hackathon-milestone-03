const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const display = document.getElementById("resume-display") as HTMLDivElement;

// handle form submission
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // generate resume dynamically
    const resumeHTML = `
        <h2><b>Resume<b></h2>
        <h3> Personal Information</h3>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Education:</b> ${education}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Skills:</b> ${skills}</p>
    `;

    // Display the generated resume
    if (display) {
        display.innerHTML = resumeHTML;
    }
});