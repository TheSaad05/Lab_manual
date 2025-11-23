document.addEventListener('DOMContentLoaded', function() {
    // Box 1 - Click to change color
    const box1 = document.getElementById('box1');
    box1.addEventListener('click', function() {
        this.classList.toggle('red-bg');
    });
    
    // Box 2 - Hover to grow
    const box2 = document.getElementById('box2');
    box2.addEventListener('mouseover', function() {
        this.classList.add('large-box');
    });
    box2.addEventListener('mouseout', function() {
        this.classList.remove('large-box');
    });
    
    // Box 3 - Double click to disappear
    const box3 = document.getElementById('box3');
    box3.addEventListener('dblclick', function() {
        this.classList.add('hidden');
    });
    
    // Button 1 - Change text color
    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function() {
        document.querySelectorAll('.box p').forEach(p => {
            p.classList.toggle('blue-text');
        });
    });
    
    // Button 2 - Toggle visibility
    const btn2 = document.getElementById('btn2');
    const boxes = document.querySelectorAll('.box');
    btn2.addEventListener('click', function() {
        boxes.forEach(box => {
            box.classList.toggle('hidden');
        });
    });
    
    // Text input - Display typed text
    const textInput = document.getElementById('textInput');
    const outputText = document.getElementById('outputText');
    textInput.addEventListener('input', function() {
        outputText.textContent = "You typed: " + this.value;
    });
});