const notepadText = document.getElementById('notepad-text');
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');

window.onload = function() {
    const savedText = localStorage.getItem('notepadText');
    if(savedText) {
        notepadText.value = savedText;
    }
};

saveButton.addEventListener('click',function() {
    const textToSave = notepadText.value;
    localStorage.setItem('notepadText',textToSave);
    alert('Text saved successfully!');
});

clearButton.addEventListener('click',function() {
    notepadText.value = '';
    localStorage.removeItem('notepadText');
    alert('Text Cleared!');
});
