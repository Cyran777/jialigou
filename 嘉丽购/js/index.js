/**
 * Created by Administrator on 2016/9/5.
 */
$ (function () {

    //��ҳbanner�Զ��ֲ�Ч��
    var
        $bannerSlider = $ (".j-slider-banner"),
        $bannerLi = $ (".j-slider-banner>ul li"),    //banenrͼ
        $bannerNum = $ (".j-slider-banner>ol li"),   //banner�±�����
        $iBnnerIndex = 0,                           //banner�±꣬��ʼ0
        oBannerTimer = null;                        //banner�Ķ�ʱ��

    //��ҳbanner�Զ��ֲ�
    bannerAutoShow ();
    //�±���ͣ�л���ǰ�±�banner
    $bannerNum.mouseenter (function () {
        // banner�±��뵱ǰ�±겻�ȲŽ�����ʾ�л�����ֹͬһ�±�Ч���ظ�
        if ($iBnnerIndex != $ (this).index ()) {
            //������±�������ִ��bannerToRightЧ��
            if ($iBnnerIndex < $ (this).index ()) {
                $iBnnerIndex = $ (this).index ();
                bannerToRight ();
            }
            //������±��С����ִ��bannerToLeftЧ��
            else {
                $iBnnerIndex = $ (this).index ();
                bannerToLeft ();
            }
        }
    })
    //banner�����ͣ��ͣ
    $bannerSlider.mouseover (function () {
        clearInterval (oBannerTimer);
    })
    //banner����뿪�Զ�����
    $bannerSlider.mouseout (function () {
        bannerAutoShow ();
    })
    //��������ҳbanner������ʾЧ��
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

    //��������ҳbanner�Զ��ֲ�
    function bannerAutoShow () {
        oBannerTimer = setInterval (function () {
            $iBnnerIndex++;
            if ($iBnnerIndex == $bannerLi.size ()) {
                $iBnnerIndex = 0;
            }
            bannerToRight ()
        }, 2000)
    }

    //��Ʒ�б�����˵���չ��Ч��
    var
        $catetoryNavInfo = $ (".m-category-nav-info");
    $catetoryNavInfo.mouseenter (function () {
        /*$(this).children('.category-subnav').css({'display': "block"});*/
        $ (this).children ('.category-subnav').removeClass ("f-dn").addClass ("f-db");
    }).mouseleave (function () {
        /*$(".category-subnav:visible").css({'display': "none"});*/
        $ (this).children ('.category-subnav').removeClass ("f-db").addClass ("f-dn");
    });

    //�Ȳ���Ʒ�ֲ�Ч��
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

        // �����Ҫ��ҳ��
       // pagination: '.swiper-pagination',

        // �����Ҫǰ�����˰�ť
        nextButton: '.tv-live-btn-right',
        prevButton: '.tv-live-btn-left',

        // �����Ҫ������
        //scrollbar: '.swiper-scrollbar',
    })
})


