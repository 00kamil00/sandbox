let mn = document.querySelector('#money')
let items = document.querySelectorAll('.item')

let money = 750000000000


items.forEach((item) => {
    let sell = item.querySelector('.sell')
    let quantity = item.querySelector('.quantity')
    let buy = item.querySelector('.buy')
    let price = item.querySelector('.price')

    let itemQuantity = 0
    let itemPrice = Number(price.textContent.replace(/[^0-9]/g, ''))


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
            mn.textContent = '$' + money.toLocaleString('en-US')
        }

        if (itemQuantity > 0) {
            sell.classList.add('can-sell')
        } else {
            sell.classList.remove('can-sell')
        }
    })
})