window.addEventListener('load',function(){
    var banner = document.querySelector('.index-top');
    // console.log(banner.offsetTop); //焦点图距离网页顶部的值
    var bannerTop = banner.offsetTop;

    var acatnav = document.querySelector('.acat-nav-another');

    //为网页添加滚动事件 scroll
    document.addEventListener('scroll',function(){

        //粘性导航栏的显示与消失
        if( window.pageYOffset >= bannerTop){
            acatnav.style.display='block';
        }else{
            acatnav.style.display='none';
        }


    });


})