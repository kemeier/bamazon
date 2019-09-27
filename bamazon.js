var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "9Tachyons",
    database: "bamazon_db"
});

connection.connect(function(err) {
    console.log("Connected as id: "+connection.threadId);
    queryallproducts();
});

function queryallproducts() {
    connection.query("SELECT * FROM products",function(err,res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
        }
            console.log("-----------------------------------");
            inquirer.prompt([{
                name:"itemID",
                type:"input",
                message:"What is ID of the item you'd like to buy?"
            },{ 
                name:"unitAmount",
                type:"input",
                message:"How many units of the item would you like?"
            }]);
    })
        .then(function(answer) {
            var query = "SELECT * FROM products where ID=?" 
            connection.query(query, { product: answer.itemID }, function(err, res) {
                if (err) throw err;
                if (res.length === 0) {
                    console.log("Invalid product number")
                };
            });
        });

}








    