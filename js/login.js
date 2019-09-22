$(":text").blur(function(){
  var $txt=$(this);
var $span=$("#span1");
var value=$txt.val();
if(value.length>=3&&value.length<=9){
    $span.html(`<img class="w-1" src="img/login/zc.png" alt="">`)
}else{
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">用户名必须在3~12之间`)
}
})


$(":password").blur(function(){
  var $txt=$(this);
var $span=$("#span2");
var value=$txt.val();
if(value.length>=3&&value.length<=9){
    $span.html(`<img class="w-1" src="img/login/zc.png" alt="">`)
}else{
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">密码必须在6~12之间`)
}
})