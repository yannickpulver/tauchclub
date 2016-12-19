/**
 * Created by yannickpulver on 19.12.16.
 */
var sand = [];
var gravity;
var doDraw = false;
var doClear = true;

function setup() {
    var canvas = createCanvas(window.innerWidth, 400);
    canvas.parent('sand-holder');
    stroke(242,226,161);
    strokeWeight(4);
    gravity = createVector(0, 0.2);

    for (var i = 0; i < 50; i++)
    {
        sand.push(new Sand(random(width), height))
    }
}

function draw() {
    if (this.doDraw && this.doClear) {
        this.doClear = false;
        this.sand = [];
        for (var i = 0; i < 50; i++)
        {
            sand.push(new Sand(random(width), height))
        }
    }
    if (this.doDraw) {
        clear();
        sand.forEach(sand => {
            sand.applyForce(gravity);
            sand.update();
            sand.show();
        });
    }
}


function Sand(x,y) {
    this.pos = createVector(x,y);
    this.acc = createVector(0,0);
    this.angle = createVector(random(-3,3), random(-3,3));
    this.vel = createVector(0,random(-4,-11));

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.pos.add(this.angle);
        this.acc.mult(0);
    }

    this.show = function() {
        point(this.pos.x, this.pos.y);
    }
}