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



// 验证码获取
var vm=new Vue({
  el:"#app",
  data:{
    //通过timer是不是10来判断是否可点击，以及自动修改a的样式和内容
    timer:60,
	n:`获取`
  },
  methods:{
    //当单击按钮时
    start(){
      //如果还没有启动倒计时，才能执行后续操作
      if(this.timer==60){
        //立刻将timer改为9，引发界面内容和样式的自动变化
        this.timer=59;
        //启动定时器，并保存定时器序号
        //必须用箭头函数，因为希望定时器中也能用外部的Vue中的this！
        var n=setInterval(()=>{
          //如果倒计时还没有到0
          if(this.timer>0){
            this.timer--;//才能继续-1
          }else{//否则如果已经到0了
            this.timer=60;//将timer重置回10，引发界面内容和样式回复原样！
            //在倒计时结束时，一定要停止本次定时器，否则再点第二次，第三次，会导致多个定时器叠加！同时操作this.timer!倒计时就不准了！
            clearInterval(n);
          }
        },1000)
      }
    }
  }
})