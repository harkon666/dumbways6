const drawLine = (string) => {
    String(string) // biar kalau input number masuknya string
    for (let i = 0; i < string.length; i++) {
        let res = ''
        for (let j = i - 0; j >= 0; j--) {
            res += '   '//mau semiring apa tuan?
        }
        res += string[i]
        console.log(res)
    }
}

drawLine('DUMBWAYS') //input string atau array