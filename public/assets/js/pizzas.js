$(document).ready(function(){

    $(document.body).on("click", "#eatPizza", function(event){
        event.preventDefault();

        let id = $(this).data("pizzaid");

        $.ajax("/api/pizzas/" + id, {
            type: "PUT",
        }).then(function(){
            console.log("udated id " + id);
            location.reload();
            }
        );
    });

    $("#addPizza").on("submit", function(event){
        event.preventDefault();

        let newPizza = {
            pizza: $("#addPizza [name=pizza]").val().trim()
        };

        $.post("/api/pizzas", newPizza)
            .then(function(){
                console.log("added a new pizza");
                location.reload();
            })
    })

})