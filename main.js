$('.images > img:nth-child(1)').addClass('current')
$('.picker > div:nth-child(1)').addClass('grey')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
let n = 1
setInterval(()=>{
  $(`.images > img:nth-child(${calN(n)})`).removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $(`.picker > div:nth-child(${calN(n+1)})`).addClass('grey').siblings().removeClass('grey')
  $(`.images > img:nth-child(${calN(n+1)})`).removeClass('enter').addClass('current')
  n += 1
},3000)
function calN(n){
  if(n>4){
    n = n%4
    if (n===0){
      n =4
    }
  } // n = 1 2 3
  return n
}