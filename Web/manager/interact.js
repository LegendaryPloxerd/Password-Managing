const inputValue = document.getElementById('add-pass');
const list = document.getElementById('manager');
const addPass = document.getElementById('addToList');

function insert() {
    addPass.addEventListener("click", () => {
        if (inputValue.value !== '') {
            // TODO: Make a hide/show password system by the * classic
            list.innerHTML += `
                <div class="list">
                    <li class="item">${inputValue.value}</li>
                    <i class="fa-solid fa-trash"></i> 
                    <i class="fa-regular fa-copy"></i>
                    <i class="fa-solid fa-eye-slash"></i> 
                </div>
            `; // You can make the eye to fa-eye to make it a normal one
        }
        else {
            alert("You have to type a password first")
        }
    })
}

insert();