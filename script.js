document.addEventListener("DOMContentLoaded", function() {
    const addCardBtn = document.getElementById("addCardBtn");
    const createFlashcardForm = document.getElementById("row2");
    const closeCardBtn = document.getElementById("closeCard");
    const saveCardBtn = document.getElementById("saveCardBtn");
    const delCardsBtn = document.getElementById("delCardsBtn");
    const questionInput = document.getElementById("exampleInputQuestion");
    const answerInput = document.getElementById("exampleInputAnswer");
    const cardContainer = document.querySelector(".row3");
    addCardBtn.addEventListener("click", function() {
        createFlashcardForm.style.display = "flex";  
    });
    closeCardBtn.addEventListener("click", function() {
        createFlashcardForm.style.display = "none"; 
    });
    saveCardBtn.addEventListener("click", function() {
        const question = questionInput.value.trim();
        const answer = answerInput.value.trim();
        if (question && answer) {
            const newCard = document.createElement("div");
            newCard.classList.add("col-3");
            newCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <button class="delete-btn">—</button> <hr>
                        <h5 class="card-title">${question}</h5>
                        <p class="card-text">${answer}</p>
                    </div>
                </div>
            `;
            cardContainer.appendChild(newCard);
            const deleteBtn = newCard.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function() {
                cardContainer.removeChild(newCard); 
            });
            questionInput.value = "";
            answerInput.value = "";
            createFlashcardForm.style.display = "none";
        } else {
            alert("fill out both the queston and answer.");
        }
    });
    delCardsBtn.addEventListener("click", function() {
        cardContainer.innerHTML = "";  
    });
});





