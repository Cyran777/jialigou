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
        //$FillModeȡֵ��0: stretch����, 1: contain���� (keep aspect ratio and put all inside slide), 2: cover��� (keep aspect ratio and cover whole slide), 4: actual sizeʵ�ʴ�С, 5: contain for large image and actual size for small image��ͼ����У�Сͼ��ʵ�ʴ�С����	|| Ĭ��0
        // $LazyLoading: 0,            //����
        $StartIndex: 0,			//��ʼ��ͼƬ�±�
        $AutoPlay: true,		//�Զ�����	true or false||Ĭ��false
        $AutoPlaySteps:1, 		//�Զ��岥�ŷ�ʽ��1���������л�һ�ţ�2�л����ţ�-1�����л�
        $Loop: 1,				// $Loopȡֵ:�Ƿ�ѭ������ 0: stopһ�ξ�ֹͣ, 1: loop�޷����, 2 rewind���ص�һ��ѭ��|| Ĭ��1
        $Idle: 2000,			//ѭ���ٶȣ����룩,�൱�ڶ�ʱ������û�һ��ͼƬ��Ĭ��3000
        $PauseOnHover: 2,
        //Ĭ�ϣ�0	|| 0: ����ͣ, 1: �������漰��ͣ, 2: ��������갴��ģ�⣩��ͣ, 3: ��������갴��ģ�⣩���߷���������ͣ, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1
        $SlideDuration:1000,	// �����ٶȣ������˶����̵�ʱ�䣬Ĭ��500
        // $SlideEasing	����
        $MinDragOffsetToSlide: 20,			//�л�����һ�ŵ���ק����,Ĭ��20
        $SlideSpacing: 0,					//����ʱͼƬ�Ŀ�϶��Ĭ��0
        $Cols: 1,							//��0��1����Ч��������1���ûõ�Ƭ
        // $Align:
        // $UISearchMode: 1,
        $PlayOrientation:1,					//��������1: ˮƽ, 2: ��ֱ��Ĭ��1
        $DragOrientation: 3,				//�϶�����0: �����϶�, 1: ˮƽ, 2: ��ֱ, 3: ˮƽ��ֱ������
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1 			//1: ˳��	0: ���
        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
});