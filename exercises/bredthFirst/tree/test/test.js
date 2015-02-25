var assert = require("assert");
var should = require("should");
var Tree;

describe('Tree', function(){

  describe('#require', function(){
    ('constructor should not throw an exception', function(){
      Tree = require("Tree.js");
    }).should.not.throw();
  })

  // describe('#root', function(){
  //   it('constructor should not throw an exception', function(){
  //     var t = new Tree();
  //   }).should.not.throw();
  // })

})

