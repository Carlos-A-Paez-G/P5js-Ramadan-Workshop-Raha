var s1 = p => {
    p.setup = function() {
        p.createCanvas(400,400);
    }

    p.draw = function() {
        p.background(220);
    }
}

var sketch1 = new p5(s1, "s1");