window.addEventListener("load", function () {
  alert("Welcome to your digital learning journey!");
});

const logoLinks = document.querySelectorAll(".logo-grid a");

logoLinks.forEach(link => {
  link.addEventListener("click", function () {
    alert("Redirecting you to a trusted learning platform!");
  });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
