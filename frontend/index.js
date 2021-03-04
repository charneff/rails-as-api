const itemList = document.getElementById('item-list')

function fetchItems(){
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(data => addItems(data))
}

function addItems(response){
    response.data.forEach( item => {
        addItemToDom(item)
         })
}

function addItemToDom(item){
    itemList.innerHTML += `
    <div id="item-${item.id}">
        <li>
        $<span class="price">${item.attributes.price}</span>
        <strong class="name">${item.attributes.name}</strong>:
        <span class="description">${item.attributes.description}</span>
        </li>
        </div>`
}

document.addEventListener('DOMContentLoaded', () => {
    fetchItems()

})