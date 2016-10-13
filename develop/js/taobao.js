function resize(){
    document.documentElement.style.fontSize = innerWidth/20 + 'px';
}
window.onresize = function(){
    resize();
};
resize();
var btn = document.querySelector('.btn'),
    hide = document.querySelector('.fixedBox'),
    footer = document.querySelector('.footer');
btn.addEventListener('touchend',function(){
    hide.style.display = 'none';
    footer.style.height = (37/16) + 'rem'
});
var change = document.querySelector('.change'),
    arrText = ['size直播 | Star讲安东尼系','【36】这些客厅装饰都没','聪明懒女人想挑大件','选手机先选CPU!浅谈手机','三星手机或将有特别设计'],
    lenText = arrText.length;
var timer = setInterval(function(){

});
