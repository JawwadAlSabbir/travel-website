const header = document.querySelector("#header");
let headerTop = header.offsetTop;
function stickyheader() {
  if (window.scrollY > headerTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickyheader);
