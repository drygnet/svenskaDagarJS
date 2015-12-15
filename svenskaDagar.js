var sd = (function () {
	var method = {
        year: function (year) {
			if (!year) { year = new Date() };
			if (year instanceof Date) { year = year.getFullYear() };
			var startDate = new Date(year, 0, 1, 0, 0, 0, 0);
			var endDate = new Date(year, 11 + 1, 0);
			console.log(startDate);
			console.log(endDate);
			console.log(easter(year));
        },
		month: function (year, month) {
			if (!year) { year = new Date() };
			if (year instanceof Date) {
				month = year.getMonth() + 1;
				year = year.getFullYear();
			};
			var startDate = new Date(year, month - 1, 1, 0, 0, 0, 0);
			var endDate = new Date(year, month, 0);
			console.log(startDate);
			console.log(endDate);
        },
		calendarYear: function (year) {
			if (!year) { year = new Date() };
			if (year instanceof Date) { year = year.getFullYear() };
			var startDate = getMonday(new Date(year, 0, 1, 0, 0, 0, 0));
			var endDate = getSunday(new Date(year, 11 + 1, 0));
			console.log(startDate);
			console.log(endDate);
        },
		calendarMonth: function (year, month) {
			if (!year) { year = new Date() };
			if (year instanceof Date) {
				month = year.getMonth() + 1;
				year = year.getFullYear();
			};
			var startDate = getMonday(new Date(year, month - 1, 1, 0, 0, 0, 0));
			var endDate = getSunday(new Date(year, month, 0));
			console.log(startDate);
			console.log(endDate);
        },
		week: function (year, month, day) {
			if (!year) { year = new Date() };
			if (year instanceof Date) {
				day = year.getDate();
				month = year.getMonth() + 1;
				year = year.getFullYear();
			};
			var startDate = getMonday(new Date(year, month - 1, day));
			var endDate = getSunday(new Date(year, month - 1, day))
			console.log(startDate);
			console.log(endDate);
        },
		weekByNumber: function (year, week) {
			var startDate = w2date(year, week, 0);
			var endDate = w2date(year, week, 6);
			console.log(startDate);
			console.log(endDate);
        },
		day: function (year, month, day) {
			if (!year) { year = new Date() };
			if (year instanceof Date) {
				day = year.getDate();
				month = year.getMonth() + 1;
				year = year.getFullYear();
			};
			var startDate = new Date(year, month - 1, day, 0, 0, 0, 0)
			var endDate = startDate;
			console.log("Day Startdate: " + startDate);
			console.log("Day Enddate: " + endDate);
        }
    }

    return method;
	
	//helpers
	function getMonday(d) {
		d = new Date(d);
		var day = d.getDay(),
			diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
		return new Date(d.setDate(diff));
	}

	function getSunday(d) {
		d = new Date(d);
		var day = d.getDay(),
			diff = d.getDate() - day + (day == 0 ? 0 : 7); // dont adjust when day is sunday
		return new Date(d.setDate(diff));
	}

	function easter(Y) {
		var C = Math.floor(Y / 100);
		var N = Y - 19 * Math.floor(Y / 19);
		var K = Math.floor((C - 17) / 25);
		var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
		I = I - 30 * Math.floor((I / 30));
		I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
		var J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
		J = J - 7 * Math.floor(J / 7);
		var L = I - J;
		var M = 3 + Math.floor((L + 40) / 44);
		var D = L + 28 - 31 * Math.floor(M / 4);

		return new Date(Y, M - 1, D)
	}

	function w2date(year, wn, dayNb) {
		var j10 = new Date(year, 0, 10, 12, 0, 0),
			j4 = new Date(year, 0, 4, 12, 0, 0),
			mon1 = j4.getTime() - j10.getDay() * 86400000;
		return new Date(mon1 + ((wn - 1) * 7 + dayNb) * 86400000);
	};


} ());