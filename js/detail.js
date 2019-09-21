var btns=document.getElementsByTagName("button");
console.log(btns);
btns[1].onclick=function(){
    var inp=document.getElementById("inp");
    var n=parseInt(inp.innerHTML);
    n+=1;
    inp.innerHTML=n;
}

console.log(inp)