let mn = document.querySelector('#money')
let sell = document.querySelector('.sell')
let quantity = document.querySelector('.quantity')
let buy = document.querySelector('.buy')

let money = 750000000000
let itemPrice = 2
let itemQuantity = 0


buy.addEventListener("click", () => {
    if (money >= itemPrice) {
    itemQuantity += 1
    quantity.textContent = itemQuantity
    
    money -= itemPrice
    mn.textContent = '$' + money.toLocaleString('en-US')
    }

    if (itemQuantity > 0) {
        sell.classList.add('can-sell')
    } else {
    sell.classList.remove('can-sell')
    }
})


sell.addEventListener("click", () => {
    if (itemQuantity > 0) {
        itemQuantity -= 1
        quantity.textContent = itemQuantity

        money += itemPrice
        mn.textContent =  '$' + money.toLocaleString('en-US')
    }

    if (itemQuantity > 0) {
        sell.classList.add('can-sell')
    } else {
        sell.classList.remove('can-sell')
    }
})


