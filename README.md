# dumbwaysK6

## Urutan Soal

**1 - 3** : Soal Logic
**Folder 4** : Screenshot untuk soal Database
**Folder 5** : Aplikasi CRUD sederhana

## Soal Logic

untuk soal Logic bisa dijalankan menggunakan Node.js dan bisa dijalankan di :
https://repl.it/languages/nodejs


----

## Soal Database

Untuk soal Database saya menggunakan SQLite3 anda bisa mengeceknya pada folder 4


----

## Soal Aplikasi Sederhana CRUD

Gunakan Visual Studio Code dan pada folder back-end open terminal


### Installasi untuk aplikasi CLI

**Note**
`saya belum pernah membuat website jadi saya tidak bisa membuat aplikasi web crud`
`saya tidak bisa membuatnya dalam sehari`

**Jadi saya membuat aplikasi berbasis command / CLI**

---

pada terminal ketik ->

> npm init -y

> npm install install sqlite3

anda sudah siap menggunakan aplikasi saya

### **Command Command untuk menggunakan Aplikasi ini**
`gunakan huruf kecil pada command`

**Table Name**
tablename = 

- buku_tb
- writer_tb
- category_tb


show -> untuk menampilkan tabel yang ada pada database

> node app.js show tablename

create:---- -> untuk insert data pada salah satu dari 3 tabel yang dipilih

 untuk tabel buku

> node app.js create:buku nama_buku category_id writer_id publication_year img

**note**
Ntah kenapa foreign key disini ga begitu berlaku T_T

 untuk tabel writer

> node app.js create:writer nama_penulis no_telp

 untuk tabel category

> node app.js create:category nama_kategori

update -> untuk update baris tabel buku
**Note**
Karena kurangnya waktu saya belum membuat command update pada selain tabel buku

selalu lihat isi tabel agar bisa mencocokan kolom id

>node app.js update nama_buku publication publication_year img id

delete -> untuk menghapus baris tabel buku

selalu lihat isi tabel agar bisa mencocokan kolom id

>node app.js delete tabelnama id