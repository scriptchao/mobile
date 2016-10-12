function resize(){
    document.documentElement.style.fontSize = innerWidth/20 + 'px';
}
window.onresize = function(){
    resize();
};
resize();

window.addEventListener('touchstart',function(e){
    //touches所有的触摸手指集合
    //changedTouches发生了改变的触摸的手指集合
    //targetTouches当前作用的触摸的手指集合
});
window.addEventListener('touchmove',function(e){
    //都能用
});
window.addEventListener('touchend',function(e){
    //只有changedTouches能用
});
var task = document.querySelector('.task'),
    taskBox = document.querySelector('.taskBox'),
    dustbin = document.querySelector('.dustbin');
var X1 = dustbin.offsetLeft,
    X2 = dustbin.offsetLeft + dustbin.offsetWidth,
    Y1 = dustbin.offsetTop,
    Y2 = dustbin.offsetTop + dustbin.offsetHeight;
for(i in dustbin){
    console.log(i,dustbin[i])
}
//拖动
task.addEventListener('touchstart',function(e){
    disX = e.touches[0].clientX - e.target.offsetLeft;
    disY = e.touches[0].clientY - e.target.offsetTop;
    console.log(disX,disY);
});
task.addEventListener('touchmove',function(e){
    this.style.left = e.touches[0].clientX - disX + 'px';
    this.style.top = e.touches[0].clientY - disY + 'px';
});
task.addEventListener('touchend',function(e){
    var xx = e.changedTouches[0];
    (xx.clientX - X1 > 0)
    && (xx.clientX -X2 < 0)
    && (xx.clientY - Y1 > 0)
    && (xx.clientY - Y2 < 0)
    && dustbin.appendChild(task)
    && (this.style.top = this.offsetTop + taskBox.offsetTop - dustbin.offsetTop + 'px')
});
