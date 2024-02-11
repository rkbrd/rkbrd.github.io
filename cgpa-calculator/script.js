document.getElementById('cgpa-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let totalCGPA = 0;
    let totalCredits = 0;

    for (let i = 1; i <= 8; i++) {
        let cgpa = parseFloat(document.getElementsByName('cgpa' + i)[0].value);
        let credits = parseInt(document.getElementsByName('credits' + i)[0].value);

        if (!isNaN(cgpa) && !isNaN(credits)) {
            totalCGPA += cgpa * credits;
            totalCredits += credits;
        }
    }

    let overallCGPA = totalCGPA / totalCredits;

    document.getElementById('result').innerHTML = "<h2>Overall CGPA: " + overallCGPA.toFixed(2) + "</h2>";
});
