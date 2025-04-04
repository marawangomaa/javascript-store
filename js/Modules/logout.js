let users = JSON.parse(localStorage.getItem("users")) || [];
let LoggedUser = users.findIndex((user) => user.isLoggedIn === true);

const updateBtn = document.getElementById("update");
const logoutBtn = document.getElementById("signout");


updateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const username = document.getElementById("profile-username").value;
    const email = document.getElementById("profile-email").value;
    const password = document.getElementById("profile-password").value;
    
    if (!username || !email || !password) {
        alert("Please fill all fields");
      }
      
      if (LoggedUser !== -1) {
        users[LoggedUser].username = username;
        users[LoggedUser].email = email;
        users[LoggedUser].password = password;
    
        localStorage.setItem("users", JSON.stringify(users));

        alert("User Updated successfully.");
    }
    
});

logoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users = users.map((user) => ({ ...user, isLoggedIn: false }));

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signed out successfully!");

  window.location.href = "/#/login";
});
