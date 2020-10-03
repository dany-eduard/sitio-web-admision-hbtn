document.addEventListener("DOMContentLoaded", function (event) {
  alert("Hello!");
  var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click", function () {
    alert("I saw you click!");
    var thumbnailElement = document.getElementById("smart_thumbnail");
    if (thumbnailElement.className == "small") {
      thumbnailElement.className = "";
    } else {
      thumbnailElement.className = "small";
    }
  });
});
