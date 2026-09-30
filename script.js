

function calculateSquare() {
    let side = document.getElementById('side').value;
    let area = side * side;
    let perimeter = 4 * side;
    document.getElementById('square-result').innerHTML = 'square: ' + area + ', perimeter: ' + perimeter;
}


function calculateCircle() {
    let radius = document.getElementById('circle-radius').value;
    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;
    document.getElementById('circle-result').innerHTML = 'circle: ' + area.toFixed(2) + ', circumference: ' + circumference.toFixed(2);  
}

