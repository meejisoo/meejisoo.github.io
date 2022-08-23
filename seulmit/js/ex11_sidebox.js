$(function(){
  var duration=300; //애니메이션 실행시간 변수에 저장
  var $aside=$('.main aside'); //main aside도 변수로 저장
var $asideBtn=$('.main aside button');

//.find(자손)
// $aside.find('button').click(function(){});
//on:~할 때

$aside.find('button').on('click',function(){
  $aside.toggleClass('open');
  if($aside.hasClass('open')){//조건이 참(가지고 있으면)
    $aside.animate({
      'left':'0px'
    },duration);

    $asideBtn.find('img').attr('src','images/btn_close.png');

  }else{//hasClass('open')을 가지고 있지 않으면
    $aside.animate({
      'left':'-350px'//화면 바깥쪽으로 안 보이게
    },duration);
    $asideBtn.find('img').attr('src','images/btn_open.png');
  }


 
 });//on('click)

});//$(function({}))

//toggleClass:매개변수에 저장한 클래스명(문자열)제이쿼리 객체에 포함된 요소의 class 속성으로 지정되어 있는지 확인한 다음 지정되어 있지 않으며 추가하고 지정되어 있다면 제거하는 메소드

