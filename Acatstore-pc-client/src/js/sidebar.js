// 粘性侧边栏js动画
window.addEventListener('load',function(){
    //获取侧边栏盒子 元素
    var sidebar = document.querySelector('.acat-sidebar');
    // console.log(sidebar.offsetTop);
    var banner = document.querySelector('.index-top');
    // console.log(banner.offsetTop); //焦点图距离网页顶部的值
    var bannerTop = banner.offsetTop;

    var sidebarTop = sidebar.offsetTop - bannerTop;
    // console.log(sidebarTop);  

    //2-0 “今日推荐”
    var recom = document.querySelector('.rec');// 获取“今日推荐”的元素
    var recommendMain = document.querySelector('.recommend');// 获取“今日推荐”内容的元素
    var recmaintop = recommendMain.offsetTop;//得到“今日推荐”内容的元素的 top 值
    console.log(recmaintop);
 
    //1-0 “返回顶部”
    var goTop = document.querySelector('.goTop'); // 获取 “返回顶部” 元素，用于设置显示与隐藏

    //3-0、“猜你喜欢”
    var guess = document.querySelector('.gues');// 获取“猜你喜欢”的元素
    var guessMain = document.querySelector('.guess-youlike');// 获取“猜你喜欢”内容的元素
    var guesmaintop = guessMain.offsetTop;//得到“猜你喜欢”内容的元素的 top 值
    console.log(guesmaintop);

    //为网页添加滚动事件 scroll
    document.addEventListener('scroll',function(){
        // console.log(window.pageYOffset);//页面滚动时被卷去头部
        // 当卷去头部大于等于150时，侧边栏就固定定位
        if( window.pageYOffset >= bannerTop ){
            sidebar.style.position='fixed';
            sidebar.style.top = sidebarTop + 'px';
        }else{
            sidebar.style.position='absolute'
            sidebar.style.top = '400px';
        }

        //返回顶部的消失与显示
        if( window.pageYOffset >= recmaintop ){
            goTop.style.display='block';
        }else{
            goTop.style.display='none';
        }


        //2-2 为“今日推荐”  添加背景和字体变色
        if( window.pageYOffset >= recmaintop && window.pageYOffset < guesmaintop ){
            recom.style.color='#ffffff';
            recom.style.backgroundColor = '#ff9900';
        }else{
            recom.style.color='black';
            recom.style.backgroundColor = '#ffffff';
        }

        //2-3 为“猜你喜欢”  添加背景和字体变色
        if( window.pageYOffset >= guesmaintop ){
            guess.style.color='#ffffff';
            guess.style.backgroundColor = '#ff9900';
        }else{
            guess.style.color='black';
            guess.style.backgroundColor = '#ffffff';

        }


    });

    //1-1、为“返回顶部”添加单击事件 动画
    goTop.addEventListener('click',function(){
        // window.scroll(0,0); 此语句被移到动画中实现
        //网页窗口的滚动动画,不需要回调
        vertical(window, 0); 
    });
    //1-2、为“返回顶部”添加hover动画      鼠标移入mouseenter     鼠标移出mouseleave
    goTop.addEventListener('mouseenter',function(){
        
    });

    //2-1、为“今日推荐”添加单击事件 动画
    recom.addEventListener('click',function(){
        vertical(window, recmaintop); 
    });
    //2-3、为“今日推荐”添加hover动画      mouseenter
    recom.addEventListener('mouseenter',function(){
        recom.style.color='#ffffff';
        recom.style.backgroundColor = '#ff9900';
    });
    recom.addEventListener('mouseleave',function(){
        recom.style.color='black';
        recom.style.backgroundColor = '#ffffff';
    });

    //3-1、为“猜你喜欢”添加单击事件 动画
    guess.addEventListener('click',function(){
        vertical(window, guesmaintop); 
    });
    //3-3、为“猜你喜欢”添加hover动画    mouseenter
    guess.addEventListener('mouseenter',function(){
        guess.style.color='#ffffff';
        guess.style.backgroundColor = '#ff9900';
    });
    guess.addEventListener('mouseleave',function(){
        guess.style.color='black';
        guess.style.backgroundColor = '#ffffff';
    });


})







