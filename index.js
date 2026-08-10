/*
1 meter = 3.2808 feet
1 liter = 0.2642 gallon
1 kilogram = 2.2046 pound
*/

const meterToFeet = 3.2808;
const feetToMeters = 0.3048;
const literToGallon = 0.2642;
const gallonToLiter = 3.7854;
const kilogramToPound = 2.2046;
const poundToKilogram = 0.4536;
const inputEl = document.getElementById("input-el");

const lengthValue = document.getElementById("length-value");
const volumeValue = document.getElementById("volume-value");
const massValue = document.getElementById("mass-value");
const convertBtn = document.getElementById("convert-button");

convertBtn.addEventListener("click", function() {
    const inputValue = inputEl.value;

    if (inputValue === "") {
        lengthValue.textContent = "Please enter a value to convert.";
        volumeValue.textContent = "Please enter a value to convert.";
        massValue.textContent = "Please enter a value to convert.";
        return;
    }

    lengthValue.textContent = convertUnits(
        inputValue, meterToFeet, feetToMeters, "meters", "feet"
    );
    
    volumeValue.textContent = convertUnits(
        inputValue, literToGallon, gallonToLiter, "liters", "gallons"
    );
    
    massValue.textContent = convertUnits(
        inputValue, kilogramToPound, poundToKilogram, "kilograms", "pounds"
    );
})

function convertUnits(value, factorForward, factorBackward, unitForward, unitBackward) {
    
    const forwardResult = value * factorForward;
    const backwardResult = value * factorBackward;

    return `${value} ${unitForward} = ${forwardResult.toFixed(3)} ${unitBackward} |
    ${value} ${unitBackward} = ${backwardResult.toFixed(3)} ${unitForward}`;
}