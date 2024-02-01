const checklist = document.getElementById("checklist");
const itemInput = document.getElementById("itemInput");
const deleteAllButton = document.getElementById("deleteAll");

checklist.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    } else if (event.target.tagName === "BUTTON") {
        const li = event.target.parentNode;
        li.remove();
    }
});

document.getElementById("addItem").addEventListener("click", addItem);
itemInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});

deleteAllButton.addEventListener("click", () => {
    checklist.innerHTML = "";
});

function addItem() {
    const inputValue = itemInput.value.trim(); // Eliminar espacios en blanco al inicio y al final
    
    if (inputValue) {
        const li = document.createElement("li");
        li.textContent = inputValue;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        li.appendChild(deleteButton);
        checklist.appendChild(li);
        itemInput.value = "";
    } else {
        alert("Favor ingresar los elementos");
    }
}
