// cal.js

document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const inputBox = document.getElementById("inputBox");
    const buttons = document.querySelectorAll("button");

    // Add click event listeners to buttons
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.innerText);
        });
    });

    // Function to handle button clicks
    function handleButtonClick(value) {
        if (value === "AC") {
            // Clear the input box
            inputBox.value = "";
        } else if (value === "DEL") {
            // Delete the last character
            inputBox.value = inputBox.value.slice(0, -1);
        } else if (value === "=") {
            // Evaluate the expression and display the result
            try {
                inputBox.value = eval(inputBox.value);
            } catch (error) {
                inputBox.value = "Error";
            }
        } else {
            // Append the clicked button value to the input box
            inputBox.value += value;
        }
    }
});

// let orangebtn = document.querySelectorAll(".operators");
// orangebtn.forEach((e)=>{
//     e.addEventListener("click", ()=>{
//         e.style.backgroundColor = "black";
//     })
// })