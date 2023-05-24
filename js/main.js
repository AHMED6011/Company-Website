function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").classList.add("noTransparent");
  } else {
    document.getElementById("navbar").classList.remove("noTransparent");
  }
}

window.onscroll = function () {
  scrollFunction();
};

let vWebsite = new CountUp("website-count", 0, 250, 0, 3.5);
let vApp = new CountUp("app-count", 0, 100, 0, 3.5);
let vUser = new CountUp("user-count", 0, 10000, 0, 3.5);
let vVideo = new CountUp("video-count", 0, 30, 0, 3.5);
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1900) {
    vWebsite.start();
    vApp.start();
    vUser.start();
    vVideo.start();
  }
});

const forms = document.querySelectorAll(".needs-validation");

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

document.getElementById("fullYear").innerHTML = new Date().getFullYear();
