const logo = document.querySelector('.logo');
console.log(logo);
const banner = document.querySelector('.banner');

const logoOptions = {
    rootMargin: "-100% 0px 0px 0px",
}

const bannerObserver = new IntersectionObserver(
    function(entries, bannerObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                console.log("banner NOT IO");
                logo.classList.remove("active-logo");
            } else {
                console.log("banner IS IO");
                logo.classList.add("active-logo");
            };
        });
    }, logoOptions
);
bannerObserver.observe(banner);