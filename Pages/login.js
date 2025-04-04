export default function LoginPage(){
    return `
    <div class="login-page">
      <div class="login-container">
        <div class="row">
          <section class="image">
            <img src="./../imgs/illustrations/login.svg" alt="Login Page" />
          </section>
          <section class="form">
            <h2>Login</h2>
            <form>
              <span><i class="fa-solid fa-envelope"></i></span>
              <input
                type="email"
                id="login-email"
                placeholder="Enter Your Email.."
              />
              <span><i class="fa-solid fa-lock"></i></span>
              <input
                type="password"
                id="login-password"
                placeholder="Enter Your Password.."
              />
              <button type="submit" id="logSubmit">Login</button>
              <p>Don't Have an Account?<a href="/#/register" class="nav-link">Register</a></p>
            </form>
          </section>
        </div>
      </div>
    </div>
    `;
}