



document.getElementById("add").addEventListener("click", newtask);

function newtask(): void {
    let li: HTMLLIElement = document.createElement("li") ;
    let  trash = document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash-can");
    let circle = document.createElement("i");
    circle.classList.add("fa-circle");
    circle.classList.add("fa-thin");
    let anzahl = document.getElementById("anzahl");
    anzahl.innerHTML="anzahl toDos " + (parseInt(anzahl.innerHTML.slice(-1)) + 1)
      
    
    
    circle.addEventListener("click", function(): void{
        if (circle.hasChildNodes()) {circle.innerHTML = "";
            
        } else { 
            let check: HTMLElement = document.createElement("i");
            check.classList.add("fa-solid");
            check.classList.add("fa-check");;
            circle.appendChild(check);

        
            
        }
    });
    let inputValue: HTMLInputElement = (document.getElementById("input") as HTMLInputElement);
    li.innerHTML = inputValue.value;
    inputValue.value="";
    document.querySelector("#liste").appendChild(li);
    li.appendChild(circle);
    li.appendChild(trash);
    trash.addEventListener("click", function (): void {
        anzahl.innerHTML="anzahl toDos " + (parseInt(anzahl.innerHTML.slice(-1)) - 1)
        document.querySelector("#liste").removeChild(li);

    });
    inputValue.value

   

}



