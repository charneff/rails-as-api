// Item class - similar to model
class Item{
    static all = []

    constructor({name, description, price, id}){
        this.name = name
        this.description = description 
        this.price = price
        this.id = id
        this.element = document.createElement('div')
        this.element.id = `item-${this.id}`
        this.itemList = document.getElementById('item-list')

        Item.all.push(this)
    }

    attachToDom(){
        console.log(this)
        this.itemList.append(this.fullRender())
    }
    
    fullRender(){
        this.element.innerHTML = `
        <li>
        $<span class="price">${this.price}</span>
        <strong class="name">${this.name}</strong>:
        <span class="description">${this.description}</span>
        </li>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="update" data-id="${this.id}">Update</button>
        `
        return this.element
    }

    updateItemOnDom({price, name, description}){
        this.price = price
        this.description = description
        this.name = name 
        this.fullRender()

    }

}