// Task 1: Change the color of the greeting text
document.getElementById('colorButton').addEventListener('click', function() {
    // TODO: Complete the function to change the 'greeting' element's color to a random color
    var randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + 
    Math.floor(Math.random() * 256) + ',' + 
    Math.floor(Math.random() * 256) + ')';

// 'greeting' öğesinin rengini değiştir
document.getElementById('greeting').style.color = randomColor;
});

// Task 2: Change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function() {
    document.getElementById('greeting').textContent = "Hello, JavaScript!";
    // TODO: Complete the function to change the text of the 'greeting' element to "Hello, JavaScript!"
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


