// Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function itemModule() {
    // private 
    let items = [];

    function addItem(item) {
        items.push(item);
    }

    function removeItem(item) {
        items = items.filter(i => i!=item);
    }

    function getItems() {
        return items.slice(); // Returns a copy of the array
    }

    return {
        addItem,
        removeItem,
        getItems
    }
}

const manager = itemModule();
manager.addItem("apple");
manager.addItem("boy");
manager.addItem("banana");
console.log(manager.getItems());
manager.removeItem("boy");
console.log(manager.getItems());
