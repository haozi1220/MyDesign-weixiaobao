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




/***************************功能实现区****************************/
    carsoul(carsouller) ;                                               //调用函数，实现第一屏轮播
    //定义一个延迟定时器，删除轮播图内容的动画
    setTimeout(function(){
        removeAnimations($firstAnimatingElems,"animated")  ;            //删除b标签身上的animated
        removeAnimations(top,"animated") ;                              //删除top类元素身上的animated 
        removeAnimations($secondAnimatingElems,"scaleA") ;              //删除p标签身上的scaleA 
        removeAnimations(midBox,"scaleA") ;                             //删除scaleA类元素身上的scaleA                                       
    },8000)



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

})