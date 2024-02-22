function addList() {
    // 1. Retrieve the value of the input field
    const inputText = document.querySelector("#input-text2").value;

    if (inputText.trim() === "") {
    return; // Exit the function if the input field is empty
    }
    const listItem = document.querySelectorAll("#list");
    const spEl = document.querySelector("#count");
    spEl.textContent = `${listItem.length} task left`

    // 2. Create a new list item with the retrieved value
    const newItemHTML = `
        <li>
            <div class="list-div">
                <div class="circle"><h2>o</h2></div>
                <div class="content"><h2>${inputText}</h2></div>
                <div class="btn">
                    <button onclick="remove()">&#10006;</button>
                    </div>
            </div>
        </li>
    `;

    // 3. Append the new list item to the existing list
    const listContainer = document.getElementById('list').querySelector('ul');
    listContainer.insertAdjacentHTML('beforeend', newItemHTML);
    document.querySelector("#input-text2").value = "";
        updateTaskLeft();
    
    
}
function remove(){
    const listItem = document.querySelectorAll('ul li');
    listItem.forEach(item=>{
        item.addEventListener("click" ,()=>{
            // item.stopPropagation(); // Stop event propagation
            item.remove();
            updateTaskLeft();
        })
    })
   
}
function updateTaskLeft(){
var totalTasks = document.getElementById("list").getElementsByTagName("li").length;
if((totalTasks-1) === 0){
document.getElementById("count").textContent ="";
}else{
document.getElementById("count").textContent = `${totalTasks-1} task left`;
}  
}