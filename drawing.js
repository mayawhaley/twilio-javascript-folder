//drawing.js

var drawShape = function (x, y, radius) {
    background(0, 0, 0); // black

    fill(78, 237, 120); // green
    ellipse(x, y, radius, radius); // head

    fill(0, 0, 0);
    ellipse(x - 20, y, 10, 30); // eyes
    ellipse(x + 20, y, 10, 30);

    ellipse(width / 2, height - 150, 50, 3); // mouth

};

// using random function to randomize size of head
drawShape(width / 2, height / 2, Math.random() * 300);