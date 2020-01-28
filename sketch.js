
function draw() {
  background(1800);
}

var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums = 800;
var noiseScale = 1500;

function setup(){
	createCanvas(1800, 8000);
	background(0, 0, 0);
	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, .1),random(0, .1));
		particles_b[i] = new Particle(random(0, .1),random(0, .1));
		particles_c[i] = new Particle(random(0, .1),random(0, .1));
	}
}

function draw(){
	noStroke();
	smooth();
		for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,1);
		var alpha = map(i,0,nums,0,120);

		fill(166,38,54,alpha);
		particles_a[i].move();
		particles_a[i].display(radius);
		particles_a[i].checkEdge();

		fill(107,107,107,alpha);
		particles_b[i].move();
		particles_b[i].display(radius);
		particles_b[i].checkEdge();

		fill(99,0,0,alpha);
		particles_c[i].move();
		particles_c[i].display(radius);
		particles_c[i].checkEdge();
	}  
}


function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(180, 80);
	this.pos = createVector(x, y);
	this.speed = 1.9;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(20, width);
			this.pos.y = random(50, height);
		}
	}

	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
	}
}