var sql = require('./mysqlconnect');



var Customerorders = function(Customerorders){

    //Constructor
   
    this.orderid=Customerorders.orderid;
    this.firstname=Customerorders.firstname;
    this.orderdetailid = Customerorders.orderdetailid;
    this.title= Customerorders.title ;
    this.quantity= Customerorders.quantity;
    this.amount=Customerorders.amount;
};


Customerorders.getAllCustomerorders= function (result) {
    console.log("Invoking dal getall Customers");
    var selectquery='select o.orderid,o1.orderdetailid,c.firstname,f.title,o1.quantity,o.amount from customers c inner join orders o on c.customerid=o.customerid inner join orderdetails o1 on o.orderid=o1.orderid inner join flowers f on o1.flowerid=f.id';
      sql.query(selectquery,function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('Customers : ', res);  
                result(null, res);
              }
          });   
};


Customerorders.getCustomerordersById = function (CustomerId, result) {
 var selectquery='select c.firstname,o.orderid,o1.orderdetailid,f.title,o1.quantity,o.amount from customers c inner join orders o on c.customerid=o.customerid inner join orderdetails o1 on o.orderid=o1.orderid inner join flowers f on o1.flowerid=f.id  where c.customerid= ?';


    sql.query(selectquery, CustomerId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null,res);     
            }
        });   
};


module.exports=Customerorders;