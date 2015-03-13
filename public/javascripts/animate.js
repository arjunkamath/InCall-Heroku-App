// ACTUAL TRIGGERS //

// MAIN TRIGGERS FOR PMA
function pma_trigger_connecting(){
	telco_cloud_appear();
	pma_connecting();
	setTimeout(it_cloud_appear, 500);
	setTimeout(converge, 4000);
	setTimeout(pma_push, 7000);
}

function pma_trigger_connected(){
	pma_connected();
}

function pma_cloud_share(urllink){
	pma_share(urllink);
}

function pma_trigger_announce(){
	pma_announce();
	
	setTimeout(pma_trigger_stop_announce, 7000);
}

function pma_trigger_stop_announce(){
	pma_announce_stop();
}

function pma_trigger_record(){
	pma_record();
	
	setTimeout(pma_trigger_stop_record, 7000);
}

function pma_trigger_stop_record(){
	pma_record_stop();
}

function pma_trigger_play(){
	pma_play();
	
	setTimeout(pma_trigger_stop_play, 7000);
}

function pma_trigger_stop_play(){
	pma_play_stop();
}

function pma_trigger_disconnect(){
	pma_disconnect();
}

// MAIN TRIGGERS FOR TRANSLATOR
function translator_connecting(){
	telco_cloud_appear();
	translate_connecting();
}

function translator_connected(){
	trans_connected();
	setTimeout(it_cloud_appear, 500 );
	setTimeout(converge, 4000);
}

var trans_app_appeared = false;

function left_press_1() {
	if (!trans_app_appeared){
		$("#trans_app").velocity({ opacity: 1 }, 1000, function(){
			trans_app_appeared = true;
			
			$('#translate_area_left')
			.velocity({ opacity: 1 }, 10);
		
			$('#english_left').velocity({ height:"23px", width: "50px" },500, function(){
				document.getElementById("tl_lang").innerHTML = "English";
			}); 
			$('#spanish_left').velocity({ height:"23px", width: "50px" },500, function(){
				document.getElementById("bl_lang").innerHTML = "Spanish";
			});
		});
	}
}

function right_press_2() {
	if (!trans_app_appeared){
		$("#trans_app").velocity({ opacity: 1 }, 1000, function(){
			trans_app_appeared = true;
		});
	}
	
	$('#translate_area_right')
		.velocity({ opacity: 1 }, 10);
		
		$('#spanish_right').velocity({ height:"23px", width: "50px" }, 500, function(){
			document.getElementById("tr_lang").innerHTML = "Spanish";
		}); 
		$('#english_right').velocity({ height:"23px", width: "50px" }, 500, function(){
			document.getElementById("br_lang").innerHTML = "English";
		});
}

function right_press_9(text1, text2) {
	enter_text_tr(text1, text2);
}

function left_press_9(text1, text2) {
	enter_text_tl(text1, text2);
}

function translator_trigger_disconnect(){
	trans_disconnect();
}


/////

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

function trans_connected(){
	$("#connecting_line").velocity("transition.fadeOut", function(){
		$("#connecting_line").velocity("stop");
		$("#connect_line").velocity({ x2: 400 }, 1000, function(){
			$("#user1").attr('xlink:href',"/images/K2.png");
			$("#user2").attr('xlink:href',"/images/J2.png");
		});
	});
}

