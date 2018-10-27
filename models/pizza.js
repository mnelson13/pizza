let orm = require("../config/orm.js");

let pizza = {
    selectAll: function(callback){
        orm.selectAll("pizzas", function(res){
            callback(res);
        });
    },
    insertOne: function(col, val, callback){
        orm.insertOne("pizzas", col, val, function(res){
            callback(res);
        });
    },
    updateOne: function(key1, val1, key2, val2, callback){
        orm.updateOne("pizzas", key1, val1, key2, val2, function(res){
            callback(res);
        });
    }
};

module.exports = pizza;