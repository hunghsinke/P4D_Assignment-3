function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className === "main-header") {
      x.className += " responsive";
    } else {
      x.className = "main-header";
    }
  }