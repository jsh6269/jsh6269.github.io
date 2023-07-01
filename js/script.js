var clock;

window.addEventListener('load', displayClock, false);
window.addEventListener('unload', stopClock, false);


function preset(tt){
    if(tt < 10){
        return "0" + tt;
    }
    else{
        return tt;
    }
}
function stopClock(){
    setTimeout(clock);
}

function displayClock(){
    var now = new Date();
    var hourNow = preset(now.getHours());
    var minuteNow = preset(now.getMinutes());
    var secondNow = preset(now.getSeconds());

    document.digital_clock.time_val.value = hourNow + ":" + minuteNow + ":" + secondNow;
    clock = setTimeout(displayClock, 1000);
}

jQuery(function($){
    $('#bulletLooper').on('shown', function(e){
        $('.looper-nav > li', this)
            .removeClass('active')
            .eq(e.relatedIndex)
            .addClass('active');
    });
});

/*
$('a[href="#"]').bind('click', function(){
    alert('아직 구현되지 않은 영역입니다.');
    return false;
});
*/
