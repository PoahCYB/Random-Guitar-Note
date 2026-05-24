const notes = [
    "A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

    function getRandomNote() {
        const index = Math.floor(Math.random() * notes.length);
        return notes[index];
    }

function showNote() {
    const output = document.getElementById("output");
    output.style.opacity = 0;

    setTimeout(() => {
        output.innerText = getRandomNote();
        output.style.opacity = 1;
    }, 150);
}
