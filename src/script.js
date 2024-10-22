document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById('login-btn');
    const loginContainer = document.getElementById('login');
    const closeLoginBtn = document.getElementById('close-login');

    // Show the login modal when the login button is clicked
    loginBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        loginContainer.style.display = 'flex'; // Show modal
    });

    // Close the login modal when the close button is clicked
    closeLoginBtn.addEventListener('click', function () {
        loginContainer.style.display = 'none'; // Hide modal
    });

    // Optionally, you can add functionality to close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === loginContainer) {
            loginContainer.style.display = 'none'; // Hide modal
        }
    });
});