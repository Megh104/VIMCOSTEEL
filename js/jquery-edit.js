$(document).ready(function(){
    
    

    
 $(window).scroll(function(){
	    
	    
	     if (jQuery(window).width() > 950) {
	    

		if($(window).scrollTop() > 30)
		{
			$(".top_arow").fadeIn();
			$(".top").addClass("clr_black");
			
			$(".fix_head").css("position","fixed");
			$(".fix_head").css("margin-top","-33px");
			$(".fix_head").css("background-color","#fff");
			$(".fix_head").css("border-bottom","1px solid #e8e8e8");
			$(".fix_head").css("z-index","9999999");
			$(".logo").css("width","70px");
			$(".logo").css("margin","0.5% 1%");
			$("#cssmenu > ul > li > a").css("padding","40px 20px");
		}
		else
		{
			$(".top_arow").fadeOut();
			$(".top").removeClass("clr_black");
			
			$(".fix_head").css("position","static");
			$(".fix_head").css("background-color","#fff");
			$(".fix_head").css("border-bottom","none");
			$(".fix_head").css("z-index","9999999");
			$(".logo").css("width","103px");
			$(".logo").css("margin","0% 1%");
			$("#cssmenu > ul > li > a").css("padding","54px 20px");
			$(".fix_head").css("margin-top","0");
			
		}
		
	     }
		else
		{
			
		}
	 
	    
	});
	
    


	//////////////////////////////////////
	
	$(".top_arow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});
	
	
	
});