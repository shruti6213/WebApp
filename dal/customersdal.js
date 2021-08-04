var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Customer = function(Customer){

    //Constructor
    this.customerid=Customer.id;
    this.firstname=Customer.firstname;
    this.lastname = Customer.lastname;
    this.email = Customer.email ;
    this.contactnumber = Customer.contactnumber;
};


Customer.getAllCustomers= function (result) {
    console.log("Invoking dal getall Customers");
    
      sql.query("Select * from customers", function (err, res) {
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


Customer.createCustomer = function (newCustomer, result) {  
    console.log("New customer to be added ");
    console.log(newCustomer);

    sql.query("INSERT INTO customers set ?", newCustomer, function (err, res) {
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





Customer.getCustomerById = function (CustomerId, result) {
    sql.query("Select * from customers where customerid = ? ", CustomerId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};



Customer.updateById = function(id, Customer, result){

    sql.query("UPDATE customers SET firstname = ? ,lastname = ? ,email =? ,contactnumber = ? WHERE  customerid= ?", [Customer.firstname,Customer.lastname,Customer.email,Customer.contactnumber, id], 
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



  Customer.remove = function(id, result){
    sql.query("DELETE FROM customers WHERE customerid = ?", [id],
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


module.exports=Customer;