const fileInput = document.getElementById("uploadPic");
const profilePic = document.getElementById("profilePic");
const changeBtn = document.getElementById("changePicBtn");

changeBtn.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.addEventListener("click", () => {
    const newTitle = prompt("Enter your new job title:");
    if (newTitle && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
});

const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("input", () => {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});

function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();
    const message = msgBox.value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before sending.");
        return false;
    }

    alert("Message sent!");
    document.getElementById("contactForm").reset();
    counter.textContent = 200;
    return false;
}

const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.textContent = today.toLocaleDateString(undefined, options);
