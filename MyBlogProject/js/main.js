
			$('.carousel').carousel();
			$("audio").get(0).volume = 0.3;
			function li_active(obj){
				obj.find(">a").css({"color":"#ffc77f"});
				var oleft = obj.offset().left;
				var owidth = obj.outerWidth(true);
				$(".nav_slider").css({"left":oleft,"opacity":"1","width":owidth});
			}
			
			li_active($(".nav_active"))
			
			
			
			
			//适应屏幕决定content的margin-top值；
			function con_margin(){
				var banner_height = $(".return_image").outerHeight(true);
				$(".content").css("margin-top",banner_height);
			};
			
			
			
			var audio_index = ["images/a1.mp3","images/a2.mp3","images/a3.mp3","images/a4.mp3","images/a5.mp3"]
			window.onload=function(){
				//轮播图的带下调整
				function carimg(){
					var returnimg_h =  $(".carousel-inner img").eq(0).outerHeight(true);
					$(".carousel-inner img").css({"height":returnimg_h,"width":"100%"});
				
				};
				carimg();
				con_margin();
				window.onresize = function(){
					$(".carousel-inner img").css("height","auto");
					carimg();
					
					carimg();
					con_margin();
					li_active($(".nav_active"));
					nav_change();
				};
				nav_change();
				//导航栏的特效；
				function nav_change(){
					$(".navbar-nav>li").hover(function(){
						var auin = $(this).index()-1;
							auin = auin%5;
						$("audio").attr("src",audio_index[auin])
						$(this).find(">a").css({"color":"#ffc77f"});
						var oleft = $(this).offset().left;
						var owidth = $(this).outerWidth(true);
						$(".nav_slider").css({"left":oleft,"opacity":"1","width":owidth});
						if($(this).index() != $(".nav_active").index()){
							$(".nav_active").find(">a").css("color","rgb(119,119,119)");
						};
						
					},function(){
						li_active($(".nav_active"));
						$(this).find(">a").css({"color":"rgb(119,119,119)"})
					});
				};
			};
						
			//写一个滚动事件
			$(window).on("scroll",function(){
				
			});
			
		