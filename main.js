let n
init()
var timerId = setTimer()

/*解决页面切换后出现的bug*/
document.addEventListener('visibilitychange',function(e){
  if(document.hidden){
    clearInterval(timerId)
  }else{
    timerId = setTimer()
  }
})
function init(){
  n = 1
  $(`.picker > div:nth-child(1)`).addClass('grey')
  $('.images > img:nth-child(' + n + ')').addClass('current').siblings().addClass('enter')
}
function makeEnter($node){
  $node.removeClass('leave current').addClass('enter')
}
function makeLeave($node){
  $node.removeClass('current enter').addClass('leave')
  return $node
}
function makeCurrent($node){
  $node.removeClass('enter leave').addClass('current')
}
function makeGrey($node){
  $node.addClass('grey').siblings().removeClass('grey')
}
function getImageNode(n){
  return $(`.images > img:nth-child(${calN(n)})`)
}
function getDivNode(n){
  return $(`.picker > div:nth-child(${calN(n)})`)
}
function calN(n){
      if(n > 4){
        n = n%4 
         if(n === 0){
           n = 4
         }
      }     
      return n
}
function setTimer(){
  return setInterval(()=>{
    makeLeave($(getImageNode(n)))
     .one('transitionend',(e)=>{
     makeEnter($(e.currentTarget))
     })
     makeGrey($((getDivNode(n+1))))
     makeCurrent(getImageNode(n+1))
     n += 1
},2000)
}