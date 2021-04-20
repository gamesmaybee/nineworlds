function changeText(obj, text, size) {
	obj.innerText = text;
	obj.style.fontSize = size;
}

document.getElementById('sellMeat').style.visibility = 'hidden';
document.getElementById('sellLeather').style.visibility = 'hidden';
document.getElementById('sellBones').style.visibility = 'hidden';

function hideButtonMeat(obj) {
	var obj = obj;
	obj.querySelector('.xOne').style.display = 'none';
	obj.querySelector('.xTen').style.display = 'none';
	obj.querySelector('.all').style.display = 'none';
	obj.querySelector('.name').style.display = 'block';
}

function showButtonMeat(obj) {
	var obj = obj;
	obj.querySelector('.xOne').style.display = 'inline-block';
	obj.querySelector('.xTen').style.display = 'inline-block';
	obj.querySelector('.all').style.display = 'inline-block';
	obj.querySelector('.name').style.display = 'none';
}

function hideButtonLeather(obj) {
	var obj = obj;
	obj.querySelector('.xOneLeather').style.display = 'none';
	obj.querySelector('.xTenLeather').style.display = 'none';
	obj.querySelector('.allLeather').style.display = 'none';
	obj.querySelector('.nameLeather').style.display = 'block';
}

function showButtonLeather(obj) {
	var obj = obj;
	obj.querySelector('.xOneLeather').style.display = 'inline-block';
	obj.querySelector('.xTenLeather').style.display = 'inline-block';
	obj.querySelector('.allLeather').style.display = 'inline-block';
	obj.querySelector('.nameLeather').style.display = 'none';
}

function hideButtonBone(obj) {
	var obj = obj;
	obj.querySelector('.xOneBone').style.display = 'none';
	obj.querySelector('.xTenBone').style.display = 'none';
	obj.querySelector('.allBone').style.display = 'none';
	obj.querySelector('.nameBone').style.display = 'block';
}

function showButtonBone(obj) {
	var obj = obj;
	obj.querySelector('.xOneBone').style.display = 'inline-block';
	obj.querySelector('.xTenBone').style.display = 'inline-block';
	obj.querySelector('.allBone').style.display = 'inline-block';
	obj.querySelector('.nameBone').style.display = 'none';
}



function addLog(log) {
	var par = document.createElement("p");
	var node = document.createTextNode(log);
	par.appendChild(node);

	var element = document.getElementById("logs");
	// Here you can also use element.childNodes.length
	const count = document.getElementById("logs").getElementsByTagName("p").length;
	if (count >= 19) {
	element.removeChild(element.childNodes[0]);
	}
	element.appendChild(par);
};

setInterval(function() {
	document.title = credits + " " + currency + " - The 9 Worlds"
}, 100)

function openTab(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}


var credits = 0;

var leather = 0;
var meat = 0;
var bones = 0;

var currency = 'Sceattas';

var hunt = 1;
var waitTime = 5000;

var level = 0;

document.getElementById('credits').innerHTML = credits + " " + currency;
document.getElementById('leather').innerHTML = leather;
document.getElementById('meat').innerHTML = meat;
document.getElementById('bones').innerHTML = bones;

function hunting() {
	if (hunt == 1) {
		hunt = 0;
		addLog('Hunt begun. Lets hope you come back well and alive...'); 

		setTimeout (function() {

			if (level !== 3) {
				var meatGathered = Math.floor(Math.random() * 4);
				var leatherGathered = 0;
				var bonesGathered = 0;
			} else if (level == 3) {
				var meatGathered = Math.floor(Math.random() * 4);
				var leatherGathered = Math.floor(Math.random() * 3);
				var bonesGathered = Math.floor(Math.random() * 3);
				if (bonesGathered != 1) {
					bonesGathered = 0;
				};
			};
			console.log(level);

			meat = meat + meatGathered;
			leather = leather + leatherGathered;
			bones = bones + bonesGathered;
			document.getElementById('meat').innerHTML = meat;
			document.getElementById('leather').innerHTML = leather;
			document.getElementById('bones').innerHTML = bones;
			hunt = 1;
			if (meatGathered < 1 && leatherGathered < 1 && bonesGathered < 1) {
				document.getElementById('resTable').style.visibility = 'visible';
				document.getElementById('meatRow').style.display = 'block';
				var ranLog = Math.floor(Math.random() * 3) + 1;
				if (ranLog == 1) {
					addLog("A wolf chased you out of the forest and you gathered no resources");
				}
				if (ranLog == 2) {
					addLog("A bear chased you out of the forest and you gathered no resources");
				}
				if (ranLog == 3) {
					addLog("A rabbit was too cute to kill, therefore you gathered no resources");
				}
			} else if (meatGathered > 0 || leatherGathered > 0 || bonesGathered > 0){
				document.getElementById('resTable').style.visibility = 'visible';
				document.getElementById('meatRow').style.display = 'block';
				var ranLog = Math.floor(Math.random() * 3) + 1;
				if (ranLog == 1) {
					addLog("Hunt successful! A wolf chased you, but you killed it");
				}
				if (ranLog == 2) {
					addLog("Hunt successful! A bear chased you, but you killed it");
				}
				if (ranLog == 3) {
					addLog("Hunt successful! A mad rabbit chased you, but you killed it");
				}				
			}
			if (level == 0 && meatGathered > 0) {
				level = 1;
				levelOne();
			}
		}, waitTime);	
	}
};

