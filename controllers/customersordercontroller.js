
var Customerorders = require('../dal/customerorderdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Customerorders.getAllCustomerorders(function(err,customerorder) {
    if (err)
      res.send(err);
    res.send(customerorder);
  });
};


exports.getBy = function(req, res) {
    Customerorders.getCustomerordersById(req.params.id, function(err, customerorder) {
      if (err)
        res.send(err);
      res.json(customerorder);
    });
  };