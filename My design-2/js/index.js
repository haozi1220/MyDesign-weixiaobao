/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-25 10:36:05
 * @version $Id$
 */
$(function(){
    /******************声明变量区******************/
     var carsouller = $("#carousel-example-generic") ;                  //获取第一屏轮播容器
     var $firstAnimatingElems = $('#carousel-example-generic').find('.item:first').find('.box').find('b') ;//找到b标签
     var $secondAnimatingElems = $('#carousel-example-generic').find('.item:first').find('.box').find('p') ;//找到p标签
     var top = $('.top') ;                                              //获取所有class为top的元素
     var midBox = $('.scaleA') ;                                        //获取所有的class为scaleA的元素
     var allVideo = $('.video') ;                                       //获取所有的class为video的元素
     var heiT = document.documentElement.clientHeight ;                 //获取屏幕的高度
     allVideo.css({height:heiT}) ;                                      //让每一个video的高度跟屏幕一样高
     var allDivWrap = $('.wrap') ;                                      //获取容器
     var n = 0 ;   
     var onOff = false;                                                //定义开关。                                                     //定义一个n用来记录滚动到第几屏


/***************************功能实现区****************************/
    carsoul(carsouller) ;                                               //调用函数，实现第一屏轮播
    //定义一个延迟定时器，删除轮播图内容的动画,保证动画只执行一次
    setTimeout(function(){
        removeAnimations($firstAnimatingElems,"animated")  ;            //删除b标签身上的animated
        removeAnimations(top,"animated") ;                              //删除top类元素身上的animated 
        removeAnimations($secondAnimatingElems,"scaleA") ;              //删除p标签身上的scaleA 
        removeAnimations(midBox,"scaleA") ;                             //删除scaleA类元素身上的scaleA                                       
    },8000) ;
    mouseWheel(document,function(){
        console.log(onOff)
        if( onOff ) return ;
        onOff = true ;
        n-- ;
        if( n<0 ){
            n = 0 ;
        }
        renderPage() ;
    },function(){
        if( onOff ) return ;
        onOff = true ;
        n++ ;
        if( n > allVideo.length - 1 ){
            n = allVideo.length - 1 ;
        }
        renderPage() ;
    }) ;




/***************************功能函数区***************************/
    //图片轮播函数
    function carsoul(ele){
        ele.carousel({
            pause:true ,
            interval:2000
        });
    };
     //删除class函数
    function removeAnimations(elems,attr){/*elems要删除类的元素，ele要删除的类名*/
        elems.each(function (){
            var $this = $(this) ;
            $this.removeClass(attr) ;
        }) ;
    } ;
    
    //封装滚轮函数
    function mouseWheel(element,upFn,downFn){
        element.onmousewheel = wheelFn ;
        //判断元素身上是不是有事件监听
        if( element.addEventListener ){
            element.addEventListener( "DOMMouseScroll",wheelFn,false ) ;
        } ;
        function wheelFn (ev) {
            var direction = true ;                          //向上为true
            //兼容火狐IE谷歌
            if( ev.wheelDelta ){                            //IE和chrome
                direction = ev.wheelDelta > 0 ? true : false ;
            }else if( ev.detail ){                          //火狐下
                direction = ev.detail < 0 ? true : false ;
            } ;
            //判断方向，执行不同的函数。
            if ( direction ) {
                typeof upFn === "function" && upFn() ;
            }else{
                typeof downFn === "function" && downFn() ;
            };
            ev.preventDefault() ;
        }
    }
    //整平滚动函数
    function renderPage(){
        $(allDivWrap).animate({
            top:-n*heiT 
        }) ;
        clearTimeout(document.timer) ;
        document.timer = setTimeout(function(){
            onOff = false ;
        },100)
    }
    
})