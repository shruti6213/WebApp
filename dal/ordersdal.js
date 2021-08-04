var sql = require('./mysqlconnect');


var Order= function(Order){


    this.orderid=Order.orderid
    this.orderdate= Order.orderdate;
    this.customerid = Order.customerid ;
    this.amount = Order.amount;
    
};


Order.getAllOrder = function (result) {
    console.log("Invoking dal getall Orders");
    
      sql.query("Select * from orders", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('Orders : ', res);  
                result(null, res);
              }
          });   
};


Order.createOrder = function (newOrder, result) {  
    console.log("New order to be added ");
    console.log(newOrder);
    sql.query("INSERT INTO orders set ?", newOrder, function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res.insertId);
              result(null, res.insertId);
            }
        });           
};

Order.getOrderById = function (OrderId, result) {
    sql.query("Select * from orders where orderid = ? ", OrderId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};


Order.updateById = function(id, Order, result){

    sql.query("UPDATE orders SET customerid = ? ,amount = ?,orderdate = ? WHERE orderid = ?", [Order.customerid,Order.amount,Order.orderdate,id] ,
                function (err, res) {
                    if(err) {
                          console.log("error: ", err);
                          result(null, err);
                      }
                    else{   
                      result(null, res);
                      }
                  }); 
  };
  
  
  Order.remove = function(id, result){
      sql.query("DELETE FROM orders WHERE orderid = ?", [id],
                  function (err, res) {
                    if(err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                    else{
                        result(null, res);
                    }
              }); 
  };
module.exports=Order;