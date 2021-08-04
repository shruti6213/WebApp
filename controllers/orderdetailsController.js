
var Orderdetail = require('../dal/orderdetailsdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Orderdetail.getAllOrderdetail(function(err, orderdetail) {
    if (err)
      res.send(err);
    res.send(orderdetail);
  });
};



exports.insert = function(req, res) {
    var new_Orderdetail = new Orderdetail(req.body);
    console.log(new_Orderdetail.body);
   
     if(!new_Orderdetail.orderid || !new_Orderdetail.quantity){
        res.status(400).send({ error:true, message: 'Please provide Orderdetail/status' });
      }
     else{
      Orderdetail.createOrderdetail(new_Orderdetail, function(err, orderdetail) {
        if (err)
        res.send(err);
      res.json(orderdetail);
      });
    }
  };
  
  exports.getBy = function(req, res) {
    Orderdetail.getOrderdetailById(req.params.id, function(err, orderdetail) {
      if (err)
        res.send(err);
      res.json(orderdetail);
    });
  };
  
  exports.update = function(req, res) {
    Orderdetail.updateById(req.params.id, new Orderdetail(req.body), function(err, orderdetail) {
      if (err)
        res.send(err);
      res.json(orderdetail);
    });
  };
  
  exports.remove = function(req, res) {
    Orderdetail.remove( req.params.id, function(err, orderdetail) {
      if (err)
        res.send(err);
      res.json({ message: 'Orderdetail successfully deleted' });
    });
  };