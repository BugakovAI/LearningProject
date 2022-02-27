    "use strict";
    
    function pow(x, n) {
        let result = 1;
        
        for (let i = 0; i < n; i++) {
            result = result*x;
        }
        
        return result;
    }

    console.log(pow(5, 0));
    console.log(pow(2,2));