class View {
    static create(message) {
        console.log(message)
    }

    static showBuku(message) {
        console.log('================================BOOKST0RE=======================')
        for(let i = 0; i < message.length; i++) {
            console.log(`No: ${i+ 1}
            id: ${message[i].id}
            name: ${message[i].name}
            category_id: ${message[i].category_id}
            writer_id: ${message[i].writer_id}
            Publication Year: ${message[i].publication_year}
            img: ${message[i].img}`)
            console.log('_______________________________________________________')
        }
    }

    static showWriter(message) {
        console.log('================================BOOKST0RE=======================')
        for (let i = 0; i < message.length; i++) {
            console.log(`No: ${i+1}
            id: ${message[i].id}
            Name: ${message[i].name},
            Phone Number: ${message[i].phone_number}`)
            console.log('_______________________________________________________')
        }
    }

    static showCategory(message) {
        console.log('================================BOOKST0RE=======================')
        for (let i = 0; i < message.length; i++) {
            console.log(`No: ${i+1}
            id: ${message[i].id}
            Name: ${message[i].name}`)
            console.log('_______________________________________________________')
        }
    }

    static delete(message) {
        console.log(message)
    }

    static updateBuku(message) {
        console.log(message)
    }
}

module.exports = View;