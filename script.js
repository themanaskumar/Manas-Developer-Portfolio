
document.getElementById('messageForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, message })
    });

    if (response.ok) {
        alert('Message saved successfully!');
    } else {
        alert('Failed to save message.');
    }
});