let registeredUsers = [];

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const registerButton = document.getElementById("register-btn");
    const loginButton = document.getElementById("login-btn");

    registerForm.style.display = "none";
    loginForm.style.display = "block";

    registerButton.addEventListener("click", function () {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });

    loginButton.addEventListener("click", function () {

        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = registerForm.querySelector('[placeholder="User Name"]').value;
        const email = registerForm.querySelector('[placeholder="Email Id"]').value;
        const password = registerForm.querySelector('[placeholder="Enter Password"]').value;

        registeredUsers.push({ username, email, password });
        alert("Registration successful!");
        registerForm.reset();
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = loginForm.querySelector('[placeholder="User Name"]').value;
        const password = loginForm.querySelector('[placeholder="Enter Password"]').value;
        const user = registeredUsers.find((user) => user.username === username && user.password === password);

        if (user) {
            alert("Login successful!");
            window.location.href = "secured.html";
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });
});
