var checkTimeZone = document.querySelectorAll(".check-time-zone");
var townTimeZone = document.querySelectorAll(".town-time-zone");
var containerFoundCities = document.querySelector(".container-found-cities");
var searchTown = document.querySelector(".search-town");
var inputGreenwichMeanTimeOffsetHour = document.querySelector(".input-greenwich-mean-time-offset-hour");
var inputGreenwichMeanTimeOffsetMinutes = document.querySelector(".input-greenwich-mean-time-offset-minutes")



var dataTimeZone = [3,2,2,2,2,2,1,1,-4,-4,-5,-7,9,8,7,5];
var dataTown = [];


var dataTownZone = {
	townZone_1100: ["Острова Мидуэй -11.GMT", "Американское Самоа -11.GMT"],
	townZone_1000: ["Гавайи -10.GMT"],
	townZone_930: ["Французская Полинезия -9.30.GMT", "Маркизские острова -9.30.GMT"],
	townZone_900: ["Аляска -9.GMT"],
	townZone_800: ["Тихоокеанское время (США и Канада) -8.GMT"],
	townZone_700: ["Горное время (США и Канада) -7.GMT"],
	townZone_600: ["Центральное время (США и Канада) -6.GMT", "Мехико -6.GMT"],
	townZone_500: ["Восточное время (США и Канада) -5.GMT"],
	townZone_430: ["Венесуэла -4.30.GMT"],
	townZone_400: ["Среднеатлантическое время (Канада) -4.GMT", "Сантьяго -4.GMT"],
	townZone_330: ["Ньюфаундленд (Канада) -3.30.GMT"],
	townZone_300: ["Гренландия -3.GMT", "Бразилия -3.GMT", "Монтевидео -3.GMT"],
	townZone_200: ["Центрально-Атлантическое время -2.GMT"],
	townZone_100: ["Азорские острова -1.GMT"],
	townZone000: ["Дублин 0.GMT", "Эдинбург 0.GMT", "Лиссабон 0.GMT", "Лондон 0.GMT"],
	townZone100: ["Амстердам +1.GMT", "Берлин +1.GMT", "Вена +1.GMT", "Прага +1.GMT", "Брюссель +1.GMT"],
	townZone200: ["Афины +2.GMT", "Стамбул +2.GMT", "Бейрут +2.GMT", "Каир +2.GMT", "Иерусалим +2.GMT"],
	townZone300: ["Санкт-Петербург +3.GMT", "Минск +3.GMT", "Багдад +3.GMT", "Москва +3.GMT"],
	townZone330: ["Иран +3.30.GMT"],
	townZone400: ["Волгоград +4.GMT", "Баку +4.GMT", "Ереван +4.GMT"],
	townZone430: ["Афганистан +4.30.GMT"],
	townZone500: ["Екатеринбург +5.GMT", "Ташкент +5.GMT"],
	townZone530: ["Ченнай +5.30.GMT", "Калькутта +5.30.GMT", "Мумбаи +5.30.GMT", "Нью-Дели +5.30.GMT"],
	townZone545: ["Непал +5.45.GMT"],
	townZone600: ["Омск +6.GMT", "Алматы +6.GMT"],
	townZone630: ["Мьянма +6.30.GMT", "Кокосовые острова +6.30.GMT"],
	townZone800: ["Красноярск +8.GMT", "Улан-Батор +8.GMT", "Перт +8.GMT"],
	townZone900: ["Иркутск +9.GMT"],
	townZone930: ["	Стандартное время центральной Австралии +9.30.GMT"],
	townZone1000: ["Якутск +10.GMT", "Канберра +10.GMT", "Мельбурн +10.GMT", "Сидней +10.GMT", "Хобарт +10.GMT"],
	townZone1030: ["Остров Лорд-Хау (Австралия) +10.30.GMT"],
	townZone1100: ["Владивосток +11.GMT", "Соломоновы Острова +11.GMT", "Новая Каледония +11.GMT"],
	townZone1130: ["Остров Норфолк (Австралия) +11.30.GMT"],
	townZone1200: ["Магадан +12.GMT", "Окленд +12.GMT", "Веллингтон +12.GMT"],
	townZone1245: ["Новая Зеландия +12.45.GMT", "Архипелаг Чатем +12.45"],
	townZone1300: ["Нуку-алофа +13.GMT"],
	townZone1330: ["Кирибати +13.30.GMT", "Острова Лайн +13.30.GMT"]
}

