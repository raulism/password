function countCode() {
	var password = $("#password").val();
	var key = $("#key").val()+"@shixing";
	if (password && key) {
		var md5one = $.md5(password, key);
		var md5two = $.md5(md5one, 'raulism');
		var md5three = $.md5(md5one, 'koniliu');
		var rule = md5three.split("");
		var source = md5two.split("");
		for (var i = 0; i <= 31; i++) {
			if (isNaN(source[i])) {
				str = "raulismlovekoniliuatNanjing20140302";
				if (str.search(rule[i]) > -1) {
					source[i] = source[i].toUpperCase();
				}
			}
		}
		var code32 = source.join("");
		var code1 = code32.slice(0, 1);
		if (isNaN(code1)) {
			var code16 = code32.slice(0, 16);
			var newCode16 = code32.slice(0, 2) + "&" + code32.slice(6, 8)+ "$" + code32.slice(11, 14)+ "#" + code32.slice(15, 19);
		} else {
			var code16 = code32.slice(1, 16) + "N";
			var newCode16 = code32.slice(1, 3) + "&" + code32.slice(6, 8)+ "$" + code32.slice(11, 14)+ "#" + code32.slice(15, 19);
		}
		$("#code16").val(code16);
		$('#newCode16').val(newCode16);
	}
}
