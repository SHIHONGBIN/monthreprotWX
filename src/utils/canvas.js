function canvasHanle(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d')
  var windowObj = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  canvas.width = windowObj.width ;
  canvas.height = windowObj.height;
  canvas.style.zIndex = -1
  canvas.style.position = 'absolute';
  canvas.style.left = '0';
  canvas.style.top = '0';

  var objSanJiao = []
  var maxSanjiao = 16

  for(var i = 0; i < maxSanjiao; i++){
    objSanJiao.push(
      {
        left:0,
        top:0,
        line:0,
        opacity:0,
        fillOrStroke:'',
        scale:0
    })
  }

  var maxWidthHeight = {
    width: windowObj.width,
    height: windowObj.height
  }

  // canvas.style.background = '#000'

  function objInit(){
    objSanJiao.map((item, index)=>{
      let line = Math.round(Math.random()*40) + 20
      let startP = {
        left:eval(Math.round(Math.random()*maxWidthHeight.width)),
        top:eval(Math.round(Math.random()*maxWidthHeight.height)),
      }
      let fillOrStroke = Math.random()>.5?true:false
      objSanJiao[index] = {
        left:startP.left,
        top:startP.top,
        line: line,
        opacity:0,
        fillOrStroke:fillOrStroke
      }
    })
  }


  var time = 0

  function drow(){
    time++ 
    context.clearRect(0,0,windowObj.width,windowObj.height)
    objSanJiao.map((item, index)=>{
      context.globalAlpha=item.opacity
        if(time<50){
          item.opacity+=.01
          item.opacity = item.opacity>1?1:item.opacity
          item.left += (50-time)/50
        }else if(time>=50 &&time<100){
          // item.scale+=.05
          // item.scale = item.scale>=1.25?1.25:item.scale
        }else if(time >= 100){
          item.left += index/2
          item.opacity-=.03
          item.opacity = item.opacity<0?0:item.opacity
        }else{
          return 
        }
      context.save()
      if(item.fillOrStroke){
        context.beginPath();
        context.strokeStyle = '#01ffff'
        context.lineWidth = 1
        context.scale(item.scale, item.scale)
        // context.translate(eval(item.left - (eval(item.left*item.scale + Math.cos(30* Math.PI/180)*item.line*item.scale)-eval(item.left + Math.cos(30* Math.PI/180)*item.line))/2), eval(item.top - item.line*(item.scale-1)/2));
        context.moveTo(item.left, item.top)
        context.lineTo(eval(item.left + Math.cos(30* Math.PI/180)*item.line),eval(item.top + Math.sin(30* Math.PI/180)*item.line))
        context.lineTo(item.left, eval(item.top+item.line))
        context.closePath();
        context.stroke()
      }else{
        context.beginPath();
        context.fillStyle = '#01ffff'
        context.lineWidth = 1
        context.scale(item.scale, item.scale)
        // context.translate(eval(item.left - (eval(item.left + Math.cos(30* Math.PI/180)*item.line)-item.left)/2), eval(item.top - item.line*(item.scale-1)/2));
        context.moveTo(item.left, item.top)
        context.lineTo(eval(item.left + Math.cos(30* Math.PI/180)*item.line),eval(item.top + Math.sin(30* Math.PI/180)*item.line))
        context.lineTo(item.left, eval(item.top+item.line))
        context.closePath();
        context.fill()
      }
      context.restore()
    })

    if(time >190){
        window.cancelAnimationFrame(drow)
      }else{
        window.requestAnimationFrame(drow)
      }
    }
  

  function animateFn(){
    time = 0
    objInit()
    drow();
    setTimeout(animateFn, 4000)
  }
  animateFn()
}



module.exports = {
  canvsHandle: canvasHanle
}
