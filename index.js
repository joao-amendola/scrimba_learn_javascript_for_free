let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    console.log(`The button was clicked ${count} times`)
}

function save() {
    console.log(count)
}
