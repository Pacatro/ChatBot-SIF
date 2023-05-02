// Text area enter key handler

window.onkeydown=function(event){
    if(event.keyCode === 13){
        let messageContent = document.getElementById("chat").value;

        if ((messageContent !== "") && (messageContent.replace(/\s/g, '').length > 0)) {
            addUserMessageBubble(messageContent);
            document.getElementById("chat").value = ""
        }
            
        return false; // prevent default behavior if ENTER key
    }

    return true;
}

function addUserMessageBubble(message) {
    let userMessageBubble = document.createElement("div");
    userMessageBubble.classList.add("message-user");
    userMessageBubble.innerHTML = message;

    document.getElementById("messages").appendChild(userMessageBubble);
}

let state = true;

function doBlinkyBlinkyOnName() {
    if (state) {
        document.getElementById("logo").innerHTML = "Fixy";
    } else {
        document.getElementById("logo").innerHTML = "Fixy_";
    }

    state = !state
}

let cursorBlinkInterval = setInterval(doBlinkyBlinkyOnName, 1000);

function emptyChat() {
    document.getElementById("messages").innerHTML = "";
    addMachineMessageBubble("Hola, soy Fixy. Soy una inteligencia artificial basada en ChatGPT dispuesta a ayudarle en todo lo que haga falta. ¿En que puedo ayudarle hoy?");
}

function addMachineMessageBubble(message) {
    let defaultMessage = document.createElement("div");
    defaultMessage.innerHTML = message;
    defaultMessage.classList.add("message-machine");

    document.getElementById("messages").appendChild(defaultMessage);
}

emptyChat();