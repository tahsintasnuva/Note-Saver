function addNote(){

    const taskNote = document.getElementById("paster").value
    const taskServer = document.getElementById("list-container")



    if(taskNote.length>0){
        const listItem = document.createElement("li")
        
        const spanTag = document.createElement("span")
        spanTag.textContent =taskNote

        listItem.appendChild(spanTag)

        taskServer.appendChild(listItem)

        const deletebutton = document.createElement("button")
        deletebutton.textContent = "❌"
        deletebutton.id ="delete-button"    
        
        const completebutton =document.createElement("button")
        completebutton.textContent = "✅"
        completebutton.id ="complete-button"

        listItem.appendChild(deletebutton)
        listItem.appendChild(completebutton)

        deletebutton.addEventListener("click",()=>{
            listItem.remove()
        })

        completebutton.addEventListener("click",()=>{
            spanTag.style.textDecoration = "line-through"
        })

        document.getElementById("paster").value=""

    }


 
}