/*-------------------------------------*
            From here our  Section start
            *-------------------------------------*/
//    console.log("hello malik waseem is it js working?"); For testing js in linked or not?

// const p_btns = document.querySelector(".p-btns");
// const p_btn = document.querySelectorAll(".p-btn");
// const p_img_elem = document.querySelectorAll(".image-overlay");
// p_btns.addEventListener("click", (e) => {
//   const p_btn_clicked = e.target;
//   //console.log(p_btn_clicked);
//   if (!p_btn_clicked.classList.contains("p-btn")) return;
//   p_btn.forEach((currentelem) => currentelem.classList.remove("p-btn-active"));
//   p_btn_clicked.classList.add("p-btn-active");
//   const btn_num = p_btn_clicked.dataset.numBtn;
//   //console.log(btn_num);
//   const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//   //console.log(img_active);
//   p_img_elem.forEach((currentelem) =>
//     currentelem.classList.add("p-img-not-active")
//   );

//   img_active.forEach((currentelem) =>
//     currentelem.classList.remove("p-img-not-active")
//   );
// });

document.addEventListener("DOMContentLoaded", function () {
  const p_btns = document.querySelector(".p-btns");
  const p_btn = document.querySelectorAll(".p-btn");
  const p_img_elem = document.querySelectorAll(".image-overlay");

  p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;

    if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((currentelem) =>
      currentelem.classList.remove("p-btn-active")
    );
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.numBtn;

    p_img_elem.forEach((currentelem) =>
      currentelem.classList.add("p-img-not-active")
    );

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    img_active.forEach((currentelem) =>
      currentelem.classList.remove("p-img-not-active")
    );
  });

  // Rest of your code
});

// Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableoninteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*-------------------------------------*
    Responsive media query using js
*-------------------------------------*/
const myjsquery = (mblresponsive) => {
  if (mblresponsive.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableoninteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableoninteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};

const mblresponsive = window.matchMedia("(max-width:780px)");
myjsquery(mblresponsive);
mblresponsive.addEventListener("change", myjsquery);

/*-------------------------------------*
    scroll top Section start
*-------------------------------------*/
const herosection = document.querySelector(".hero-section");
const fotersection = document.querySelector(".section-footer");
const scrollelement = document.createElement("div");
scrollelement.classList.add("scrool-top-style");
scrollelement.innerHTML = `<ion-icon class="scroll-top" name="arrow-up-outline"></ion-icon>`;
fotersection.after(scrollelement);
const scrollTop = () => {
  herosection.scrollIntoView({ behavior: "smooth" });
};
scrollelement.addEventListener("click", scrollTop);

/*-------------------------------------*
    Header Responsive Section start
*-------------------------------------*/
const headerElem = document.querySelector(".header");

const mobile_nav = document.querySelector(".mobile-navbar-btn");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
  // console.log("Testing version");
});

// ========================================
//  lazy loading section
// ========================================
// const imgRef = document.querySelector("img[data-src]");
// console.log(imgRef);

// const lazyImg = (entries) => {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = imgRef.dataset.src;
// };

// const imgObserver = new IntersectionObserver(lazyImg, {
//   root: null,
//   threshold: 0,
//   // rootMargin: "100px",
// });

// imgObserver.observe(imgRef);
/*-------------------------------------*
    work counter Section start
*-------------------------------------*/

// const workSection = document.querySelector(".section-work-data");

// const workSectionObserve = (entries) => {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   console.log(entries);

//   const counterNum = document.querySelectorAll(".counter-numbers");

//   const speed = 200;
//   counterNum.forEach((curElem) => {
//     const updatenumber = () => {
//       const targetNumber = parseInt(curElem.dataset.number);
//       // console.log(targetNumber);
//       const initalNum = parseInt(curElem.innerHTML);
//       // console.log(initalNum);
//       const incrementnumber = Math.trunc(targetNumber / speed);
//       console.log(incrementnumber);

//       if (initalNum < targetNumber) {
//         curElem.innerText = `${initalNum + incrementnumber}`;
//         setTimeout(updatenumber, 10);
//       }
//     };
//     updatenumber();
//   });
// };
// const workSecObserver = new IntersectionObserver(workSectionObserve, {
//   root: null,
//   threshold: 0,
// });

// workSecObserver.observe(workSection);
document.addEventListener("DOMContentLoaded", function () {
  const workSection = document.querySelector(".section-work-data");

  const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 200;
    counterNum.forEach((curElem) => {
      const updatenumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        const initalNum = parseInt(curElem.innerHTML);
        const incrementnumber = Math.trunc(targetNumber / speed);

        if (initalNum < targetNumber) {
          curElem.innerText = `${initalNum + incrementnumber}`;
          setTimeout(updatenumber, 10);
        }
      };
      updatenumber();
    });
  };

  const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
  });

  workSecObserver.observe(workSection);
});
