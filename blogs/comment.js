document.getElementById("add-comment").onclick = function () {
    //create li element 
    let li = document.createElement("li");
    //get text from comment 
    let text = document.getElementById("comment").value;

    //create textnode to add text to li 
    let textnode = document.createTextNode(text);
    // add textnode to li 
    li.appendChild(textnode);
    //add class to li 
    li.classList.add("list-group-item");

// add delete button to li 
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = "delete task";
    deletebtn.className = "btn btn-outline-danger btn-sm delete";
    deletebtn.setAttribute("onclick","deleteComment()");
    li.appendChild(deletebtn);

   
    if (text === '') {
        alert("There is no task entered");
    }
    else {
        document.getElementById("comment-section").appendChild(li);
    }
    document.getElementById("task").value = "";
};


function deleteComment() {
    if (confirm("are you sure you want to delete this comment?")) {
        event.target.closest('li').remove();
    }
};
