// Discrete fourier transform
let x=[];
let y = [];
let fourierY;
let fourierX;
let time = 0;
path = [];

function setup() {

  createCanvas(1600, 900);
    //  const skip= -5;
  // for (let i = 0; i < drawing.length; i+=skip) {

  //   x.push(drawing[i].x);
  //   y.push(drawing[i].y);
  
  
  for(let i=0;i<dev.length;i++){
    x.push(dev[i].x);
    y.push(dev[i].y);  

  }

  
  
    
  
    
    //   angle=map(i,0,100,0,TWO_PI)
    // x[i] = 100*cos(angle);
    // y[i] = 100*sin(angle);
    
  

  

  fourierY = dft(y);
  fourierX = dft(x);
  console.log(fourierY);
}
function epicCycle(x,y,rotation,fourier){
    for (let i = 0; i < fourier.length; i++) {
        let prevx = x;
        let prevy = y;
    
        let freq = fourier[i].freq;
        let radius = fourier[i].amp;
        let phase = fourier[i].phase;
        x += radius * cos(freq * time + phase + rotation);
        y += radius * sin(freq * time + phase + rotation);
    
        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        stroke(255);
        line(prevx, prevy, x, y);
      }
      return createVector(x,y);
}

function draw() {
  background(22, 34, 56);
  
    let vx=epicCycle(500,100,0,fourierX);
    let vy=epicCycle(200,300,HALF_PI,fourierY);
    let v= createVector(vx.x,vy.y);

  path.unshift(v);
  line(vx.x,vx.y,v.x,v.y);
  line(vy.x,vy.y,v.x,v.y);

//   translate(100, 0);
//   line(x - 100, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();
  const dt = TWO_PI / fourierX.length;
  
  time += dt;

  if (path.length > 200) {
    path.pop();
  }
}
