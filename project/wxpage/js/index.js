$(function(){
    var clientWidth=$(window).width();
    var clientHeight=$(window).height();
    $('#page_box').height(7*clientHeight);
    $('.page').height(clientHeight);
    document.addEventListener('touchstart',function(e){
        e.preventDefault();
      /*  e.stopPropagation();*/

    },false);

    $(window).resize(function(){
        clientWidth=$(window).width();
        clientHeight=$(window).height();
        $('#page_box').height(7*clientHeight);
        $('.page').height(clientHeight);
        sMarginTop=-iSwipe*clientHeight+'px';
        $('#page_box').css('marginTop',sMarginTop);
    });

    var iSwipe=0;
    $('#page_box').swipeUp(function(){
        if(iSwipe!=6)
        {
            if(iSwipe==0)
            {
                $('.page1_bottom').removeClass('page1_bottom_a');
                $('.page1_top').removeClass('page1_top_a');
                $('.light_top').removeClass('light_top_a');
                $('.light_top1').removeClass('light_top1_a');
                $('.light_left').removeClass('light_left_a');
                $('.light_right').removeClass('light_right_a');
                $('.page1_text').removeClass('page1_text_a');

                $('.page2_box').addClass('page2_box_a');
            }
            else if(iSwipe==1)
            {
                $('.page2_box').removeClass('page2_box_a');

                $('.page3_box').addClass('page3_box_a');
                $('.page3_bottom').addClass('page3_bottom_a');
                $('.person_1').addClass('person_1_a');
                $('.person_2').addClass('person_2_a');
                $('.person_3').addClass('person_3_a');
                $('.person_4').addClass('person_4_a');

            }
            else if(iSwipe==2)
            {
                $('.page3_box').removeClass('page3_box_a');
                $('.page3_bottom').removeClass('page3_bottom_a');
                $('.person_1').removeClass('person_1_a');
                $('.person_2').removeClass('person_2_a');
                $('.person_3').removeClass('person_3_a');
                $('.person_4').removeClass('person_4_a');

                $('.page5_box').addClass('page5_box_a');
                $('.page5_blink').addClass('page5_blink_a');
                $('.page5_text1').addClass('page5_text1_a');
                $('.page5_text2').addClass('page5_text2_a');
                $('.page5_text3').addClass('page5_text3_a');
                $('.page5_text4').addClass('page5_text4_a');

            }
            else if(iSwipe==3)
            {

                $('.page5_box').removeClass('page5_box_a');
                $('.page5_blink').removeClass('page5_blink_a');
                $('.page5_text1').removeClass('page5_text1_a');
                $('.page5_text2').removeClass('page5_text2_a');
                $('.page5_text3').removeClass('page5_text3_a');
                $('.page5_text4').removeClass('page5_text4_a');

                $('.page4_box').addClass('page4_box_a');
                $('.page4_text').addClass('page4_text_a');
                $('.page4_text1').addClass('page4_text1_a');

            }
            else if(iSwipe==4)
            {
                $('.page4_box').removeClass('page4_box_a');
                $('.page4_text').removeClass('page4_text_a');
                $('.page4_text1').removeClass('page4_text1_a');

                $('.page6_brain').addClass('page6_brain_a');
                $('.page6_text1').addClass('page6_text1_a');
                $('.page6_text2').addClass('page6_text2_a');
                $('.page6_text3').addClass('page6_text3_a');
                $('.page6_text4').addClass('page6_text4_a');
                $('.page6_text5').addClass('page6_text5_a');
                $('.page6_text6').addClass('page6_text6_a');

            }
            else if(iSwipe==5)
            {
                $('.page6_brain').removeClass('page6_brain_a');
                $('.page6_text1').removeClass('page6_text1_a');
                $('.page6_text2').removeClass('page6_text2_a');
                $('.page6_text3').removeClass('page6_text3_a');
                $('.page6_text4').removeClass('page6_text4_a');
                $('.page6_text5').removeClass('page6_text5_a');
                $('.page6_text6').removeClass('page6_text6_a');

                $('.page7_text1').addClass('page7_text1_a');
                $('.page7_text2').addClass('page7_text2_a');
                $('.page7_text3').addClass('page7_text3_a');
                $('.page7_text4').addClass('page7_text4_a');
                $('.page7_text5').addClass('page7_text5_a');

            }

            iSwipe++;
        }
        var sMarginTop=-iSwipe*clientHeight+'px';
        $(this)[0].style.WebkitTransition='all .6s ease-in';
        $(this).css('marginTop',sMarginTop);
    });

    $('#page_box').swipeDown(function(){
        if(iSwipe!=0)
        {
            if(iSwipe==1)
            {
                $('.page1_bottom').addClass('page1_bottom_a');
                $('.page1_top').addClass('page1_top_a');
                $('.light_top').addClass('light_top_a');
                $('.light_top1').addClass('light_top1_a');
                $('.light_left').addClass('light_left_a');
                $('.light_right').addClass('light_right_a');
                $('.page1_text').addClass('page1_text_a');

                $('.page2_box').removeClass('page2_box_a');
            }
            else if(iSwipe==2)
            {
                $('.page2_box').addClass('page2_box_a');

                $('.page3_box').removeClass('page3_box_a');
                $('.page3_bottom').removeClass('page3_bottom_a');
                $('.person_1').removeClass('person_1_a');
                $('.person_2').removeClass('person_2_a');
                $('.person_3').removeClass('person_3_a');
                $('.person_4').removeClass('person_4_a');
            }
            else if(iSwipe==3)
            {
                $('.page3_box').addClass('page3_box_a');
                $('.page3_bottom').addClass('page3_bottom_a');
                $('.person_1').addClass('person_1_a');
                $('.person_2').addClass('person_2_a');
                $('.person_3').addClass('person_3_a');
                $('.person_4').addClass('person_4_a');

                $('.page5_box').removeClass('page5_box_a');
                $('.page5_blink').removeClass('page5_blink_a');
                $('.page5_text1').removeClass('page5_text1_a');
                $('.page5_text2').removeClass('page5_text2_a');
                $('.page5_text3').removeClass('page5_text3_a');
                $('.page5_text4').removeClass('page5_text4_a');
            }
            else if(iSwipe==4)
            {
                $('.page5_box').addClass('page5_box_a');
                $('.page5_blink').addClass('page5_blink_a');
                $('.page5_text1').addClass('page5_text1_a');
                $('.page5_text2').addClass('page5_text2_a');
                $('.page5_text3').addClass('page5_text3_a');
                $('.page5_text4').addClass('page5_text4_a');

                $('.page4_box').removeClass('page4_box_a');
                $('.page4_text').removeClass('page4_text_a');
                $('.page4_text1').removeClass('page4_text1_a');
            }
            else if(iSwipe==5)
            {
                $('.page4_box').addClass('page4_box_a');
                $('.page4_text').addClass('page4_text_a');
                $('.page4_text1').addClass('page4_text1_a');

                $('.page6_brain').removeClass('page6_brain_a');
                $('.page6_text1').removeClass('page6_text1_a');
                $('.page6_text2').removeClass('page6_text2_a');
                $('.page6_text3').removeClass('page6_text3_a');
                $('.page6_text4').removeClass('page6_text4_a');
                $('.page6_text5').removeClass('page6_text5_a');
                $('.page6_text6').removeClass('page6_text6_a');
            }
            else if(iSwipe==6)
            {
                $('.page6_brain').addClass('page6_brain_a');
                $('.page6_text1').addClass('page6_text1_a');
                $('.page6_text2').addClass('page6_text2_a');
                $('.page6_text3').addClass('page6_text3_a');
                $('.page6_text4').addClass('page6_text4_a');
                $('.page6_text5').addClass('page6_text5_a');
                $('.page6_text6').addClass('page6_text6_a');

                $('.page7_text1').removeClass('page7_text1_a');
                $('.page7_text2').removeClass('page7_text2_a');
                $('.page7_text3').removeClass('page7_text3_a');
                $('.page7_text4').removeClass('page7_text4_a');
                $('.page7_text5').removeClass('page7_text5_a');
            }
            iSwipe--;
        }
        var sMarginTop=-iSwipe*clientHeight+'px';
        $(this)[0].style.WebkitTransition='all .6s ease-in';
        $(this).css('marginTop',sMarginTop);
    });

    $('.page1_bottom li').click(function(){
        iSwipe=$(this).index()+1;
        var sMarginTop=-iSwipe*clientHeight+'px';
        $('#page_box')[0].style.WebkitTransition='all 0s ease-in';
        $('#page_box').css('marginTop',sMarginTop);
    });

    $('.guanzhu').tap(function(){
        window.location.href="http://mp.weixin.qq.com/s?__biz=MzA5Nzc4NjYwMQ==&mid=201100571&idx=1&sn=de4436ad2b711dbe08fea4e8787aefa5#rd";
    });
});