const sliderContainer = document.getElementById("slider")
const sliderImg = document.getElementById("sliderImg");
const sliderBtnRight = document.getElementById("right");
const sliderBtnLeft = document.getElementById("left");

const homeH = document.getElementById("homeh");
const homeP = document.getElementById("homep");
const shopBtn = document.getElementById("shopBtn");
const catBtn = document.querySelectorAll(".cat-btn");


const imgArr = ['./../imgs/slide-01.jpg', './../imgs/slide-02.jpg', './../imgs/slide-03.jpg'];
const textArr = ['New Season', 'Brand Shop', 'TownTeam'];
const hArr = ['Woman Collection 2025', 'Men New Season', 'Hot Styles 2025'];
let sliderIndex = 0;

sliderContainer.addEventListener("mouseover" , function(){
    sliderBtnLeft.style.opacity = 100
    sliderBtnRight.style.opacity = 100
})
sliderContainer.addEventListener("mouseout" , function(){
    sliderBtnLeft.style.opacity = 0
    sliderBtnRight.style.opacity = 0
})

function animateSlide() {
  homeP.classList.remove("animate-flip");
  homeH.classList.remove("animate-flip");
  shopBtn.classList.remove("animate-slide");
  sliderImg.classList.remove("animate-fade");
  setTimeout(() => {
    homeP.classList.add("animate-flip");
    homeH.classList.add("animate-flip");
    shopBtn.classList.add("animate-slide");
    sliderImg.classList.add("animate-fade");
    }, 10); 
  }
  
shopBtn.addEventListener("click", function(){
  window.location.href = "/#/shop";
})

catBtn.forEach((element) => {
  element.addEventListener("click", function(){
    window.location.href = "/#/shop";
  })
})

function changeSlide() {
  sliderIndex++;
  if (sliderIndex >= imgArr.length) {
    sliderIndex = 0;
  }
  sliderImg.src = imgArr[sliderIndex];
  homeH.innerHTML = textArr[sliderIndex];
  homeP.innerHTML = hArr[sliderIndex];
  animateSlide();
}

sliderBtnRight.addEventListener("click", changeSlide);
sliderBtnLeft.addEventListener("click", changeSlide);

function slider() {
  setInterval(() => {
    changeSlide();
  }, 3500);
}
slider();

export default slider();