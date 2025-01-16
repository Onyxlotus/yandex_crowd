'use strict'

const products = document.querySelectorAll('.product');
const basketOne = document.querySelector('.basket-one');
const basketTwo = document.querySelector('.basket-two');
const basketThree = document.querySelector('.basket-three');
const btnPay = document.querySelector('.btn-pay');
const basket = document.querySelector('.basket');
const productsInBasket = {
    basketOne: ['wine', 'milk', 'jam', 'cheese'],
    basketTwo: ['beef', 'chicken', 'cheeps'],
    basketThree: ['pineapple', 'banana', 'apple', 'salad']
}

let current;

products.forEach(function (elem){
    elem.addEventListener('dragstart', function (e){
        current = this
    })
})

basket.addEventListener('dragover', function (e){
    e.preventDefault()
})

let count = 0
let zIndex = 1

function updateBasket (productsInBasket, basket, productName) {
    if (productsInBasket.includes(productName)){
        basket.appendChild(current)
        basket.style = `z-index: ${zIndex++}`
        count += 1
        console.log(count)
    }
}

basket.addEventListener('drop', function (e){
    if(!current) return
    let productName = current.className.split(' ')[1]
    console.log(productName)

    updateBasket(productsInBasket.basketOne, basketOne, productName)
    updateBasket(productsInBasket.basketTwo, basketTwo, productName)
    updateBasket(productsInBasket.basketThree, basketThree, productName)

    if (count >= 3) {
        btnPay.classList.add('btn-pay-visible')
    }
    
})

btnPay.addEventListener('click', ()=>{
    window.location.href = 'https://lavka.yandex.ru/';
})

function togglePulse () {
    btnPay.classList.toggle('pulsate');
}

setInterval(togglePulse, 2000);