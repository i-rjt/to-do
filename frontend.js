
    const form = document.getElementById("myform");
const div = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let add2 = form.elements["add-task"];
    let add = add2.value;

    if (add.trim() !== ""){
        let span = document.createElement("span");
        let pre = document.createElement("pre");
        let date = new Date().toLocaleString();
        let str = `\t(Added on ${date})`;

        
        div.append(span.textContent = add,str,pre);
        
        add2.value = "";
       

    }
        //Validation of inner text of element
        validate();
        delete_task();
});




function validate(){
    if (div.innerHTML == "") {
        div.style.display = "none";
    }else{
        div.style.display = "block";
    }
}


function delete_task(){
       document.getElementById("delete").addEventListener("click", () => {
        const div = document.getElementById("list");
        let last = (div.lastChild );
        if (last === null){
            console.log("Nothing to delete");
        }else{
            last.remove();
        }
       
      });


}