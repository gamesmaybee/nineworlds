function changeText(obj, text, size) {
	obj.innerText = text;
	obj.style.fontSize = size;
}

document.getElementById('sellMeat').style.visibility = 'hidden';
document.getElementById('sellLeather').style.visibility = 'hidden';
document.getElementById('sellFur').style.visibility = 'hidden';
document.getElementById('sellBones').style.visibility = 'hidden';
document.getElementById('craftBait').style.visibility = 'hidden';
document.getElementById('buyGripSelf').style.display = 'none';

function hideButtonMeat(obj) {
	var obj = obj;
	obj.querySelector('.xOne').style.display = 'none';
	obj.querySelector('.xTen').style.display = 'none';
	obj.querySelector('.xHund').style.display = 'none';
	obj.querySelector('.all').style.display = 'none';
	obj.querySelector('.name').style.display = 'block';
}

function showButtonMeat(obj) {
	var obj = obj;
	obj.querySelector('.xOne').style.display = 'inline-block';
	obj.querySelector('.xTen').style.display = 'inline-block';
	obj.querySelector('.xHund').style.display = 'inline-block';
	obj.querySelector('.all').style.display = 'inline-block';
	obj.querySelector('.name').style.display = 'none';
}

function hideButtonLeather(obj) {
	var obj = obj;
	obj.querySelector('.xOneLeather').style.display = 'none';
	obj.querySelector('.xTenLeather').style.display = 'none';
	obj.querySelector('.xHundLeather').style.display = 'none';
	obj.querySelector('.allLeather').style.display = 'none';
	obj.querySelector('.nameLeather').style.display = 'block';
}

function showButtonLeather(obj) {
	var obj = obj;
	obj.querySelector('.xOneLeather').style.display = 'inline-block';
	obj.querySelector('.xTenLeather').style.display = 'inline-block';
	obj.querySelector('.xHundLeather').style.display = 'inline-block';
	obj.querySelector('.allLeather').style.display = 'inline-block';
	obj.querySelector('.nameLeather').style.display = 'none';
}

function hideButtonFur(obj) {
	var obj = obj;
	obj.querySelector('.xOneFur').style.display = 'none';
	obj.querySelector('.xTenFur').style.display = 'none';
	obj.querySelector('.xHundFur').style.display = 'none';
	obj.querySelector('.allFur').style.display = 'none';
	obj.querySelector('.nameFur').style.display = 'block';
}

function showButtonFur(obj) {
	var obj = obj;
	obj.querySelector('.xOneFur').style.display = 'inline-block';
	obj.querySelector('.xTenFur').style.display = 'inline-block';
	obj.querySelector('.xHundFur').style.display = 'inline-block';
	obj.querySelector('.allFur').style.display = 'inline-block';
	obj.querySelector('.nameFur').style.display = 'none';
}

function hideButtonBone(obj) {
	var obj = obj;
	obj.querySelector('.xOneBone').style.display = 'none';
	obj.querySelector('.xTenBone').style.display = 'none';
	obj.querySelector('.xHundBone').style.display = 'none';
	obj.querySelector('.allBone').style.display = 'none';
	obj.querySelector('.nameBone').style.display = 'block';
}

function showButtonBone(obj) {
	var obj = obj;
	obj.querySelector('.xOneBone').style.display = 'inline-block';
	obj.querySelector('.xTenBone').style.display = 'inline-block';
	obj.querySelector('.xHundBone').style.display = 'inline-block';
	obj.querySelector('.allBone').style.display = 'inline-block';
	obj.querySelector('.nameBone').style.display = 'none';
}

function hideButtonBait(obj) {
	var obj = obj;
	obj.querySelector('.xOneBait').style.display = 'none';
	obj.querySelector('.xTenBait').style.display = 'none';
	obj.querySelector('.xHundBait').style.display = 'none';
	obj.querySelector('.nameBait').style.display = 'block';
}

function showButtonBait(obj) {
	var obj = obj;
	obj.querySelector('.xOneBait').style.display = 'inline-block';
	obj.querySelector('.xTenBait').style.display = 'inline-block';
	obj.querySelector('.xHundBait').style.display = 'inline-block';
	obj.querySelector('.nameBait').style.display = 'none';
}



