// Download CV: attach a click handler to every "Download CV" button on the page.
(function () {
  var CV_URL = "src/documents/Irena_Grocka_CV.pdf";
  var CV_FILENAME = "Irena_Grocka_Lead_Quality_Engineer_CV.pdf";

  function downloadCV() {
    var anchor = document.createElement("a");
    anchor.href = CV_URL;
    anchor.download = CV_FILENAME;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  document.querySelectorAll(".download-cv-button").forEach(function (button) {
    button.addEventListener("click", downloadCV);
  });
})();

// Core skills marquee: duplicate the cards once so the strip loops seamlessly.
(function () {
  document.querySelectorAll(".qe-track-inner").forEach(function (track) {
    Array.prototype.slice.call(track.children).forEach(function (card) {
      var copy = card.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      copy.setAttribute("data-clone", "");
      track.appendChild(copy);
    });
  });
})();
