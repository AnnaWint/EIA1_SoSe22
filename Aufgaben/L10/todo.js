document.getElementById("add").addEventListener("click", newtask);
function newtask() {
    let li = document.createElement("li");
    let trash = document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash-can");
    let circle = document.createElement("i");
    circle.classList.add("fa-circle");
    circle.classList.add("fa-thin");
    let anzahl = document.getElementById("anzahl");
    anzahl.innerHTML = "anzahl toDos " + (parseInt(anzahl.innerHTML.slice(-1)) + 1);
    circle.addEventListener("click", function () {
        if (circle.hasChildNodes()) {
            circle.innerHTML = "";
        }
        else {
            let check = document.createElement("i");
            check.classList.add("fa-solid");
            check.classList.add("fa-check");
            ;
            circle.appendChild(check);
        }
    });
    let inputValue = document.getElementById("input");
    li.innerHTML = inputValue.value;
    inputValue.value = "";
    document.querySelector("#liste").appendChild(li);
    li.appendChild(circle);
    li.appendChild(trash);
    trash.addEventListener("click", function () {
        anzahl.innerHTML = "anzahl toDos " + (parseInt(anzahl.innerHTML.slice(-1)) - 1);
        document.querySelector("#liste").removeChild(li);
    });
    inputValue.value;
}
//# sourceMappingURL=todo.js.map