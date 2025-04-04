export default function ContactPage() {
  return `
      <div class="contact-page">
      <section class="contact-title">
        <h2>Contact</h2>
      </section>
      <div class="contact-container">
        <section class="content">
          <div class="row">
            <div class="form">
              <h2>Send Us A Message</h2>
              <form>
                <input type="email" placeholder="You Email Address"/>
                <textarea placeholder="How Can We Help?"></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div class="info">
              <div class="info-row">
                <div class="icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="text">
                  <h2>Address</h2>
                  <p>
                    Coza Store Center 8th floor, <br/>379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>

              <div class="info-row">
                <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="text">
                  <h2>Phone</h2>
                  <p>+1 800 1236879</p>
                </div>
              </div>

              <div class="info-row">
                <div class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="text">
                  <h2>Sale Support</h2>
                  <p>
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="google-map">
          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.466647898065!2d29.919093519792654!3d31.183471200594127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c394ebd03ec1%3A0x16cbff5d844ff34b!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiAtIElUSQ!5e0!3m2!1sar!2seg!4v1743484902070!5m2!1sar!2seg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
    `;
}
