const checklist = document.getElementById("checklist");
const itemInput = document.getElementById("itemInput");
const deleteAllButton = document.getElementById("deleteAll");
const modeToggle = document.getElementById("modeToggle");


checklist.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    } else if (event.target.classList.contains("delete")) {
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
        
        
        // Agregar botón de eliminar
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

modeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Cambiar la imagen del botón según el modo actual
    const currentMode = body.classList.contains("dark-mode") ? "dark" : "light";
    modeToggle.src = currentMode === "dark" ? "sol.png" : "luna-creciente.png";
}