function addLog(log, colour, weight, width) {
	var par = document.createElement("p");
	par.style.color = colour
	par.style.borderColor = colour
	par.style.fontWeight = weight
	par.style.borderWidth = width
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
	document.title = credits + " Sceattas - The 9 Worlds"
}, 500);

setInterval(function() {
	checkTraps();
}, 10000);

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

var meat = 0;
var leather = 0;
var fur = 0;
var bones = 0;

var bait = 0;

var hunt = 1;
var waitTime = 5000;
var frameTime = 50;
var ropeLength = 0;
var ropeStrength = 0;
var trapNum = 0;
var trapPrice = 25;
var trapBought = 0;
var trapPercentNum = 20;
var trapPercent = 5;
var resourcesNum = 5;

var huntNum = 'from 0 to 2';
var sword = 'wooden';

var level = 0;

var intRepeat = 0;

function hunting() {
	if (hunt == 1) {
		hunt = 0;
		addLog('Hunt begun. Lets hope you come back well and alive...', 'black', 'light', '1px'); 

		setTimeout (function() {

			if (level < 3) {
				var meatGathered = Math.floor(Math.random() * 4);
				var leatherGathered = 0;
				var furGathered = 0;
				var bonesGathered = 0;
			} else if (level >= 3) {
				var meatGathered = Math.floor(Math.random() * resourcesNum);
				var leatherGathered = Math.floor(Math.random() * resourcesNum) - 1;
				if (leatherGathered < 0) {leatherGathered = 0};
				var furGathered = Math.floor(Math.random() * resourcesNum) -1;
				if (furGathered < 0) {furGathered = 0};
				var bonesGathered = Math.ceil(Math.random() * (resourcesNum / 2));
				if (resourcesNum == 5 && bonesGathered != 1) {
					bonesGathered = 0;
				} else if (resourcesNum == 7 && bonesGathered == 3) {
					bonesGathered  = 1;
				} else if (resourcesNum == 7 && bonesGathered == 4) {
					bonesGathered  = 0;
				}
			};

			meat = meat + meatGathered;
			leather = leather + leatherGathered;
			fur = fur + furGathered;
			bones = bones + bonesGathered;
			document.getElementById('meat').innerHTML = meat;
			document.getElementById('leather').innerHTML = leather;
			document.getElementById('fur').innerHTML = fur;
			document.getElementById('bones').innerHTML = bones;
			hunt = 1;
			if (meatGathered < 1 && leatherGathered < 1 && bonesGathered < 1 && furGathered < 1) {
				document.getElementById('resLegend').style.visibility = 'visible';
				document.getElementById('resTable').style.visibility = 'visible';
				document.getElementById('meatRow').style.display = 'block';
				var ranLog = Math.floor(Math.random() * 3) + 1;
				if (ranLog == 1) {
					addLog("A wolf chased you out of the forest and you gathered no resources", 'black', 'light', '1px');
				}
				if (ranLog == 2) {
					addLog("A bear chased you out of the forest and you gathered no resources", 'black', 'light', '1px');
				}
				if (ranLog == 3) {
					addLog("A rabbit was too cute to kill, therefore you gathered no resources", 'black', 'light', '1px');
				}
			} else if (meatGathered > 0 || leatherGathered > 0 || bonesGathered > 0 || furGathered > 0){
				document.getElementById('resLegend').style.visibility = 'visible';
				document.getElementById('resTable').style.visibility = 'visible';
				document.getElementById('meatRow').style.display = 'block';
				var ranLog = Math.floor(Math.random() * 3) + 1;
				if (ranLog == 1) {
					addLog("Hunt successful! A wolf chased you, but you killed it", 'black', 'light', '1px');
				}
				if (ranLog == 2) {
					addLog("Hunt successful! A bear chased you, but you killed it", 'black', 'light', '1px');
				}
				if (ranLog == 3) {
					addLog("Hunt successful! A mad rabbit chased you, but you killed it", 'light', '1px');
				}				
			}
			if (level == 0) {
				level = 1;
				levelOne();
			}
		}, waitTime);	
		loadBar();
	}
};