function pma_disconnect(){
	$("#connect_line").velocity("transition.fadeOut", 2000);
	$("#user1").velocity({opacity:0.4}, 2000);
	$("#user2").velocity({opacity:0.4}, 2000);
	
	$("#audio_line_left_1").velocity({opacity:0}, 0);
	$("#audio_line_left_2").velocity({opacity:0}, 0);
	$("#audio_line_left_3").velocity({opacity:0}, 0);
	$("#audio_line_left_4").velocity({opacity:0}, 0);
	$("#audio_line_left_5").velocity({opacity:0}, 0);
	
	$("#audio_line_right_1").velocity({opacity:0}, 0);
	$("#audio_line_right_2").velocity({opacity:0}, 0);
	$("#audio_line_right_3").velocity({opacity:0}, 0);
	$("#audio_line_right_4").velocity({opacity:0}, 0);
	$("#audio_line_right_5").velocity({opacity:0}, 0);
	
	$("#record_line_left_1").velocity({opacity:0}, 0);
	$("#record_line_left_2").velocity({opacity:0}, 0);
	$("#record_line_left_3").velocity({opacity:0}, 0);
	$("#record_line_left_4").velocity({opacity:0}, 0);
	$("#record_line_left_5").velocity({opacity:0}, 0);
	
	$("#record_line_right_1").velocity({opacity:0}, 0);
	$("#record_line_right_2").velocity({opacity:0}, 0);
	$("#record_line_right_3").velocity({opacity:0}, 0);
	$("#record_line_right_4").velocity({opacity:0}, 0);
	$("#record_line_right_5").velocity({opacity:0}, 0);
	
	$("#pma_app_share").velocity("transition.fadeOut", 1000);
	$("#pma_app_play").velocity("transition.fadeOut", 1000);
	$("#pma_app_announce").velocity("transition.fadeOut", 1000);
	$("#pma_app_record").velocity("transition.fadeOut", 1000);
	
	$("#circle_share").velocity("transition.fadeOut", 1000);
	$("#circle_announce").velocity("transition.fadeOut", 1000);
	$("#circle_record").velocity("transition.fadeOut", 1000);
	$("#circle_play").velocity("transition.fadeOut", 1000);
	
	$("#pma_announce_traffic").velocity("transition.fadeOut", 1000);
	$("#pma_record_traffic").velocity("transition.fadeOut", 1000);
	$("#pma_drop").velocity("transition.fadeOut", 1000);
	
	
}

function trans_disconnect(){
	$("#connect_line").velocity("transition.fadeOut", 2000);
	$("#user1").velocity({opacity:0.4}, 2000);
	$("#user2").velocity({opacity:0.4}, 2000);
	
	$("#trans_app").velocity("transition.fadeOut", 1000);
	
	
	$("#audio_line_left_1").velocity({opacity:0}, 0);
	$("#audio_line_left_2").velocity({opacity:0}, 0);
	$("#audio_line_left_3").velocity({opacity:0}, 0);
	$("#audio_line_left_4").velocity({opacity:0}, 0);
	$("#audio_line_left_5").velocity({opacity:0}, 0);
	
	$("#audio_line_right_1").velocity({opacity:0}, 0);
	$("#audio_line_right_2").velocity({opacity:0}, 0);
	$("#audio_line_right_3").velocity({opacity:0}, 0);
	$("#audio_line_right_4").velocity({opacity:0}, 0);
	$("#audio_line_right_5").velocity({opacity:0}, 0);
	
	$("#record_line_left_1").velocity({opacity:0}, 0);
	$("#record_line_left_2").velocity({opacity:0}, 0);
	$("#record_line_left_3").velocity({opacity:0}, 0);
	$("#record_line_left_4").velocity({opacity:0}, 0);
	$("#record_line_left_5").velocity({opacity:0}, 0);
	
	$("#record_line_right_1").velocity({opacity:0}, 0);
	$("#record_line_right_2").velocity({opacity:0}, 0);
	$("#record_line_right_3").velocity({opacity:0}, 0);
	$("#record_line_right_4").velocity({opacity:0}, 0);
	$("#record_line_right_5").velocity({opacity:0}, 0);
}

function translation_line_draw_left(){
	
	height = -10 + $('#trans_tl').height();
	
	$("#trans_horiz_line").velocity({y1:height}, 0);
	$("#trans_horiz_line").velocity({y2:height}, 0);
	$("#trans_horiz_line").velocity({opacity:1}, {delay:10});
	$("#trans_horiz_line").velocity({x2:202}, 500, function(){
		$("#trans_vert_line").velocity({y2:height}, 0);
		$("#trans_vert_line").velocity({y1:height}, 0);
		$("#trans_vert_line").velocity({opacity:1}, {delay:10});
		$("#trans_vert_line").velocity({y1:-130}, 2000);
	});	
	
}

