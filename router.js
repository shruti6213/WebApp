

// API routes for Controller callback functions
//a Separate responsibility  for navigation

var taskController=require("./controllers/taskscontroller");
var flowerController=require("./controllers/flowerscontroller");
var customerController=require("./controllers/customerscontroller");
var orderController=require("./controllers/orderscontroller");
var orderdetailsController=require("./controllers/orderdetailsController");
var customersorderController=require("./controllers/customersordercontroller");
//get the app object of express from server.js

module.exports=function(app){
    //Tasks  HTTP request Mapping
    //http://localhost:9898/api/tasks

    app.route("/api/tasks")
    .get(taskController.getAll)             //http://localhost:9898/api/tasks      GET    
    .post(taskController.insert);           //http://localhost:9898/api/tasks      POST

    app.route("/api/tasks/:id")
      .get(taskController.getBy)            //http://localhost:9898/api/tasks/:id    GET
      .put(taskController.update)           //http://localhost:9898/api/tasks/:id    PUT
      .delete(taskController.remove);       //http://localhost:9898/api/tasks/:id   DELETE

    //Flowers HTTP request Mapping    
    app.route("/api/flowers")              
    .get(flowerController.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(flowerController.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/flowers/:id')
    .get(flowerController.getBy)          
    .put(flowerController.update)        
    .delete(flowerController.remove);     
    
    //Customers HTTP reuest Mapping
    app.route('/api/customers')
    .get(customerController.getAll)
    .post(customerController.insert);


    app.route('/api/customers/:id')
    .get(customerController.getBy)
    .put(customerController.update)
    .delete(customerController.remove);


    //Orders HTTP request Mapping
    app.route('/api/orders/')
    .get(orderController.getAll)
    .post(orderController.insert);


    app.route('/api/orders/:id')
    .put(orderController.update)
    .get(orderController.getBy)
    .delete(orderController.remove);

  

    //Orderdetails HTTP request Mapping    
     app.route('/api/orderdetails/')
     .get(orderdetailsController.getAll)
     .post(orderdetailsController.insert);

     app.route('/api/orderdetails/:id')
     .put(orderdetailsController.update)
     .get(orderdetailsController.getBy)
     .delete(orderdetailsController.remove);
     


    app.route('/api/customersorder')
    .get(customersorderController.getAll);


    app.route('/api/customersorder/:id')
    .get(customersorderController.getBy);
     //Orders HTTP request Mapping 
    //OrderItems HTTP request Mapping 
    //ShopingCart HTTP request Mapping 
    //Payments HTTP request Mapping 
};


  //Express Routing is a mechanism to mapping incomming HTTP requests with appropriate controller functions
