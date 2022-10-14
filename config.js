 import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_ansab',
    password: 'D8P7mvNSbt6Ev@y',
    database: "freedb_marketplace_db"
    // host: process.env.DB_HOST,
    // user: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DBNAME

});
con.connect((err) => {
    if (err) {
        console.warn("error in connection")
    }
});
export default con;