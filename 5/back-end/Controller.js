const View = require('./View')
const Model = require('./Model')

class Controller {
    static createBuku(name,catId,writerId, pubYear,img) {
        Model.createBuku(name,catId,writerId, pubYear,img)
            .then(message => {
                View.create(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static createWriter(name,phone_number) {
        Model.createWriter(name,phone_number)
            .then(message => {
                View.create(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static createCategory(name) {
        Model.createCategory(name)
            .then(message => {
                View.create(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static show (name) {
        Model.show(name)
            .then(message => {
                if (name === 'buku_tb') {
                    View.showBuku(message)
                } else if (name === 'writer_tb') {
                    View.showWriter(message)
                } else {
                    View.showCategory(message)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    static updateBuku(id, name, pubYear, img) {
        Model.updateBuku(id, name, pubYear, img)
            .then(message => {
                View.updateBuku(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static delete(id, name) {
        Model.delete(id, name)
            .then(message => {
                View.delete(message)
            }).catch(err => {
                console.log(err)
            })
    }
}

module.exports = Controller; 