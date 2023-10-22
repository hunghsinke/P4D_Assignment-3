
// query select id = 'trees', and change the colour to white 
document.querySelector("#trees").style.color='white'

//shows the ScrollY in console when the user is scrolling 
addEventListener("scroll", (event) => {
    console.log('ScrollY: '+ scrollY);
});

// // hide/show header on click
// let header = document.querySelector("header")
// header.addEventListener("click", (event) => {
//   console.log(header)
//   let op = header.style.opacity
//   if(op == "1"){
//     header.style.opacity = "0"
//   }else{
//     header.style.opacity = "1"
//   }
// });


// the below code can make the header disappear when user scrolls down, and reappear when user scroll up and might need the header 
// global vars
var lastScroll

// a generic listener, triggers when the page is scrolled
document.addEventListener("scroll", (event) => {
  // let's see where we are
  console.log("scroll y: " + scrollY)

  // and add some logic to make this event useful
  
  // if we're scrolling up the page
  if(scrollY < lastScroll){
    document.querySelector("header").style.opacity = '1'
  // or down
  }else{
    document.querySelector("header").style.opacity = '0'
  }

  // a global variable storing the position 
  // of the scrollbar when scrolling stops
  lastScroll = scrollY
});

// ************* end *************

//DOM Elements
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light')
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

//Button Event handlers
darkButton.onclick = () =>{
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
}
lightButton.onclick = () =>{
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
}
solarButton.onclick = () =>{
  if(body.classList.contains('solar')){
    // if hte body already contains solar class, we will remove it 
    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarise';

    localStorage.removeItem('isSolar');


  }else{
    solarButton.style.cssText = '--bg-solar: white';
    
    body.classList.add('solar');
    solarButton.innerText = 'normalise';

    localStorage.setItem('isSolar', true);

  }
};

// JS Masonry Grid 

// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });


$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


// light box JS 
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}