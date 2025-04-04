const logBtn = document.getElementById("logSubmit");

logBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    
    if (!email || !password) {
        alert("Please enter email and password");
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        alert("Invalid email or password");
    }
    
    user.isLoggedIn = true;
    
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Login successful!");
    
    window.location.href = "/#/profile";
});