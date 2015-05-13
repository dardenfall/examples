var assert = require("assert");
var should = require("should");
//var BTree = require("./BTree.js");

describe('BTree', function(){

  describe('#require', function(){
    ('require should not throw an exception', function(){
      BTree = require("./BTree.js");
    }).should.not.throw();
  });

  describe('#constructor', function(){
    it('constructor should not throw an exception', function(){
//      BTree = require("../BTree.js");
      new BTree.BTree();
    }).should.not.throw();
  });

//   describe('#root', function(){
// //    BTree = require("../BTree.js");
// //    var t = new BTree(1);

//     it('constructor should not throw an exception', function(){
//       t.newLeft(2);

//       t.left();
//       if(t.val() !== 2){throw Error()}
//     }).should.not.throw();
//   });


})

