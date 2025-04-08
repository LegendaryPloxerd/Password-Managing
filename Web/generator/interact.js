const symBtn = document.getElementById('sym');
const numBtn = document.getElementById('num');
const upperBtn = document.getElementById('upper');
const lowerBtn = document.getElementById('lower');
const genBtn = document.getElementById('generate');
const slider = document.getElementById('range');
const display = document.getElementById('screen');
let password_length = document.getElementById("myPassLen");
  
let types = {
    num: "123456789",
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    sym: "!@#£¤$%&/{[()]}=+?`¨^~*'-_.:,;<>|"
};

let states = {
    isSym: false,
    isNum: false,
    isLower: false,
    isUpper: false
};

function Generation() {

    let chars = "";
    if (states.isLower) chars += types.lower;
    if (states.isUpper) chars += types.upper;
    if (states.isNum) chars += types.num;
    if (states.isSym) chars += types.sym;
    if (chars === "") return display.textContent = "Select at least one type";

    let password = "";
    for (let i = 0; i < parseInt(password_length.textContent); i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return display.textContent = password;
};

function stateHandling(button,key) {
    button.addEventListener("click", () => {
        states[key] = !states[key]; 
        button.style.opacity = states[key] ? "60%" : "100%";
        button.textContent = button.textContent.includes("Add") ? button.textContent.replace("Add","Remove") : button.textContent.replace("Remove","Add")
    })
}

function buttonHandling() {
    stateHandling(symBtn, "isSym");
    stateHandling(numBtn, "isNum")
    stateHandling(lowerBtn, "isLower")
    stateHandling(upperBtn, "isUpper")
}

function GeneratePassword() {
    genBtn.addEventListener("click",() => {
        Generation();
    })
    slider.addEventListener("input", () => {
        password_length.textContent = slider.value;
    })
}

function init() {
    GeneratePassword();
    buttonHandling();
}
init();