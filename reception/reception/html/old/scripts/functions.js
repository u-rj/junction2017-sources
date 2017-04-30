$(function() {

	// QiSessionオブジェクトの作成
	var session = new QiSession();

	// いずれかのボタンがタッチされたら
	$(".button").on("touchstart", function(){
		var speakString = "";
		if ($(this).attr("class") == "buttonA") {
			speakString = "イオンエンジン";
		}
		else if ($(this).attr("class") == "buttonB") {
			speakString = "コンパクト・アビオ";
		}
		else if ($(this).attr("class") == "buttonC") {
			speakString = "フェートン";
		}
		else if ($(this).attr("class") == "buttonD") {
			speakString = "スペースソーラーシート";
		}

		// Pepperにイベントを通知してデータを転送
		session.service("ALMemory").then(function (ALMemory) {
			ALMemory.raiseEvent("Sample6-3/FromWebToPepper", speakString);
		});
	});

});
