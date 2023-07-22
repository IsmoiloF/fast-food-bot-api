import mysql from 'mysql2'

const pool = mysql.createPool({
    host: "127.0.0.1",
    database: "Food",
    user: "root",
    password: "password",
    port:  3306

})

export {pool}