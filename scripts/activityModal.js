// get the elements
const activityModal = document.getElementById("activityModal");
const button = document.getElementById("modal-button");
const close = document.querySelectorAll(".close")[0];
const clickable = document.querySelectorAll(".clickable");

const openModal = function () {
  activityModal.style.display = "block";
};
const closeModal = function () {
  activityModal.style.display = "none";
};
// event listeners
button.addEventListener("click", openModal, false);
close.addEventListener("click", closeModal, false);
for (let i = 0; i < clickable.length; i++) {
  clickable[i].addEventListener("click", openModal, false);
}

window.onclick = function (event) {
  if (event.target == activityModal) {
    activityModal.style.display = "none";
  }
};