var messageInput = document.getElementById("messageInput");
function getMessage() {
    document.getElementById("messageOutput").innerHTML = messageInput.value;
    messageInput.value = "";
}