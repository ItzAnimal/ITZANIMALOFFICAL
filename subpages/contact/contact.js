(function () {
  function openAccordionFromHash() {
    var hash = window.location.hash;

    if (!hash) {
      return;
    }

    var targetElement = document.querySelector(hash);

    if (!targetElement) {
      return;
    }

    if (targetElement.tagName && targetElement.tagName.toLowerCase() === "details") {
      targetElement.open = true;
    } else {
      var closestDetails = targetElement.closest("details");
      if (closestDetails) {
        closestDetails.open = true;
      }
    }

    // Optional: ensure it is visible after opening
    setTimeout(function () {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  // Run on page load
  openAccordionFromHash();

  // Also run if hash changes while already on the page
  window.addEventListener("hashchange", openAccordionFromHash);
})();
// JavaScript Document