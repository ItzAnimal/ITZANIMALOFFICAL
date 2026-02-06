(function () {

  // Paste your Formspree endpoint here (create a separate Formspree form for tracking).
  var formspreeTrackingEndpoint = "PASTE_YOUR_FORMSPREE_TRACKING_ENDPOINT_HERE";

  function sendTrackingEvent(itemName) {
    if (!formspreeTrackingEndpoint || formspreeTrackingEndpoint.indexOf("PASTE_") === 0) {
      console.log("Merch click tracked locally:", itemName);
      return;
    }

    var formData = new FormData();
    formData.append("eventType", "Merch Click");
    formData.append("itemName", itemName);
    formData.append("page", "Merch Page");
    formData.append("timestamp", new Date().toISOString());

    fetch(formspreeTrackingEndpoint, {
      method: "POST",
      body: formData
    }).catch(function () {
      // Silent fail so it never annoys the user.
    });
  }

  var merchCards = document.querySelectorAll(".merchCard");

  merchCards.forEach(function (card) {
    card.addEventListener("click", function () {
      var itemName = card.getAttribute("data-item-name") || "Unknown Item";
      sendTrackingEvent(itemName);
    });
  });

})();