function loadBar() {
	if (intRepeat == 0) {
		intRepeat = 1;
		var elem = document.getElementById("progressBar");
		document.getElementById('huntButton').style.backgroundColor = '#d1d1d1';
		var width = 1;
		var id = setInterval(frame, frameTime);
		function frame() {
				if (width >= 100) {
				clearInterval(id);
		    intRepeat = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}


function buySword(objHide, objShow) {
	if (credits < 15) {
		addLog('Not enough Sceattas', 'black', 'light', '1px');
	} else {
		levelThree();
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		credits = credits - 15;
		document.getElementById('credits').innerHTML = credits;
		addLog('Wooden sword bought', 'black', 'light', '1px');
	}
}
function buyGripSelf(objHide, objShow) {
	if (credits < 20) {
		addLog('Not enough Sceattas', 'black', 'light', '1px');
	} else if (leather < 10) {
		addLog('Not enough leather', 'black', 'light', '1px')
	} else if (credits >= 20 && leather >= 10) {
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		document.getElementById('BuySoftLeatherGripSelf').style.display = 'inline-block';
		credits = credits - 20;
		leather = leather - 10;
		waitTime = 4000;
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
		addLog('Leather grip added to the wooden sword', 'black', 'light', '1px');
		frameTime = 40;
	}
}
function buyBoneSword(objHide, objShow) {
	if (credits < 75 && bones < 25) {
		addLog('Not enough Sceattas and bones', 'black', 'light', '1px');
	} else if (credits < 75) {
		addLog('Not enough Sceattas', 'black', 'light', '1px');
	} else if (bones < 25) {
		addLog('Not enough bones', 'black', 'light', '1px')
	} else if (credits >= 75 && bones >= 25) {
		objHide.style.display = 'none';
		credits = credits - 75;
		bones = bones - 25;
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('bones').innerHTML = bones;
		addLog('You now have a bone sword', 'black', 'light', '1px');
		sword = 'bone';
		resourcesNum = 7;
	}
}
function BuySoftLeatherGripSelf(objHide, objShow) {
	if (credits < 50) {
		addLog('Not enough Sceattas', 'black', 'light', '1px');
	} else if (leather < 20) {
		addLog('Not enough leather', 'black', 'light', '1px')
	} else if (fur < 10) {
		addLog('Not enough fur', 'black', 'light', '1px')
	} else if (credits >= 50 && leather >= 20 && fur >= 10) {
		objHide.style.display = 'none';
		credits = credits - 50;
		leather = leather - 20;
		fur = fur - 10;
		waitTime = 3000;
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
		document.getElementById('fur').innerHTML = fur;
		addLog('Alcantara grip added to the ' + sword + ' sword', 'black', 'light', '1px');
		frameTime = 30;
	}
}


function buyTrap(showOne, showTwo) {
	if (credits < trapPrice) {
		addLog('Not enough Sceattas', 'black', 'light', '1px');
	} else {
		credits = credits - trapPrice;
		trapNum = trapNum + 1;
		trapBought = trapBought + 1;
		trapPrice = Math.ceil(25 * Math.pow(1.15, trapNum));
		document.getElementById('credits').innerHTML = credits;
		if (trapBought > 0 && ropeLength == 0) {
			document.getElementById('buyRopeOne').style.display = 'block';
			levelFour();
		} else if (ropeLength > 0) {
			document.getElementById('buyRopeOne').style.display = 'none';
		}
		if (trapBought > 0 && ropeStrength == 0) {
			document.getElementById('buyStrengthOne').style.display = 'block';
		} else if (ropeStrength > 0) {
			document.getElementById('buyStrengthOne').style.display = 'none';
		}
		addLog('Trap bought and installed', 'black', 'light', '1px');
	}
	document.getElementById('buyTrap').innerText = trapPrice + ' Sceattas';
	console.log(ropeLength + ' : ' + trapNum);
}
function buyRopeOne(objHide, objShow) {
	if (fur < 20) {
		addLog('Not enough fur', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		fur = fur - 20;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 1;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 1 to 3';
		addLog('Ropes in all traps are now longer', 'black', 'light', '1px');
	}
}
function buyRopeTwo(objHide, objShow) {
	if (fur < 100) {
		addLog('Not enough fur', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		fur = fur - 100;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 2;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 2 to 6';
		addLog('Ropes in all traps are now longer', 'black', 'light', '1px');
	}
}
function buyRopeThree(objHide, objShow) {
	if (fur < 1000) {
		addLog('Not enough fur', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		fur = fur - 1000;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 3;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 5 to 10';
		addLog('Ropes in all traps are now longer', 'black', 'light', '1px');
	}
}
function buyRopeFour(objHide, objShow) {
	if (fur < 100000) {
		addLog('Not enough fur', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		fur = fur - 100000;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 4;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 10 to 20';
		addLog('Ropes in all traps are now longer', 'black', 'light', '1px');
	}
}
function buyRopeFive(objHide, objShow) {
	if (fur < 1000000) {
		addLog('Not enough fur', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		fur = fur - 1000000;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 5;
		objHide.style.display = 'none'
		huntNum = 'from 20 to 50';
		addLog('Ropes in all traps are now longer', 'black', 'light', '1px');
	}
}


function buyStrengthOne(objHide, objShow) {
	if (leather < 20) {
		addLog('Not enough leather', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		leather = leather - 20;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 1;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 2;
		trapPercentNum = 50;
		addLog('Ropes in all traps are now stronger', 'black', 'light', '1px');
	}
}
function buyStrengthTwo(objHide, objShow) {
	if (leather < 100) {
		addLog('Not enough leather', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		leather = leather - 100;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 2;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 1;
		trapPercentNum = 100;
		addLog('Ropes in all traps are now stronger', 'black', 'light', '1px');
	}
}
function buyStrengthThree(objHide, objShow) {
	if (leather < 1000) {
		addLog('Not enough leather', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		leather = leather - 1000;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 3;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 0.1;
		trapPercentNum = 1000;
		addLog('Ropes in all traps are now stronger', 'black', 'light', '1px');
	}
}
function buyStrengthFour(objHide, objShow) {
	if (leather < 100000) {
		addLog('Not enough leather', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		leather = leather - 100000;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 4;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 0.01;
		trapPercentNum = 10000;
		addLog('Ropes in all traps are now stronger', 'black', 'light', '1px');
	}
}
function buyStrengthFive(objHide, objShow) {
	if (leather < 1000000) {
		addLog('Not enough leather', 'black', 'light', '1px');
	} else {
		// obj.style.display = 'none';
		leather = leather - 1000000;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 5;
		objHide.style.display = 'none'
		trapPercent = 0.0001;
		trapPercentNum = 1000000;
		addLog('Ropes in all traps are now stronger', 'black', 'light', '1px');
	}
}


function sellMeat(num) {
	if (meat < num) {
		if (meat < 1) {
			addLog('You have no meat to trade...', 'black', 'light', '1px');
		} else {
			addLog('All meat traded', 'black', 'light', '1px');
			credits = credits + meat;
			meat = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('meat').innerHTML = meat;
		}
	} else if (meat > (num - 1)) {
		if (num > 1) {
			addLog(num + ' meat traded', 'black', 'light', '1px');
		} else if (num == 1) {
			addLog('1 meat traded', 'black', 'light', '1px')
		}
		credits = credits + num;
		meat = meat - num;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('meat').innerHTML = meat;
	}
};
function sellAllMeat() {
	if (meat < 1) {
		addLog('You have no meat to trade...', 'black', 'light', '1px');
	} else {
		addLog('All meat traded', 'black', 'light', '1px'); 
		credits = credits + meat;
		meat = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('meat').innerHTML = meat;
		if (level == 1 && credits >= 5) {
			level = 2;
			levelTwo();
		}
	}
};



function sellLeather(num) {
	if (leather < num) {
		if (leather < 1) {
			addLog('You have no leather to trade...', 'black', 'light', '1px');
		} else {
			addLog('All leather traded', 'black', 'light', '1px');
			credits = credits + (leather * 2);
			leather = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('leather').innerHTML = leather;
		}
	} else if (leather > (num - 1)) {
		if (num > 1) {
			addLog(num + ' leather traded', 'black', 'light', '1px');
		} else if (num == 1) {
			addLog('1 leather traded', 'black', 'light', '1px')
		}
		credits = credits + (num * 2);
		leather = leather - num;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
	}
};
function sellAllLeather() {
	if (leather < 1) {
		addLog('You have no leather to trade...', 'black', 'light', '1px');
	} else {
		addLog('All leather traded', 'black', 'light', '1px');
		credits = credits + (leather * 2);
		leather = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
	}
};


function sellFur(num) {
	if (fur < num) {
		if (fur < 1) {
			addLog('You have no fur to trade...', 'black', 'light', '1px');
		} else {
			addLog('All furs traded', 'black', 'light', '1px');
			credits = credits + fur;
			fur = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('fur').innerHTML = fur;
		}
	} else if (fur > (num - 1)) {
		if (num > 1) {
			addLog(num + ' furs traded', 'black', 'light', '1px');
		} else if (num == 1) {
			addLog('1 fur traded', 'black', 'light', '1px')
		}
		credits = credits + num;
		fur = fur - num;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('fur').innerHTML = fur;
	}
};
function sellAllFur() {
	if (fur < 1) {
		addLog('You have no fur to trade...', 'black', 'light', '1px');
	} else {
		addLog('All fur traded', 'black', 'light', '1px');
		credits = credits + fur;
		fur = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('fur').innerHTML = fur;
	}
};



function sellBone(num) {
	if (bones < num) {
		if (bones < 1) {
			addLog('You have no bones to trade...', 'black', 'light', '1px');
		} else {
			addLog('All bones traded', 'black', 'light', '1px');
			credits = credits + (bones * 5);
			bones = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('bones').innerHTML = bones;	
		}
	} else if (bones > (num - 1)) {
		if (num > 1) {
			addLog(num + ' bones traded', 'black', 'light', '1px');
		} else if (num == 1) {
			addLog('1 bone traded', 'black', 'light', '1px')
		}
		credits = credits + (num * 5);
		bones = bones - num;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('bones').innerHTML = bones;
	}
};
function sellAllBone() {
	if (bones < 1) {
		addLog('You have no bones to trade...', 'black', 'light', '1px');
	} else {
		addLog('All bones traded', 'black', 'light', '1px');
		credits = credits + (bones * 5);
		bones = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('bones').innerHTML = bones;
	}
};



function craftBait(num) {
	if (meat < num) {
		if (meat < 1) {
			addLog('You have no meat to craft the bait...', 'black', 'light', '1px');
		} else {
			addLog((meat * 5) + ' bait crafted', 'black', 'light', '1px');
			bait = bait + (meat * 5);
			meat = 0;
			document.getElementById('meat').innerHTML = meat;
			document.getElementById('bait').innerHTML = bait;	
		}
	} else if (bones > num) {
		addLog((num * 5) + ' bait crafted', 'black', 'light', '1px');
		bait = bait + (5 * num);
		meat = meat - num;
		document.getElementById('meat').innerHTML = meat;
		document.getElementById('bait').innerHTML = bait;
	}
}



function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem('gameSave'));
	if (typeof savedGame.credits !== "undefined") {credits = savedGame.credits;};
	if (typeof savedGame.meat !== "undefined") {meat = savedGame.meat;};
	if (typeof savedGame.leather !== "undefined") {leather = savedGame.leather;};
	if (typeof savedGame.fur !== "undefined") {fur = savedGame.fur;};
	if (typeof savedGame.bones !== "undefined") {bones = savedGame.bones;};
	if (typeof savedGame.level !== "undefined") {level = savedGame.level;};
	if (typeof savedGame.waitTime !== "undefined") {waitTime = savedGame.waitTime;};
	if (typeof savedGame.ropeLength !== "undefined") {ropeLength = savedGame.ropeLength;};
	if (typeof savedGame.ropeStrength !== "undefined") {ropeStrength = savedGame.ropeStrength;};
	if (typeof savedGame.trapNum !== "undefined") {trapNum = savedGame.trapNum;};
	if (typeof savedGame.trapBought !== "undefined") {trapBought = savedGame.trapBought;};
	if (typeof savedGame.trapPrice !== "undefined") {trapPrice = savedGame.trapPrice;};
	if (typeof savedGame.huntNum !== "undefined") {huntNum = savedGame.huntNum;};
	if (typeof savedGame.trapPercent !== "undefined") {trapPercent = savedGame.trapPercent;};
	if (typeof savedGame.trapPercentNum !== "undefined") {trapPercentNum = savedGame.trapPercentNum;};
	if (typeof savedGame.bait !== "undefined") {bait = savedGame.bait;};
	if (typeof savedGame.resourcesNum !== "undefined") {resourcesNum = savedGame.resourcesNum;};
	if (typeof savedGame.sword !== "undefined") {sword = savedGame.sword;};
	if (level == 1) {
		levelOne();
	}
	if (level == 2) {
		levelTwo();
	}
	if (level == 3) {
		levelThree();
	}
	if (level == 4) {
		levelFour();
	}
	if (ropeLength > 0 || trapBought == 0) {
		document.getElementById('buyRopeOne').style.display = 'none';
	} else if (ropeLength == 0 && trapBought > 0) {
		document.getElementById('buyRopeOne').style.display = 'block';
	} 
	if (ropeLength == 1) {
		document.getElementById('buyRopeTwo').style.display = 'block';
	} else if (ropeLength > 1 || ropeLength < 1) {
		document.getElementById('buyRopeTwo').style.display = 'none';
	}
	if (ropeLength == 2) {
		document.getElementById('buyRopeThree').style.display = 'block';
	} else if (ropeLength > 2 || ropeLength < 2) {
		document.getElementById('buyRopeThree').style.display = 'none';
	}
	if (ropeLength == 3) {
		document.getElementById('buyRopeFour').style.display = 'block';
	} else if (ropeLength > 3 || ropeLength < 3) {
		document.getElementById('buyRopeFour').style.display = 'none';
	}
	if (ropeLength == 4) {
		document.getElementById('buyRopeFive').style.display = 'block';
	} else if (ropeLength > 4 || ropeLength < 4) {
		document.getElementById('buyRopeFive').style.display = 'none';
	}

	if (ropeStrength > 0 || trapBought == 0) {
		document.getElementById('buyStrengthOne').style.display = 'none';
	} else if (ropeStrength == 0 && trapBought > 0) {
		document.getElementById('buyStrengthOne').style.display = 'block';
	} 
	if (ropeStrength == 1) {
		document.getElementById('buyStrengthTwo').style.display = 'block';
	} else if (ropeStrength > 1 || ropeStrength < 1) {
		document.getElementById('buyStrengthTwo').style.display = 'none';
	}
	if (ropeStrength == 2) {
		document.getElementById('buyStrengthThree').style.display = 'block';
	} else if (ropeStrength > 2 || ropeStrength < 2) {
		document.getElementById('buyStrengthThree').style.display = 'none';
	}
	if (ropeStrength == 3) {
		document.getElementById('buyStrengthFour').style.display = 'block';
	} else if (ropeStrength > 3 || ropeStrength < 3) {
		document.getElementById('buyStrengthFour').style.display = 'none';
	}
	if (ropeStrength == 4) {
		document.getElementById('buyStrengthFive').style.display = 'block';
	} else if (ropeStrength > 4 || ropeStrength < 4) {
		document.getElementById('buyStrengthFive').style.display = 'none';
	}


	if (level >= 3 && waitTime == 5000) {
		document.getElementById('buyGripSelf').style.display = 'block';
		frameTime = 50;
	} else {
		document.getElementById('buyGripSelf').style.display = 'none';
		if (waitTime == 4000) {
			frameTime = 40;
		}
	}
	if (level >= 3 && waitTime == 4000) {
		document.getElementById('BuySoftLeatherGripSelf').style.display = 'inline-block';
		frameTime = 40;
	} else {
		document.getElementById('BuySoftLeatherGripSelf').style.display = 'none';
		if (waitTime == 3000) {
			frameTime = 30;
		}
	}

	if (resourcesNum == 5 && waitTime < 5000) {
		document.getElementById('buyBoneSword').style.display = 'inline-block';
	} else {
		document.getElementById('buyBoneSword').style.display = 'none';
	}
	document.getElementById('credits').innerHTML = credits;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('buyTrap').innerHTML = 'TRAP (' + trapNum + ')';
	document.getElementById('bait').innerHTML = bait;
}

window.onload = function() {
	loadGame();
};


function saveGame() {
	var gameSave = {
		credits: credits,
		leather: leather,
		fur: fur,
		meat: meat,
		bones: bones,
		level: level,
		waitTime: waitTime,
		ropeLength: ropeLength,
		trapPrice: trapPrice,
		trapNum: trapNum,
		trapBought: trapBought,
		huntNum: huntNum,
		trapPercent: trapPercent,
		trapPercentNum: trapPercentNum,
		ropeStrength: ropeStrength,
		bait: bait,
		resourcesNum: resourcesNum,
		sword: sword
	}
	localStorage.setItem('gameSave', JSON.stringify(gameSave));
	addLog('Game saved', '#308246', 'bold', '1px');
};


function resetConfirm() {
	if (confirm('Are you sure you want to reset your progress?\nThis action cannot be undone.')) {
		resetGame();
	} else {};
}

function resetGame() {
	credits = 0;
	leather = 	0;
	fur = 0;
	meat = 0;
	bones = 0;
	level = 0;
	waitTime = 5000;
	level = 0;
	ropeLength = 0;
	ropeStrength = 0;
	trapNum = 0;
	trapBought = 0;
	trapPrice = 25;
	trapPercentNum = 20;
	trapPercent = 5;
	bait = 0;
	resourcesNum = 5;
	sword = 'wooden';
	document.getElementById('sellMeat').style.visibility = 'hidden';
	document.getElementById('balanceRow').style.display = 'none';
	document.getElementById('upgradesButton').style.visibility = 'hidden';
	document.getElementById('sellLeather').style.visibility = 'hidden';
	document.getElementById('sellFur').style.visibility = 'hidden';
	document.getElementById('sellBones').style.visibility = 'hidden';
	document.getElementById('leatherRow').style.display = 'none';
	document.getElementById('furRow').style.display = 'none';
	document.getElementById('boneRow').style.display = 'none';
	document.getElementById('meatRow').style.display = 'none'
	document.getElementById('buildingsButton').style.visibility = 'hidden';
	document.getElementById('toolsButton').style.visibility = 'hidden';
	document.getElementById('credits').innerHTML = credits;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('resTable').style.visibility = 'hidden';
	document.getElementById('resLegend').style.visibility = 'hidden';
	document.getElementById('buySword').style.display = 'block';
	document.getElementById('craftBait').style.visibility = 'hidden';
	saveGame();
	location.reload();
}

setInterval(function() {
	saveGame();
}, 30000);


function checkTraps() {

	var trapsBroken = 0;

	console.log(' ');
	
	for (var i = 0; i < trapNum; i++) {
		var breakChance = Math.floor(Math.random() * trapPercentNum) + 1;
		if (breakChance == 1) {
			trapsBroken = trapsBroken + 1;
		}
		var item = Math.floor(Math.random() * 4);

		if (ropeLength == 0) {
			var itemNum = Math.floor(Math.random() * 3);
		} else if (ropeLength == 1) {
			var itemNum = Math.floor(Math.random() * 3) + 1;
		} else if (ropeLength == 2) {
			var itemNum = Math.floor(Math.random() * 5) + 2;
		} else if (ropeLength == 3) {
			var itemNum = Math.floor(Math.random() * 6) + 5;
		} else if (ropeLength == 4) {
			var itemNum = Math.floor(Math.random() * 11) + 10;
		} else if (ropeLength == 5) {
			var itemNum = Math.floor(Math.random() * 31) + 20;
		}
		if (item == 0) {
			meat = meat + itemNum;
			console.log('+' + itemNum + ' meat');
		}
		if (item == 1) {
			leather = leather + itemNum;
			console.log('+' + itemNum + ' leather');
		}
		if (item == 2) {
			fur = fur + itemNum;
			console.log('+' + itemNum + ' fur');
		}
		if (item == 3) {
			if (ropeLength == 0 || ropeLength == 1) {
				if (itemNum > 2) {
					itemNum = 1;
				};
			} else if (ropeLength == 2) {
				if (itemNum > 4) {
					itemNum = 2;
				};
			} else if (ropeLength == 3) {
				if (itemNum > 7) {
					itemNum = 5;
				};
			} else if (ropeLength == 4) {
				if (itemNum > 15) {
					itemNum = 10;
				};
			} else if (ropeLength == 5) {
				if (itemNum > 35) {
					itemNum = 20;
				}
			}
			bones = bones + itemNum;
			console.log('+' + itemNum + ' bones');
		}
		console.log(breakChance + ' ' + trapsBroken + ' : Rope ' + ropeLength + ' : bought ' + trapBought);
	}
	trapNum = trapNum - trapsBroken;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('bones').innerHTML = bones;
	if (trapsBroken == 1) {
		addLog('A trap broke...', '#b3121d', 'bold', '1px');
	} else if (trapsBroken > 1) {
		addLog(trapsBroken + ' traps broke...', '#b3121d', 'bold', '1px');
	} else if (trapsBroken == 0 && trapNum > 0) {};
	trapPrice = Math.ceil(25 * Math.pow(1.15, trapNum));
	document.getElementById('buyTrap').innerHTML = 'TRAP (' + trapNum + ')';
}


function levelOne() {
	document.getElementById('sellMeat').style.visibility = 'visible';
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('meatRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('resTable').style.visibility = 'visible';
	document.getElementById('resLegend').style.visibility = 'visible';

	level = 1;
}
function levelTwo () {
	document.getElementById('credits').innerHTML = credits;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('sellMeat').style.visibility = 'visible';
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('upgradesButton').style.visibility = 'visible';
	document.getElementById('buySword').style.display = 'block';
	document.getElementById('meatRow').style.display = 'block';
	document.getElementById('resTable').style.visibility = 'visible';
	document.getElementById('resLegend').style.visibility = 'visible';

	level = 2;
}
function levelThree() {
	document.getElementById('sellMeat').style.visibility = 'visible';
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('upgradesButton').style.visibility = 'visible';
	document.getElementById('sellLeather').style.visibility = 'visible'
	document.getElementById('sellFur').style.visibility = 'visible';
	document.getElementById('sellBones').style.visibility = 'visible';
	document.getElementById('leatherRow').style.display = 'block';
	document.getElementById('furRow').style.display = 'block';
	document.getElementById('boneRow').style.display = 'block';
	document.getElementById('buildingsButton').style.visibility = 'visible';
	document.getElementById('toolsButton').style.visibility = 'visible';
	document.getElementById('credits').innerHTML = credits;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('buySword').style.display = 'none';
	document.getElementById('meatRow').style.display = 'block';
	document.getElementById('resTable').style.visibility = 'visible';
	document.getElementById('resLegend').style.visibility = 'visible';
	level = 3;
}
function levelFour() {
	document.getElementById('sellMeat').style.visibility = 'visible';
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('upgradesButton').style.visibility = 'visible';
	document.getElementById('sellLeather').style.visibility = 'visible'
	document.getElementById('sellFur').style.visibility = 'visible';
	document.getElementById('sellBones').style.visibility = 'visible';
	document.getElementById('leatherRow').style.display = 'block';
	document.getElementById('furRow').style.display = 'block';
	document.getElementById('boneRow').style.display = 'block';
	document.getElementById('buildingsButton').style.visibility = 'visible';
	document.getElementById('toolsButton').style.visibility = 'visible';
	document.getElementById('credits').innerHTML = credits;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('buySword').style.display = 'none';
	document.getElementById('meatRow').style.display = 'block';
	document.getElementById('resTable').style.visibility = 'visible';
	document.getElementById('resLegend').style.visibility = 'visible';
	document.getElementById('craftTable').style.visibility = 'visible';
	document.getElementById('craftLegend').style.visibility = 'visible';
	document.getElementById('craftBait').style.visibility = 'visible';
	document.getElementById('baitRow').style.display = 'block';
	level = 4;
}