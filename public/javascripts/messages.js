var last_left_message = "";
var can_receive_messages = true;
var left_toggle = false;
var right_toggle = false;
var last_div = "";

$(document).ready(function() {
	$("#genie").hide();
	$("#left_user").hide();
	$("#right_user").hide();
	$("#connection").hide();
	//sse();
	scrollPage();
	scaleConnectionImage();
});

function scaleConnectionImage() {
	var image_width = 1452;
	var total_width = $("#imageArea").width() * 2;
	var new_image_width = image_width - 1920 + total_width;
	$("#connection_image").css("width", new_image_width);
}

function sse() {
	var source = new EventSource('/stream');
	source.onmessage = function(e) {
		var message = e.data.split(":");
		var message_type = message[0];
		var text = message[1];
		var timeout = message[2];

		// FIXME: Really ugly hack to make sure that Hello Red Genie does not get shown when the phone call disconnects
		if (text == "Hello Red Genie") {
			timeout = 500;
		}

		if (timeout != 0) {
			setTimeout(function() {
				receiveMessage(message_type, text);
			}, timeout);
		} else {
			receiveMessage(message_type, text);
		}
	};
}

function conversationStart() {
	var message_type = "user_right";
	var text = "Hello";
	$("#left_caller_image").attr("src", "static/caller_left.gif?x=" + Math.random())
	$("#right_caller_image").attr("src", "static/caller_right.gif?x=" + Math.random())
	$("#left_user").fadeIn(1000);
	$("#right_user").delay(2000).fadeIn(1000);
	$("#connection").delay(2000).fadeIn(1);
	$("#connection_image")
		.delay(2000)
		.queue(function(next) { $(this).attr("src", "static/call.gif?x=" + Math.random()); next(); });

	var timeout = 7000;
	setTimeout(function() {
		receiveMessage(message_type, text);
	}, timeout);
}

function conversationEnd() {
	$("#connection").fadeOut(1000);
	$("#right_user").delay(1000).fadeOut(1000);
	$("#left_user").delay(3000).fadeOut(1000);
}

function receiveMessage(message_type, text) {
	var p_class;
	var show_notifications = false;

	if (!can_receive_messages) {
		return;
	}

	switch (message_type) {
		case "start_conversation":
			conversationStart();
			return;
		case "end_conversation":
			can_receive_messages = false;
			conversationEnd();
			setTimeout(function() {
				can_receive_messages = true;
			}, 5000);
			return;
                case "languages_left":
                        div_class = "user_left message";
                        p_class = "lang left";
                        break;
                case "languages_right":
                        div_class = "user_right message";
                        p_class = "lang right";
                        break;
		case "translate_left":
			div_class = "transl_left message";
                        if (left_toggle == false) {
                            p_class = "tb1 left up";
                            left_toggle = true;
                        } else {
                            p_class = "tb1 left down";
                            left_toggle = false;
                        }
			last_left_message = text;
			break;
		case "translate_right":
			div_class = "transl_right message";
                        if (right_toggle == false) {
                            p_class = "tb1 right up";
                            right_toggle = true;
                        } else {
                            p_class = "tb1 right down";
                            right_toggle = false;
                        }       
                        last_left_message = text;
			break;
		case "genie":
			div_class = "genie message";
			p_class = "triangle-border top";
			break;
		case "notification":
			div_class = "general notification message";
			p_class = "info";
			show_notifications = true;
			break;
		case "line":
			addLine();
			scrollPage();
			return;
		case "show_genie":
			$("#genie_image").attr("src", "static/genie_in.gif?x=" + Math.random())
				.delay(1000)
				.queue(function(next) { $(this).attr("src", "static/genie_idle.gif?x=" + Math.random()); next(); });
			$("#genie").show();
			return;
		case "hide_genie":
			$("#genie_image").attr("src", "static/genie_out.gif?x=" + Math.random());
			$("#genie").delay(1000).fadeOut(1000);
			return;
		case "play_sound":
			$("#" + text)[0].play();
			return;
		case "send_mail":
			addMailAnimation(last_left_message);
			scrollPage();
			return;
		default:
			return;
	}

	addMessageElements(div_class, p_class, text);

	if (show_notifications == true) {
		enableNotificationAnimations();
	} else {
		disableNotificationAnimations();
	}

	scrollPage();
}

function addMessageElements(div_class, p_class, text) {
	var new_div = $("<div/>").attr("class", div_class);

        if (p_class.search("lang ") == 0) {
            var splittedtext = text.split(' ');
            var span1, span2;
            if (p_class.search("lang left") == 0) {
                span1 = $("<span/>").attr("class", "lang left from").text(splittedtext[0] + ' >>> ');
                span2 = $("<span/>").attr("class", "lang left to").text(splittedtext[1]);
            } else {
                span1 = $("<span/>").attr("class", "lang right from").text(splittedtext[0] + ' >>> ');
                span2 = $("<span/>").attr("class", "lang right to").text(splittedtext[1]);
            }
            new_div.append(span1);
            new_div.append(span2);
        } else {
            var p = $("<p/>").attr("class", p_class).text(text);
            new_div.append(p);
        }
	if (p_class.search("lang left") == 0) {
            $("#imageArea").empty();
            $("#imageArea").append(new_div);
        } else if (p_class.search("lang right") == 0) {
            $("#imageArea2").empty();
            $("#imageArea2").append(new_div);
		} else {
			p.fadeIn(1000);
	    $("#messageArea").append(new_div);
		}
        
}

function appendTableRow(table, rowData) {
       var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
       lastRow.append($('<td/>').text(rowData).hide());
}

function addMailAnimation(text) {
	text = "Note:<br/>" + text;
	var new_div = $("<div/>").attr("class", "genie note sending");
	var img = $("<img/>").attr("src", "static/note.gif" + "?x=" + Math.random());
	new_div.append(img);
	img.show();


	var left_note = $("<div/>").attr("class", "user_left note");
	var right_note = $("<div/>").attr("class", "user_right note");
//        var p_left = $("<p/>").attr("class", "triangle-border plain").html(text).hide();
	var p_left = $("<p/>").attr("class", "tb1 plain").html(text).hide();
	var p_right = $("<p/>").attr("class", "triangle-border plain").html(text).hide();

	left_note.append(p_left);
	right_note.append(p_right);

	p_left.delay(1000).fadeIn(1000);
	p_right.delay(1000).fadeIn(1000);

	$("#messageArea").append(right_note);
	$("#messageArea").append(left_note);
	$("#messageArea").append(new_div);
}

function addLine() {
	var new_div = $("<div/>").attr("class", "horizontalRule").hide().fadeIn(1000);
	$("#messageArea").append(new_div);
}

function enableNotificationAnimations() {
	$('.notification').bind('fade-cycle', function() {
		$(this).fadeTo('slow', 0.1, function() {
			$(this).fadeTo('slow', 1.0, function() {
				$(this).trigger('fade-cycle');
			});
		});
	});
	$('.notification').trigger("fade-cycle");
}

function disableNotificationAnimations() {
	$('.notification').unbind("fade-cycle");
	$('.notification').stop();
	$('.notification').animate({ opacity: 0 });
	$('.notification').removeClass('notification');
}

function scrollPage() {
	$("#messageArea").animate({ scrollTop: $("#messageArea").prop("scrollHeight") }, 1000);
}
