
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