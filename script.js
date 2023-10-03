"use strict"

function swapItems(node1, node2) { // первый элемент меняется местами со вторым 
    node1.parentNode.replaceChild(node1, node2);
    node1.parentNode.insertBefore(node2, node1); 
}

const itemsContainer = document.querySelector(".list__itemsContainer")
const addItemBtn = document.getElementById("addItemBtn")
const saveBtn = document.getElementById("saveBtn")

const data = [
    ["первый", "123"],
    ["второй", "456"],
    ["третий", "789"],
    ["четвертый", "012"],
    ["пятый", "345"],
    ["шестой", "678"],
    ["седьмой", "901"]
]

let counter = 0;
addItemBtn.addEventListener("click", () => {
    let currentData = data[counter]
    

    const item = document.createElement("div")
    item.classList.add("list__itemsContainer__item")
    item.id = counter;

    const itemInnerHtml =  `<div class="list__itemsContainer__item__text">
                                ${currentData[0]}
                            </div>
                            <div class="list__itemsContainer__item__numbers">
                                ${currentData[1]}
                            </div>
                            <a href="#" class="list__itemsContainer__item__button" move-top-btn-id="${counter}">
                                <img src="arrowTop.svg" class="list__itemsContainer__item__button__svg">
                            </a>
                            <a href="#" class="list__itemsContainer__item__button" move-bottom-btn-id="${counter}">
                                <img src="arrowBottom.svg" class="list__itemsContainer__item__button__svg">
                            </a>
                            <a href="#" class="list__itemsContainer__item__button" delete-btn-id="${counter}">
                                <img src="cross.svg" class="list__itemsContainer__item__button__svg">
                            </a>`
    
    item.innerHTML = itemInnerHtml
    itemsContainer.appendChild(item)

    const moveTopBtn = document.querySelector('[move-top-btn-id="' + counter + '"]')
    const moveBottomBtn = document.querySelector('[move-bottom-btn-id="' + counter + '"]')
    const deleteBtn = document.querySelector('[delete-btn-id="' + counter + '"]')

    moveTopBtn.addEventListener("click", () => {
        if (itemsContainer.querySelectorAll(".list__itemsContainer__item").length > 1) {
            const itemAbove = item.previousElementSibling
            swapItems(itemAbove, item)

        }
    })

    moveBottomBtn.addEventListener("click", () => {
        if (itemsContainer.querySelectorAll(".list__itemsContainer__item").length > 1) {
            const itemBelow = item.nextElementSibling
            swapItems(item, itemBelow)
            
        }
    })

    deleteBtn.addEventListener("click", () => {
        itemsContainer.removeChild(item)
    })

    counter++
})


































