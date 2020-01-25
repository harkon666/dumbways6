let loveBird = 6969;

for (let i = 1; i <= 441; i++) {
    if (i % 21 === 0) {
        //banyak burung yang mati
        let die = loveBird * 11.1 / 100
        //dikurangi jumlah burung sebelumnya
        loveBird -= die
        //lalu dengan serempak melahirkan
        loveBird *= 2
    }
}

console.log(`jadi LoveBird setelah 441 hari, berjumah ${Math.round(loveBird)}`)