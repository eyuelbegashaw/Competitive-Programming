class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = [];
    }
    
    push(num) {
       if (this.stack.length == 0)  
           this.minStack.push(num);
       else 
           this.minStack.push( Math.min(this.minStack[this.minStack.length-1] , num) );    
        
        this.stack.push(num);
    }
    
    pop() {
           this.minStack.pop(); 
           return this.stack.pop() ; 
    }
    
     top() {
           return this.stack[this.stack.length-1];
     }
    
     getMin() {
           return this.minStack[this.minStack.length - 1];
    }
}
