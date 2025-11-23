document.getElementById('calculateBtn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let imagePath = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        imagePath = 'images/underweight.jpg'; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        imagePath = 'images/normalperson.avif'; 
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        imagePath = 'images/overweight.jpg'; 
    } else {
        category = 'Obesity';
        imagePath = 'images/obes.jpg';
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi} (${category}).`;

    const bmiImage = document.getElementById('bmiImage');
    bmiImage.src = imagePath;
    bmiImage.style.display = 'block'; 
});