function kabisat(input) {
    var output = '';
    if (Number(String(input).slice(0, 2)) % 4 !== 0) {
        if (String(input).slice(-2) === '00') {
            output = 'Bukan Kabisat';
        } else if (Number(String(input).slice(-2)) % 4 === 0) {
            output = 'Kabisat';
        }
    }
    else if (Number(String(input).slice(0, 2)) % 4 === 0) {
        if (Number(String(input).slice(-2)) % 4 === 0) {
            output = 'Kabisat';
        } else {
            output = 'Bukan Kabisat';
        }
    }
    else {
        output = 'Bukan Kabisat';
    }
    console.log("Input : " + input);
    console.log("Output : " + output);
    console.log();
}

kabisat(1900)
kabisat(2000)
kabisat(2001)
kabisat(2016)