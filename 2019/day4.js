var passwordCount = 0;
function rangeBetwee(start, end) {

	if (start > end) {
		var arr = new Array(start - end + 1);
		for (var i = 0; i < arr.length; i++, start--) {
			resarrult[i] = start;
		}
		return arr;
	} else {
		var arro = new Array(end - start + 1);

		for (var j = 0; j < arro.length; j++, start++) {
			arro[j] = start;
		}
		return arro;
	}
}

var range = rangeBetwee(156218, 652527);
range.forEach(myFunction);

function myFunction(value, index, array) {
	var value = value.toString();
	var first = value;
	var second = value;
	var third = value;
	var fourth = value;
	var fifth = value;
	var sixth = value;
	first = parseInt(first.charAt(0));
	second = parseInt(second.charAt(1));
	third = parseInt(third.charAt(2));
	fourth = parseInt(fourth.charAt(3));
	fifth = parseInt(fifth.charAt(4));
	sixth = parseInt(sixth.charAt(5));

	if (second >= first) {
		if (third >= second) {
			if (fourth >= third) {
				if (fifth >= fourth) {
					if (sixth >= fifth) {
						var temp = value;
						var count1 = (temp.match(/1/g) || []).length;
						var count2 = (temp.match(/2/g) || []).length;
						var count3 = (temp.match(/3/g) || []).length;
						var count4 = (temp.match(/4/g) || []).length;
						var count5 = (temp.match(/5/g) || []).length;
						var count6 = (temp.match(/6/g) || []).length;
						var count7 = (temp.match(/7/g) || []).length;
						var count8 = (temp.match(/8/g) || []).length;
						var count9 = (temp.match(/9/g) || []).length;
						var count0 = (temp.match(/0/g) || []).length;
						count1 = parseInt(count1);
						count2 = parseInt(count2);
						count3 = parseInt(count3);
						count4 = parseInt(count4);
						count5 = parseInt(count5);
						count6 = parseInt(count6);
						count7 = parseInt(count7);
						count8 = parseInt(count8);
						count9 = parseInt(count9);
						count0 = parseInt(count0);
						if (count1 == 2 || count2 == 2 || count3 == 2 || count4 == 2 || count5 == 2 || count6 == 2 || count7 == 2 || count8 == 2 || count9 == 2 || count0 == 2) {
						passwordCount = passwordCount + 1;
						}
					}
				}
			}
		}
	}
}
console.log(passwordCount);