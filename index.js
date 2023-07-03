let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let saveEl2 = document.getElementById("save-el2")
let countEl2 = document.getElementById("count-el2")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function increment2() {
    count += 1
    countEl2.textContent = count
}

function save2() {
    let countStr = count + " - "
    saveEl2.textContent += countStr
    countEl2.textContent = 0
    count = 0
}