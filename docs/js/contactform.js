function submitForm(event) {
    event.preventDefault(); // Voorkomt dat het formulier wordt verzonden

    // Haal de waarden van de invoervelden op
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Voeg het verzenden van de gegevens naar een server via AJAX, het weergeven van een bedankbericht, etc.
    // Je kunt bijvoorbeeld de gegevens loggen in de console:
    console.log("Naam: " + name);
    console.log("Email: " + email);
    console.log("Bericht: " + message);

    // Reset het formulier
    document.getElementById("contact-form").reset();
}