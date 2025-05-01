
const inventoryLists = document.querySelectorAll('.inventoryList');

inventoryLists.forEach((list) => {
    const addButton = list.querySelector('#add');
    const subtractButton = list.querySelector('#subtract');
    const resetButton = list.querySelector('#reset');
    const result = list.querySelector('#result');


    let count = 0;

    
    addButton.addEventListener('click', () => {
        count++;
        result.textContent = count;
    });

    subtractButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
        }
        result.textContent = count;
    });

    
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            count = 0;
            result.textContent = count;
        });
    }
});