function pma_connecting() {
	
	$("#user1").attr('xlink:href',"/images/M1.png");
	$("#user2").attr('xlink:href',"/images/T1.png");
	
	$("#user1").velocity({ opacity: 1 }, 0);
	$("#user2").velocity({ opacity: 1 }, 0);
	
	connecting_line();
	$("#pma_tablet").velocity({ opacity: 1 }, { duration: 0});
}

function translate_connecting() {
	
	$("#orange_logo").velocity({ opacity: 1 }, 0);
	
	$("#user1").attr('xlink:href',"/images/K1.png");
	$("#user2").attr('xlink:href',"/images/J1.png");
	
	$("#user1").velocity({ opacity: 1 }, 0);
	$("#user2").velocity({ opacity: 1 }, 0);
	
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
	$("#circle_g").velocity({ r: 35 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_h").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_i").velocity({ r: 50 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_j").velocity({ r: 35 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_k").velocity({ r: 25 }, { duration: 2000, easing: "easeOutCirc" });
	$("#circle_l").velocity({ r: 30 }, { duration: 2000, easing: "easeOutCirc" });

	$("#it_text").velocity({ opacity: 1 }, { duration: 1000});	

	//animate IT cloud
	$("#circle_g").velocity({ r: 45 }, { delay: 3000, duration: 8000, loop:true});
	$("#circle_h").velocity({ r: 45 }, { delay: 5000, duration: 6500, loop:true});
	$("#circle_i").velocity({ r: 45 }, { delay: 1000, duration: 4500, loop:true});
	$("#circle_j").velocity({ r: 40 }, { delay: 1000, duration: 6500, loop:true});
	$("#circle_k").velocity({ r: 30 }, { delay: 1000, duration: 7000, loop:true});
	$("#circle_l").velocity({ r: 25 }, { delay: 1000, duration: 6500, loop:true});
}

function pma_share(urllink){

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
			$("#user1").attr('xlink:href',"/images/M2.png");
			$("#pma_left_line").velocity({ opacity: 1 }, 0);
			$("#pma_left_line").velocity({ x2: 49 }, 1750);
			
			if(urllink){
				var link = 'https://tabin1.punosmobile.com/pma-cloud/#/' + urllink.slice(4, -1);
				console.log(link);
	
				var frame = document.getElementById("frame_pma");
				frame.src = link;
			}

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
	
	console.log('converge');

	$("#telco_text")
	.velocity({ opacity: 0 }, { duration: 2500})
	.velocity({ y: -80 }, { duration: 2500, queue: false});	

	$("#it_text")
	.velocity({ opacity: 0 }, { duration: 2500})
	.velocity({ y: -80 }, { duration: 2500, queue: false});

	$("#circle_e").velocity("stop", true);
	$("#circle_k").velocity("stop", true);
	$("#circle_i").velocity("stop", true);
	$("#circle_l").velocity("stop", true);
	$("#circle_j").velocity("stop", true);
	$("#circle_g").velocity("stop", true);
	$("#circle_c").velocity("stop", true);
	
	$("#circle_g").velocity({ translateY: -40 }, { queue: false, duration: 2000 });
	$("#circle_h").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	$("#circle_i").velocity({ translateY: -10 }, { queue: false, duration: 2000 });
	$("#circle_j").velocity({ translateY: -25 }, { queue: false, duration: 2000 });
	//$("#circle_k").velocity({ translateY: -25 }, { queue: false, duration: 2000 });
	$("#circle_l").velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	
	$("#circle_e")
	.velocity({ r: 40 }, { queue: false, duration: 2000 })
	.velocity({ translateY: 20 }, { queue: false, duration: 2000 });

	$("#circle_k")
	.velocity({ r: 40 }, { queue: false, duration: 2000 })
	.velocity({ translateY: -50 }, { queue: false, duration: 2000 });
	
	$("#circle_l")
	.velocity({ r: 50 }, { queue: false, duration: 2000 })
	.velocity({ translateX: -30 }, { queue: false, duration: 2000 });
	
	$("#circle_g")
	.velocity({ translateX: 10, r:45 }, { queue: false, duration: 1500 });
	//.velocity({ r: 45 }, { duration: 2000 });

	
	$("#circle_i")
	.velocity({ r: 70 }, { queue: false, duration: 2000 });
	
	$("#circle_c")
	.velocity({ r: 50 }, { queue: false, duration: 2000 });
	
	$("#circle_j")
	.velocity({ r: 40 }, { queue: false, duration: 2000 });

	$("#circle_g").velocity("stop", {delay:1500, queue: false});
	
	$("#circle_g").velocity({ translateX: 15 }, { duration: 5500, loop:true});
	$("#circle_j").velocity({ translateX: -15 }, { duration: 6500, loop:true});
	$("#circle_k").velocity({ r: 45 }, { duration: 7000, loop:true});
	//$("#circle_i").velocity({ translateY: 10 }, { duration: 6000, loop:true});
	//$("#circle_l").velocity({ r: 65 }, { duration: 6500, loop:true});
	
	
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
	
	//cloud_colour_change();
	
}

function cloud_colour_change(){
	
	$("#circle_a").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_b").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_c").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_d").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_e").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_f").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_g").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_h").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_i").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_j").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_k").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 });
	$("#circle_l").velocity({ fill: "#8d92b4" }, { queue: false, duration: 4000 }); 
	
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
			$("#user2").attr('xlink:href',"/images/T3.png");
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
			$("#user2").attr('xlink:href',"/images/T2.png");
			//$("#circle_announce").velocity({ r: 3 }, { queue: false, duration: 1000 });
		});
	});
}

