const modal = document.getElementById("login-modal");
const btn = document.getElementById("open-modal-btn");


btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; 
}
window.onclick = function(event) {
  if (event.target == modal || event.target.classList.contains("close")) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
  }
}
