const minMax = (array) => {
    let res = []
    let is = false
    let arrIndex = 0
    let arrValue = 'z'
    //kenapa harus Z? bila menggunakan A sebagai perbandingan
    //maka ketika array memiliki index terkecil B, itu tidak akan menggantikannya
    for (let i = 0; i < array.length; i++) {
        if (arrValue > array[i] && !is) {
            arrValue = array[i]
            arrIndex = i
        }

        if (arrValue < array[i] && is) {
            arrValue = array[i]
        }

        if (i === array.length - 1) {
            if (!is) {
                i = arrIndex
                is = true
            }
            if (res[0] != arrValue) {
                res.push(arrValue)
            }
        }
    }
    return res
}

//input as u want
console.log(minMax(['d','b','x','d','m','a']))
console.log(minMax(['d','b','z','d','a','j']))
