let express = require("express");

let router = express.Router();

let pizza = require("../models/pizza.js");



router.get("/", function(req,res){
    pizza.selectAll(function(data){
        console.log("data: " + data)
        let pizzas = [];
        let pizzasEaten = [];

        for(i in data){
            if(data[i].devoured === 0){
                pizzas.push(data[i]);
            } else if (data[i].devoured === 1){
                pizzasEaten.push(data[i]);
            }
        }
        
        res.render("index", {
            pizzas: pizzas,
            pizzasEaten: pizzasEaten
        });
    });
});


router.post("/api/pizzas", function(req, res){
    pizza.insertOne("pizza_name", req.body.pizza, function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/pizzas/:id", function(req, res){
    let id = req.params.id;

    pizza.updateOne('devoured', true, 'id', id, function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;