function buySword(obj) {
	var obj = obj;
	if (credits < 15) {
		addLog('Not enough Sceattas');
	} else {
		levelThree();
		obj.style.display = 'none';
		credits = credits - 15;
		document.getElementById('credits').innerHTML = credits + " " + currency;
	}
}

function sellOneMeat() {
	addLog('One meat sold');
	credits = credits + 1;
	meat = meat - 1;
	if (credits == 1) {
		currency = 'Sceat';
	} else {
		currency = 'Sceattas';
	};
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('meat').innerHTML = meat;
	if (level == 1 && credits >= 10) {
		level = 2;
		levelTwo();
	}
};
function sellTenMeat() {
	if (meat < 10) {
		addLog('All meat sold'); 
		credits = credits + meat;
		meat = 0
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
		document.getElementById('meat').innerHTML = meat;
		if (level == 1 && credits >= 10) {
			level = 2;
			levelTwo();
		}
	} else if (meat > 9) {
		addLog('Ten meat sold'); 
		credits = credits + 10;
		meat = meat - 10
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
		document.getElementById('meat').innerHTML = meat;
		if (level == 1 && credits >= 10) {
			level = 2;
			levelTwo();
		}
	}
};
function sellAllMeat() {
	addLog('All meat sold'); 
	credits = credits + meat;
	meat = 0
	if (credits == 1) {
		currency = 'Sceat';
	} else {
		currency = 'Sceattas';
	};
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('meat').innerHTML = meat;
	if (level == 1 && credits >= 10) {
		level = 2;
		levelTwo();
	}
};



function sellOneLeather() {
	addLog('One leather sold');
	credits = credits + 2;
	leather = leather - 1;
	if (credits == 1) {
		currency = 'Sceat';
	} else {
		currency = 'Sceattas';
	};
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('leather').innerHTML = leather;
};
function sellTenLeather() {
	if (leather < 10) {
		addLog('All leather sold'); 
		credits = credits + (leather * 2);
		leather = 0
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
		document.getElementById('leather').innerHTML = leather;
	} else if (leather > 9) {
		addLog('Ten leather sold'); 
		credits = credits + 20;
		leather = leather - 10
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
		document.getElementById('leather').innerHTML = leather;
	}
};
function sellAllLeather() {
	addLog('All leather sold'); 
	credits = credits + (leather * 2);
	leather = 0
	if (credits == 1) {
		currency = 'Sceat';
	} else {
		currency = 'Sceattas';
	};
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('leather').innerHTML = leather;
};


function sellOneBone() {
	addLog('One bone sold');
	credits = credits + 5;
	bones = bones - 1;
	if (credits == 1) {
		currency = 'Sceat';
	} else {
		currency = 'Sceattas';
	};
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('bones').innerHTML = bones;
};
function sellTenBone() {
	if (bones < 10) {
		addLog('All bones sold'); 
		credits = credits + (bones * 5);
		bones = 0
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
		document.getElementById('bones').innerHTML = bones;
	} else if (bones > 9) {
		addLog('Ten bones sold'); 
		credits = credits + 50;
		bones = bones - 10
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
		document.getElementById('bones').innerHTML = bones;
	}
};
function sellAllBone() {
	addLog('All bones sold'); 
	credits = credits + (bones * 5);
	bones = 0
	if (credits == 1) {
		currency = 'Sceat';
	} else {
		currency = 'Sceattas';
	};
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('bones').innerHTML = bones;
};


function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem('gameSave'));
	if (typeof savedGame.credits !== "undefined") {credits = savedGame.credits;};
	if (typeof savedGame.leather !== "undefined") {leather = savedGame.leather;};
	if (typeof savedGame.meat !== "undefined") {meat = savedGame.meat;};
	if (typeof savedGame.bones !== "undefined") {bones = savedGame.bones;};
	if (typeof savedGame.level !== "undefined") {level = savedGame.level;};
	if (typeof savedGame.waitTime !== "undefined") {waitTime = savedGame.waitTime;};
	if (level == 1) {
		levelOne();
	}
	if (level == 2) {
		levelTwo();
	}
	if (level == 3) {
		levelThree();
	}
}

window.onload = function() {
	loadGame();
};


function saveGame() {
	var gameSave = {
		credits: credits,
		leather: leather,
		meat: meat,
		bones: bones,
		level: level,
		waitTime: waitTime
	}
	localStorage.setItem('gameSave', JSON.stringify(gameSave));
};

setInterval(function() {
	saveGame();
}, 30000);


function levelOne() {
	document.getElementById('sellMeat').style.visibility = 'visible';

	level = 1;
}
function levelTwo () {
	document.getElementById('upgradesButton').style.visibility = 'visible';

	level = 2;
}
function levelThree() {
	document.getElementById('sellLeather').style.visibility = 'visible';
	document.getElementById('sellBones').style.visibility = 'visible';
	document.getElementById('leatherRow').style.display = 'block';
	document.getElementById('boneRow').style.display = 'block';
	document.getElementById('buildingsButton').style.visibility = 'visible';
	document.getElementById('toolsButton').style.visibility = 'visible';
	level = 3;
}