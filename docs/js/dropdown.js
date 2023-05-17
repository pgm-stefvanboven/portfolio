function toggleDropdown() {
    var dropdownMenu = document.getElementById("myDropdown");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      const dropdowns = document.getElementsByClassName("dropdown-menu");
      for (const i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
};  