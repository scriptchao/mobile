function resize(){
    document.documentElement.style.fontSize = innerWidth/20 + 'px';
}
window.onresize = function(){
    resize();
};
resize();

var fixedBox = document.querySelector('.fixedBox'),
    pic2 = document.querySelector('.pic2'),
    bgColor = document.querySelectorAll('.nav li'),
    lenBg = bgColor.length;
pic2.addEventListener('touchend',function(){
    fixedBox.classList.toggle('none');
});
for(var i = 0; i < lenBg; i++){
    bgColor[i].addEventListener('touchend',function(){
        for(var j = 0;  j < lenBg; j++){
            bgColor[j].classList.remove('color')
        }
        this.classList.add('color');
    })
}
var arr = [
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    },
    {
        src : 'http://inews.gtimg.com/newsapp_ls/0/673428579_150120/0',
        title1 : '曝孙杨已有私生子 前女友独立将孩子抚养至2岁',
        title2 : '近日，全明星探接到孙杨前女友李莹念身边知情人爆...',
        icon : 'http://mat1.gtimg.com/www/mobi/image/flagicon.png',
        num : '4608'
    }
],
    arrLen = arr.length,
    list = document.querySelector('.list');
arr.forEach(function(item){
    li = document.createElement('li');
    li.appendChild(add(item));
    list.appendChild(li);
});
function add(option){
    var src = option.src,
        title1 = option.title1,
        title2 = option.title2,
        icon = option.icon,
        num = option.num;
    var th = document.createElement('div');
    th.classList.add('th');
    img = document.createElement('img');
    img.setAttribute('src',src);
    th.appendChild(img);
    li.appendChild(th);
    var h2 = document.createElement('h2');
    h2.innerText = title1;
    console.log(h2);
    li.appendChild(h2);
    var p = document.createElement('p');
}


