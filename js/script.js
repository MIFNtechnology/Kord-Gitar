// Function to toggle visibility of chord information
function toggleChordInfo(event) {
    const chordInfo = event.currentTarget.nextElementSibling; // Select the next sibling element
    if (chordInfo.style.display === 'block') {
        chordInfo.style.display = 'none'; // Hide if already displayed
    } else {
        chordInfo.style.display = 'block'; // Show the information
    }
}

// Add event listeners to all chord titles
document.addEventListener('DOMContentLoaded', () => {
    const chordTitles = document.querySelectorAll('.chord-title'); // Select all chord titles
    chordTitles.forEach(title => {
        title.addEventListener('click', toggleChordInfo); // Attach click event
    });
});