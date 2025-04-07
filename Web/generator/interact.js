const symBtn = document.getElementById('symbols');
const numBtn = document.getElementById('numbers');
const upperBtn = document.getElementById('uppercase');
const lowerBtn = document.getElementById('lowercase');
const genBtn = document.getElementById('generate');
const slider = document.getElementById('range');
const display = document.getElementById('screen');
let password_length = document.getElementById("myPassLen");
  
let types = [
    "123456789",
    "abcdefghijklmnopqrstuvwxyz", 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
    "!@#£¤$%&/{[()]}=+?`¨^~*'-_.:,;<>|"
];

function Generation() {
    let storedPass = []
    for (let i = 0; i < parseInt(password_length.textContent); i++) { 
        storedPass.push(types[1][Math.floor(Math.random() * 5)])
    }
    return display.textContent = storedPass.slice(0,storedPass.length).join('')
}

function GeneratePassword() {
    genBtn.addEventListener("click",() => {
        Generation()
    })
    slider.addEventListener("input", () => {
        password_length.textContent = slider.value;
    })
}
GeneratePassword()