let savee = document.getElementById("save")
let countt = document.getElementById("count")
let count = 0
function increment() {
    count += 1
    countt.textContent = count
}
function save() {
    let countStr = count + " - "
    savee.textContent += countStr
    count=0;
    countt.textContent=count
}

