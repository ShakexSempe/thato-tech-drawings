// ********** smooth scroll ************
// select links
const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navbar = document.getElementById('navbar');

scrollLinks.forEach(link => {
  console.log(link)
    //prevent default
    link.addEventListener('click', e => {
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
