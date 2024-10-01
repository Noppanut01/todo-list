let todo = []
const todoAdd = () => {
    let inputDOM = document.querySelector("input[type=text]").value
    todo.push(inputDOM)
    console.log(todo[todo.length - 1])
    const para = document.createElement("div");
    para.className = "list";
    para.innerHTML = todo[todo.length - 1];
    document.getElementById("todo").appendChild(para);
    const deleteTodo = () => {
        para.className += " delete"
        todo.pop([para])
        console.log(todo);
    }
    para.addEventListener("click", deleteTodo);
}