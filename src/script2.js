// Select all inventory lists
const inventoryLists = document.querySelectorAll('.inventoryList');

// Loop through each inventory list and add event listeners
inventoryLists.forEach((list) => {
    const addButton = list.querySelector('#add');
    const subtractButton = list.querySelector('#subtract');
    const resetButton = list.querySelector('#reset');
    const result = list.querySelector('#result');

    // Initialize the count
    let count = 0;

    // Add button logic
    addButton.addEventListener('click', () => {
        count++;
        result.textContent = count;
    });

    // Subtract button logic
    subtractButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
        }
        result.textContent = count;
    });

    // Reset button logic
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            count = 0;
            result.textContent = count;
        });
    }
});

