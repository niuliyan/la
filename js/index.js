function gettime(){
    var data=new Date();
    var mon=data.getMonth()+1;
    var day=data.getDate();
    var xingqi=data.getDay();
    var time=document.getElementById('time');
    var riqi=document.getElementById('riq');
    var arr=['日','一','二','三','四','五','六'];
    var hour=data.getHours();
    var min=add(data.getMinutes());
    var miao=add(data.getSeconds());
    var small=document.querySelectorAll('.small');
    riqi.innerHTML=mon+'月'+day+'日'+'•'+'星期'+arr[xingqi]
    time.innerHTML=hour+':'+min;
    for(var i=0;i<small.length;i++){
        small[i].innerHTML=hour+':'+min+':'+miao;
    }


}

function add(n){
    return n<10?'0'+n:n;
}
setInterval(gettime,1000)

