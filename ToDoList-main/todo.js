function add_item(){
    let item=document.getElementById("box");
    let listitem=document.getElementById("list_item");
    if(item.value!=" ")
    {
        let makeli=document.createElement("li");
        makeli.appendChild(document.createTextNode(item.value));
    
    listitem.appendChild(makeli);
    item.value=" ";
    
    makeli.onclick = function(){ 
        this.parentNode.removeChild(this); 
      } 
    }
    else{
        alert("enterthe items");
    }
}