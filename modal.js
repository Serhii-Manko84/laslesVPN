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

  const submitButton = event.target.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.innerText = "Відправка...";

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  //   console.log("Форма відправлена:", { firstName, lastName, email, phone });

  const message = `Новий реєстраційний запит:\n
    firstName = ${firstName}\n
    lastName = ${lastName}\n
    email = ${email}\n
    phone = ${phone}\n`;

  const token = "7293319206:AAGYdVOrYehed-LR4vsr4CuqLcsHH3ZDzhc";
  const chatID = "-1002167205144";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatID,
      text: message,
    }),
  })
    .then((response) => {
      response;
      if (response.ok) {
        alert("Форма відправлена успішно!");
        closeModal();
        registrationForm.reset();
      } else {
        throw new Error("Помилка сервера: " + response.statusText);
      }
    })
    .catch((error) => {
      alert("Помилка, спробуйте ще раз!");
      console.log("Error: ", error);
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerText = "Registration";
    });
}

registrationForm.addEventListener("submit", onSubmitForm);
signIn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
