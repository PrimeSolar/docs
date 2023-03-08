  var userRole = prompt("Please enter the role. Options:\nadmin (default)\nuser", "admin");
  var subtitle = document.getElementById("subtitle");
  if (userRole == "user") {
    subtitle.innerHTML = "for Users";
    var el = document.getElementsByClassName("no-user");
    for (x = 0; x < el.length; x++) {
      el[x].closest("section").style.display = "none";
    }
  } else {
    subtitle.innerHTML = "for Administrators";
    var el = document.getElementsByClassName("no-admin");
    for (x = 0; x < el.length; x++) {
      el[x].closest("section").style.display = "none";
    }
  };
  var script = document.getElementsByTagName("script");
  script[0].innerHTML = "";
