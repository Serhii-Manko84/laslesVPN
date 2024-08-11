const signIn = document.querySelector(".sign");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const registrationForm = document.getElementById("registrationForm");

function openModal() {
  modal.classList.add("block");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("block");
  document.body.classList.remove("no-scroll");
}

function onSubmitForm(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  console.log("Форма відправлена:", { firstName, lastName, email, phone });

  if (!firstName || !lastName || !email || !phone) {
    alert("Будь-ласка, заповніть всі поля. Дякую");

  } else {
    alert("Форма відправлена успішно!");
    closeModal()
  }
}

registrationForm.addEventListener("submit", onSubmitForm);
signIn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
