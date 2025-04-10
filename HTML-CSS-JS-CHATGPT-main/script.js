document.addEventListener("DOMContentLoaded", function () {
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const sendButton = document.getElementById("send-btn");
  const closeButton = document.getElementById("close-btn");

  // Close chatbot when clicking the close button
  closeButton.addEventListener("click", function () {
      chatbotMessages.innerHTML = ""; // Clear messages
      chatbotInput.value = ""; // Clear input field
      chatbotContainer.style.display = "none"; // Hide chatbot
  });

  sendButton.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
      const userMessage = chatbotInput.value.trim();
      if (!userMessage) return;

      appendMessage("user", userMessage);
      chatbotInput.value = "";
      getChatbotResponse(userMessage);
  }

  function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = message;
      chatbotMessages.appendChild(messageElement);

      // Smooth scroll to the latest message
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  async function getChatbotResponse(message) {
      try {
          const response = await fetch("http://localhost:3000/chatbot", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ message }),
          });

          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          const botMessage = data[0]?.generated_text || "I'm not sure how to respond.";
          appendMessage("bot", botMessage);
      } catch (error) {
          console.error("Error fetching bot response:", error);
          appendMessage("bot", "Sorry, something went wrong. Please try again.");
      }
  }
});
