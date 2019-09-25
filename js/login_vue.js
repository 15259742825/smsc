
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
    },
    zc1(){
      alert("注册成功！自动返回首页");
      window.location.href="/index.html"
    }
  }
})