function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  function toggle() {
    text.hidden ? text.hidden = false : text.hidden = true;
  }
  btn.addEventListener("click", toggle);
}
