//Burger 

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-item');


burger.addEventListener('click', navSlide)

function navSlide () {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index)=> {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.2}s`;
        }
    })
    burger.classList.toggle('toggle');
}


// Slider

$('.slider').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  draggable: false
});

  //Contact button

  const button = document.querySelector('.btn');
  const form = document.querySelector('form')

  button.addEventListener('click', (e) => {
    e.preventDefault() ;
    form.classList.toggle('toggle') 
    const contactText = document.querySelectorAll('.contact-text');
    contactText.forEach((text)=> {
      text.classList.toggle('no-display');
    })
  })

  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

//Animation
AOS.init();

gsap.from(".nav-item", {x: -100, duration: 1, delay: .1, opacity:0, stagger: .5})
gsap.from(".name", {x: -100, duration: 1, delay: .1, opacity:0})
gsap.from("h4", {x: -100, duration: 1, delay: .2, opacity:0})
gsap.from(".girlImage", { duration: 3, delay: .5, opacity:0})

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
  let mql = window.matchMedia(mediaQuery);
  mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
  layoutChangedCallback(mql.matches);
}

installMediaQueryWatcher("(min-width: 1050px)", function(matches) {
  if (matches) {

    document.querySelector(".life-facts-0").innerHTML = `<span>Life facts</span>`;
    document.querySelector(".life-facts-1").innerHTML = `Being a post-graduate in international relations, have always been passionate about <span>acquiring new knowledge.</span>`;
    document.querySelector(".life-facts-2").innerHTML = `Being able to speak Russian, English, Turkish, German, and learning Spanish, <span>perceive learning languages as an exciting hobby.</span>`;
    document.querySelector(".life-facts-3").innerHTML = `Being a former teacher of English, have always enjoyed <span>double-checking</span> in search for mistakes.`;
    document.querySelector(".life-facts-4").innerHTML = `Being an<span> open-minded person</span>, I realised that I could enjoy that more... in coding.`;
    document.querySelector(".life-facts-5").innerHTML = `Thus - becoming a web developer, for whom coding is a way of <span>relaxation and self-expression</span>.`;
    document.querySelector(".why-me-0").innerHTML = `<span>Why me?</span>`;
    document.querySelector(".why-me-1").innerHTML = `Being <span>responsible</span>, I am able to accomplish projects within time limits.`;
    document.querySelector(".why-me-2").innerHTML = `Being <span>detail-oriented</span>, I am able to fulfill tasks up to the highest standards.`;
    document.querySelector(".why-me-3").innerHTML = `Being <span>flexible</span>, I am able to adjust to new rules.`;
    document.querySelector(".why-me-4").innerHTML = `Being <span>organised</span>, I am able to multitask.`;
    document.querySelector(".why-me-5").innerHTML = `Being <span>determined</span>, I am full of desire to learn and achieve goals.`;

    document.querySelector(".about-me-3").innerHTML = `Available for <span>hire</span> and open to any ideas of cooperation.`;

    const elements = [
      ".life-facts-0", ".life-facts-1", ".life-facts-2", ".life-facts-3", 
      ".life-facts-4", ".life-facts-5", ".why-me-0", ".why-me-1", 
      ".why-me-2", ".why-me-3", ".why-me-4", ".why-me-5", 
      ".about-me-1", ".about-me-2", ".about-me-3"
    ];

    elements.forEach((selector, index) => {
      gsap.from(selector, {
        x: -100, 
        opacity: 0,
        duration: 0.5,
        delay: 1 + (index * 0.1), 
        ease: "power1.in"
      });
    });

  } else {

    document.querySelector(".life-facts-0").innerHTML = `<span>Life facts</span>`;
    document.querySelector(".life-facts-1").innerHTML = `Former teacher, passionate about <span>acquiring new knowledge.</span>`;
    document.querySelector(".life-facts-2").innerHTML = `<span>Perceive learning languages as an exciting hobby.</span>`;
    document.querySelector(".life-facts-5").innerHTML = `Coding for me is a way of <span>relaxation and self-expression</span>.`;
    document.querySelector(".why-me-0").innerHTML = `<span>Why me?</span>`;
    document.querySelector(".why-me-1").innerHTML = `<span>Responsible</span>: accomplish projects within time limits.`;
    document.querySelector(".why-me-2").innerHTML = `<span>Detail-oriented</span>: fulfill tasks up to the highest standards.`;
    document.querySelector(".why-me-3").innerHTML = `<span>Flexible</span>: able to adjust.`;
    document.querySelector(".why-me-4").innerHTML = `<span>Organised</span>: able to multitask.`;
    document.querySelector(".about-me-3").innerHTML = `Available for <span>hire</span> and open to any ideas of cooperation.`;

    const elements = [
      ".life-facts-0", ".life-facts-1", ".life-facts-2", ".life-facts-3", 
      ".life-facts-4", ".life-facts-5", ".why-me-0", ".why-me-1", 
      ".why-me-2", ".why-me-3", ".why-me-4", ".why-me-5", 
      ".about-me-1", ".about-me-2", ".about-me-3"
    ];

    elements.forEach((selector, index) => {
      gsap.from(selector, {
        x: -100, 
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1, 
        ease: "power1.in"
      });
    });
  }
});


const images = document.querySelectorAll('.project');

images.forEach(item => {
  item.addEventListener('mouseover', () => {
    removeFocus();
    gsap.to(item, { scale: 1.3,duration: 1, delay: .1})
    item.classList.add('selected');
  })
  removeFocus = () => {
    images.forEach(item => {
      gsap.to(item, {scale: 1, stagger: .2, duration: 1, delay: .1})
      item.classList.remove('selected');
    })
  }
})

//to the top button 

let toTopButton = document.getElementById("toTopButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


