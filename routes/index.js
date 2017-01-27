var express = require('express');
var router = express.Router();
var db = require('../models')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('introduction');
});

router.post('/addUser', function(req, res, next) {
  db.Person.create({name:req.body.username,status:"player"}).then(function(){
    db.Person.findOne({where:{name:req.body.username,status:"player"}}).then(function(x){
      req.session.user = x.id
      req.session.play = 1
      res.redirect('/firstQuestion');
    })
  })
});

router.post('/addAns1', function(req, res, next){
  req.session.play = 2
  db.Answer.create({PersonId:req.session.user,AttributeId:req.body.ans}).then(function(){
    res.redirect('/secondQuestion');
  })
});

router.post('/addAns2', function(req, res, next){
  req.session.play = 3
  db.Answer.create({PersonId:req.session.user,AttributeId:req.body.ans}).then(function(){
    res.redirect('/thirdQuestion');
  })
});

router.post('/addAns3', function(req, res, next){
  req.session.play = 4
  db.Answer.create({PersonId:req.session.user,AttributeId:req.body.ans}).then(function(){
    res.redirect('/fourthQuestion');
  })
});

router.post('/addAns4', function(req, res, next){
  req.session.play = 5
  db.Answer.create({PersonId:req.session.user,AttributeId:req.body.ans}).then(function(){
    res.redirect('/fifthQuestion');
  })
});

router.post('/addAns5', function(req, res, next){
  req.session.play = 6
  db.Answer.create({PersonId:req.session.user,AttributeId:req.body.ans}).then(function(){
    res.redirect('/sixthQuestion');
  })
});

router.post('/addAns6', function(req, res, next){
  req.session.play = 7
  db.Answer.create({PersonId:req.session.user,AttributeId:req.body.ans}).then(function(){
    res.redirect('/seventhQuestion');
  })
});

router.post('/addAns7', function(req, res, next){
  req.session.play = 8
  db.Answer.create({PersonId:req.session.user,AttributeId:req.body.ans}).then(function(){
    res.redirect('/answers')
  })
});

router.get('/firstQuestion', function(req, res, next) {
  if(req.session.play===1){
    res.render('pertanyaanpertama');
  }
  else{
    res.redirect('/')
  }
});

router.get('/secondQuestion', function(req, res, next) {
  if(req.session.play===2){
    res.render('pertanyaankedua');
  }
  else{
    res.redirect('/')
  }
});

router.get('/thirdQuestion', function(req, res, next) {
if(req.session.play===3){
  res.render('pertanyaanketiga');
}
else{
  res.redirect('/')
}

});

router.get('/fourthQuestion', function(req, res, next) {
  if(req.session.play===4){
    res.render('pertanyaankeempat');
  }
  else{
    res.redirect('/')
  }

});

router.get('/fifthQuestion', function(req, res, next) {
  if(req.session.play===5){
    res.render('pertanyaankelima');
  }
  else{
    res.redirect('/')
  }

});
router.get('/sixthQuestion', function(req, res, next) {
  if(req.session.play===6){
    res.render('pertanyaankeenam');
  }
  else{
    res.redirect('/')
  }


});
router.get('/seventhQuestion', function(req, res, next) {
  if(req.session.play===7){
    res.render('pertanyaanketujuh');
  }
  else{
    res.redirect('/')
  }
});

router.get('/answers', function(req, res, next) {
  if(req.session.play===8){
    let cups = []
    db.Answer.findAll({where:{PersonId:req.session.user}}).then(function(x){
      x.forEach(function(y){
        cups.push(y.AttributeId)
      })

        db.PersonAttribute.find({
          where:{
            AttributeId:cups
          },
          group:['PersonId'],
          having:['COUNT(AttributeId) >=7']
        }).then(function(z){

          db.Person.findById(z.PersonId).then(function(result){
            req.session.destroy();
            
            res.render('answer',{answer:result});
          })
          // let anz =[]
          // z.forEach(function(peop){
          //   anz.push(peop)
          // })


        })

    })
  }
  else{
    res.redirect('/')
  }

});



module.exports = router;
