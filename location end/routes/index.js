var express = require('express');
var router = express.Router();
const fs = require('fs');


const data = fs.readFileSync('inscription.json');
let json = JSON.parse(data);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/sing', function(req, res, next) {
  res.render('sing',{json});
  
});
router.get('/res/:nom', function(req, res, next) {
  let nom = req.params.nom;
  res.render('res',{js,nom});
});
router.get('/res2/:nom/:id', function(req, res, next) {
  let idm= req.params.id;
  let name = req.params.nom;
  res.render('res2',{js,idm,name});
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/sing', function(req, res, next){
  let {nom,email,password} = req.body;
  let ne = {id:json.length+1,
            nom,
            email,
            password,
  };
  json.push(ne);
  const data =JSON.stringify(json,null,5);
  fs.writeFileSync('inscription.json', data, 'utf-8');
   res.redirect('/login');
   
});

// lll 
const  dataa = fs.readFileSync('products.json');
let js = JSON.parse(dataa);


router.post('/res', (req, res) => {
  
     
  const { image, name, price } = req.body;
  const { hide } = req.body;

  
  let newprod = {
    id:js.length + 1,
    image,
    name,
    price
    
  };


  js.push(newprod);

     

  // saving the array in a file
  const dataaa = JSON.stringify(js,null,5);
  fs.writeFileSync('products.json', dataaa, 'utf-8');
    

  res.redirect('/res/'+hide);
});

router.get('/res/:id/:nom', (req, res) => {
  js = js.filter(d => d.id != req.params.id);
  const  hide = req.params.nom;

  // saving data
  const data = JSON.stringify(js);
  fs.writeFileSync('products.json', data, 'utf-8');

  res.redirect('/res/'+hide);
  });


  // lllll 
  router.post('/up', (req, res) => {
    console.log(req.body)
    const { id } = req.body;
    const { hide } = req.body;
    const { image,name,price } = req.body;
  
    js.forEach((product, i) => {
      if (product.id == id) {
        
        product.image = image;
         product.name = name;
          product.price = price;
      }
    });
    const data = JSON.stringify(js,null,5);
    fs.writeFileSync('products.json', data, 'utf-8');
    
    res.redirect('/res/'+hide);
  
  });
// start res2

const rese = fs.readFileSync('reservation.json');
let resjson = JSON.parse(rese);
 
router.post('/res2', (req, res) => {
  
     
  const { nom, email, tele, naissance,nombreDePersone,dure ,vin ,idclien, } = req.body;
  // const { hide } = req.body;

  
  let newres = {
    nom,
    email,
    tele,
    naissance,
    nombreDePersone,
    dure,
    vin,
    idclien
    
  };


  resjson.push(newres);

     

  // saving the array in a file
  const resjso = JSON.stringify(resjson,null,5);
  fs.writeFileSync('reservation.json', resjso, 'utf-8');
    

  res.redirect('/');
});

module.exports = router;
