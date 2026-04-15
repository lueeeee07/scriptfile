const counterInput = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
let n = 0;

function count() {
    counterInput.value = n;
}

incrementBtn.addEventListener("click", () => {
    n++;
    count();
});

resetBtn.addEventListener("click", () => {
    n = 0;
    count();
});

count(); 