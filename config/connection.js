let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    databae: "pizzas_db"
});

connection.connect(function(err){
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.logg("connected as id " + connection.threadId);
});

module.exports = connection;