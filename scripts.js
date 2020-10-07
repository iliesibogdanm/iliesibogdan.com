//Slideshow function
(function() {
    init(); //on page load - show first slide, hidethe rest
    function init() {
      parents = document.getElementsByClassName('program-rows');
      for (j = 0; j < parents.length; j++) {
        var slides = parents[j].getElementsByClassName("mySlides");
        var dots = parents[j].getElementsByClassName("dot");
        slides[0].classList.add('active-slide');
        dots[0].classList.add('active');
      }
    }
    dots = document.getElementsByClassName('dot'); //dots functionality
    for (i = 0; i < dots.length; i++) {
      dots[i].onclick = function() {
        slides = this.parentNode.parentNode.getElementsByClassName("mySlides");
        for (j = 0; j < this.parentNode.children.length; j++) {
          this.parentNode.children[j].classList.remove('active');
          slides[j].classList.remove('active-slide');
          if (this.parentNode.children[j] == this) {
            index = j;
          }
        }
        this.classList.add('active');
        slides[index].classList.add('active-slide');
      }
    }
  })
()
;

var slideshowContainers = document.getElementsByClassName("program-rows");
for(let s = 0; s < slideshowContainers.length; s++) {
	var cycle = slideshowContainers[s].dataset.cycle;
	var slides = slideshowContainers[s].querySelectorAll('.mySlides');
	var slideIndex = 0;
	showSlides(slides, slideIndex, cycle);
};


function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
		showSlides(slides, slideIndex, cycle)
  }, cycle);
};


//Contact me accordion
var accordions = document.getElementsByClassName("contactme-item-trigger-box")
for(var i = 0; i <accordions.length; i++){
  accordions[i].onclick = function(){
    var content=this.nextElementSibling;

    if(content.style.maxHeight){
      //accordion is open, we need to close it
      content.style.maxHeight=null;
    } else {
      //accordion is closed
      content.style.maxHeight=content.scrollHeight + "px";
    }
  }
}

//Navigation smooth transition
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//Navigation open accordion items
$("#aboutmebtn").click(function(){
  $("#aboutmetrigger").trigger("click");
});
$("#skillsbtn").click(function(){
  $("#skillstrigger").trigger("click");
});
$("#portofoliobtn").click(function(){
  $("#trigger3").trigger("click");
});
$("#contactbtn").click(function(){
  $("#contacttrigger").trigger("click");
});


const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks=document.getElementsByClassName("navbar-list")[0]
toggleButton.addEventListener('click',()=>{
  navbarLinks.classList.toggle('active')
})

var navbarButtons1=document.getElementsByClassName("navbar-button")[0];
var navbarButtons2=document.getElementsByClassName("navbar-button")[1];
var navbarButtons3=document.getElementsByClassName("navbar-button")[2];
navbarButtons1.addEventListener('click',()=>{
  navbarLinks.classList.toggle('active')
})
navbarButtons2.addEventListener('click',()=>{
  navbarLinks.classList.toggle('active')
})
navbarButtons3.addEventListener('click',()=>{
  navbarLinks.classList.toggle('active')
})


var accordions = document.getElementsByClassName("accordion-trigger")
for(var i = 0; i <accordions.length; i++){
  accordions[i].onclick = function(){
    var content=this.nextElementSibling;
    var img=this.firstElementChild;
    var downbtn=this.children[2];
    const mb=window.matchMedia("(max-width: 368px)");
    const mq=window.matchMedia("(max-width: 979px)");
  if(mb.matches){
    if(content.style.maxHeight){
      //accordion is open, we need to close it
      content.style.maxHeight=null;
      this.style.transform = "translateX(0)";
      img.style.transform = "scale(1)";
      downbtn.style.transform += "rotate(45deg)";
    } else {
      //accordion is closed
      content.style.maxHeight=content.scrollHeight + "px";
      this.style.transform="translateX(-8%)";
      img.style.transform += "scale(1.5)";
      downbtn.style.transform += "rotate(-45deg)";
      }
    } else { if(mq.matches){
      if(content.style.maxHeight){
        //accordion is open, we need to close it
        content.style.maxHeight=null;
        this.style.transform="translateX(0)";
        img.style.transform="scale(1)";
        downbtn.style.transform += "rotate(45deg)";
      } else {
        //accordion is closed
        content.style.maxHeight=content.scrollHeight + "px";
        this.style.transform="translateX(-15%)";
        img.style.transform += "translateX(-25px)";
        img.style.transform += "scale(2)";
        downbtn.style.transform += "rotate(-45deg)";
        }
      } else{      if(content.style.maxHeight){
        //accordion is open, we need to close it
        content.style.maxHeight=null;
        this.style.transform="translateX(0)";
        img.style.transform="scale(1)";
        downbtn.style.transform += "rotate(45deg)";
      } else {
        //accordion is closed
        content.style.maxHeight=content.scrollHeight + "px";
        this.style.transform ="translateX(-40%)";
        img.style.transform += "translateX(-25px)";
        img.style.transform += "scale(2)";
        downbtn.style.transform += "rotate(-45deg)";
        }}
    }
  }
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);
    node.classList.add('delay-2');

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.classList.remove('delay-1');
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  animateCSS('#aboutmetrigger','flipInX')
  animateCSS('#skillstrigger','flipInX');
  animateCSS('#trigger3','flipInX');