function animate_pma_record_traffic(){
	
	$("#pma_record_traffic").velocity({opacity:1}, { duration: 0 });
	
	function record_traffic_animate(){
		$("#pma_record_traffic")
		.velocity({ cy: -40 }, { duration: 1300 })
		.velocity({ cy: -130 }, { duration: 0 });		
	}
	record_traffic_animate();
	
	record_traffic_repeat = setInterval(function () {
		record_traffic_animate();
	}, 1300);
}

function pma_record(){
	$("#circle_share").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_announce").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_play").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_record").velocity({ r: 3 }, { duration: 500, easing:"spring" });

	$("#pma_app_share").velocity("transition.fadeOut", 1000);
	$("#pma_app_play").velocity("transition.fadeOut", 1000);
	$("#pma_app_announce").velocity("transition.fadeOut", 1000);
	$("#pma_app_record").velocity("transition.slideUpBigIn", 1000, function(){
		animate_pma_record_traffic();
	});

	$("#record_line_left_1").velocity({opacity:1}, { duration: 0 });
	$("#record_line_left_2").velocity({opacity:1}, { duration: 0 });
	$("#record_line_left_3").velocity({opacity:1}, { duration: 0 });
	$("#record_line_left_4").velocity({opacity:1}, { duration: 0 });
	$("#record_line_left_5").velocity({opacity:1}, { duration: 0 });
	$("#record_line_right_1").velocity({opacity:1}, { duration: 0 });
	$("#record_line_right_2").velocity({opacity:1}, { duration: 0 });
	$("#record_line_right_3").velocity({opacity:1}, { duration: 0 });
	$("#record_line_right_4").velocity({opacity:1}, { duration: 0 });
	$("#record_line_right_5").velocity({opacity:1}, { duration: 0 });
			
	function rec_al1(){
	$("#record_line_left_1")
	.velocity({y2:-145}, { duration: 1000, loop:2})
	.velocity({translateX:144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_al2(){
	$("#record_line_left_2")
	.velocity({y2:-150}, { duration: 2000, loop:1})
	.velocity({translateX:144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_al3(){
	$("#record_line_left_3")
	.velocity({y2:-155}, { duration: 1000, loop:2})
	.velocity({translateX:144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_al4(){
	$("#record_line_left_4")
	.velocity({y2:-150}, { duration: 1000, loop:2})
	.velocity({translateX:144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_al5(){
	$("#record_line_left_5")
	.velocity({y2:-145}, { duration: 2000, loop:1})
	.velocity({translateX:144}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_ar1(){
	$("#record_line_right_1")
	.velocity({y2:-145}, { duration: 1000, loop:2})
	.velocity({translateX:-140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_ar2(){
	$("#record_line_right_2")
	.velocity({y2:-150}, { duration: 2000, loop:1})
	.velocity({translateX:-140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_ar3(){
	$("#record_line_right_3")
	.velocity({y2:-155}, { duration: 1000, loop:2})
	.velocity({translateX:-140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_ar4(){
	$("#record_line_right_4")
	.velocity({y2:-150}, { duration: 1000, loop:2})
	.velocity({translateX:-140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	function rec_ar5(){
	$("#record_line_right_5")
	.velocity({y2:-145}, { duration: 2000, loop:1})
	.velocity({translateX:-140}, { duration: 4000, queue: false})
	.velocity({translateX:0}, { delay: 4000, duration: 0, queue: false});
	}
	
	rec_al1(); rec_al2(); rec_al3(); rec_al4(); rec_al5(); rec_ar1(); rec_ar2(); rec_ar3(); rec_ar4(); rec_ar5();
	
	animate_rec_al1 = setInterval(rec_al1, 4030);
	animate_rec_al2 = setInterval(rec_al2, 4030);
	animate_rec_al3 = setInterval(rec_al3, 4030);
	animate_rec_al4 = setInterval(rec_al4, 4030);
	animate_rec_al5 = setInterval(rec_al5, 4030);
	animate_rec_ar1 = setInterval(rec_ar1, 4030);
	animate_rec_ar2 = setInterval(rec_ar2, 4030);
	animate_rec_ar3 = setInterval(rec_ar3, 4030);
	animate_rec_ar4 = setInterval(rec_ar4, 4030);
	animate_rec_ar5 = setInterval(rec_ar5, 4030);
	
}

function pma_play(){
	$("#circle_announce").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_record").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_share").velocity({ r: 1.5 }, { duration: 500, easing:"spring" });
	$("#circle_play").velocity({ r: 3 }, { duration: 500, easing:"spring" });

	$("#pma_app_share").velocity("transition.fadeOut", 1000);
	$("#pma_app_announce").velocity("transition.fadeOut", 1000);
	$("#pma_app_record").velocity("transition.fadeOut", 1000);	
	$("#pma_app_play").velocity("transition.slideUpBigIn", 1000, function(){
		animate_pma_announce_traffic();
		
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
	
	animate_play_al1 = setInterval(al1, 4030);
	animate_play_al2 = setInterval(al2, 4030);
	animate_play_al3 = setInterval(al3, 4030);
	animate_play_al4 = setInterval(al4, 4030);
	animate_play_al5 = setInterval(al5, 4030);
	animate_play_ar1 = setInterval(ar1, 4030);
	animate_play_ar2 = setInterval(ar2, 4030);
	animate_play_ar3 = setInterval(ar3, 4030);
	animate_play_ar4 = setInterval(ar4, 4030);
	animate_play_ar5 = setInterval(ar5, 4030);
		
	});
	
	
}

var announce_traffic_repeat;

function animate_pma_announce_traffic(){
	
	$("#pma_announce_traffic").velocity({opacity:1}, { duration: 0 });
	
	function announce_traffic_animate(){
		$("#pma_announce_traffic")
		.velocity({ cy: -130 }, { duration: 1300 })
		.velocity({ cy: -40 }, { duration: 0 });		
	}
	announce_traffic_animate();
	
	announce_traffic_repeat = setInterval(function () {
		announce_traffic_animate();
	}, 1300);
}





function pma_play_stop(){
	
	//borrowed this traffic line from announce
	clearInterval(announce_traffic_repeat);
	
	clearInterval(animate_play_al1);
	clearInterval(animate_play_al2);
	clearInterval(animate_play_al3);
	clearInterval(animate_play_al4);
	clearInterval(animate_play_al5);
	
	clearInterval(animate_play_ar1);
	clearInterval(animate_play_ar2);
	clearInterval(animate_play_ar3);
	clearInterval(animate_play_ar4);
	clearInterval(animate_play_ar5);
	
}

function pma_record_stop(){
	
	clearInterval(record_traffic_repeat);
	
	clearInterval(animate_rec_al1);
	clearInterval(animate_rec_al2);
	clearInterval(animate_rec_al3);
	clearInterval(animate_rec_al4);
	clearInterval(animate_rec_al5);
	
	clearInterval(animate_rec_ar1);
	clearInterval(animate_rec_ar2);
	clearInterval(animate_rec_ar3);
	clearInterval(animate_rec_ar4);
	clearInterval(animate_rec_ar5);
	
}

function pma_announce_stop(){
	
	clearInterval(announce_traffic_repeat);
	
	clearInterval(animate_al1);
	clearInterval(animate_al2);
	clearInterval(animate_al3);
	clearInterval(animate_al4);
	clearInterval(animate_al5);
	
	clearInterval(animate_ar1);
	clearInterval(animate_ar2);
	clearInterval(animate_ar3);
	clearInterval(animate_ar4);
	clearInterval(animate_ar5);
	
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
		
	animate_pma_announce_traffic();
	
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
	
	animate_al1 = setInterval(al1, 4030);
	animate_al2 = setInterval(al2, 4030);
	animate_al3 = setInterval(al3, 4030);
	animate_al4 = setInterval(al4, 4030);
	animate_al5 = setInterval(al5, 4030);
	animate_ar1 = setInterval(ar1, 4030);
	animate_ar2 = setInterval(ar2, 4030);
	animate_ar3 = setInterval(ar3, 4030);
	animate_ar4 = setInterval(ar4, 4030);
	animate_ar5 = setInterval(ar5, 4030);
	
	});
}


var first_left = true;
var first_right = true;

function enter_text_tl(text_top, text_bottom)
{
	if(first_left){
		document.getElementById("english_left").className = "trans_mid_text_top_left";
		document.getElementById("spanish_left").className = "trans_mid_text_bottom_left";
	}
	
	document.getElementById("trans_tl").innerHTML = " ";
	if(!first_left){
		document.getElementById("trans_bl").innerHTML = " ";
		$('#trans_bl').velocity({ height: "0px" }, 0);
	}
	first_left = false;
	
	var text_string = text_top.toString();
	var length_top = text_string.length;
	var lines = Math.ceil(length_top/36);
	var top_length = 45 + (lines * 10);
	var bottom_length = 38 + (lines * 10);
	
	var top_height = top_length + "px"
	var bottom_height = bottom_length + "px"
		
	$('#trans_tl').velocity({width: "184px"}, 1000);
	$('#trans_tl').velocity({ height: [top_height,"1px"]}, {duration: 1000, queue:false}); 
	
		document.getElementById("trans_bl").innerHTML = " ";
		
		var text_string = text_bottom.toString();
		var length_top = text_string.length;
		var lines = Math.ceil(length_top/36);
		var bottom_length = 38 + (lines * 10);
		var bottom_height = bottom_length + "px"
		
		$('#trans_bl').velocity({width: "184px"}, 1000);
		$('#trans_bl').velocity({ height: [bottom_height,"0px"]}, {duration: 1000, queue:false});
			/* document.getElementById("trans_tl").innerHTML = text;
			document.getElementById("trans_bl").innerHTML = text; */
		
		
		var top_height = $('#trans_tl').outerHeight() + "px";
		var bottom_height = $('#trans_bl').outerHeight() + "px";
		console.log(top_height);
		console.log(bottom_height);
		
		setTimeout(function(){
			/* document.getElementById("english_left").className = "trans_after_text_top_left";
			document.getElementById("spanish_left").className = "trans_after_text_bottom_left"; */
			document.getElementById("trans_tl").innerHTML = text_top;
			document.getElementById("trans_bl").innerHTML = text_bottom;
		}, 700);
		
		setTimeout(function(){
			document.getElementById("english_left").className = "trans_after_text_top_left";
			document.getElementById("spanish_left").className = "trans_after_text_bottom_left";
			/* document.getElementById("trans_tl").innerHTML = text;
			document.getElementById("trans_bl").innerHTML = text; */
		}, 800);
	
}

function enter_text_bl(text)
{
	document.getElementById("spanish_left").className = "trans_after_text_bottom_left";
	/* $('#trans_bl').velocity({ width: "100%" }, 1000, function(){
			document.getElementById("trans_bl").innerHTML = text;
	}); */
	document.getElementById("trans_bl").innerHTML = text;
	$('#trans_bl')
	.delay(1000)
	.velocity("transition.slideDownBigIn", 1000);
	//document.getElementById("trans_bl").innerHTML = text;
	//translation_line_draw_left();
}



function enter_text_tr(text_top, text_bottom)
{
	document.getElementById("spanish_right").className = "trans_after_text_top_right";
	document.getElementById("english_right").className = "trans_after_text_bottom_right";
	
	document.getElementById("trans_tr").innerHTML = " ";
	if(!first_right){
		document.getElementById("trans_br").innerHTML = " ";
		$('#trans_br').velocity({ height: "0px" }, 0);
	}
	first_right = false;
	
	var text_string = text_top.toString();
	var length_top = text_string.length;
	var lines = Math.ceil(length_top/36);
	var top_length = 45 + (lines * 10);
	var bottom_length = 38 + (lines * 10);
	
	var top_height = top_length + "px"
	var bottom_height = bottom_length + "px"
		
	$('#trans_tr').velocity({width: "184px"}, 1000);
	$('#trans_tr').velocity({ height: [top_height,"1px"]}, {duration: 1000, queue:false}); 

		document.getElementById("trans_br").innerHTML = " ";
		
		var text_string = text_bottom.toString();
		var length_top = text_string.length;
		var lines = Math.ceil(length_top/36);
		var bottom_length = 38 + (lines * 10);
		var bottom_height = bottom_length + "px"
		
		$('#trans_br').velocity({width: "184px"}, 1000);
		$('#trans_br').velocity({ height: [bottom_height,"0px"]}, {duration: 1000, queue:false});		
		
		var top_height = $('#trans_tr').outerHeight() + "px";
		var bottom_height = $('#trans_br').outerHeight() + "px";
		console.log(top_height);
		console.log(bottom_height);
		
		setTimeout(function(){
			/* document.getElementById("english_left").className = "trans_after_text_top_left";
			document.getElementById("spanish_left").className = "trans_after_text_bottom_left"; */
			document.getElementById("trans_tr").innerHTML = text_top;
			document.getElementById("trans_br").innerHTML = text_bottom;
		}, 700);
}

function enter_text_br(text)
{
	setTimeout(function(){
		document.getElementById("english_right").className = "trans_after_text_bottom_right";
		document.getElementById("trans_br").innerHTML = text;
	}, 1000);
	
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


// EKAHAU
function in_factory(){
	//$("#ekahau_back").attr('xlink:href',"img/red_infactory_blue_instorage.gif");
	document.getElementById("ekahau_back").src = "/images/red_infactory_blue_instorage_png.png";
	//document.getElementById("ekahau_back").src = "/images/red_infactory_blue_instorage.gif";
}

function from_factory(){
	//$("#ekahau_back").attr('xlink:href',"img/red_fromfactory_blue_instorage.gif");
	//document.getElementById("ekahau_back").src = "/images/red_no_blue_instorage.gif";
	document.getElementById("ekahau_back").src = "/images/red_fromfactory_blue_instorage.gif"
	
	setTimeout(function() {
		//document.getElementById("ekahau_back").style.opacity = "0";
		document.getElementById("ekahau_back").src = "/images/red_fromfactory_blue_instorage_png.png";
		//document.getElementById("ekahau_back").style.opacity = "1";
	}, 7000);
}

function in_warehouse(){
	//$("#ekahau_back").attr('xlink:href',"img/red_inwarehouse_blue_instorage.gif");
	//document.getElementById("ekahau_back").src = "/images/red_no_blue_instorage.gif";
	document.getElementById("ekahau_back").src = "/images/red_inwarehouse_blue_instorage_png.png"
}

function from_warehouse(){
	//$("#ekahau_back").attr('xlink:href',"img/red_fromwarehouse_blue_instorage.gif");
	//document.getElementById("ekahau_back").src = "/images/red_no_blue_instorage.gif";
	document.getElementById("ekahau_back").src = "/images/red_fromwarehouse_blue_instorage.gif"
	
	setTimeout(function() {
		//document.getElementById("ekahau_back").style.opacity = "0";
		document.getElementById("ekahau_back").src = "/images/red_fromwarehouse_blue_instorage_png.png";
		//document.getElementById("ekahau_back").style.opacity = "1";
	}, 7000);
}