var proba = ""
var inputGreenwichMeanTimeOffsetValue = ""
var greenwichMeanTimeOffset = ""
var test = ""
/*var url = "https://www.amdoren.com/api/timezone.php?api_key=yAc8TJujnaRNdKspfGkMbXCBvk2u4c&loc=" определение вермя в городе или сране*/

function colorChange(){
	searchTown.style.background = "red";
	searchTown.style.border = 2 + "px solid red";
	searchTown.style.boxShadow = 4 + "px " + -4 + "px " + 4 + "px " + 1 + "px #eb0a0a";
}

function colorReset(){
	searchTown.style.background = "white";
	searchTown.style.border = 2 + "px solid black";
	searchTown.style.boxShadow = 4 + "px " + -4 + "px " + 4 + "px " + 1 + "px #00000000";
}

for(var i = 0; i < townTimeZone.length; i++){
	checkTimeZone[i].setAttribute("GMT", dataTimeZone[i])
}

for(var i = 0; i < townTimeZone.length; i++){
	checkTimeZone[i].addEventListener("click", function(){
		idTimeZone = ""
		var timeZoneTown = event.target
		var timeZoneTownAttribute = timeZoneTown.getAttribute("GMT")
		idTimeZone = +timeZoneTownAttribute
		console.log(idTimeZone)
	})
}

searchTown.addEventListener("click", function(){
	containerFoundCities.innerHTML = "";
	colorChange()
	setTimeout(colorReset, 200)
	inputGreenwichMeanTimeOffsetHourValue = +inputGreenwichMeanTimeOffsetHour.value
	inputGreenwichMeanTimeOffsetMinutesValue = inputGreenwichMeanTimeOffsetMinutes.value
/*	greenwichMeanTimeOffset = idTimeZone + inputGreenwichMeanTimeOffsetHourValue*/
	proba = idTimeZone + inputGreenwichMeanTimeOffsetHourValue + inputGreenwichMeanTimeOffsetMinutesValue 
	console.log(proba)
/*	test = greenwichMeanTimeOffset*(-1)
	console.log(test)*/
	testTwo = proba*(-1)
	console.log(testTwo)
	console.log(greenwichMeanTimeOffset)

	if(proba === "000"){
		var resultTown = document.createElement("div")
		resultTown.classList.add("result-town")
		containerFoundCities.appendChild(resultTown)
		resultTown.innerHTML = dataTownZone["townZone000"]
	}

	if(proba < 0){
		for(var i = 0; i < dataTownZone["townZone" + "_" + testTwo].length; i++){
			console.log("hello")
			var resultTown = document.createElement("div")
			resultTown.classList.add("result-town")
			containerFoundCities.appendChild(resultTown)
			resultTown.innerHTML = dataTownZone["townZone" + "_" + testTwo][i]

			console.log(resultTown)
			console.log(dataTownZone["townZone" + "_" + testTwo][i])
		}
	} else {
		for(var i = 0; i < dataTownZone["townZone" + +proba].length; i++){
			console.log(dataTownZone["townZone" + +proba][i])
			var resultTown = document.createElement("div")
			resultTown.classList.add("result-town")
			containerFoundCities.appendChild(resultTown)
			resultTown.innerHTML = dataTownZone["townZone" + +proba][i]
		}	
	}

})



/*"http://worldtimeapi.org/api/timezone/America/Argentina/Salta"*/