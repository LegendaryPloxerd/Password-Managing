const genBtn = document.getElementById('generate')
const mangBtn = document.getElementById('manage')

const button_list = [genBtn,mangBtn]

const loc = {
    'genBtn' : 'gen_index.html',
    'mangBtn' : 'mang_index.html'
}

button_list.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (String(button_list.includes(Object.keys(loc)))) {
            window.location.href = "gen_index.html"
        }
    })
})
