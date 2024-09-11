function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return false; // Prevent form submission
    }

    // Additional validation or login logic can be added here
    // For example, you could use AJAX to send the form data to a server for authentication

    return true; // Allow form submission if validation passes
}