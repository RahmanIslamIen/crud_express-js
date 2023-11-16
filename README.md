# crud_express-js
aplikasi (CRUD) back-end resful api dengan express.js tolong gunakan aplikasi **POSTMAN** untuk mengirimkan request tambah, ubah dan hapus data.

## database
kalian bisa membuat *database* nya terlebih dahulu sebelum mengguanakan aplikasi berikut ini adalah tabel nya:

| **users**    |              |
|--------------|--------------|
| id           | integer (11) |
| name         | varchar (50) |
| emailaddress | varchar (50) |

hanya terdiri dari 1 tabel dan 3 kolom <ins>dimana **id** sebagai **primary key** nya</ins> yang akan digunakan pada *update* dan *delete* data.

## end-point 
ini adalah end-point route nya.
```
http://localhost:3000/users
```
untuk metode nya bisa **get, post, put(update), dan delete**.

cukup lumayan untuk latihan sederhana.
