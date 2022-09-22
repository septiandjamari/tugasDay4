function filmRating(nilai) {
    var output = '';
    if (nilai >= 21) {
        output = 'DEWASA';
    } else if (nilai >= 13) {
        output = 'REMAJA';
    } else if (nilai >= 9) {
        output = 'BIMBINGAN ORANG TUA';
    } else {
        output = 'SEMUA UMUR';
    }
    console.log("Input : " + nilai);
    console.log("Output : " + output);
    console.log();
}

filmRating(15);
filmRating(32);