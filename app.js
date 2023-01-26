const profilemenu = document.getElementById("profile-menu-wrap");
console.log(profilemenu);

const user_pic = document.getElementById("userpic");
console.log(user_pic);

user_pic.addEventListener("click", function () {
  profilemenu.classList.toggle("active");
});

// -------comment-------
const addcomment = document.getElementById("add_comment");
const comment = document.querySelector('input[name="comment"]');
const userpic = document.getElementById("userpic");

function addComment(event) {
  event.preventDefault();

  const commentValue = comment.value;
  const imgValue = (document.querySelector("#userpic").src =
    userpic.getAttribute("src"));

  if (commentValue.length > 0) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p1 = document.createElement("p");

    img.src = imgValue;
    p1.innerHTML = commentValue;

    div.appendChild(img);
    div.appendChild(p1);

    img.classList.add("img-style");
    div.classList.add("style");

    document.body.appendChild(div);
  }
}
addcomment.addEventListener("submit", addComment);

//----change images------
let listimage = document.querySelectorAll(".side-img-list .side-img ");
let listimg = document.querySelectorAll(".side-img-list .side-img");
let mainimage = document.querySelector(" #img");
let titleimg = document.querySelector(".open-image #p");

listimage.forEach(function (image) {
  image.onclick = function () {
    let src = image.children[0].getAttribute("src");
    mainimage.src = src;
    console.log(mainimage);
    console.log(src);

    let text = image.children[1].innerHTML;
    titleimg.innerHTML = text;
  };
});
