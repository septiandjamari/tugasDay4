function grade(nilai) {
    var output = '';
    if (nilai >= 90) {
        output = 'A';
    } else if (nilai >= 80) {
        output = 'B';
    } else if (nilai >= 70) {
        output = 'C';
    } else if (nilai >= 60) {
        output = 'D';
    } else {
        output = 'E';
    }
    console.log("Input : " + nilai);
    console.log("Output : " + output);
    console.log();
}

grade(30);
grade(75);

