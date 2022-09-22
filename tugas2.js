function ganjilGenap(input) {
    var output = '';
    if (input % 2 === 0) {
        output = 'Genap';
    } else {
        output = 'Ganjil';
    }
    console.log("Input : " + input);
    console.log("Output : " + output);
    console.log();
}

ganjilGenap(43);
ganjilGenap(1032);