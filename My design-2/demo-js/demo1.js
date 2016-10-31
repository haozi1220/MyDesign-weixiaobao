/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-27 11:56:13
 * @version $Id$
 */
$(function(){
    $('#carousel-example-generic').carousel({
        pause:true ,
        interval:2000 
    })

    setTimeout(function(){
        removeAnimations($firstAnimatingElems) ;
    },2000)
    //删除class函数
    function removeAnimations(elems){
        
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function (){
            var $this = $(this) ;
            console.log($this)
            $this.removeClass('animated') ;
        }) ;
    } ;
    var $firstAnimatingElems = $('#carousel-example-generic').find('.item:first').find('.box').find('b') ;
    /*removeAnimations($firstAnimatingElems) ;*/
})