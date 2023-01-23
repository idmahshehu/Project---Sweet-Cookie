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
const changePicDesc = document.getElementById("side-img-list");
console.log(changePicDesc);
function changeImage(){

    document.querySelectorAll(".side-img img").forEach(img => {
    img.onclick = function() {
        document.querySelector(".img").src = img.getAttribute("src");
    }
    });
    document.querySelectorAll(".side-img-list .img-desc p").forEach(p => {
        p.onclick = function() {
            document.querySelector(".open-image p").textContent= p.getAttribute("title");
        }
    });


}

changePicDesc.addEventListener("click",changeImage);
