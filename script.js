document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // // Get input values
    // var username = document.getElementById('username').value;
    // var password = document.getElementById('password').value;
  
    // Your authentication logic here (for demonstration purposes, using hardcoded values)
    // if (username === ' ' && password === ' ') {
    //     document.getElementById('message').textContent = 'Login successful!';
    window.location.href = "main.html";
        // You can redirect the user to another page or perform other actions after successful login
    // } 
    // else {
    //     document.getElementById('message').textContent = 'Invalid username or password';
    // }
    
});