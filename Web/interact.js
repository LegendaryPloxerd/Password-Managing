const genBtn = document.getElementById('generate')
const mangBtn = document.getElementById('manage')

function sendTo() {
    genBtn.addEventListener("click", () => {
        window.location.href = "generator/index.html"
    })
    mangBtn.addEventListener("click", () => {
        window.location.href = "manager/index.html"
    })
}

sendTo()