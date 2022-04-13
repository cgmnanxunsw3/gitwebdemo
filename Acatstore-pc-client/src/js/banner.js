// 焦点图js动画
window.addEventListener( 'load',function(){

    var previous = document.querySelector('.previous');
    var next = document.querySelector('.next');
    var banner = document.querySelector('.banner-con');

    var bannerWidth = banner.offsetWidth;//获取焦点区域宽度

    //区块零  ——————鼠标悬停反馈
    // 鼠标移入区域显示
    banner.addEventListener('mouseenter',function(){
        previous.style.display = 'block';
        next.style.display = 'block';
        // 区块三-2   ——————鼠标悬停时，停止自动播放轮播图
        clearInterval(timer);//清除定时器
        timer = null; //清空定时器变量

    });
    // 鼠标移出区域隐藏
    banner.addEventListener('mouseleave',function(){
        previous.style.display = 'none';
        next.style.display = 'none';
        // 区块三-2   ——————鼠标悬停时移出时，自动播放轮播图继续
        timer = setInterval(function(){
            //直接借助点击右侧按钮的效果实现自动轮播
            next.click();    // 手动调用事件
        },2000);//创建定时器setInterval,定时2秒
    })


    //区块一  ——————动态创建ol中li按钮
    var imgul = banner.querySelector('ul');
    var btnol = document.querySelector('.bannerbtn');
    //console.log(imgul.children.length);
        for(var i = 0; i < imgul.children.length; i++ ){
            //创建li 并插入到 ol 中
            var li = this.document.createElement('li');
            btnol.appendChild(li);

            // 创建索引
            li.setAttribute('index',i);

            //按钮事件 方法一
            li.addEventListener('click',function(){
                for( var i = 0; i < btnol.children.length; i++ ){
                    //ol中li按钮  默认样式
                    btnol.children[i].className = '';
                }
                //改变ol中li 点击时的  按钮样式
                this.className = 'current';

                //单击时 实现图片转动    li索引值 * 焦点区域宽度
                var index = this.getAttribute('index'); //获取索引

                //来自区块二和区块一的 全局变量num和 此处索引index
                num = index;  //还需要去改变底部圆点按钮
                oval = index;  //改变底部圆点预设
                //等同于 num = oval = index;
 
                // var bannerWidth = banner.offsetWidth;//获取焦点区域宽度
                horizontal(imgul, -index * bannerWidth);

            })
        }
        //默认第一个ol-> li按钮赋予样式
        btnol.children[0].className = 'current';

        // 克隆第一张图片  浅度克隆   写到底部按钮的下面
        var first = imgul.children[0].cloneNode(true);
        imgul.appendChild(first);



        // 区块二-1    ——————右按钮的单击转换
        var num = 0 ; //自增预设
        var oval = 0; //样式改变的自增预设

        var throttle = true; //节流阀

        next.addEventListener('click',function(){
            //判断一下是不是最后一张图
            if(throttle){
                throttle = false;//关闭节流阀
                if( num == imgul.children.length-1 ){
                    imgul.style.left = 0;
                    num = 0;//重置自增
                }
                num++;
                horizontal(imgul, - num * bannerWidth,function(){
                    throttle = true;//整个动画执行完毕后打开节流阀
                });//动画回调函数
                //底部按钮样式改变
                oval++;
                // 如果oval到达最后一个数字，重置为零
                if( oval == btnol.children.length ){
                    oval = 0;
                }
                //调用区块二-3 的封装函数
                ovalChangeStyle();
            }
            

        })
        // 区块二-2    ——————左按钮的单击转换
        previous.addEventListener('click',function(){
            if(throttle){
                throttle = false;//关闭节流阀    
                //判断是不是第一张图片
                if( num == 0 ){
                    // imgul.style.left = (imgul.children.length-1) * bannerWidth + 'px';//要显示最后一张图片（实际是倒数第二张）
                    // num = imgul.children.length-1; //处于倒数第二张的num值
                    //可以调换顺序这样写
                    num = imgul.children.length-1; //处于倒数第二张的num值
                    imgul.style.left = -num * bannerWidth + 'px';//要显示最后一张图片（实际是倒数第二张）
                }
                num--;
                horizontal(imgul,-num * bannerWidth,function(){
                    throttle = true; 
                });

                //底部按钮
                oval--;
                // 如果oval变为负数时，则要将其赋值为最后底部按钮的值或图片对应的值
                if( oval < 0 ){
                    //图片长度复制
                    // oval = imgul.children.length-2;
                    //底部圆点长度复制
                    oval = btnol.children.length-1;
                }//此处可用三元表达式书写   oval = oval < 0 ? btnol.children.length-1 : oval;
                //调用区块二-3 的封装函数
                ovalChangeStyle();
                // for(var i = 0; i < btnol.children.length; i++ ){
                //     btnol.children[i].className = '';
                // }
                // btnol.children[oval].className = 'current';
            }
        }) 
        // 区块二-3    ——————重复代码的封装  底部按钮样式
        function ovalChangeStyle(){
            //排他思想   先清除后添加
            //先清除其余按钮的类名
            for(var i = 0; i < btnol.children.length; i++ ){
                btnol.children[i].className = '';
            }
            //留下当前所处环境下 ，所获得的的oval位置数值,对应的为其添加样式
            btnol.children[oval].className = 'current';
        }

        // 区块三-1   ——————自动播放轮播图
        var timer = setInterval(function(){
            //直接借助点击右侧按钮的效果实现自动轮播
            next.click();    // 手动调用事件
        },2000);//创建定时器setInterval,定时2秒
        // 区块三-2   ——————鼠标悬停时，停止自动播放轮播图
            //具体设置见     区块零——————鼠标悬停反馈
})










