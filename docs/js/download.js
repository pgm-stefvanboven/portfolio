document.getElementById("downloadButton").addEventListener("click", function () {
    // Hier voer je de code uit die nodig is om het bestand te downloaden
  
    // Creëer een linkelement
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1-ImDqeHZgYb4-WmgS22g1dTZzcY71q0-/view?usp=sharing"; // Vervang dit door de werkelijke link naar je bestand
  
    // Stel de naam van het bestand in
    link.download = "GIP bundel.pdf"; // Vervang dit door de gewenste bestandsnaam en extensie
  
    // Open het bestand in een nieuw tabblad
    link.target = "_blank";
  
    // Simuleer een klik op het linkelement
    link.click();
});  