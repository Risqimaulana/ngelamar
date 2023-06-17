function openTab(tabIndex) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    tabs[tabIndex].style.display = "block";
  }
  