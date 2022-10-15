 import mysql from 'mysql'

const con = mysql.createConnection({
    host: '162.144.5.104',
    user: 'webliion_nextmar',
    port:3306,
    password: 'OcRE409;rTvM',
    database: "webliion_marketplace"
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'marketplace'

});
con.connect((err) => {
    if (err) {
        console.warn("error in connection")
    }
});
export default con;