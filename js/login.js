

$("#uname").blur(function(){
  var $txt=$(this);
var $span=$("#span1");
var value=$txt.val();
if(value==""){
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">用户名不能为空`)
}else if(value.length>=3&&value.length<=9){
    $span.html(`<img class="w-1" src="img/login/zc.png" alt="">`)
}else{
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">用户名必须在3~12之间`)
}
})


$("#confirm1").blur(function(){
  var $txt=$(this);
var $span=$("#span2");
var value=$txt.val();
if(value==""){
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">密码不能为空`)
}else if(value.length>=3&&value.length<=9){
    $span.html(`<img class="w-1" src="img/login/zc.png" alt="">`)
}else{
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">密码必须在6~12之间`)
}
})

$("#confirm2").blur(function(){
  var $txt=$(this);
var $span=$("#span3");
var value=$txt.val();
if(value==""){
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">密码不能为空`)
}else if(value.length>=3&&value.length<=9){
    $span.html(`<img class="w-1" src="img/login/zc.png" alt="">`)
}else{
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">密码必须在6~12之间`)
}
})

$("#confirm3").blur(function(){
  var $txt=$(this);
var $span=$("#span4");
var value=$txt.val();
if(value==""){
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">手机号不能为空`)
}else if(value.length>=3&&value.length<=11){
    $span.html(`<img class="w-1" src="img/login/zc.png" alt="">`)
}else{
  $span.html(`<img style="width:40px;" src="img/login/cw.png" alt="">手机号必须在6~12之间`)
}
})


$("#dl").click(function(){
  alert("登录成功")
})
$("#zc:not(:checkbox)")
//4. 修改元素
//其它元素的disabled属性值和当前checkbox的checked属性值相反！
//DOM: .disabled=true/false
//问题: jq是函数库！没有属性
//解决: $元素.prop()
.prop(//当两个参数时，执行修改属性值
  "disabled",
  !$(this).prop("checked")
)       

$(":checkbox").click(function(){
	//3. 查找要修改的元素
	//选择所有表单元素中type不是checkbox的元素
	$("#zc:not(:checkbox)")
	//4. 修改元素
	//其它元素的disabled属性值和当前checkbox的checked属性值相反！
	//DOM: .disabled=true/false
	//问题: jq是函数库！没有属性
	//解决: $元素.prop()
	.prop(//当两个参数时，执行修改属性值
		"disabled",
		!$(this).prop("checked")
	)         //只有一个参数，执行获取值
})

