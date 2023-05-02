// Código JavaScript para el chatbot

// Obtener elementos del DOM
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');

// Función para agregar un mensaje del usuario al chatbox
function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = message;
    chatbox.appendChild(userMessage);
}

// Función para agregar un mensaje del chatbot al chatbox
function addBotMessage(message) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.innerText = message;
    chatbox.appendChild(botMessage);
}

// Función para procesar la entrada del usuario
function processUserInput() {
    const message = userInput.value;

    // Agregar el mensaje del usuario al chatbox
    addUserMessage(message);

    // Lógica del chatbot - aquí debes implementar la lógica de tu chatbot

    // Ejemplo de respuesta del chatbot
    addBotMessage('Gracias por tu mensaje. Estoy procesando tu solicitud...');

    // Limpiar el campo de entrada del usuario
    userInput.value = '';
}

// Escuchar el evento 'keydown' en el campo de entrada del usuario
userInput.addEventListener('keydown', function (event) {
    // Verificar si se presionó la tecla Enter
    if (event.key === 'Enter') {
        processUserInput();
    }
});