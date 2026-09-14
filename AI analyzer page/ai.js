const photoInput = document.getElementById("photoInput");
const previewArea = document.getElementById("previewArea");
const previewImage = document.getElementById("previewImage");
const fileName = document.getElementById("fileName");
const analyseButton = document.getElementById("analyseButton");
const loadingArea = document.getElementById("loadingArea");
const resultArea = document.getElementById("resultArea");
const resultText = document.getElementById("resultText");

let selectedFile = null;


// Select photo
photoInput.addEventListener("change", () => {

    const file = photoInput.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please choose an image file.");
        return;
    }

    selectedFile = file;

    const imageURL = URL.createObjectURL(file);

    previewImage.src = imageURL;
    fileName.textContent = file.name;

    previewArea.classList.add("show");
    resultArea.classList.remove("show");
});


// Analyze button
analyseButton.addEventListener("click", () => {

    if (!selectedFile) {
        alert("Please choose a photo first.");
        return;
    }

    // Hide loading animation
    loadingArea.classList.remove("show");

    // Show the result section
    resultText.textContent =
        "This section is currently under development. Photo analysis features are coming soon.";

    resultArea.classList.add("show");
});