function resize(){
    document.documentElement.style.fontSize = innerWidth/20 + 'px';
}
window.onresize = function(){
    resize();
};
resize();
