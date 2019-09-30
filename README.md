# bamazon
I created an Amazon-like storefront using SQL and node.js. The app takes in orders from customers and depletes stock from the store's inventory. 

This involved creating a MySQL Database called bamazon and creating a table inside of that database called products.

The products table has the following columns:

item_id (unique id for each product)

product_name (Name of product)

department_name

price (cost to customer)

stock_quantity (how much of the product is available in stores)

I then populated this database with around 10 different products, and created a Node application called bamazon.js. Running this application first displays all of the items available for sale including the ids, names, and prices of products for sale.

The app then prompts users with two messages:

The first asksthem the ID of the product they would like to buy. The second message asks how many units of the product they would like to buy.

Once the customer has placed the order, the app checks if the store has enough of the product to meet the customer's request.

If not, the app logs a phrase to let the customer know and then prevents the order from going through.

If your store does have enough of the product, the customer's order is fulfilled.

At this point the SQL database is updated to reflect the remaining quantity. Once the update goes through, the customer sees the total cost of their purchase.