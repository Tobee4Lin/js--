/*header*/
(function() {
    var $buy = $('#header .h_m_r_buy')
    var $buyA = $buy.find('a.buy');
    var $buyHide = $buy.find('.hide');
    $buy.hover(function(){
        $buyA.addClass('hover');
        $buyHide.stop().slideDown();
    }, function() {
        $buyHide.stop().slideUp(340, function() {
            $buyA.removeClass('hover');
        });
    });

})();


/*nav_main*/
(function() {
    var $product = $('#nav .n_main .product');
    var $hide = $('#nav .nav_hide');
    var $ul = $('#nav .nav_hide .n_h_main ul');
    $product.hover(function() {
        $hide.stop().slideDown();
        $ul.eq($(this).index()).show().siblings().hide();
    }, function() {
        $hide.stop().slideUp();
    });
})();



/*nav_search*/
(function() {
    var $input = $('#nav .n_search .n_s_input input');
    var $saerch = $('#nav .n_search');
    var $hide = $('#nav .n_search .hide');
    var $a = $('#nav .n_search .n_s_input a.tip');
    $input.focus(function() {
        $saerch.addClass('focus');
        $hide.show(50);
        $a.fadeOut(300);
    }).blur(function() {
        $saerch.removeClass('focus');
        $hide.hide(50);
        $a.fadeIn(300);
    });
    //效果同上
    // $input.on('focus blur', function() {
    //     $saerch.toggleClass('focus');
    // });
    
})();


/* banner main */
(function() {
    var $main = $('#banner');
    var $pic = $('#banner .b_main .b_m_pic li');
    var $tab = $('#banner .b_main .b_m_tab li');
    var $btn = $('#banner .b_main .b_m_btn .btn');
    var length = $pic.length;
    var index = 0;
    var timer;
    var nowTime = 0;
    $pic.eq(0).show();
    $tab.eq(0).addClass('on');

    $tab.click(function() {
        if( index != $(this).index() ) {
            $pic.eq(index).fadeOut(800);
            $tab.eq(index).removeClass('on');
            index = $(this).index();
            $pic.eq(index).fadeIn(800);        
            $tab.eq(index).addClass('on');
        }
    });

    $btn.click(function() {
            var i = $(this).index(); //i用于判断向右(>0)还是向左(<0)
            $pic.eq(index).fadeOut(800);
            $tab.eq(index).removeClass('on');
            if(i) {
                index++;
                index %= length;
            } else {
                index--;
                if(index < 0) index = length - 1;
            }
            $pic.eq(index).fadeIn(800);        
            $tab.eq(index).addClass('on');
    });


    //自动轮播
    $main.hover(function() {
        clearInterval(timer);
    }, auto);

    auto();
    function auto() {
        timer = setInterval(function() {
            $pic.eq(index).fadeOut(800);
            $tab.eq(index).removeClass('on');
            index++;
            index %= length;
            $pic.eq(index).fadeIn(800);
            $tab.eq(index).addClass('on');
        }, 5000);
    };
 
    function animate() {
        $pic.eq(index).fadeOut(800);
        $tab.eq(index).removeClass('on');
        index = $(this).index();
        $pic.eq(index).fadeIn(800);        
        $tab.eq(index).addClass('on'); 
    };
    
})();

/* banner-nav */
(function() {
    var $firstLi = $('#banner .b_nav .firstLi');
    var $info = $('#banner .b_nav .firstLi .info');
    $info.each(function() {
        var $li = $(this).find('li');
        var length = $li.length;
        var width = $li.width();
        var height = $li.height();
        var col = Math.ceil(length / 6);

        $(this).width(col*width);
        $li.each(function(i) {
            var x = Math.floor(i / 6);
            var y = i % 6;
            $(this).css({
                left : x*width + 'px',
                top : y*height + 'px'
            });
        });
    });

    $firstLi.hover(function() {
        $(this).find('.info').fadeIn(200);
    }, function() {
        $(this).find('.info').fadeOut();
    });
})();



/* star */
(function() {
    var $btn = $('#star .s_btn span');
    var $show = $('#star .s_show');
    var index = 0;
    var timer;
    $btn.click(function() {
        var i = $(this).index();
        if(i != index) {
            clearInterval(timer);
            auto();
            index = i;
            $(this).removeClass('able').siblings().addClass('able');
            $show.stop().animate({
                marginLeft : -index*1226 + 'px'
            }, 500);
        }
    });

    auto();
    function auto() {
        timer = setInterval(function() {
            index = !index;
            var x = index - 0;
            $btn.eq(x).removeClass('able').siblings().addClass('able');
            $show.stop().animate({
                marginLeft : -index*1226 + 'px'
            }, 500);
        }, 6000);
    }
})();


/* match */
(function() {
    var $tab = $('#match .m_title ul li');
    var $ul = $('#match .m_c_right ul');
    var $li = $ul.children('li');
    $ul.eq(0).show().siblings().hide();
    $tab.eq(0).addClass('hover');//默认第一个加样式
    $tab.mouseenter(function() {
        $(this).addClass('hover').siblings().removeClass('hover'); 
        $ul.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
    });
    $li.hover(function() {
        $(this).find('.comments').stop().animate({bottom : 0},200);
    }, function() {
        $(this).find('.comments').stop().animate({bottom : '-75px'}, 200);
    });
})();



/* neirong */
(function() {
    var $li1 = $('#neirong li.li1');
    var $btnDiv = $('#neirong .btn div');
    $li1.hover(function() {
        $(this).find('.btn div').stop().fadeIn(200);
    }, function() {
        $(this).find('.btn div').stop().fadeOut(200);
    });
})();