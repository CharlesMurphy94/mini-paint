$(document).ready(function(){
pixel = $(".box");

pixel.on('click',function(){
  $(this).addClass(color);

})

pixel.on('dblclick',function(){
  $(this).removeClass(color)
})

var colors = 'red blue green yellow white';

$('#reset').on('click',function(){
  $('.box').removeClass(colors)
})

var color = 'white';

$('#red').on('click',function(){
  color='red';
})
$('#green').on('click',function(){
  color='green';
})
$('#blue').on('click',function(){
  color='blue';
})
$('#yellow').on('click',function(){
  color='yellow';
})
$('#white').on('click',function(){
  color='white';
})


})
