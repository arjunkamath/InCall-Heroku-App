function connecting_line(){
	function connecting_line_animate(){
		$("#connecting_line")
			.velocity({ x2: 400 }, {duration: 1500})
			.velocity({ x2: -56 }, { duration: 0 });	
	}
	connecting_line_animate();
	
	setInterval(function () {
		connecting_line_animate();
	}, 1500);
}

//comment

function trans_connected(){
	$("#connecting_line").velocity("transition.fadeOut", function(){
		$("#connecting_line").velocity("stop");
		$("#connect_line").velocity({ x2: 400 }, 1000);
	});
}

function pma_connecting() {
	connecting_line();
	$("#pma_tablet").velocity({ opacity: 1 }, { duration: 0});
}

function translate_connecting() {
	connecting_line();
}

function telco_cloud_appear(){
	$("#circle_a").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_b").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_c").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_d").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_e").velocity({ r: 25 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_f").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });

	$("#telco_text").velocity({ opacity: 1 }, { duration: 1000});
	
	//animate telco cloud
	$("#circle_a").velocity({ r: 35 }, { delay: 3000, duration: 7500, loop:true});
	$("#circle_b").velocity({ r: 45 }, { delay: 5000, duration: 6500, loop:true});
	$("#circle_c").velocity({ r: 45 }, { delay: 1000, duration: 8500, loop:true});
	$("#circle_d").velocity({ r: 35 }, { delay: 1500, duration: 6000, loop:true});
	$("#circle_e").velocity({ r: 30 }, { delay: 1000, duration: 6500, loop:true});
	$("#circle_f").velocity({ r: 25 }, { delay: 1000, duration: 6500, loop:true});
	
}

function it_cloud_appear(){
	$("#circle_g").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_h").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_i").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_j").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_k").velocity({ r: 25 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_l").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });

	$("#it_text").velocity({ opacity: 1 }, { duration: 1000});	

	//animate IT cloud
	$("#circle_g").velocity({ r: 35 }, { delay: 3000, duration: 8000, loop:true});
	$("#circle_h").velocity({ r: 45 }, { delay: 5000, duration: 6500, loop:true});
	$("#circle_i").velocity({ r: 45 }, { delay: 1000, duration: 4500, loop:true});
	$("#circle_j").velocity({ r: 35 }, { delay: 1000, duration: 6500, loop:true});
	$("#circle_k").velocity({ r: 30 }, { delay: 1000, duration: 7000, loop:true});
	$("#circle_l").velocity({ r: 25 }, { delay: 1000, duration: 6500, loop:true});
}

function pma_share(){

	$("#circle_announce").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_record").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_play").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_share").velocity({ r: 3 }, { duration: 500, easing:"spring" });

	
	$("#pma_app_share").velocity("transition.slideUpBigIn", 1000, function(){
		//$("#pma_app_play").velocity({opacity:0}, 0);
		//$("#pma_app_announce").velocity({opacity:0}, 0);
		//$("#pma_app_record").velocity({opacity:0}, 0);
		$("#envelope").velocity({ opacity: 1 }, 0);
		$("#envelope").velocity({ x: -50 }, 2000, function(){
			$("#pma_left_line").velocity({ opacity: 1 }, 0);
			$("#pma_left_line").velocity({ x2: 49 }, 1750);

			document.getElementById("frame_pma").style.border="5px solid #7B0663";
			document.getElementById("frame_pma").style.borderRadius="10px";

			$("#frame_pma")
			.velocity({ opacity: 1 }, { duration: 0 })
			.velocity({ width: 300 }, 1750, function(){
				$("#pma_frame_gap").velocity({ height: "20px" }, { duration: 1000});
				$("#frame_pma").velocity({ height: 350 }, { duration: 1750});		
			});			
		});
	});
}

