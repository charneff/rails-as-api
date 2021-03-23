const itemForm = document.getElementById('item-form')
const itemsAdapter = new ItemsAdapter

// function handleFormSubmit(e){
//     e.preventDefault()

//     let newItemObj = {
//         name: itemName.value,
//         description: itemDescription.value,
//         price: itemPrice.value
//     }

//     let configObj = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify(newItemObj)
//     }

//     fetch('http://localhost:3000/items', configObj)
//     .then(res => res.json())
//     .then(json => {
//         addItemToDom(json.data)
//     })

//     itemForm.reset()
// }

// function addUpdateItemFields(itemId){
//     let item = document.querySelector(`#item-${itemId} li`)
//     let price = item.querySelector('.price').innerText
//     let description = item.querySelector('.description').innerText
//     let name = item.querySelector('strong').innerText


//     let updateForm = `
//     <input type="number" value="${price}" name="price" id="update-price-${itemId}" min="0" step=".01">
//     <input type="text" name="name" value="${name}" id="update-name-${itemId}">
//     <input type="text" name="description" value="${description}" id="update-description-${itemId}">
//     `

//     let formDiv = document.createElement('div')
//     formDiv.id = `update-form-${itemId}`
//     formDiv.innerHTML = updateForm
//     item.append(formDiv)
// }

// function sendPatchRequest(itemId){

//     const updateItemPrice = document.getElementById(`update-price-${itemId}`)
//     const updateItemDescription = document.getElementById(`update-description-${itemId}`)
//     const updateItemName = document.getElementById(`update-name-${itemId}`)

//     let itemObj = {
//         name: updateItemName.value,
//         description: updateItemDescription.value,
//         price: updateItemPrice.value
//     }

//     let configObj = {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(itemObj)
//     }

//     fetch(`http://localhost:3000/items/${itemId}`, configObj)
//     .then(res => res.json())
//     .then(response => updateItemOnDom(response.data))
//     // remove form

//     let form = document.getElementById(`update-form-${itemId}`)
//     form.remove()
// }

// function updateItemOnDom(item){
//     let liItem = document.querySelector(`#item-${item.id} li`)
//     liItem.querySelector('.price').innerText = item.attributes.price
//     liItem.querySelector('.description').innerText = item.attributes.description
//     liItem.querySelector('strong').innerText = item.attributes.name
// }

// function deleteItem(id){
// // remove from db
//     let configObj = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         }
//     }

//     fetch(`http://localhost:3000/items/${id}`, configObj)
//     .then(res => res.json())
//     .then(json => {
//         alert(json.message)
//     })

// // remove from dom
//     let item = document.getElementById(`item-${id}`)
//     item.remove()
// }

// function handleListClick(e){
//    if (e.target.className === "delete"){
//        let id = e.target.dataset.id
//         deleteItem(id)
//    } else if(e.target.className === 'update'){
//         let itemId = e.target.dataset.id
//         e.target.className = "save"
//         e.target.innerText = "Save"
//         addUpdateItemFields(itemId)
//     } else if(e.target.className === 'save'){
//         let itemId = e.target.dataset.id
//         e.target.className = "update"
//         e.target.innerText = "Update"
//         itemsAdapter.sendPatchRequest(itemId)
//     }
// }


document.addEventListener('DOMContentLoaded', () => {
    itemsAdapter.fetchItems()
    itemForm.addEventListener('submit', itemsAdapter.handleFormSubmit)
})