let passwordAttempt = 0;

document.getElementById("registrationForm").addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear previous errors
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("interestError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";
    document.getElementById("aboutError").innerHTML = "";
    document.getElementById("success").innerHTML = "";

    let valid = true;

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let department = document.getElementById("department").value;
    let about = document.getElementById("about").value.trim();

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // First Name
    if (fname == "") {
        document.getElementById("fnameError").innerHTML = "First name is required";
        valid = false;
    }
    else if (!namePattern.test(fname)) {
        document.getElementById("fnameError").innerHTML = "Only alphabets allowed";
        valid = false;
    }

    // Last Name
    if (lname == "") {
        document.getElementById("lnameError").innerHTML = "Last name is required";
        valid = false;
    }
    else if (!namePattern.test(lname)) {
        document.getElementById("lnameError").innerHTML = "Only alphabets allowed";
        valid = false;
    }

    // Email
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    // Password
    if (password == "") {

        passwordAttempt++;

        if (passwordAttempt >= 3) {
            document.getElementById("password").disabled = true;
            document.getElementById("passwordError").innerHTML =
                "Maximum 3 attempts reached";
        }
        else {
            document.getElementById("passwordError").innerHTML =
                "Password is required. Attempt " + passwordAttempt + " of 3";
        }

        valid = false;
    }

    // Gender
    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        document.getElementById("genderError").innerHTML = "Select your gender";
        valid = false;
    }

    // Interests
    let interests = document.querySelectorAll(".interest:checked");

    if (interests.length == 0) {
        document.getElementById("interestError").innerHTML =
            "Select at least one interest";
        valid = false;
    }

    // Department
    if (department == "") {
        document.getElementById("departmentError").innerHTML =
            "Select a department";
        valid = false;
    }

    // About Yourself
    if (about == "") {
        document.getElementById("aboutError").innerHTML =
            "This field is required";
        valid = false;
    }
    else if (about.length < 20) {
        document.getElementById("aboutError").innerHTML =
            "Minimum 20 characters required";
        valid = false;
    }

    // Success Message
    if (valid) {
        document.getElementById("success").innerHTML =
            "Registration Successful! Thank you for registering.";
    }

});