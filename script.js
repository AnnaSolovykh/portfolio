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
  
    gsap.to(".life-facts-0", {
      text: `<span>Life facts</span>`,
      duration: 0.5,
      repeat: 0,
      ease: "power1.in",
      delay: 1})
      
    gsap.to(".life-facts-1", {
        text: `Being a post-graduate in international relations, have always been passionate about <span>acquiring new knowledge.</span>`,
        duration: 0.5,
        repeat: 0,
        ease: "power1.in",
        delay: 1.5})
    
    gsap.to(".life-facts-2", {
          text: `Being able to speak Russian, English, Turkish, German, and learning Spanish, <span> perceive learning languages as an exciting hobby.</span>`,
          duration: 0.5,
          repeat: 0,
          ease: "power1.in",
          delay: 2})
    
    gsap.to(".life-facts-3", {
            text: `Being a former teacher of English, have always enjoyed <span>double-checking</span> in seach for mistakes.`,
            duration: 0.5,
            repeat: 0,
            ease: "power1.in",
            delay: 2.5})
    
    gsap.to(".life-facts-4", {
              text: `Being an<span> open-minded person</span>, I realised that I could enjoy that more... in coding.`,
              duration: 0.5,
              repeat: 0,
              ease: "power1.in",
              delay: 3})
    
    gsap.to(".life-facts-5", {
                text: `Thus - becoming a web developer, for whom coding is a way of <span>relaxation and self-expression</span>.`,
                duration: 0.5,
                repeat: 0,
                ease: "power1.in",
                delay: 3.5})
    
                gsap.to(".why-me-0", {
                  text: `<span>Why me?</span>`,
                  duration: 0.5,
                  repeat: 0,
                  ease: "power1.in",
                  delay: 1})
                  
                gsap.to(".why-me-1", {
                    text: `Being <span>responsible</span>, I am able to accomplish projects within time limits.`,
                    duration: 0.5,
                    repeat: 0,
                    ease: "power1.in",
                    delay: 1.5})
                
                gsap.to(".why-me-2", {
                      text: `Being <span>detail-oriented</span>, I am able to fulfill tasks up to the highest standarts.`,
                      duration: 0.5,
                      repeat: 0,
                      ease: "power1.in",
                      delay: 2})
                
                gsap.to(".why-me-3", {
                        text: `Being <span>flexible</span>, I am able to adjust to new rules.`,
                        duration: 0.5,
                        repeat: 0,
                        ease: "power1.in",
                        delay: 2.5})
                
                gsap.to(".why-me-4", {
                          text: `Being <span> organised</span>, I am able to multitask.`,
                          duration: 0.5,
                          repeat: 0,
                          ease: "power1.in",
                          delay:3})
                
                gsap.to(".why-me-5", {
                            text: `Being <span>determined</span>, I am full of desire to learn and achieve goals.`,
                            duration: 0.5,
                            repeat: 0,
                            ease: "power1.in",
                            delay: 3.5})
                
                  
    /*<li class="why-me-0"><span>Why me?</span></li>
              <li class="why-me-1">Being <span>responsible</span>, is able to accomplish projects within time limits.</li>
              <li class="why-me-2"></li>>Being <span>detail-oriented</span>, is able to fulfill tasks up to the highest standarts.</li>
              <li class="why-me-3"></li>>Being <span>flexible</span>, is able to adjust to new rules.</li>
              <li class="why-me-4"></li>>Being <span> organised</span>, is able to multitask.</li>
              <li class="why-me-5"></li>>Being <span>determined</span>, is full of desire to learn and achieve goals.</li>*/
    
              gsap.to(".about-me-1", {
                text: `Being a <span>Russian</span>, based in <span>Turkey</span>, I am ready for cross-cultural communication and relocation.`,
                duration: 0.5,
                repeat: 0,
                ease: "power1.in",
                delay: 4})
        
        gsap.to(".about-me-2", {
                  text: `Now in the process of learning <span>React</span> to further progress in web deveplopment.`,
                  duration: 0.5,
                  repeat: 0,
                  ease: "power1.in",
                  delay:4.5})
        
        gsap.to(".about-me-3", {
                    text: `Available for <span>hire</span> and open to any ideas of cooperation.`,
                    duration: 0.5,
                    repeat: 0,
                    ease: "power1.in",
                    delay: 5})
    /*
              <p class="about-me-1">Being a <span>Russian</span>, based in <span>Turkey</span>, is ready for cross-cultural communication and further relocation.</p>
            <p class="about-me-2">Now in the process of learning <span>React</span> to further progress in web deveplopment.</p>
            <p class="about-me-3">Available for <span>hire</span> and open to any ideas of cooperation.</p>*/
    
  } else {
    
    gsap.to(".life-facts-0", {
      text: `<span>Life facts</span>`,
      duration: 0.5,
      repeat: 0,
      ease: "power1.in",
      delay: 0})
      
    gsap.to(".life-facts-1", {
        text: `Being a post-graduate in international relations, have always been passionate about <span>acquiring new knowledge.</span>`,
        duration: 0.5,
        repeat: 0,
        ease: "power1.in",
        delay: 0})
    
    gsap.to(".life-facts-2", {
          text: `Being able to speak Russian, English, Turkish, German, and learning Spanish, <span>perceive learning languages as an exciting hobby.</span>`,
          duration: 0.5,
          repeat: 0,
          ease: "power1.in",
          delay: 0})
    
    gsap.to(".life-facts-3", {
            text: `Being a former teacher of English, have always enjoyed <span>double-checking</span> in search for mistakes.`,
            duration: 0.5,
            repeat: 0,
            ease: "power1.in",
            delay: 0})
    
    gsap.to(".life-facts-4", {
              text: `Being an<span> open-minded person</span>, I realised that I could enjoy that more... in coding.`,
              duration: 0.5,
              repeat: 0,
              ease: "power1.in",
              delay: 0})
    
    gsap.to(".life-facts-5", {
                text: `Thus - becoming a web developer, for whom coding is a way of <span>relaxation and self-expression</span>.`,
                duration: 0.5,
                repeat: 0,
                ease: "power1.in",
                delay: 0})
    
                gsap.to(".why-me-0", {
                  text: `<span>Why me?</span>`,
                  duration: 0.5,
                  repeat: 0,
                  ease: "power1.in",
                  delay: 0})
                  
                gsap.to(".why-me-1", {
                    text: `Being <span>responsible</span>, I am able to accomplish projects within time limits.`,
                    duration: 0.5,
                    repeat: 0,
                    ease: "power1.in",
                    delay: 0})
                
                gsap.to(".why-me-2", {
                      text: `Being <span>detail-oriented</span>, I am able to fulfill tasks up to the highest standarts.`,
                      duration: 0.5,
                      repeat: 0,
                      ease: "power1.in",
                      delay: 0})
                
                gsap.to(".why-me-3", {
                        text: `Being <span>flexible</span>, I am able to adjust to new rules.`,
                        duration: 0.5,
                        repeat: 0,
                        ease: "power1.in",
                        delay: 0})
                
                gsap.to(".why-me-4", {
                          text: `Being <span> organised</span>, I am able to multitask.`,
                          duration: 0.5,
                          repeat: 0,
                          ease: "power1.in",
                          delay: 0})
                
                gsap.to(".why-me-5", {
                            text: `Being <span>determined</span>, I am full of desire to learn and achieve goals.`,
                            duration: 0.5,
                            repeat: 0,
                            ease: "power1.in",
                            delay: 0})
                
                  
    /*<li class="why-me-0"><span>Why me?</span></li>
              <li class="why-me-1">Being <span>responsible</span>, is able to accomplish projects within time limits.</li>
              <li class="why-me-2"></li>>Being <span>detail-oriented</span>, is able to fulfill tasks up to the highest standarts.</li>
              <li class="why-me-3"></li>>Being <span>flexible</span>, is able to adjust to new rules.</li>
              <li class="why-me-4"></li>>Being <span> organised</span>, is able to multitask.</li>
              <li class="why-me-5"></li>>Being <span>determined</span>, is full of desire to learn and achieve goals.</li>*/
    
              gsap.to(".about-me-1", {
                text: `Being a <span>Russian</span>, based in <span>Turkey</span>, I am ready for cross-cultural communication and relocation.`,
                duration: 0.5,
                repeat: 0,
                ease: "power1.in",
                delay: 0})
        
        gsap.to(".about-me-2", {
                  text: `Now in the process of learning <span>React</span> to further progress in web deveplopment.`,
                  duration: 0.5,
                  repeat: 0,
                  ease: "power1.in",
                  delay: 0})
        
        gsap.to(".about-me-3", {
                    text: `Available for <span>hire</span> and open to any ideas of cooperation.`,
                    duration: 0.5,
                    repeat: 0,
                    ease: "power1.in",
                    delay: 0})
    /*
              <p class="about-me-1">Being a <span>Russian</span>, based in <span>Turkey</span>, is ready for cross-cultural communication and further relocation.</p>
            <p class="about-me-2">Now in the process of learning <span>React</span> to further progress in web deveplopment.</p>
            <p class="about-me-3">Available for <span>hire</span> and open to any ideas of cooperation.</p>*/
    
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


