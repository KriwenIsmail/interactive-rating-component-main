const ratingEl = document.querySelector('[data-div="rate"]')
const thankEl = document.querySelector('[data-div="rated"]')

const submitBtn = ratingEl.querySelector('.submit')
const numbers = ratingEl.querySelectorAll('[data-num]')
const outOf = parseInt(ratingEl.querySelector(`[data-num="${numbers.length}"]`).getAttribute('data-num'))

const selection = thankEl.querySelector('.selection')

const addClass = (els, className) => els.forEach(el => el.classList.add(className))

let selectedNum

numbers.forEach(number => number.addEventListener('click', () => {
    if (number.classList.contains('outdated')) return
    addClass(numbers, 'outdated')
    number.classList.remove('outdated')
    number.classList.add('selected')
    selectedNum = parseInt(number.getAttribute('data-num'))
}))

submitBtn.addEventListener('click', () => {
    if (!selectedNum) return
    selection.innerText = `You selected ${selectedNum} out of ${outOf}`
    ratingEl.setAttribute('data-active', 'false')
    thankEl.setAttribute('data-active', 'true')
})
