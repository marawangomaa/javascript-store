let users = JSON.parse(localStorage.getItem("users")) || [];
let LoggedUser = users.find((user) => user.isLoggedIn === true);

export default function ProfilePage() {
  return `
      <div class="profile-page">
      <section class="profile-title">
        <h2>Welcome, ${LoggedUser ? LoggedUser.username.toUpperCase(): " "}</h2>
      </section>
      <div class="profile-container">
        <form>
          <input
            type="text"
            id="profile-username"
            value="${LoggedUser ? LoggedUser.username: " "}"
            placeholder="Enter New Name.."
          />
          <input
            type="email"
            id="profile-email"
            value="${LoggedUser ? LoggedUser.email: " "}"
            placeholder="Enter New Email.."
          />
          <input type="password" id="profile-password" placeholder="Enter New Password.." />
          <button id="update">Update</button>
          <button id="signout">Signout</button>
        </form>
      </div>
    </div>
  `;
}
