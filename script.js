document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    const resetButton = document.getElementById("resetButton");

    
    function hideGridItems() {
        gridItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.visibility = "hidden";
                if (index === gridItems.length - 1) {
                   
                    resetButton.style.display = "block";
                }
            }, index * 500); 
        });
    }

   
    function resetGrid() {
        gridItems.forEach(item => {
            item.style.visibility = "visible";
        });
        resetButton.style.display = "none"; 
    }

   
    setTimeout(hideGridItems, 3000);
    resetButton.addEventListener("click", resetGrid);
});