function converge(){
	
	console.log('converge_now');

	$("#telco_text")
	.velocity({ opacity: 0 }, { duration: 2500})
	.velocity({ y: -80 }, { duration: 2500, queue: false});	

	$("#it_text")
	.velocity({ opacity: 0 }, { duration: 2500})
	.velocity({ y: -80 }, { duration: 2500, queue: false});

	$("#circle_e").velocity("stop", true);
	$("#circle_k").velocity("stop", true);
	
	$("#circle_g").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	$("#circle_h").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	$("#circle_i").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	$("#circle_j").velocity({ translateY: -30 }, { queue: false, duration: 2000 });
	$("#circle_k").velocity({ translateY: -25 }, { queue: false, duration: 2000 });
	$("#circle_l").velocity({ translateY: -30 }, { queue: false, duration: 2000 });
	
	$("#circle_e")
	.velocity({ r: 40 }, { queue: false, duration: 2000 })
	.velocity({ translateY: 20 }, { queue: false, duration: 2000 });

	$("#circle_k")
	.velocity({ r: 40 }, { queue: false, duration: 2000 })
	.velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	
	$("#circle_a").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_b").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_c").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_d").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_e").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_f").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_g").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_h").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_i").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_j").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_k").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	$("#circle_l").velocity({ fill: "#baddee" }, { queue: false, duration: 2000 });
	
}

function pma_connected() {
	
	$("#connecting_line").velocity("transition.fadeOut", function(){
		$("#connecting_line").velocity("stop");
		//$("#connect_line_border").velocity({ x2: 400 }, 1000);
		$("#connect_line").velocity({ x2: 400 }, 1000, function(){
			$("#circle_share").velocity({ r: 3 }, { queue: false, delay: 0, duration: 250 });
			$("#circle_share").velocity({ r: 1.5 }, { queue: false, delay: 250, duration: 250 });
			$("#circle_announce").velocity({ r: 3 }, { queue: false, delay: 500, duration: 250 });
			$("#circle_announce").velocity({ r: 1.5 }, { queue: false, delay: 750, duration: 250 });
			$("#circle_record").velocity({ r: 3 }, { queue: false, delay: 1000, duration: 250 });
			$("#circle_record").velocity({ r: 1.5}, { queue: false, delay: 1250, duration: 250 });
			$("#circle_play").velocity({ r: 3 }, { queue: false, delay: 1500, duration: 250 });
			$("#circle_play").velocity({ r: 1.5 }, { queue: false, delay: 1750, duration: 250 });
		});
	});
	
	console.log('connected');
}

function pma_push(){
	//$("#folder_pma_back").velocity({opacity:1}, { duration: 0 });
	$("#folder_pma").velocity({opacity:1}, { duration: 0 });
	//$("#folder_pma").velocity("callout.bounce");
	$("#pma_app_drop")
	.velocity({ r:15 }, { duration: 500 })
	.velocity("reverse", { delay:500, duration: 1000 });
	
	$("#pma_drop")
	.velocity({ r:10 }, { duration: 1000 })
	.velocity({translateY : 100}, 1500, function(){
		var logo_img = "/images/folder_pma_logo.svg";
		$("#folder_pma").attr('xlink:href',logo_img);
		//$("#folder_pma").velocity("callout.bounce", 1000);
		$("#pma_right_line").velocity({ x2: 400 }, 1000, function(){
			$("#pma_tablet").attr('xlink:href',"/images/tablet_pma_logo.svg");
			//$("#circle_announce").velocity({ r: 3 }, { queue: false, duration: 1000 });
		});
	});
}

function pma_record(){
	$("#circle_share").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_announce").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_play").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_record").velocity({ r: 3 }, { duration: 500, easing:"spring" });

	$("#pma_app_share").velocity("transition.fadeOut", 1000);
	$("#pma_app_play").velocity("transition.fadeOut", 1000);
	$("#pma_app_announce").velocity("transition.fadeOut", 1000);
	$("#pma_app_record").velocity("transition.slideUpBigIn", 1000);

}

