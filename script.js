const profilemenu = document.getElementById("profile-menu-wrap");
console.log(profilemenu);

const userpic = document.getElementById("userpic");
console.log(userpic);

userpic.addEventListener("click", function () {
  profilemenu.classList.toggle("active");
});


// ----side bar----
const guideBar = document.getElementById('guide-bar');
console.log(guideBar);
const sidebar = document.getElementById('side-bar_p');
// const subImg = document.getElementById("sub-img");
guideBar.addEventListener("click", function(){
    sidebar.classList.toggle("side-bar_p_active");
    subImg.classList.toggle("sub-img_active");
    sidebar.querySelectorAll(".guide-items").forEach((a) => {
        a.classList.toggle("side-bar_active");
    });
    sidebar.querySelectorAll(".guide-items-p").forEach((p) => {
        p.classList.toggle("guide-items-p_active");
    })

});


