const profilemenu = document.getElementById("profile-menu-wrap");
console.log(profilemenu);

const userpic = document.getElementById("userpic");
console.log(userpic);

userpic.addEventListener("click", function () {
  profilemenu.classList.toggle("active");
});

// ----side bar----
const guideBar = document.getElementById("guide-bar");
console.log(guideBar);
const sidebar = document.getElementById("side-bar_p");

guideBar.addEventListener("click", function () {
  sidebar.classList.toggle("side-bar_p_active");

  sidebar.querySelectorAll(".guide-items").forEach(function (a) {
    a.classList.toggle("side-bar_active");
  });
  sidebar.querySelectorAll(".guide-items-p").forEach(function (p) {
    p.classList.toggle("guide-items-p_active");
  });
});

// ---Tabs Switch---
function setupTabs() {
  document.querySelectorAll(".tabs__button").forEach(function (button) {
    button.addEventListener("click", function () {
      const switchTopics = button.parentElement;
      const mainContainer = switchTopics.parentElement;
      const headerContainer = mainContainer.parentElement;
      const tabsContainer = headerContainer.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        `.tabs__content[data-tab="${tabNumber}"]`
      );

      tabsContainer.querySelectorAll(".tabs__content").forEach(function (tab) {
        tab.classList.remove("tabs__content--active");
      });

      tabToActivate.classList.add("tabs__content--active");
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setupTabs();

  document.querySelectorAll("body").forEach(function (tabsContainer) {
    tabsContainer.querySelector(".switch_topics .tabs__button").click();
  });
});
