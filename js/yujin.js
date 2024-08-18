$(document).ready(function(){
	
	//상단메뉴: 주메뉴에 마우스갖다대면
	$("header li>a").on("mouseenter click", function(){
		
		//주메뉴 활성화유지
		$("header li>a").removeClass("active");
		$(this).addClass("active");
		
		//부메뉴
		$("header").stop().animate({height:"260px"});
		$("header nav").css("display", "block");
	});
	//상단메뉴: 주메뉴+부메뉴에서 마우스벗어나면
	$("header ul").mouseleave(function(){
		$("header li>a").removeClass("active");
		$("header").stop().animate({height:"100px"});
		$("header nav").css("display", "none");
	});
	//상단메뉴: 탭키로 마지막 부메뉴를 떠날때 (blur => 포커스를 잃을때)
	$("header li:last-child>nav>a:last").blur(function(){
		$("header li>a").removeClass("active");
		$("header").stop().animate({height:"100px"});
		$("header nav").css("display", "none");
	});
	
	//슬라이드이미지(페이드기법)
	var x = setInterval(fade,3000);
	var i = 2;
	function fade(){
		if(i==0 /*i가 0과 같다면*/){
			i=2; /*i에 2를 넣어라 => i의 값은 2가 된다*/
			$("#visual>a").fadeIn();
		} else {
			$("#visual>a").eq(i).fadeOut("slow");
			i--; /*i=i-1; i값에서 1을빼라*/
		}
	}
	
	//공지사항 팝업
	$(".pop").click(function(){
		$("#black").fadeIn();
	});
	//공지사항:닫기
	$("#black input").click(function(){
		$("#black").fadeOut();
	});
	
});//end






