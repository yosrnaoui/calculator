let currentInput = "";
const display = document.getElementById("display");

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;
        const action = btn.dataset.action;

        // Clear
        if (action === "clear") {
            currentInput = "";
            display.textContent = "0";
            return;
        }

        // Equal
        if (action === "equal") {
            calculate();
            return;
        }

        // Numbers & operators
        if (value) {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate() {
    try {
        if (currentInput === "") return;
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch {
        display.textContent = "ERROR";
        currentInput = "";
    }
}
