const Pug = require("../models/pug");

exports.getAddPug = (req, res, next) => {
  res.render('pugs-new', {
    pageTitle: 'Create Pug',
    path: './new'
  })
};

exports.postAddPug = (req, res, next) => {
  const pugParams = {
    "name": req.body.name,
    "age": req.body.age,
    "owner": req.body.owner
  };

  const pug = new Pug(pugParams)
  pug.save();
  console.log("*SNORT* bow-wow!", pug);
  res.redirect('/pugs');
}

exports.getPugs = (req, res, next) => {
  const pugs = Pug.all;
  res.render('pugs-index', {
    pageTitle: "Pug List", 
    pugs: pugs
  });
};