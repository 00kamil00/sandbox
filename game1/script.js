const mn = document.querySelector('#money')
const items = document.querySelectorAll('.item')
const moneyBar = document.querySelector('#money-bar')
const receiptItems = document.querySelector('#receipt-items')
const totalPrice = document.querySelector('#total-price')

let money = 750000000000
let start_money = 750000000000


items.forEach((item) => {
    const sell = item.querySelector('.sell')
    const quantity = item.querySelector('.quantity')
    const buy = item.querySelector('.buy')
    const price = item.querySelector('.price')

    let itemQuantity = 0
    let itemPrice = Number(price.textContent.replace(/[^0-9]/g, ''))


    buy.addEventListener("click", () => {
        if (money >= itemPrice) {
            itemQuantity += 1
            quantity.textContent = itemQuantity

            money -= itemPrice
            mn.textContent = '$' + money.toLocaleString('en-US')

            updateMoneyBar()
            updateAllBuyButtons()
            updateReceipt()
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

            updateMoneyBar()
            updateAllBuyButtons()
            updateReceipt()
        }

        if (itemQuantity > 0) {
            sell.classList.add('can-sell')
        } else {
            sell.classList.remove('can-sell')
        }
    })
})




function updateMoneyBar() {
    let left_money_percent = (money / start_money) * 100

    moneyBar.style.width = left_money_percent + '%'
}




function updateAllBuyButtons() {
    items.forEach((item) => {
        let price = item.querySelector('.price')
        let itemPrice = Number(price.textContent.replace(/[^0-9]/g, ''))
        let buy = item.querySelector('.buy')

        if (money < itemPrice) {
            buy.classList.add('cant-buy')
        } else {
            buy.classList.remove('cant-buy')
        }
    })
}

updateAllBuyButtons()




function updateReceipt() {
    receiptItems.innerHTML = ""
    let totalSpent = 0

    items.forEach((item) => {
        const itemName = item.querySelector('.item-name').textContent
        const price = item.querySelector('.price')
        const quantity = item.querySelector('.quantity')
        let itemPrice = Number(price.textContent.replace(/[^0-9]/g, ''))
        let itemQuantity = Number(quantity.textContent)

        if (itemQuantity > 0) {
            let cost = itemQuantity * itemPrice
            totalSpent += cost

            receiptItems.innerHTML += `
                <div class="receipt-row">
                    <p>${itemName} x ${itemQuantity}</p>
                    <p>$${cost.toLocaleString('en-US')}</p>
                </div>
            `
        }
    })
    totalPrice.textContent = "$" + totalSpent.toLocaleString('en-US')
}