document.addEventListener("DOMContentLoaded", function () {
    const gridItems = Array.from(document.querySelectorAll(".grid-item")); 
    const resetButton = document.getElementById("resetButton");

    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }

    function hideGridItems() {
        const shuffledGridItems = [...gridItems]; 
        shuffle(shuffledGridItems); 

        shuffledGridItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.visibility = "hidden";
                if (index === shuffledGridItems.length - 1) {
                    resetButton.style.display = "block";
                }
            }, index * 200); 
        });
    }

    function resetGrid() {
        gridItems.forEach(item => {
            item.style.visibility = "visible";
        });
        resetButton.style.display = "none"; 
    }

    setTimeout(() => {
        hideGridItems(); 
    }, 5000);

    resetButton.addEventListener("click", resetGrid);
});