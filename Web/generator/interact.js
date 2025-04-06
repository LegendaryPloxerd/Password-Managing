const symBtn = document.getElementById('symbols');
const numBtn = document.getElementById('numbers');
const upperBtn = document.getElementById('uppercase');
const lowerBtn = document.getElementById('lowercase');
const genBtn = document.getElementById('generate');
const slider = document.getElementById('range');
const display = document.getElementById('screen');
let popup = document.getElementById("myPopup");
  

let types = ["123456789","abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "!@#£¤$%&/{[()]}=+?`¨^~*'-_.:,;<>|"]
let password = ""

function GeneratePassword() {
    genBtn.addEventListener("click",() => {
        password = types[1].slice(1,Math.floor(Math.random() * slider.value))
        display.innerText = password
    })

    slider.addEventListener("input", (event) => {
      
        const sliderRect = slider.getBoundingClientRect();
        
        // Calculate position for popup (centered above the slider thumb)
        const thumbPosition = ((slider.value - slider.min) / (slider.max - slider.min)) * slider.clientWidth;
        
        // Position the popup
        popup.style.left = (sliderRect.left + thumbPosition) + 'px';
        popup.style.top = (sliderRect.top) - '2000px'; 
        
      
        popup.textContent = slider.value;
        
       
        popup.style.visibility = 'visible';
    })

    slider.addEventListener('change', () => {
        popup.style.visibility = 'hidden';
    });
    
}

GeneratePassword()
