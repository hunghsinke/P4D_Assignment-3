function myFunction() {
  var dots = document.getElementsById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

// another way to write this 
let buttons = document.querySelectorAll(".myBtn")
console.log(buttons)
for (i = 0; i< buttons.length; i++){
  buttons[i].addEventListener('click',(event)=>{
    let dots = event.currentTarget
    let siblings =   $(dots).siblings(".more")

    console.log($(dots).siblings(".more"))
  

    if ( siblings.css("display") === "none") {
      siblings.css("display", "inline");
      dots.innerHTML = "Read Less"; 
      // moreText.style.display = "none";
    } else {
      siblings.css("display", "none");
      dots.innerHTML = "Read More"; 
      // moreText.style.display = "inline";
    }

  })
}