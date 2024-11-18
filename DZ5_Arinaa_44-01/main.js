const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");


const createTodo = () => {
    if (!input.value.trim()) return alert("Напиши что-нибудь");
    const div = document.createElement("div");
    div.classList.add("block_text");
    const text = document.createElement("h3");
    text.textContent = input.value;


    const editButton = document.createElement("button");
    editButton.classList.add("edit_button");
    editButton.textContent = "edit";
    editButton.addEventListener("click", () => {
        const newText = prompt("Edit your TODO:", text.textContent);
        if (newText !== null && newText.trim() !== "") {
            text.textContent = newText;
        }
    });


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(div);
    });


    div.appendChild(text);
    div.appendChild(editButton);
    div.appendChild(deleteButton);


    todoList.appendChild(div);
    input.value = "";
};


createButton.addEventListener("click", createTodo);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") createTodo();
});


document.querySelectorAll(".block_text").forEach((block) => {
    const text = block.querySelector("h3");
    const editButton = block.querySelector(".edit_button");
    const deleteButton = block.querySelector(".delete_button");


    editButton.addEventListener("click", () => {
        const newText = prompt("Edit your TODO:", text.textContent);
        if (newText !== null && newText.trim() !== "") {
            text.textContent = newText;
        }
    });


    deleteButton.addEventListener("click", () => {
        todoList.removeChild(block);
    });
});
