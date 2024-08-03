async function predict() {
    const land = document.getElementById('land').value;
    const disease = document.getElementById('disease').value;
    const leaf = document.getElementById('leaf').value;
    const moisture = document.getElementById('moisture').value;

    const data = {
        'land': land,
        'disease': disease,
        'leaf': leaf,
        'moisture': moisture
    };

    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('result').innerText = `Prediction: ${result.prediction}`;
}

