$(function(){

    let show = $('.show');
    let box = $('.box');
    let hide = $('.hide');
    let toggle = $('.toggle');
    let box2 = $('.box2');
    let show2 = $('.show2');
    let hide2 = $('.hide2');
    let toggle2 = $('.toggle2');

    let box3 = $('.box3');
    let show3 = $('.show3');
    let hide3 = $('.hide3');
    let toggle3 = $('.toggle3');
    let stop3 = $('.stop3');


    show.on('click', function(){
        box.show();
    })

    hide.on('click', function(){
        box.hide();
    })

    toggle.on('click', function(){
        box.toggle();
    })


    show2.on('click', function(){
        box2.fadeIn();
    });

    hide2.on('click', function(){
        box2.fadeOut();
    });

    toggle2.on('click', function(){
        box2.fadeToggle();
    });


    show3.on('click', function(){
        box3.slideDown();

        box3.animate({
            width: '250px',
            height: '250px',
        }, 5000)
    });

    stop3.on('click', function(){
        box3.stop();
    });

    hide3.on('click', function(){
        box3.slideUp();
    });

    toggle3.on('click', function(){
        box3.slideToggle();
    });









    let qns = $('.qns');


    qns.on('click', function(){

        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            qns.removeClass('active');
            $(this).addClass('active');
            
        }
        

        
    })
});