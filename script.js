// script.js
document.addEventListener('DOMContentLoaded', () => { 
  const navToggle = document.getElementById('nav-toggle'); 
  const navList = document.getElementById('nav-list'); 

  navToggle.addEventListener('click', () => { 
    navList.classList.toggle('show'); 
  }); 
});
