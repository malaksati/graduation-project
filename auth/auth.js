// Get all input fields
const codeInputs = document.querySelectorAll(".code-input");

// Add event listener to each input for auto-focusing to the next field
codeInputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (event.target.value.length === 1 && index < codeInputs.length - 1) {
      codeInputs[index + 1].focus(); // Move to the next input field
    }
  });

  // Allow moving back to the previous input on backspace
  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      codeInputs[index - 1].focus(); // Move to the previous input field
    }
  });
});

function SendEmail() {
    // event.preventDefault(); // Prevent page refresh

    const email = document.getElementById("floatingInput").value;
    const submitButton = document.getElementById("submit-email");
    const responseMessage = document.getElementById("message");

    // Disable the button and start the timer
    disableSendButton(submitButton, 30); // 30-second countdown

    // Send data to the backend
    // try {
    //   const response = await fetch("https://your-backend-endpoint/send-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, message }),
    //   });

    //   if (response.ok) {
    //     responseMessage.textContent = "Email sent successfully!";
    //     responseMessage.classList.add("text-success");
    //   } else {
    //     responseMessage.textContent = "Failed to send email.";
    //     responseMessage.classList.add("text-danger");
    //   }
    // } catch (error) {
    //   responseMessage.textContent = "An error occurred. Please try again.";
    //   responseMessage.classList.add("text-danger");
    // }
  }

/**
 * Disables the send button and starts a countdown timer.
 * @param {HTMLButtonElement} button - The button element to disable.
 * @param {number} seconds - The countdown duration in seconds.
 */
function disableSendButton(button, seconds) {
  button.disabled = true; // Disable the button
  button.classList.add("btn-danger");
  document.getElementById("floatingInput").disabled = true; // Disable the input field

  let countdown = seconds;
  button.textContent = `Wait ${countdown} seconds`;

  const timer = setInterval(() => {
    countdown--;
    button.textContent = `Wait ${countdown} seconds`;

    if (countdown === 0) {
      clearInterval(timer);
      button.disabled = false; // Re-enable the button
      button.classList.remove("btn-danger");
      document.getElementById("floatingInput").disabled = false;
      document.getElementById("floatingInput").value = ""; // Clear the input field
      button.textContent = "Send Again";
    }
  }, 1000); // Update every second
}

// Button event to collect the entered code
function SendData() {
  let verificationCode = "";
  codeInputs.forEach((input) => (verificationCode += input.value));
  if (verificationCode.length == 6) {
    window.location.href = "new_password.html";
  }
}

async function SendPassword () {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const validationMessage = document.getElementById("validation-message");

    // Clear previous validation message
    validationMessage.innerHTML = "";

    // Validate passwords
    if (newPassword === "" || confirmPassword === "") {
      validationMessage.innerHTML = "Please fill in both password fields.";
      return;
    }

    if (newPassword.length < 8) {
      validationMessage.innerHTML =
        "Password must be at least 8 characters long.";
      return;
    }

    if (newPassword !== confirmPassword) {
      validationMessage.innerHTML = "Passwords do not match.";
      return;
    }

    // If validation passes
    validationMessage.innerHTML = "Password successfully changed!";
    validationMessage.classList.remove("text-danger");
    validationMessage.classList.add("text-success");
    window.location.href = "../login.html";
}
