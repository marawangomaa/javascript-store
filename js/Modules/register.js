const regBtn = document.getElementById("regSubmit");

regBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const username = document.getElementById("user-name").value;
  const email = document.getElementById("user-mail").value;
  const password = document.getElementById("user-password").value;

  if(password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  if (!username || !email || !password) {
    alert("Please fill all fields");
  } else{
    const newUser = {
      username,
      email,
      password,
      isLoggedIn: false
    };
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert("User already exists with this email");
      document.getElementById("registrationForm").reset();
    }
  
    users.push(newUser);
  
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registration successful!");
  
    document.getElementById("registrationForm").reset();
  
    window.location.href = "/#/login";
  }
  

  
});
