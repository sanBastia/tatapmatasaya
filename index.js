const db = require('./models')

function addPersonAttr(prsId,attrId){
  db.Attribute.findById(attrId).then(function(attr){
    db.Person.findById(prsId).then(function(prs){
      prs.addAttributes(attr)
    })
  })
}

// function findPeople(attrId){
//   db.Attribute.findById(attrId).then(function(attr){
//     attr.getPeople().then(function(peop){
//       peop.forEach(function(pers){
//         return pers.name
//       })
//     })
//   })
// }
//
// function findAttr(pId){
//   db.Person.findById(pId).then(function(p){
//     p.getAttributes().then(function(attr){
//       attr.forEach(function(a){
//         return a.name
//       })
//     })
//   })
// }

//db.Person.bulkCreate([{name:'Rubi',status:'Char',photo:''},{name:'Adit',status:'Char',photo:''},{name:'Haidar',status:'Char',photo:''},{name:'Adhy',status:'Char',photo:''},{name:'Akbar',status:'Char',photo:''},{name:'Riza',status:'Char',photo:''}])
// ,{name:'Rubi',status:'Char'},{name:'Adit',status:'Char'},{name:'Haidar',status:'Char'}

//db.Attribute.bulkCreate([{name:'male'},{name:'female'},{name:'glass'},{name:'nonGlass'},{name:'Jakarta'},{name:'nonJakarta'},{name:'experience'},{name:'unexperience'},{name:'old'},{name:'young'},{name:'hat'},{name:'noHat'},{name:'binus'},{name:'nonBinus'}])

// addPersonAttr(43,1);
// addPersonAttr(43,4);
// addPersonAttr(43,6);
// addPersonAttr(43,8);
// addPersonAttr(43,9);
// addPersonAttr(43,12);
// addPersonAttr(43,14);
// addPersonAttr(44,1);
// addPersonAttr(44,3);
// addPersonAttr(44,6);
// addPersonAttr(44,8);
// addPersonAttr(44,9);
// addPersonAttr(44,12);
// addPersonAttr(44,14);
// addPersonAttr(45,1);
// addPersonAttr(45,3);
// addPersonAttr(45,6);
// addPersonAttr(45,8);
// addPersonAttr(45,10);
// addPersonAttr(45,11);
// addPersonAttr(45,14);
// addPersonAttr(46,1);
// addPersonAttr(46,3);
// addPersonAttr(46,6);
// addPersonAttr(46,8);
// addPersonAttr(46,10);
// addPersonAttr(46,12);
// addPersonAttr(46,13);
// addPersonAttr(47,1);
// addPersonAttr(47,3);
// addPersonAttr(47,6);
// addPersonAttr(47,8);
// addPersonAttr(47,10);
// addPersonAttr(47,12);
// addPersonAttr(47,14);
// addPersonAttr(48,1);
// addPersonAttr(48,4);
// addPersonAttr(48,5);
// addPersonAttr(48,7);
// addPersonAttr(48,9);
// addPersonAttr(48,12);
// addPersonAttr(48,13);
//
// db.Person.findById(43).then(function(d){
//   d.update({photo:'prof_ruby_mirrored.jpeg'})
// })
// db.Person.findById(44).then(function(d){
//   d.update({photo:'prof_adhit.JPG'})
// })
// db.Person.findById(45).then(function(d){
//   d.update({photo:'prof_haidar_mirrored.jpeg'})
// })
// db.Person.findById(46).then(function(d){
//   d.update({photo:'prof_adhy.JPG'})
// })
// db.Person.findById(47).then(function(d){
//   d.update({photo:'prof_akbar.JPG'})
// })
// db.Person.findById(48).then(function(d){
//   d.update({photo:'prof_riza_mirrored.jpeg'})
// })
