var inquirer = require('inquirer');
var mysql    = require('mysql');
var itemID   ="";
var amount   ="";

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : "root",
  password : "",
  database : 'blambamazon'
});
 
connection.connect(function(err){
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function updateProduct()  {connection.query(
  `UPDATE products set stock_quantity=? WHERE product_id=?`,[stockleft, itemID+1],
    function(err, res) {

    }
      
  )
};

function Cancel() {
  console.log("Thank you for your business and hope you return! ;)")
  connection.end();
}

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (i = 0; i < res.length; i++) { 
    console.log(res[i].product_id+").", res[i].product_name+"||", res[i].department_name+"||", res[i].price+"||", res[i].stock_quantity)};
  
  
  inquirer.prompt([
    {
        type: 'prompt',
        name: 'Initiate',
        message: 'Enter the ID of the product you would like to purchase \n',
        }
    ]).then(function(answers){
    
      if (answers.Initiate>0){
        itemID=answers.Initiate-1;
        inquirer.prompt([
        {
            type: 'prompt',
            name: 'Amount',
            message: 'How much '+res[itemID].product_name+' would you like to buy? \n',
            }
        ]).then(function(answers){
          amount=answers.Amount
          stockleft=res[itemID].stock_quantity-amount
          if (stockleft<0){
            console.log("We are currently unable to fufill your product request, Our Apologizes.")
          }
          else{
            total=amount*res[itemID].price
            inquirer.prompt([
              {
                  type: 'list',
                  name: 'Confirm',
                  message: "Are you sure you would like to buy "+amount+" "+res[itemID].product_name+" at $"+total+"?\n",
                  choices: ["yes","no"],
              }
            ]).then(function(answers){
              if(answers.Confirm==="yes"){
                console.log(amount+res[itemID].product_name+" puchased!")
                updateProduct();
                inquirer.prompt([
                  {
                      type: 'list',
                      name: 'Add',
                      message: "Would like to purchase anything else?",
                      choices: ["yes","no"],
                  }
                ]).then(function(answers){
                  if(answers.Add==="yes"){
                    afterConnection();
                  }
                  else{
                    Cancel(); 
                  }
                })
              }
              else{
                Cancel();
              }
            })
              
              }
         
        });
      }
    });
  });
};
