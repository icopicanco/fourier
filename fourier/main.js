var canvs = document.getElementById('canv');
var c = canvs.getContext('2d');
canvs.width = innerWidth;
canvs.height = innerHeight;
let pi = Math.PI
let wv ={
  x: [],
  y: []
}
let n = 0;
let l ={
  x:canvs.width/2,
  y:canvs.height/2
}

let t = 0
function draw(){
  let y=0
  let x=0
    let llen=0;
  background(0,0,0,c)
  c.strokeStyle = "white"
  c.beginPath();
  for(let i = 0;i<10;i++){
    let prevx=x+l.x;
    let prevy=y+l.y;
    n=i*2+1
    llen = 100*4 / (pi*n);
    x += llen * Math.cos( n * t)//+l.x
    y += llen * Math.sin( n * t)//+l.y
  line(prevx,prevy,x+l.x,y+l.y,c)
    ellipse(prevx,prevy,llen,c)
  console.log(x)

}
  wv.y.unshift(y)
//  wv.x.push(t*10)

  requestAnimationFrame(draw)
  t+=0.01


  for(let i = 0;i-1<wv.y.length;i++){
    line(l.x+150+i,wv.y[i]+l.y,l.x+150+i,wv.y[i+1]+l.y,c)

  }
  line(x+l.x,y+l.y,l.x+150,wv.y[0]+l.y,c)
  if(wv.y.length>500){
    wv.y.pop();
  }
}
draw()
