//to run > cd /Users/ascavone/Dropbox/projects/interviewPrep/prep/exercises/breadthFirst/tree
// > mocha --reporter progress
// currently 3 passing, 1 failing

var assert = require("assert");
var should = require("should");
var BTree = require("../../BTree.js");
describe('BTree', function(){

  describe('#require', function(){
    ('require should not throw an exception', function(){
      BTree = require("../../BTree.js");
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

  describe('#root', function(){
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

  describe('#deep', function(){
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

  describe('#depth1', function(){
    var t = new BTree.BTree(1);

    it('depth test', function(){
      t.traverseNewLeft(2);
      t.newRight(3);
      t.traverseNewLeft(4);
      t.traverseNewLeft(5);
      console.log("depth", t.depth());
      if(t.depth() !== 4){throw Error()}
    }).should.not.throw();
  });

  describe('#depth2', function(){
    var t = new BTree.BTree(1);

    it('depth test', function(){
      t.traverseNewLeft(2);
      t.newRight(3);
      t.traverseNewLeft(4);
      t.traverseNewLeft(5);
      if(t.depth() !== 4){throw Error()}
    }).should.not.throw();
  });

  describe('#is leaf', function(){
    var t = new BTree.BTree(1);

    it('leaf should work', function(){
      if(!t.isLeaf()){throw Error()}
      t.traverseNewRight(2);
      if(!t.isLeaf()){throw Error()}
      t.up();
      if(t.isLeaf()){throw Error()}    
    }).should.not.throw(); 
  });

  describe('#breadth first search', function(){
    var t = new BTree.BTree(1);

    it('should not find value', function(){
      t.traverseNewRight(2);
      t.traverseNewRight(3);
      var searchResult = t.search({val:20, method:"breadth"}); 
      if(searchResult.found){throw Error()}

    }).should.not.throw();
  });

  describe('#breadth first search2', function(){
    var t = new BTree.BTree(1);

    it('breadth test', function(){
      t.traverseNewRight(20);
      t.traverseNewRight(4);
      t.up();
      t.up();
      t.traverseNewLeft(2);
      t.newRight(3);
      t.traverseNewLeft(4);
      t.traverseNewLeft(20);
      var searchResult = t.search({val:20, method:"breadth", returnNodesSearched:true}); 
      console.log("search-wide should only take 3 operations");
      if(!searchResult.found){throw Error()}
      if(searchResult.nodesSearched !== 3){throw Error()}
      searchResult = t.search({val:4, method:"breadth", returnNodesSearched:true});
      console.log(searchResult)
      if(!searchResult.found){throw Error()}
      if(searchResult.nodesSearched !== 2){throw Error()}      
    }).should.not.throw();
  });

  describe('#isMirror', function(){
    var t = new BTree.BTree(1);
    var t2 = new BTree.BTree(1);

    it('root check', function(){
      if(!t.isMirror(t2)){throw Error()}
    }).should.not.throw()
  });

})

