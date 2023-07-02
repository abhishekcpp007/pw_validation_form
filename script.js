function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const date = document.getElementById("date").value;
    const color = document.getElementById("color").value;

    // Basic validation for each field
    if (name === "" || email === "" || phone === "" || password === "" || age === "" || gender === "" || date === "" || color === "") {
      alert("Please fill in all fields");
      return false;
    }

    // Additional validation for specific fields (you can customize this part)
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return false;
    }

    if (age < 18) {
      alert("You must be at least 18 years old");
      return false;
    }

    return true; // Submit the form if all validations pass
  }




