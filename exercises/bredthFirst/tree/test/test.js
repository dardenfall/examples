//to run > cd /Users/ascavone/Dropbox/projects/interviewPrep/prep/exercises/bredthFirst/tree
// > mocha --reporter progress
// currently 3 passing, 1 failing

var assert = require("assert");
var should = require("should");
var BTree = require("../BTree.js");
describe('BTree', function(){

  describe('#require', function(){
    ('require should not throw an exception', function(){
      BTree = require("../BTree.js");
    }).should.not.throw();
  });

  describe('#constructor', function(){
    it('constructor should not throw an exception', function(){
//      BTree = require("../BTree.js");
      new BTree.BTree();
    }).should.not.throw();
  });

  describe('#left', function(){
    var t = new BTree.BTree(1);

    it('added left node, should be equal', function(){
      t.newLeft(2);

      t.left();
      if(t.val() !== 2){throw Error()}
    }).should.not.throw();
  });

  describe('#right', function(){
    var t = new BTree.BTree(1);

    it('added right node, should be equal', function(){
      t.newRight(2);

      t.right();
      if(t.val() !== 2){throw Error()}
    }).should.not.throw();
  });

  describe('#right', function(){
    var t = new BTree.BTree(1);

    it('root should work', function(){
      if(!t.isRoot()){throw Error()}
      t.newRight(2);

      t.right();
      if(t.isRoot()){throw Error()}
    }).should.not.throw();
  });

  describe('#left right', function(){
    var t = new BTree.BTree(1);

    it('added left & right node, should be equal', function(){
      t.newLeft(2);
      t.newRight(3);
      t.left();
      if(t.val() !== 2){throw Error()}
      t.up();  
      t.right();
      if(t.val() !== 3){throw Error()}
    }).should.not.throw();
  });

  describe('#deeper tree tests', function(){
    var i = 1;
    var t = new BTree.BTree(1);

    it('added left & right node, should be equal', function(){
      t.traverseNewLeft(2);
      t.newRight(3);
      t.traverseNewLeft(4);
      t.traverseNewLeft(5);
      t.up();  
      if(t.val() !== 4){throw Error()}
      t.up();  
      if(t.val() !== 2){throw Error()}
      t.right();  
      if(t.val() !== 3){throw Error()}
    }).should.not.throw();
  });

  describe('#depth tree test', function(){
    var i = 1;
    var t = new BTree.BTree(1);

    it('depth test', function(){
      t.traverseNewLeft(2);
      t.newRight(3);
      t.traverseNewLeft(4);
      t.traverseNewLeft(5);
      if(t.depth() !== 3){throw Error()}
    }).should.not.throw();
  });
})

