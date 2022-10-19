 import mysql from 'mysql'

const con = mysql.createConnection({
    host: '162.144.5.104',
    user: 'webliion_nextmar',
    password: 'OcRE409;rTvM',
    database: "webliion_marketplace"
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'marketplace'
    // host: 'sql.freedb.tech',
    // user: 'freedb_weblinx',
    // password: '8H$*Y@Fz&YW4zdt',
    // database: 'freedb_market_next'
});
con.connect((err) => {
    if (err) {
        console.warn("error in connection")
    }
});
export default con;