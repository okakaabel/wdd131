const input = document.querySelector('#favchap');
const addButton = document.querySelector('button[type="submit"]'); // Select the Add Chapter button
const list = document.querySelector('#list');

// Function to handle the delete button for list items
function addDeleteButtonListener(deleteButton, li) {
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
}

// Predefined chapters to be displayed when the page loads
const predefinedChapters = document.querySelectorAll('#list li');

predefinedChapters.forEach(function(li) {
    const deleteButton = li.querySelector('.delete');
    addDeleteButtonListener(deleteButton, li);
});

addButton.addEventListener('click', function() {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    // Ensure input is not empty
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.appendChild(li);

        // Add delete button listener to the newly created list item
        addDeleteButtonListener(deleteButton, li);

        // Focus on input after adding the chapter
        input.value = '';
        input.focus();
    }
});
