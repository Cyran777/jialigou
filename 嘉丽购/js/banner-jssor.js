/**
 * Created by Administrator on 2016/9/5.
 */
jQuery(document).ready(function ($) {
    var jssor_1_SlideshowTransitions = [
        {$Duration:1200,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:1.3,$Top:2.5}},
        {$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
        {$Duration:1500,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
        {$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
        {$Duration:1800,x:1,y:0.2,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$Jease$.$InOutSine,$Top:$Jease$.$OutWave,$Clip:$Jease$.$InOutQuad},$Outside:true,$Round:{$Top:1.3}},
        {$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
        {$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
        {$Duration:1000,y:-1,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12}},
        {$Duration:1000,x:-0.2,$Delay:40,$Cols:12,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
        {$Duration:2000,y:-1,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$Jease$.$OutJump,$Round:{$Top:1.5}}
    ];


    var options = {
        $FillMode: 	5,
        //$FillMode取值：0: stretch拉伸, 1: contain居中 (keep aspect ratio and put all inside slide), 2: cover填充 (keep aspect ratio and cover whole slide), 4: actual size实际大小, 5: contain for large image and actual size for small image大图像居中，小图像实际大小居中	|| 默认0
        // $LazyLoading: 0,            //忽略
        $StartIndex: 0,			//初始的图片下标
        $AutoPlay: true,		//自动播放	true or false||默认false
        $AutoPlaySteps:1, 		//自定义播放方式：1由左至右切换一张，2切换两张，-1向左切换
        $Loop: 1,				// $Loop取值:是否循环滚动 0: stop一次就停止, 1: loop无缝滚动, 2 rewind拉回第一张循环|| 默认1
        $Idle: 2000,			//循环速度（毫秒）,相当于定时器，多久换一张图片，默认3000
        $PauseOnHover: 2,
        //默认：0	|| 0: 不暂停, 1: 返回桌面及暂停, 2: 触摸（鼠标按下模拟）暂停, 3: 触摸（鼠标按下模拟）或者返回桌面暂停, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1
        $SlideDuration:1000,	// 动画速度，设置运动过程的时间，默认500
        // $SlideEasing	忽略
        $MinDragOffsetToSlide: 20,			//切换到下一张的拖拽距离,默认20
        $SlideSpacing: 0,					//滚动时图片的空隙，默认0
        $Cols: 1,							//有0和1两种效果，大于1禁用幻灯片
        // $Align:
        // $UISearchMode: 1,
        $PlayOrientation:1,					//滚动方向：1: 水平, 2: 垂直，默认1
        $DragOrientation: 3,				//拖动方向：0: 不能拖动, 1: 水平, 2: 垂直, 3: 水平垂直都可以
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1 			//1: 顺序	0: 随机
        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
});