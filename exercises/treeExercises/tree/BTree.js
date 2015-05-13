(function(exports){
    
    function BTree(val){

        TreeNode = function(val, parent){
            this.val = val;
            this.left = null;
            this.right = null;
            this.parent = parent ? parent : null ;
        };

        TreeNode.prototype.val = function(v){
            if(v){
                return this.val = v;
            }
            return this.val;
        }

        this.root = new TreeNode(val);
        this.current = this.root;

    }
    exports.BTree = BTree;

    BTree.prototype.isRoot = function(){
        return this.root === this.current;
    }

    BTree.prototype.newLeft = function(val){
        if(this.current.left !== null){
            throw new Error("Can't add value to non-null tree node");
        }

        this.current.left = new TreeNode(val, this.current);
    }

    BTree.prototype.traverseNewLeft = function(val){
        this.newLeft(val);
        this.left();
    }

    BTree.prototype.newRight = function(val){
        if(this.current.right !== null){
            throw new Error("Can't add value to non-null tree node");
        }

        this.current.right = new TreeNode(val, this.current);
    }

    BTree.prototype.traverseNewRight = function(val){
        this.newRight(val);
        this.right();
    }

    BTree.prototype.traverseRoot = function(){
        this.current = this.root;
    }

    BTree.prototype.up = function(){
        if(this.isRoot()){
            return;
        }

        this.current = this.current.parent
    }

    BTree.prototype.left = function(){
        if(this.current.left === null){
            return null;
        }
        else{
            this.current = this.current.left;            
        }
    }

    BTree.prototype.right = function(){
        if(this.current.right === null){
            return null;
        }
        else{
            this.current = this.current.right;
        }
    }

    BTree.prototype.val = function(v){
        if(v){
            return this.current.val = v;
        }

        return this.current.val;
    }

    BTree.prototype.isLeaf = function(){
        return this.current.left === null && this.current.right === null;
    }

    BTree.prototype.depth = function(){

        var nodePointer = this.root;

        var depthHelper = function(nodePointer){
            if(nodePointer.left === null && nodePointer.right === null){
                return 1;
            }

            var leftDepth = nodePointer.left !== null ? depthHelper(nodePointer.left) : 0;
            var rightDepth = nodePointer.right !== null ? depthHelper(nodePointer.right) : 0;

            if(leftDepth > rightDepth){
                return 1 + leftDepth;
            }
            else{
                return 1 + rightDepth;
            }
        }     

        return depthHelper(nodePointer);
    }

    // search - searches tree to find passed value.  Takes argument object 'arg'
    //   arg.val - value to search for
    //   arg.method - breadth(default) || depth - type of search
    //   arg.returnNodesSearched - true || false (default) - testing option, returns number of nodes searched
    // returns result
    //   result.found - true if val is found
    //   result.nodesSearched - number of nodes searched if 'returnNodesSearched' === true
    BTree.prototype.search = function(args){
        
        if(typeof args.val === 'undefined'){
            throw Error('must pass search value');
        }
        var passedVal = args.val;
        var method = args.method || 'breadth';
        var returnNodesSearched = args.returnNodesSearched || false;

        var nodePointer = this.root;
        //it'd be more efficient to not count if 'returnNodesSearched' was false, but for testing sake,
        //  I'll compute it regardless
        var nodesSearched = 0;
        var result = {found:false};

        var depthSearch = function(nodePointer, val){
            nodesSearched++;
            if(nodePointer.val === val){
                return true;
            }
            else{
                return nodePointer.left ? depthSearch(nodePointer.left, val) : false || 
                       nodePointer.right ? depthSearch(nodePointer.right, val) : false;
            }
        }

        var breadthSearch = function(nodePointer, val){
            var tempNode = nodePointer;
            var queue = [tempNode];

            while(queue.length !== 0){
                nodesSearched++;
                tempNode = queue.pop(); 
    
                if(tempNode.val === val){
                    return true;
                }
                
                if(tempNode.left != null){
                    queue.unshift(tempNode.left);
                }
                if(tempNode.right != null){
                    queue.unshift(tempNode.right);
                }
            }

            return false;    
        }

        if(method === 'breadth'){
            result.found = breadthSearch(nodePointer, passedVal);
        }
        else{
            result.found = depthSearch(nodePointer, passedVal);            
        }

        if(returnNodesSearched){
            result.nodesSearched = nodesSearched;
        }
        console.log("-------",result)
        return result;
    }

})(this);