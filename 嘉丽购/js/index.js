/**
 * Created by Administrator on 2016/9/5.
 */
$ (function () {

    //首页banner自动轮播效果
    var
        $bannerSlider = $ (".j-slider-banner"),
        $bannerLi = $ (".j-slider-banner>ul li"),    //banenr图
        $bannerNum = $ (".j-slider-banner>ol li"),   //banner下标数字
        $iBnnerIndex = 0,                           //banner下标，初始0
        oBannerTimer = null;                        //banner的定时器

    //首页banner自动轮播
    bannerAutoShow ();
    //下标悬停切换当前下标banner
    $bannerNum.mouseenter (function () {
        // banner下标与当前下标不等才进行显示切换，防止同一下标效果重复
        if ($iBnnerIndex != $ (this).index ()) {
            //如果是下标增大，则执行bannerToRight效果
            if ($iBnnerIndex < $ (this).index ()) {
                $iBnnerIndex = $ (this).index ();
                bannerToRight ();
            }
            //如果是下标减小，则执行bannerToLeft效果
            else {
                $iBnnerIndex = $ (this).index ();
                bannerToLeft ();
            }
        }
    })
    //banner鼠标悬停暂停
    $bannerSlider.mouseover (function () {
        clearInterval (oBannerTimer);
    })
    //banner鼠标离开自动播放
    $bannerSlider.mouseout (function () {
        bannerAutoShow ();
    })
    //函数：首页banner隐藏显示效果
    function bannerToRight () {
        $bannerLi.css ({display: "none", opacity: 0})
        $bannerLi.eq ($iBnnerIndex).css ({display: "block"}).animate ({opacity: 1}, 1000);
        $bannerNum.removeClass ("s-slider-red");
        $bannerNum.eq ($iBnnerIndex).addClass ("s-slider-red");
    }

    function bannerToLeft () {
        $bannerLi.css ({display: "none", opacity: 0})
        $bannerLi.eq ($iBnnerIndex).css ({display: "block"}).animate ({opacity: 1}, 300);
        $bannerNum.removeClass ("s-slider-red");
        $bannerNum.eq ($iBnnerIndex).addClass ("s-slider-red");
    }

    //函数：首页banner自动轮播
    function bannerAutoShow () {
        oBannerTimer = setInterval (function () {
            $iBnnerIndex++;
            if ($iBnnerIndex == $bannerLi.size ()) {
                $iBnnerIndex = 0;
            }
            bannerToRight ()
        }, 2000)
    }

    //商品列表二级菜单的展开效果
    var
        $catetoryNavInfo = $ (".m-category-nav-info");
    $catetoryNavInfo.mouseenter (function () {
        /*$(this).children('.category-subnav').css({'display': "block"});*/
        $ (this).children ('.category-subnav').removeClass ("f-dn").addClass ("f-db");
    }).mouseleave (function () {
        /*$(".category-subnav:visible").css({'display': "none"});*/
        $ (this).children ('.category-subnav').removeClass ("f-db").addClass ("f-dn");
    });

    //热播商品轮播效果
    /*var
        $hotSliderContainer = $ (".s-tv-live .j-div"),
        $hotSliderContainerWidth = $hotSliderContainer.width (),
        $hotSliderLeft = $ (".tv-live-btn-left"),
        $hotSliderRight = $ (".tv-live-btn-right"),
        iHotSliderIndex = 0,
        iHotSliderNextindex = 1,
        bHotSliderFlag = true;
    $hotSliderRight.on ("click", function () {
        if(bHotSliderFlag){
            bHotSliderFlag = false;
            $hotSliderContainer.eq (iHotSliderIndex).css ({
                display: "block"
            }).stop(true).animate ({left: -$hotSliderContainerWidth}, 1000, function () {
                $ (this).css ({display: "none",
                    left: $hotSliderContainerWidth})
            });
            $hotSliderContainer.eq (iHotSliderNextindex).css ({
                display: "block",
                left: $hotSliderContainerWidth
            }).stop(true).animate ({left: 0}, 1000, function () {
                bHotSliderFlag = true;
            });
            iHotSliderIndex++;
            iHotSliderNextindex++;
            if (iHotSliderIndex == $hotSliderContainer.size ()) {
                iHotSliderIndex = 0;
            }
            if (iHotSliderNextindex == $hotSliderContainer.size ()) {
                iHotSliderNextindex = 0;
            }
        }
    })
    $hotSliderLeft.on ("click", function () {
        if(bHotSliderFlag){
            iHotSliderNextindex = iHotSliderIndex-1;
            bHotSliderFlag = false;
            $hotSliderContainer.eq (iHotSliderIndex).css ({
                display: "block"
            }).stop(true).animate ({left: $hotSliderContainerWidth}, 1000, function () {
                $ (this).css ({display: "none",
                    left: -$hotSliderContainerWidth})
            });
            $hotSliderContainer.eq (iHotSliderNextindex).css ({
                display: "block",
                left: -$hotSliderContainerWidth
            }).stop(true).animate ({left: 0}, 1000, function () {
                bHotSliderFlag = true;
            });
            iHotSliderIndex--;
            if (iHotSliderIndex == 0) {
                iHotSliderNextindex = $hotSliderContainer.size ()-1;
            }
            if(iHotSliderIndex == -1){
                iHotSliderIndex = $hotSliderContainer.size ()-1;
            }
        }
    })*/
    var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical',
        loop: true,

        // 如果需要分页器
       // pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.tv-live-btn-right',
        prevButton: '.tv-live-btn-left',

        // 如果需要滚动条
        //scrollbar: '.swiper-scrollbar',
    })
})


