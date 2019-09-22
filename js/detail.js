var btns=document.getElementsByTagName("button");
btns[1].onclick=function(){
    var inp=document.getElementById("inp");
    var zj=document.getElementById("_zj");
    var j=parseInt(zj.innerHTML);
    j-=7599;
    if(j<=7599){
        j=7599
    };
    zj.innerHTML=j;
    var n=parseInt(inp.value);
    n-=1;
    if(n<=1){
        n=1;
    }
    inp.value=n;
}
btns[2].onclick=function(){
    var inp=document.getElementById("inp");
    var n=parseInt(inp.value);
    n+=1;
    inp.value=n;
    var zj=document.getElementById("_zj");
    var j=parseInt(zj.innerHTML);
    j+=7599;
    zj.innerHTML=j;
}
var inp=document.getElementById("in1")
inp.onclick=function(){
    var zj=document.getElementById("_zj");
    var j=parseInt(zj.innerHTML);
    if($("#in1").prop("checked")){
        j+=99;
       zj.innerHTML=j;
    }else{
        j-=99;
       zj.innerHTML=j;
    }
}

var inp=document.getElementById("in2")
inp.onclick=function(){
    var zj=document.getElementById("_zj");
    var j=parseInt(zj.innerHTML);
    if($("#in2").prop("checked")){
        j+=240;
       zj.innerHTML=j;
    }else{
        j-=240;
       zj.innerHTML=j;
    }
}


