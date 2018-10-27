let express = require("express");

let router = express.Router();

let pizza = require("../models/pizza.js");

router.get("/", function(req,res){
    pizza.selectAll("devoured", false, function(data){
        let obj = {
            pizzas: data
        };
        console.log(obj);
        res.render("index", obj);
    });
});

router.post("/api/pizzas", function(req, res){
    pizza.insertOne("pizza_name", req.body.name, function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/pizzas/:id", function(req, res){
    let id = req.params.id;

    pizza.updateOne("devoured", true, "id", id), function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    }
})

module.exports = router;