const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // prevent default form submission behavior

  // collect form data
  const formData = new FormData(event.target);

  try {
    // send data to server
    const response = await fetch("/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // show success message
      alert("Message sent successfully!");
      form.reset();
    } else {
      // show error message
      alert("Failed to send message. Please try again later.");
    }
  } catch (error) {
    // show error message
    alert("Failed to send message. Please try again later.");
  }
});
