function checkAccessCode() {
    var enteredCode = document.getElementById("accessCodeInput").value;
    var resultDiv = document.getElementById("result");

    // Replace 'yourSecretCode' with the actual code you want to use
    var correctCode = "BUEY STEAK CHULETON DRY AGED CECINA CHORIZO PIMIENTOS TOLOSA SPAIN BEEF MADURADO IBERICO JAMON LOMO";

    if (enteredCode === correctCode) {
        // Use the correct path to your image file
        resultDiv.innerHTML = "<img src='imagen.png' alt='Special Image'>";
    } else {
        resultDiv.innerHTML = "Incorrect code. Please try again.";
    }
}
