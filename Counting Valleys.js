function countingValleys(steps, path) {
    // Write your code here
    let counter=0 , result=0;
    for (let i =0; i<steps; i++) {
        if(path[i]=="U") 
         counter++
        
        
        if (path[i] == "D")
         counter--;
         
        if(counter==0 && path[i] == "U") 
            result++;


    }
    return result;
}
