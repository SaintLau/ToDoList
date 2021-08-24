let add = document.querySelector("#add"); //to target the button
let list = document.querySelector("#list"); //to add to the list the chores

//function to make the button work and add what is written
add.onclick = event => {
    event.preventDefault();

    let listitem = document.querySelector("#listitem");

    //in case of no type

    if (!listitem.value.length) {
        return alert("We could not find any word to add");
    }

    let li = document.createElement("li");
    let button = document.createElement("button");

    li.innerHTML = listitem.value;

    button.className = "close";
    button.innerHTML = "\u00D7";

    li.appendChild(button);
    listitem.appendChild(li);

    listitem.value = ""; //default

    li.onclick = event => {
        event.target.style.textDecoration = "line-through";
    };

    button.onclick = event => {
        event.target.parentElement.style.display = "none";
    };
}