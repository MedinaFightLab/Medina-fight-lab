// Medina Fight Lab — mobile nav toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (!toggle) return;

  toggle.addEventListener("click", function () {
    body.classList.toggle("nav-open");
    var open = body.classList.contains("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu when a link is tapped
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
