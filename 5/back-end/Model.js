const db = require('./db')

class Model {
    static createBuku(name,catId,writerId, pubYear,img) {
        const query = `INSERT INTO buku_tb (name, category_id, writer_id, publication_year,img)
                        VALUES ('${name}','${catId}','${writerId}','${pubYear}','${img}')`
        return new Promise ((resolve, reject) => {
            db.run(query, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Berhasil menambah data pada buku_tb')
                }
            })
        })
    }

    static createWriter(name,phone_number) {
        const query = `INSERT INTO writer_tb (name, phone_number)
                        VALUES ('${name}','${phone_number}')`
        return new Promise ((resolve, reject) => {
            db.run(query, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Berhasil menambah data pada writer_tb')
                }
            })
        })
    }

    static createCategory(name) {
        const query = `INSERT INTO category_tb (name)
                        VALUES ('${name}')`
        return new Promise ((resolve, reject) => {
            db.run(query, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Berhasil menambah data pada category_tb')
                }
            })
        })
    }

    static show(name) {
        const query = `SELECT * FROM ${name}`

        return new Promise ((resolve, reject) => {
            db.all(query, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    static delete(name, id) {
        const query = `DELETE FROM ${name} WHERE id = ${id}`;

        return new Promise((resolve, reject) => {
            db.run(query, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(`Anda telah menghapus satu data ${name}`)
                }
            })
        })
    }

    static updateBuku(id, name, pubYear, img) {
        const query = `UPDATE buku_tb SET 
                        name            = '${name}',
                        publication_year = '${pubYear}',
                        img             = '${img}'
                       WHERE id = ${id}`;
        
        return new Promise((resolve, reject) => {
            db.run(query, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('data telah diubah')
                }
            })
        })
    }
}

module.exports = Model;