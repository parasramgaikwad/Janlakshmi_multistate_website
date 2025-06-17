var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "bvytvgqvpaldk9kr7m32-mysql.services.clever-cloud.com",
    "user": "usr3j0ec6k4syzcl",
    "password": "FgUMmMvNBhfPHhr1srbz",
    "database": "bvytvgqvpaldk9kr7m32"
});

// var conn = mysql.createConnection({
//     "host": "localhost",
//     "user": "root",
//     "password": "",
//     "database": "janlakshmi_miltistate"
// })

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
