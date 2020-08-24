// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");  
const navitem  = document.querySelector(".navitem");
const logSign = document.querySelector(".log-sign");
const cntner = document.querySelector(".container");

// navToggle.addEventListener("click", function () {
//   // console.log(links.classList);
//   // console.log(links.classList.contains("random"));
//   // console.log(links.classList.contains("links"));
//   // if (links.classList.contains("show-links")) {
//   //   links.classList.remove("show-links");
//   // } else {
//   //   links.classList.add("show-links");
//   // }
//   navitem.classList.toggle("show-links");
// });


navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    //console.log(navitem.classList.contains("show-links"));
    // console.log(links.classList.contains("links"));
     //if (navitem.classList.contains("show-links")) {
    //navitem.classList.remove("show-links");
    // } else {
      // navitem.classList.add("show-links");
       //container.classList.add("ctn")
     //}
    navitem.classList.toggle("showlinks");
    logSign.classList.toggle("showlogsign");
    cntner.classList.toggle("extendcntner");
  });