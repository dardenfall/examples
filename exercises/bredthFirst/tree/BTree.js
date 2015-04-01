(function(exports){
    
    function BTree(val){

        TreeNode = function(val, parent){
            this.val = val;
            this.left = null;
            this.right = null;
            this.parent = parent ? parent : null ;
        };

        TreeNode.prototype.left = function(){
            return this.left;
        }

        TreeNode.prototype.right = function(){
            return this.right;
        }

        TreeNode.prototype.parent = function(){
            return this.parent;
        }

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
        this.current = this.current.left;
    }

    BTree.prototype.right = function(){
        this.current = this.current.right;
    }

    BTree.prototype.val = function(v){
        if(v){
            return this.current.val = v;
        }

        return this.current.val;
    }

    BTree.prototype.depth = function(){
        
    }

})(this);