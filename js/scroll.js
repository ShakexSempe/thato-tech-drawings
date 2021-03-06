// ********** smooth scroll ************
// select links
const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navbar = document.getElementById('navbar');
const toggle = document.getElementById("toggle");
const sidebar = document.querySelector('.sidebar');
const main = document.getElementById("main");

// TOGGLE NAV 
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("open");
  main.classList.toggle("active");
  if(logo.classList.contains("active-logo")){
    logo.classList.remove("active-logo");
  }
});

sidebar.addEventListener("click", () => {
  toggle.classList.remove("active");
        sidebar.classList.remove("open");
        main.classList.remove("active");
})
scrollLinks.forEach(link => {
    //prevent default
    link.addEventListener('click', e => {
        toggle.classList.remove("active");
        sidebar.classList.remove("open");
        main.classList.remove("active");

        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        //calculate heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        // const fixedNav = navbar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;
        

        window.scrollTo({
            left: 0,
            top: position,
        });
        // linksContainer.style.height = 0;
    });
});


//progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  
  
}
/*end of progress bar*/

/*back to top button*/
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    const topLink = document.querySelector('.top-link');
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 700) {
      topLink.classList.add('show-link');
    } else {
      topLink.classList.remove('show-link');
    }
});
/*end of back to top button*/


// DYNAMIC DATE 
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(); 