const symBtn = document.getElementById('sym');
const numBtn = document.getElementById('num');
const upperBtn = document.getElementById('upper');
const lowerBtn = document.getElementById('lower');
const genBtn = document.getElementById('generate');
const slider = document.getElementById('range');
const display = document.getElementById('screen');
const clipboardBtn = document.getElementById('CB')
const popUp = document.getElementById('myPopup')
let password_length = document.getElementById("myPassLen");
  
let types = {
    num: "0123456789",
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

let isPopupActive = false;

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

    if (states.isNum && !/\d/.test(password)) {
       password = checkup('num',password) 
    }
    if (states.isSym && !/\W/.test(password)) {
        password = checkup('sym',password) 
    }
    if (states.isLower && !/[a-z]/.test(password)) {
        password = checkup('lower',password) 
    }
    if (states.isUpper && !/[A-Z]/.test(password)) {
        password = checkup('upper',password) 
    }


    return display.textContent = password;
};

function checkup(key,pass) {
    let randomPos = Math.floor(Math.random() * pass.length);
    let randomKey = types[key][Math.floor(Math.random() * types[key].slice(0,key.length).length)];
    pass = pass.substring(0, randomPos) + randomKey + pass.substring(randomPos + 1);
    return pass
}

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
    clipboardBtn.addEventListener("click", () => {
        if (!isPopupActive) {
            isPopupActive = true;
            popUp.style.opacity = "1";
            navigator.clipboard.writeText(display.textContent);
            setTimeout(() => {
                popUp.style.opacity = "0";
                isPopupActive = false;
            }, 3000);
        }
    })
}

function init() {
    GeneratePassword();
    buttonHandling();
}

init();