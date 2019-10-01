var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "9Tachyons",
    database: "bamazon_db"
});

connection.connect(function (err) {
    console.log("Connected as id: " + connection.threadId);
    queryallproducts();
});

function queryallproducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
        }
        console.log("-----------------------------------");

        inquirer.prompt([{
            name: "itemID",
            type: "input",
            message: "What is ID of the item you'd like to buy?"
        }, {
            name: "unitAmount",
            type: "input",
            message: "How many units of the item would you like?"
        }])
          
                .then(function (answer) {
                    var chosenItem;
                    for (var i = 0; i < res.length; i++)    {
                        if (res[i].item_id == answer.itemID) {
                            chosenItem = res[i];
                        }
                    }
                    if (chosenItem.stock_quantity <= parseInt(answer.unitAmount)) {
                    console.log ("Not enough in stock");}
                    else {
                    console.log("Yay!");
                    // UPDATE products SET stock_quantity = (chosenItem.stock_quantity - answer.unitAmount) WHERE itemID = chosenItem.itemID
                    connection.query("UPDATE products SET ? WHERE ?", 
                    [{ stock_quantity: answer.unitAmount}])
                    console.log("there are " + answer.unitAmount + " left in stock");
                    } 
                    
                    var cost = res[1].price * answer.unitAmount;
                    console.log("\n Your cost is $ " + cost);
                   
                    var newQuantity = res[0].stock_quantity - answer.unitAmount;
                    connection.query(
                        "UPDATE products SET stock_quantity = " + newQuantity + " WHERE id = " + res[0].id, function(err, res){
                            if (err) throw err;
                            console.log("Your order is complete.")
                        }
                    )
                });
                
            });
            
    
}
//}).then(function(answer){
    //if(chosenItem.highestbid < parseInt(answer.bid)){
        //connection.query("UPDATE auctions SET ? WHERE ?",[{
            //highestbid: answer.bid
       // },{
            //id:chosenItem.id
       // }], function(err,res){
           // console.log("Bid successfully placed!");
            //start();
       // });
     // } else {
          //console.log("Your bid was too low.  Try again...");
          //start();
      //}