function pma_play(){
	$("#circle_announce").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_record").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_share").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_play").velocity({ r: 3 }, { duration: 500, easing:"spring" });

	$("#pma_app_share").velocity("transition.fadeOut", 1000);
	$("#pma_app_announce").velocity("transition.fadeOut", 1000);
	$("#pma_app_record").velocity("transition.fadeOut", 1000);	
	$("#pma_app_play").velocity("transition.slideUpBigIn", 1000);
}

function pma_announce_stop(){
	/* $("#audio_line_left_1").velocity("stop");
	$("#audio_line_left_2").velocity("stop");
	$("#audio_line_left_3").velocity("stop");
	$("#audio_line_left_4").velocity("stop");
	$("#audio_line_left_5").velocity("stop");
	$("#audio_line_right_1").velocity("stop");
	$("#audio_line_right_2").velocity("stop");
	$("#audio_line_right_3").velocity("stop");
	$("#audio_line_right_4").velocity("stop");
	$("#audio_line_right_5").velocity("stop"); */



}

function pma_announce(){

	$("#circle_play").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_record").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_share").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_announce").velocity({ r: 3 }, { duration: 500, easing:"spring" });

	$("#pma_app_share").velocity("transition.fadeOut", 1000);
	$("#pma_app_play").velocity("transition.fadeOut", 1000);
	$("#pma_app_record").velocity("transition.fadeOut", 1000);	
	$("#pma_app_announce").velocity("transition.slideUpBigIn", 1000, function(){
	
	$("#audio_line_left_1").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_2").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_3").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_4").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_left_5").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_1").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_2").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_3").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_4").velocity({opacity:1}, { duration: 0 });
	$("#audio_line_right_5").velocity({opacity:1}, { duration: 0 });
	
	/*
	$("#audio_line_left_1").velocity({y2:-160}, { duration: 500, loop:true, queue: false});
	$("#audio_line_left_2").velocity({y2:-150}, { duration: 900, loop:true });
	$("#audio_line_left_3").velocity({y2:-155}, { duration: 200, loop:true });
	$("#audio_line_left_4").velocity({y2:-150}, { duration: 400, loop:true });
	$("#audio_line_right_1").velocity({y2:-160}, { duration: 500, loop:true });
	$("#audio_line_right_2").velocity({y2:-150}, { duration: 900, loop:true });
	$("#audio_line_right_3").velocity({y2:-155}, { duration: 200, loop:true });
	$("#audio_line_right_4").velocity({y2:-150}, { duration: 400, loop:true }); */
	
		
	function al1(){
	$("#audio_line_left_1")
	.velocity({y2:-145}, { duration: 1000, loop:2})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al2(){
	$("#audio_line_left_2")
	.velocity({y2:-150}, { duration: 2000, loop:1})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al3(){
	$("#audio_line_left_3")
	.velocity({y2:-155}, { duration: 1000, loop:2})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al4(){
	$("#audio_line_left_4")
	.velocity({y2:-150}, { duration: 1000, loop:2})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function al5(){
	$("#audio_line_left_5")
	.velocity({y2:-145}, { duration: 2000, loop:1})
	.velocity({translateX:-144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar1(){
	$("#audio_line_right_1")
	.velocity({y2:-145}, { duration: 1000, loop:2})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar2(){
	$("#audio_line_right_2")
	.velocity({y2:-150}, { duration: 2000, loop:1})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar3(){
	$("#audio_line_right_3")
	.velocity({y2:-155}, { duration: 1000, loop:2})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar4(){
	$("#audio_line_right_4")
	.velocity({y2:-150}, { duration: 1000, loop:2})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function ar5(){
	$("#audio_line_right_5")
	.velocity({y2:-145}, { duration: 2000, loop:1})
	.velocity({translateX:140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	al1(); al2(); al3(); al4(); al5(); ar1(); ar2(); ar3(); ar4(); ar5();
	
	setInterval(al1, 4030);
	setInterval(al2, 4030);
	setInterval(al3, 4030);
	setInterval(al4, 4030);
	setInterval(al5, 4030);
	setInterval(ar1, 4030);
	setInterval(ar2, 4030);
	setInterval(ar3, 4030);
	setInterval(ar4, 4030);
	setInterval(ar5, 4030);
	
	/* $("#audio_line_left_2").velocity({translateX:-260}, { duration: 2000, queue: false, loop:true});
	$("#audio_line_left_3").velocity({translateX:-260}, { duration: 2000, queue: false, loop:true});
	$("#audio_line_left_4").velocity({translateX:-260}, { duration: 2000, queue: false, loop:true});
	
	$("#audio_line_right_1").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false });
	$("#audio_line_right_2").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false });
	$("#audio_line_right_3").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false });
	$("#audio_line_right_4").velocity({translateX:260}, { delay: 500, duration: 2000, queue: false }); */
	});
}

function translate_app() {
	
	$('#translate_area').velocity({ opacity: 1 }, 0);
	$("#trans_app").velocity("transition.slideUpBigIn", 1000);
	
}

function enter_text_tl(text)
{
	document.getElementById("trans_tl").innerHTML = document.getElementById("textbox").value;
}

function enter_text_bl(text)
{
	document.getElementById("trans_bl").innerHTML = document.getElementById("textbox").value;
}

function enter_text_tr(text)
{
	document.getElementById("trans_tr").innerHTML = document.getElementById("textbox").value;
}

function enter_text_br(text)
{
	document.getElementById("trans_br").innerHTML = document.getElementById("textbox").value;
}

function disconnected() {
	int3 = setTimeout(function in2() {
  	$("#connect_line").velocity("transition.fadeOut", 750)
	}, 1000);
		
	console.log('disconnected');
}

function share_meeting(urllink) {
	
	var link = 'https://tabin1.punosmobile.com/pma-cloud/#/' + urllink.slice(3);

  	$("#sms_box").velocity({ x: "-=1000"}, 2000, function(){
		$('#vertical_line_left').velocity({ opacity: 1 }, 0);
		$('#vertical_line_left').velocity({ y2: 135 }, 500, function(){
			var frame = document.getElementById("frame_pma");
			frame.style.opacity = "0";
			frame.src = link;
			frame.style.height = 260+"px";
			frame.style.width = 100+"%"; 
		//	frame.style.border="medium double rgb(0,0,0)";
			$('#frame_pma').velocity({ opacity: 1 }, 1250, function(){
				$('#horizontal_line_user1').velocity({ opacity: 1 }, 0);
				$('#horizontal_line_user1').velocity({ x1: 30 }, 2000, function(){
					$('#vertical_line_user1').velocity({ opacity: 1 }, 0);			
					$('#vertical_line_user1').velocity({ y1: -5 }, 1250);
				});
			});
		});
	});
}

/*
function punos_frame(urllink) {
	setTimeout(function () {
	$("#vertical_line")
		.velocity("transition.slideDownBigIn")
	}, 1000);
	
	var link = 'https://tabin1.punosmobile.com/pma-cloud/#/' + urllink.slice(3);
	console.log('link');
	
	$('#app_area_wrapper').velocity({borderColor: "#00285F"}, 2000);

	var frame = document.getElementById("frame_pma");
	frame.src = link;
	frame.style.width = 100+"%"; 
	frame.style.height = 260+"px";
	frame.style.opacity = "0";
	$('#frame_pma').velocity({ opacity: 1 }, 1250);

	var line_1 = document.getElementById("pma_user1_line");
	line_1.style.width = 100+"%"; 
	line_1.style.height = 260+"px";

	var line_2 = document.getElementById("pma_user2_line");
	line_2.style.width = 100+"%"; 
	line_2.style.height = 260+"px"; 

	console.log('punos frame');
}
*/

