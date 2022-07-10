const Pug = require("../models/pug");

// /pugs/new => GET
exports.getAddPug = (req, res, next) => {
  res.render('pugs-new', {
    pageTitle: 'Create Pug',
    path: './new'
  })
};

// /pugs/create => POST
exports.postAddPug = (req, res, next) => {
  // creating object containing our form data
  const pugParams = {
    "name": req.body.name,
    "age": req.body.age,
    "owner": req.body.owner
  };

  // initializing an instance of the Pug class
  const pug = new Pug(pugParams)
  // adding the instance to the Pug.all array
  pug.save();
  console.log("*SNORT* bow-wow!", pug);
  // redirecting to /pugs
  res.redirect('/pugs');
}

// /pugs => GET
exports.getPugs = (req, res, next) => {
  // setting a variable for our Pug.all array
  const pugs = Pug.all;
  res.render('pugs-index', {
    pageTitle: "Pug List", 
    // making our array available to the view
    pugs: pugs
  });
};

