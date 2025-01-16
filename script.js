const navSideContainer = document.querySelector(".nav-side");
const navbarMenuIcon = document.querySelector("nav .nav-icon .fa-bars");
const navbarCloseIcon = document.querySelector("nav .nav-icon .fa-x");
const navSideSubmenuContainer = document.querySelector(".nav-side-submenu");

// for nav-side to show in the mobile or landscape device
navbarMenuIcon.addEventListener("click", () => {
  navSideContainer.style.transform = "translateY(0)";
  navbarMenuIcon.style.display = "none";
  navbarCloseIcon.style.display = "block";
});

navbarCloseIcon.addEventListener("click", () => {
  navSideContainer.style.transform = "translateY(-100%)";
  navbarMenuIcon.style.display = "block";
  navbarCloseIcon.style.display = "none";
});

// for menu list toggle the submenu
const navList = document.querySelectorAll("nav .nav-content .nav-list .nav-li");
const navRotateSign = document.querySelectorAll(
  "nav .nav-content .nav-list .nav-li .rotate-sign"
);
const navSubmenu = document.querySelectorAll(
  "nav .nav-content .nav-list .nav-li .sub-nav"
);
navList.forEach((listitem, listindex) => {
  listitem.addEventListener("click", () => {
    // const isOpen = navSubmenu[listindex].style.opacity !== "1";
    const isOpen =
      window.getComputedStyle(navSubmenu[listindex]).opacity !== "1";
    if (isOpen) {
      listitem.style.cssText = "color: rgb(28, 118, 253);";
      navRotateSign[listindex].style.cssText =
        "transform: rotate(-90deg); color: rgb(28, 118, 253);";
      navSubmenu[listindex].style.cssText =
        "opacity: 1; visibility: visible; top: 50px; background-color: white;";
    } else {
      listitem.style.cssText = "color: black;";
      navRotateSign[listindex].style.cssText =
        "transform: rotate(90deg); color: black;";
      navSubmenu[listindex].style.cssText =
        "opacity: 0; visibility: hidden; top: 60px;";
    }
    navList.forEach((otherlist, otherindex) => {
      if (otherindex != listindex) {
        otherlist.style.cssText = `color: black;`;
        navRotateSign[
          otherindex
        ].style.cssText = `transform: rotate(90deg); color: black;`;
        navSubmenu[otherindex].style.cssText = `  
          opacity: 0;
          visibility: hidden;
          top: 60px;
        `;
      }
    });
  });
});

//for menu list click to open and close in mobile and landscape device

const navSideList = document.querySelectorAll(".nav-side ul li");
const navSideSubmenu = document.querySelectorAll(".nav-side-submenu .submenu");
const navSideSubmenuCloseBtn = document.querySelectorAll(
  ".nav-side-submenu .submenu .fa-arrow-left"
);
//open submenu side
navSideList.forEach((navSideListItem, index) => {
  navSideListItem.addEventListener("click", () => {
    navSideSubmenuContainer.style.cssText = `transform: translateX(0)`;
    navSideSubmenu[index].style.cssText = `
    transform: translateX(0);
    `;
  });
});

//close submenu side
navSideSubmenuCloseBtn.forEach((Btn, index) => {
  Btn.addEventListener("click", () => {
    navSideSubmenuContainer.style.cssText = `transform: translateX(100%)`;
    navSideSubmenu[index].style.cssText = `
      transform: translateX(100%);
    `;
  });
});
