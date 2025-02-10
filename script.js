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
    navSideSubmenuContainer.style.cssText = `transform: translateX(-100%)`;
    navSideSubmenu[index].style.cssText = `
      transform: translateX(-100%);
    `;
  });
});

// for slideshow banner and click small banner
const BigBannerSlider = document.querySelectorAll(".big-banner");
const SmallBanner = document.querySelector(".small-banner");
const SmallBannerContainer = SmallBanner.querySelector(
  ".small-banner-container"
);
const SmallBannerItem = SmallBanner.querySelectorAll(".small-banner-item");
const SmallBannerItemImg = SmallBanner.querySelectorAll(
  ".small-banner-item img"
);

let currentIndex = 0;
let playInterval;

// update banner function
const updateBanners = (index) => {
  // hide all banners first
  BigBannerSlider.forEach((banner, i) => {
    banner.style.display = "none";
    SmallBannerItemImg[i].style.opacity = "0.5";
  });

  // show banner
  BigBannerSlider[index].style.display = "block";
  SmallBannerItemImg[index].style.opacity = "1";

  // update currentIndex
  currentIndex = index;
};

// auto-play function
const startAutoPlay = () => {
  playInterval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % BigBannerSlider.length;
    if (nextIndex === 0) {
      // Reset scroll position to the beginning
      SmallBannerContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      // Move to the next slide
      SmallBannerContainer.scrollBy({
        left: 310,
        behavior: "smooth",
      });
    }
    updateBanners(nextIndex);
  }, 2500);
};

// start banners and slideshow
updateBanners(currentIndex);
startAutoPlay();

// click small banners
SmallBannerItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    clearInterval(playInterval); // stop auto-play
    updateBanners(index); // show clicked banner
  });
});

// Product banner
const BannerProduct = document.querySelectorAll(".banner-product");
const BannerProductSliderContainer = document.querySelector(
  ".banner-product-container .container-slider-product .banner-product-slider-container"
);
const prevBtnSlider = BannerProductSliderContainer.querySelector(".prev-btn");
const nextBtnSlider = BannerProductSliderContainer.querySelector(".next-btn");
const BannerProductItem =
  BannerProductSliderContainer.querySelectorAll(".item");
const dots = document.querySelectorAll(
  ".banner-product-container .container-slider-product .banner-product-pagination .dot"
);
let showPrd = 0;
const HideBanner = () => {
  BannerProduct.forEach((item, index) => {
    item.style.cssText = "display: none";
    BannerProductItem[index].classList.remove("active");
  });
};
const ShowBanner = (index) => {
  BannerProduct[index].style.cssText = "display: flex";
  BannerProductItem[index].classList.add("active");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", index === i);
  });
};
const SlideBanner = (slide, condition) => {
  if (condition) {
    BannerProductSliderContainer.scrollBy({ left: slide, behavior: "smooth" });
  } else {
    BannerProductSliderContainer.scrollTo({ left: slide, behavior: "smooth" });
  }
};
HideBanner();
ShowBanner(showPrd);
prevBtnSlider.addEventListener("click", () => {
  showPrd--;
  if (showPrd < 0) {
    showPrd = 0;
    return;
  } else {
    HideBanner();
    ShowBanner(showPrd);
    SlideBanner(-220, true);
  }
});
nextBtnSlider.addEventListener("click", () => {
  showPrd++;
  if (showPrd >= BannerProduct.length) {
    showPrd = BannerProduct.length - 1;
    return;
  } else {
    HideBanner();
    ShowBanner(showPrd);
    SlideBanner(220, true);
  }
});
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dot.classList.add("active");
    SlideBanner(220 * index, false);
    BannerProduct[index].style.cssText = "display: flex";
    BannerProductItem[index].classList.add("active");
    dots.forEach((remove, removeIndex) => {
      if (removeIndex != index) {
        remove.classList.remove("active");
        BannerProduct[removeIndex].style.cssText = "display: none";
        BannerProductItem[removeIndex].classList.remove("active");
      }
    });
  });
});

BannerProductItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    BannerProduct[index].style.cssText = "display: flex";
    dots[index].classList.add("active");
    BannerProductItem.forEach((remove, removeIndex) => {
      if (index != removeIndex) {
        remove.classList.remove("active");
        BannerProduct[removeIndex].style.cssText = "display: none";
        dots[removeIndex].classList.remove("active");
      }
    });
  });
});
