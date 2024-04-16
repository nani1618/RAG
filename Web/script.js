function displayGreeting() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');

    if (nameInput) {
        greetingMessage.textContent = `Hello, ${nameInput}! Welcome to our app.`;
    } else {
        greetingMessage.textContent = "Please enter your name.";
    }
}
