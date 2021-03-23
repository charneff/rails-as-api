// communicate with our backend
// post, patch, delete
class ItemsAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/items'
    }

    fetchItems(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                // let item = new Item(el.attributes.name, el.attributes.description, el.attributes.price))
                let item = new Item(el.attributes)
                item.attachToDom(el)
            })

        })
    }

    sendPatchRequest(itemId){
        const price = document.getElementById(`update-price-${itemId}`).value
        const description = document.getElementById(`update-description-${itemId}`).value
        const name = document.getElementById(`update-name-${itemId}`).value
    
        let itemObj = {
            name, 
            description,
            price
        }
    
        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(itemObj)
        }
    
        fetch(this.baseUrl + `/${itemId}`, configObj)
        .then(res => res.json())
        .then(response => {
            let item = Item.all.find(i => i.id == response.data.attributes.id)
            item.updateItemOnDom(response.data.attributes)
        })
        // remove form
    
        let form = document.getElementById(`update-form-${itemId}`)
        form.remove()
    }

    deleteItem(id){
        // remove from db
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
    
        fetch(`http://localhost:3000/items/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        // remove from dom
        let item = document.getElementById(`item-${id}`)
        item.remove()
    }

    handleFormSubmit(e){
        e.preventDefault()
        const price = document.getElementById('item-price').value
        const description = document.getElementById('item-description').value
        const name = document.getElementById('item-name').value
    
        let newItemObj = {
            name,
            description,
            price
        }
    
        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newItemObj)
        }
    
        fetch('http://localhost:3000/items', configObj)
        .then(res => res.json())
        .then(json => {
            let item = new Item(json.data.attributes)
            item.attachToDom()
        })
    
        itemForm.reset()
    }
}

