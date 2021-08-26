//Selectors

let add = document.querySelector("#add"); //to target the button
let list = document.querySelector("#list"); //to add to the list the chores

//Event Listeners

add.onclick = (e) => {
    e.preventDefault();

    let listitem = document.querySelector("#listitem");

    if(listitem.value !== '') { //for when we write something
        let el = document.createElement("li"); //target the list
        el.innerHTML = listitem.value;

        let removebtn = document.createElement("button");
        removebtn.className = "close";
        removebtn.innerHTML = "\u00D7"; //is the unicode for the "X" symbol

        el.appendChild(removebtn);
        list.appendChild(el);
        listitem.value = "";

        el.addEventListener("click", (e) => {
            e.target.style.textDecoration = "line-through"; 
        })
        removebtn.addEventListener("click", (e) => {
            e.target.parentElement.style.display = "none";
        });
    } else {
        alert("We could not find any word to add");
    }
}