const item = document.getElementById('item')
const todoBox = document.getElementById('to-do-box')

item.addEventListener('keyup',function(event){
      if(event.key == 'Enter'){
        addTodo(this.value)
        this.value = ""
      }
})

const addTodo = (item)=>{
    const listItem = document.createElement('li')
    listItem.innerHTML = `
     ${item}
    <i class="fa-solid fa-delete-left"></i>
    `;

    listItem.addEventListener('click',function(){
        this.classList.toggle('done')
    });
   listItem.querySelector('i').addEventListener('click',
    function(){
        listItem.remove()
    }
   )
    todoBox.appendChild(listItem)
}