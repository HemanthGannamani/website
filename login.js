document.getElementById('loginForm').addeventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username.length !== 15 || password.length !== 15) {
        alert("Both username and password must be exactly 15 characters long.");
        return;
    }

    
    if (username !== password) {
        alert("Username and password must be identical.");
        return;
    }

    
    alert("Login successful!");
    window.location.href('travel.html');
});