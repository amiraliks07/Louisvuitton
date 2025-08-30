  const menuIcon = document.querySelector(".bi-list");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.querySelector(".side-menu .closebtn");

  menuIcon.addEventListener("click", () => {
    sideMenu.style.width = "250px"; 
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.style.width = "0";
  });