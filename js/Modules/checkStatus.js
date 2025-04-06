export default function checkLoginStatus() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let loggedInUser = users.find(user => user.isLoggedIn === true);
    
    if (!loggedInUser) {
        window.location.href = "/#/login";
    }
    
}
