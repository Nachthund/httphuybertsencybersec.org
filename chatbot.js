document.addEventListener('DOMContentLoaded', function() {
    var chatbotContainer = document.getElementById('chatbot-container');
    var chatbotInput = document.createElement('input');
    var chatbotButton = document.createElement('button');
   
    chatbotButton.textContent = 'Send';
    chatbotButton.addEventListener('click', function() {
       var userMessage = chatbotInput.value;
       appendMessage('User', userMessage);
       chatbotInput.value = '';
   
       // Generate a chatbot response based on the user message
       var chatbotResponse = generateChatbotResponse(userMessage);
       appendMessage('Chatbot', chatbotResponse);
    });
   
    chatbotContainer.appendChild(chatbotInput);
    chatbotContainer.appendChild(chatbotButton);
   });
   
   function appendMessage(sender, message) {
    var messageElement = document.createElement('p');
    messageElement.textContent = sender + ': ' + message;
    chatbotContainer.appendChild(messageElement);
   }
   
   function generateChatbotResponse(userMessage) {
    // Simple rule-based response generation
    if (userMessage.includes('hello')) {
       return 'Hello! How can I help you?';
    } else if (userMessage.includes('how are you')) {
       return 'I\'m doing great, thank you!';
    } else {
       return 'Sorry, I don\'t understand your message.';
    }
   }