export default function ContactPage() {
  return `
<section id="contact-title" class="bg-title-img text-center">
<h2 class="poppins-bold lg-text-50">Contact</h2>
</section>
 
    <section id="contact-content">
<div class="container-content">
<div class="form-container">
<div class="left-form p-lr-15-lg w-100-md">
<form>
<h4 class="poppins-regular text-center">Send Us A Message</h4>
 
              <div class="email-input">
<input class="poppins-regular" type="text" name="email" placeholder="Your Email Address" required>
<img src="../imgs/Contact/icon-email.png.webp" alt="ICON">
</div>
 
              <div class="text-area">
<textarea class="poppins-regular" name="msg" placeholder="How Can We Help?"></textarea>
</div>
 
              <button class="poppins-medium">Submit</button>
</form>
</div>
 
          <div class="right-form p-lr-15-lg w-100-md">
<div class="item-content">
<span class="icon"><i class="fa-solid fa-location-dot"></i></span>
<div class="title">
<span class="poppins-regular">Address</span>
<p class="Poppins-Regular">
                  Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
</p>
</div>
</div>
 
            <div class="item-content">
<span class="icon"><i class="fa-solid fa-phone"></i></span>
<div class="title">
<span class="poppins-regular">Let's Talk</span>
<p class="Poppins-Regular">
<a href="tel:+18001236879">+1 800 1236879</a>
</p>
</div>
</div>
 
            <div class="item-content">
<span class="icon"><i class="fa-solid fa-envelope"></i></span>
<div class="title">
<span class="poppins-regular">Sale Support</span>
<p class="Poppins-Regular">
<a href="mailto:contact@example.com">contact@example.com</a>
</p>
</div>
</div>
</div>
</div>
</div>
</section>
 
    <section id="map">
<div class="contact-map">
<iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.466647898065!2d29.919093519792654!3d31.183471200594127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c394ebd03ec1%3A0x16cbff5d844ff34b!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiAtIElUSQ!5e0!3m2!1sar!2seg!4v1743484902070!5m2!1sar!2seg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
</iframe>
</div>
</section>
  `;
}