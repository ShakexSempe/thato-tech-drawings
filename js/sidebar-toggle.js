const menuToggleButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sideLinks = document.querySelectorAll('.sidebar .sidebar-nav-list li a')

menuToggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

sideLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    })
});


//dynamic date 
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();






















// console.log(sideLinks);
// menuToggleButton.addEventListener('click', () => {
//     console.log(sideLinks)
//     sidebar.classList.toggle('open')
// });

// sideLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         sidebar.classList.toggle('open')
//     })
// })
