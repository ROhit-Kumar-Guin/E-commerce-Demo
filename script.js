let mode=document.body;
let modeChangeButton = document.getElementById("modeToggleBtn");
let modeChangeIcon = document.getElementById("modeIcon");

let modeChangeCardBackground = document.getElementsByClassName("cakeImage");

modeChangeButton.addEventListener("click" , function(){
    let currentMode = mode.getAttribute("data-bs-theme") ;
    let newMode = currentMode==="light" ? "dark" : "light" ;
    mode.setAttribute("data-bs-theme",newMode);

    if (newMode === 'light') {
        modeChangeIcon.classList.remove('bi-sun-fill');
        modeChangeIcon.classList.add('bi-moon-fill'); 
        
      } else {
        modeChangeIcon.classList.remove('bi-moon-fill');
        modeChangeIcon.classList.add('bi-sun-fill'); 
        modeChangeCardBackground.classList.remove('bg-success-subtle');
        modeChangeCardBackground.classList.add('bgColorGrey');
      }
});
document.getElementById('searchToggleBtn').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput');
  searchInput.classList.toggle('open');
});



// document.addEventListener('DOMContentLoaded', function () {
//   var dropdowns = document.querySelectorAll('.dropdown');

//   dropdowns.forEach(function (dropdown) {
//     dropdown.addEventListener('mouseenter', function () {
//       var dropdownMenu = dropdown.querySelector('.dropdown-menu');
//       dropdown.classList.add('show');
//       dropdownMenu.classList.add('show');
//     });

//     dropdown.addEventListener('mouseleave', function () {
//       var dropdownMenu = dropdown.querySelector('.dropdown-menu');
//       dropdown.classList.remove('show');
//       dropdownMenu.classList.remove('show');
//     });
//   });
// });



