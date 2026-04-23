const counterInput = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
let n = 0;

function count() {
    counterInput.value = n;
}

function dance(btn){
    btn.classList.add("dance");
    setTimeout(() => {
        btn.classList.remove("dance");
    }, 500);    
}

incrementBtn.addEventListener("click", () => {
    n++;
    count();
    dance(incrementBtn);
});

resetBtn.addEventListener("mouseenter", () => {
    n = 0;
    count();
    dance(resetBtn);
});

count();