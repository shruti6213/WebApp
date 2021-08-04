var sql = require('./mysqlconnect');


var Orderdetail= function(Orderdetail){


    this.orderdetailid=Orderdetail.orderdetailid
    this.orderid= Orderdetail.orderid;
    this.flowerid = Orderdetail.flowerid ;
    this.quantity = Orderdetail.quantity;
    
};


Orderdetail.getAllOrderdetail = function (result) {
    console.log("Invoking dal getall Orderdetail");
    
      sql.query("Select * from orderdetails", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('Orderdetail : ', res);  
                result(null, res);
              }
          });   
};


Orderdetail.createOrderdetail = function (Orderdetail, result) {  
    console.log("New Orderdetail to be added ");
    console.log(Orderdetail);
    sql.query("INSERT INTO orderdetails set ?", Orderdetail, function (err, res) {
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

Orderdetail.getOrderdetailById = function (OrderdetailId, result) {
    sql.query("Select * from orderdetails where orderdetailid = ? ", OrderdetailId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};


Orderdetail.updateById = function(id, Orderdetail, result){

    sql.query("UPDATE orderdetails SET flowerid = ? ,orderid = ?,quantity = ? WHERE orderdetailid= ?", [Orderdetail.flowerid,Orderdetail.orderid,Orderdetail.quantity, id], 
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
  
  
  Orderdetail.remove = function(id, result){
      sql.query("DELETE FROM orderdetails WHERE orderdetailid = ?", [id],
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
module.exports=Orderdetail;