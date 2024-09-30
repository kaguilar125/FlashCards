document.addEventListener("DOMContentLoaded", function() {
    const addCardBtn = document.getElementById("addCardBtn");
    const createFlashcardForm = document.getElementById("row2");
    const closeCardBtn = document.getElementById("closeCard");

    addCardBtn.addEventListener("click", function() {
        createFlashcardForm.style.display = "flex";  
    });
 
    closeCardBtn.addEventListener("click", function() {
        createFlashcardForm.style.display = "none"; 
    });
});


