function line(x,y,x1,y1,ct){
  ct.beginPath()
  ct.moveTo(x,y)
  ct.lineTo(x1,y1);
  ct.stroke();
  ct.closePath();
}
function background(r,g,b,c){
    c.beginPath()
    c.save()
    c.fillStyle = `rgb(${r},${g},${b})`;
    c.rect(0,0,canvs.width,canvs.height)
    c.fill()
    c.restore();
    c.closePath();
}
function ellipse(x,y,r,ct){
  ct.beginPath()
  ct.arc(x, y, r, 0, 2 * Math.PI);
  ct.stroke();
  ct.closePath();
}
function cbro(number){

  let cpcub=0;
  let percub = [1,8,27,64,125,216,343,512,729,1000,1331,1728,2197,2744,3375,4096,4913]
  let odt=99999

  for(let i = 0;i<percub.length;i++){
    let dt;
      if(number<percub){
        dt=percub[i]-number
      }else{
        dt=number-percub[i]
      }

      if(dt*dt<=odt*odt){
        odt=dt
        cpcub=percub[i];

      }

  }
  let cb = Math.sqrt((number+cpcub)/(2*Math.cbrt(cpcub)))
  let diff = cb-Math.cbrt(number);
  console.log("cuberoot of",number,"=",cb);
  console.log("difference of: ",diff);
  return diff;
}
function karat(nmtp,nmtpe){
let p = Array.from(String(nmtp),Number)
let y = Array.from(String(nmtpe),Number)
let a =p[0]*y[0]
let b =p[1]*y[1]
let c =(p[1]+p[0])*(y[1]+y[0])
let d =c-(a+b)
console.log(a*100+d*10+b)
console.log(p)
return a*100+d*10+b;
}
