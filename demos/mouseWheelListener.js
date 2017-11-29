var scrollFoo = function(e){
    e = e || window.event;
    if(e.wheelDelta){  //判斷IE，Chrome滑輪事件             
        if(e.wheelDelta > 0){
            console.log("1滑轮向上滚动");
        }
        if(e.wheelDelta < 0){
            console.log("1滑轮向下滚动");
        }
    }else if(e.detail){  //Firefox滑輪事件
        if(e.detail< 0){
            console.log("2滑轮向上滚动");
        }
        if(e.detail> 0){
            console.log("2滑轮向下滚动");
        }
    }
}
//滾動滑輪觸發scrollFoo（大部分瀏覽器）
// window.onmousewheel = 
document.onmousewheel = scrollFoo;
//滑輪滾動監聽（Firefox）
if (document.addEventListener){
    document.addEventListener('DOMMouseScroll', scrollFoo, false);
}