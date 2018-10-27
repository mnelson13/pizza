let connection = require("../config/connection.js");

let orm = {
    selectAll: function(table, callback){
        let queryString = "SELECT * FROM ??";
        console.log(queryString);
        connection.query(queryString, [table], function(err, result){
            if(err) throw err;
            callback(result);
        });
    },

    insertOne: function(table, col, val, callback){
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        console.log(queryString);
        connection.query(queryString, [table, col, val, callback], function(err, result){
            if(err) throw err;
            callback(result);
        });
    },

    updateOne: function(table, key1, val1, key2, val2, callback){
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString, [table, key1, val1, key2, val2], function(err, result){
            if(err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;