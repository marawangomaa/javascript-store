export default function RegisterPage(){
    return `
    <div class="register-page">
      <div class="register-container">
      <div class="row">
        <section class="image">
          <img src="./../imgs/illustrations/register.svg" alt="Register Page"/>
        </section>
        <section class="form">
        <h2>Register</h2>
          <form id="registrationForm">
            <input type="text" id="user-name" placeholder="Enter Your Name.."/>
            <input type="email" id="user-mail" placeholder="Enter Your Email.."/>
            <input type="password" id="user-password" placeholder="Enter Your Password.."/>
            <button type="submit" id="regSubmit">Register</button>
            <p>already have account?<a href="/#/login" class="register">Login</a></p>
          </form>
        </section>
      </div>
    </div>
    </div>
    `;
}