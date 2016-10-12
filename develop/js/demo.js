function resize(){
    document.documentElement.style.fontSize = innerWidth/20 + 'px';
}
window.onresize = function(){
    resize();
};
resize();
var i = 0,
    arrDiv = document.querySelectorAll('.fot');
arrLen = arrDiv.length;
//触屏事件
while(i < arrLen){
    arrDiv[i].addEventListener('touchstart',function(){
        console.log('touchstart');
    });
    arrDiv[i].addEventListener('touchmove',function(){
        console.log('touchmove');
    });
    arrDiv[i].addEventListener('touchend',function(){
        console.log('touchend');
    });
    i++;
    console.log('hello wwww')

}
//touchend事件触发时，dialog已经显示在页面的顶层，此时触发的click事件会变成dialog的click事件
