// sets background color
background(35, 158, 154);

// function that creates 
var drawShape = function(x, y, count) {
    
    // draws line
    line(x, y, x+x, y);
    
    // divides count by 2 
    var newCount = count/2; // count is used to keep program running
    
    // create new x and y so that each line will be different
    var newX = x-10;
    var newY = y-10;
    
    // program runs as long as newCount is greater or equal to 2
    if (newCount >= 2) {
        drawShape(newX, newY, newCount);
    }
};
