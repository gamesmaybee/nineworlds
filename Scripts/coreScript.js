function changeText(obj, text, size) {
	obj.innerText = text;
	obj.style.fontSize = size;
}

document.getElementById('sellMeat').style.visibility = 'hidden';
document.getElementById('sellLeather').style.visibility = 'hidden';
document.getElementById('sellFur').style.visibility = 'hidden';
document.getElementById('sellBones').style.visibility = 'hidden';
document.getElementById('craftBait').style.visibility = 'hidden';

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
var ropeLength = 0;
var ropeStrength = 0;
var trapNum = 0;
var trapPrice = 25;
var trapBought = 0;
var trapPercentNum = 5;
var trapPercent = 20;

var huntNum = 'from 0 to 2';

var level = 0;

function hunting() {
	if (hunt == 1) {
		hunt = 0;
		addLog('Hunt begun. Lets hope you come back well and alive...'); 

		setTimeout (function() {

			if (level < 3) {
				var meatGathered = Math.floor(Math.random() * 4);
				var leatherGathered = 0;
				var furGathered = 0;
				var bonesGathered = 0;
			} else if (level >= 3) {
				var meatGathered = Math.floor(Math.random() * 4);
				var leatherGathered = Math.floor(Math.random() * 3);
				var furGathered = Math.floor(Math.random() * 3);
				var bonesGathered = Math.floor(Math.random() * 3);
				if (bonesGathered != 1) {
					bonesGathered = 0;
				};
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
					addLog("A wolf chased you out of the forest and you gathered no resources");
				}
				if (ranLog == 2) {
					addLog("A bear chased you out of the forest and you gathered no resources");
				}
				if (ranLog == 3) {
					addLog("A rabbit was too cute to kill, therefore you gathered no resources");
				}
			} else if (meatGathered > 0 || leatherGathered > 0 || bonesGathered > 0 || furGathered > 0){
				document.getElementById('resLegend').style.visibility = 'visible';
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
			if (level == 0) {
				level = 1;
				levelOne();
			}
		}, waitTime);	
	}
};



function buySword(objHide, objShow) {
	if (credits < 15) {
		addLog('Not enough Sceattas');
	} else {
		levelThree();
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		credits = credits - 15;
		document.getElementById('credits').innerHTML = credits;
		addLog('Wooden sword bought');
	}
}
function buyGripSelf(objHide, objShow) {
	if (credits < 20) {
		addLog('Not enough Sceattas');
	} else if (leather < 10) {
		addLog('Not enough leather')
	} else if (credits >= 20 && leather >= 10) {
		levelThree();
		objHide.style.display = 'none';
		credits = credits - 20;
		leather = leather - 10;
		waitTime = 4000;
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
		addLog('Leather grip added to the wooden sword');
	}
}
function buyTrap(showOne, showTwo) {
	if (credits < trapPrice) {
		addLog('Not enough Sceattas');
	} else {
		credits = credits - trapPrice;
		trapNum = trapNum + 1;
		trapBought = trapBought + 1;
		trapPrice = Math.ceil(trapPrice * 1.15);
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
		addLog('Trap bought and installed');
	}
	document.getElementById('buyTrap').innerText = trapPrice + ' Sceattas';
	console.log(ropeLength + ' : ' + trapBought);
}
function buyRopeOne(objHide, objShow) {
	if (fur < 20) {
		addLog('Not enough fur');
	} else {
		// obj.style.display = 'none';
		fur = fur - 20;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 1;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 1 to 3';
		addLog('Ropes in all traps are now longer');
	}
}
function buyRopeTwo(objHide, objShow) {
	if (fur < 100) {
		addLog('Not enough fur');
	} else {
		// obj.style.display = 'none';
		fur = fur - 100;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 2;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 2 to 6';
		addLog('Ropes in all traps are now longer');
	}
}
function buyRopeThree(objHide, objShow) {
	if (fur < 1000) {
		addLog('Not enough fur');
	} else {
		// obj.style.display = 'none';
		fur = fur - 1000;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 3;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 5 to 10';
		addLog('Ropes in all traps are now longer');
	}
}
function buyRopeFour(objHide, objShow) {
	if (fur < 100000) {
		addLog('Not enough fur');
	} else {
		// obj.style.display = 'none';
		fur = fur - 100000;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 4;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		huntNum = 'from 10 to 20';
		addLog('Ropes in all traps are now longer');
	}
}
function buyRopeFive(objHide, objShow) {
	if (fur < 1000000) {
		addLog('Not enough fur');
	} else {
		// obj.style.display = 'none';
		fur = fur - 1000000;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = 5;
		objHide.style.display = 'none'
		huntNum = 'from 20 to 50';
		addLog('Ropes in all traps are now longer');
	}
}


function buyStrengthOne(objHide, objShow) {
	if (leather < 20) {
		addLog('Not enough leather');
	} else {
		// obj.style.display = 'none';
		leather = leather - 20;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 1;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 10;
		trapPercentNum = 10;
		addLog('Ropes in all traps are now stronger');
	}
}
function buyStrengthTwo(objHide, objShow) {
	if (leather < 100) {
		addLog('Not enough leather');
	} else {
		// obj.style.display = 'none';
		leather = leather - 100;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 2;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 5;
		trapPercentNum = 20;
		addLog('Ropes in all traps are now stronger');
	}
}
function buyStrengthThree(objHide, objShow) {
	if (leather < 1000) {
		addLog('Not enough leather');
	} else {
		// obj.style.display = 'none';
		leather = leather - 1000;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 3;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 1;
		trapPercentNum = 100;
		addLog('Ropes in all traps are now stronger');
	}
}
function buyStrengthFour(objHide, objShow) {
	if (leather < 100000) {
		addLog('Not enough leather');
	} else {
		// obj.style.display = 'none';
		leather = leather - 100000;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 4;
		objHide.style.display = 'none';
		objShow.style.display = 'block';
		trapPercent = 0.1;
		trapPercentNum = 1000;
		addLog('Ropes in all traps are now stronger');
	}
}
function buyStrengthFive(objHide, objShow) {
	if (leather < 1000000) {
		addLog('Not enough leather');
	} else {
		// obj.style.display = 'none';
		leather = leather - 1000000;
		document.getElementById('leather').innerHTML = leather;
		ropeStrength = 5;
		objHide.style.display = 'none'
		trapPercent = 0.0001;
		trapPercentNum = 1000000;
		addLog('Ropes in all traps are now stronger');
	}
}


function sellOneMeat() {
	if (meat < 1) {
		addLog('You have no meat to trade...');
	} else if (meat > 0) {
		addLog('One meat traded');
		credits = credits + 1;
		meat = meat - 1;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('meat').innerHTML = meat;
		if (level == 1 && credits >= 10) {
			level = 2;
			levelTwo();
		}
	}
};
function sellTenMeat() {
	if (meat < 10) {
		if (meat < 1) {
			addLog('You have no meat to trade...');
		} else {
			addLog('All meat traded'); 
			credits = credits + meat;
			meat = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('meat').innerHTML = meat;
			if (level == 1 && credits >= 10) {
				level = 2;
				levelTwo();
			}
		}
	} else if (meat > 9) {
		addLog('Ten meat traded'); 
		credits = credits + 10;
		meat = meat - 10;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('meat').innerHTML = meat;
		if (level == 1 && credits >= 10) {
			level = 2;
			levelTwo();
		}
	}
};
function sellHundMeat() {
	if (meat < 100) {
		if (meat < 1) {
			addLog('You have no meat to trade...');
		} else {
			addLog('All meat traded'); 
			credits = credits + meat;
			meat = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('meat').innerHTML = meat;
			if (level == 1 && credits >= 10) {
				level = 2;
				levelTwo();
			}
		}
	} else if (meat > 99) {
		addLog('Hundred meat traded'); 
		credits = credits + 100;
		meat = meat - 100;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('meat').innerHTML = meat;
		if (level == 1 && credits >= 10) {
			level = 2;
			levelTwo();
		}
	}
};
function sellAllMeat() {
	if (meat < 1) {
		addLog('You have no meat to trade...');
	} else {
		addLog('All meat traded'); 
		credits = credits + meat;
		meat = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('meat').innerHTML = meat;
		if (level == 1 && credits >= 10) {
			level = 2;
			levelTwo();
		}
	}
};



function sellOneLeather() {
	if (leather < 1) {
		addLog('You have no leather to trade...');
	} else {
		addLog('One leather traded');
		credits = credits + 2;
		leather = leather - 1;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;	
	}
};
function sellTenLeather() {
	if (leather < 10) {
		if (leather < 1) {
			addLog('You have no leather to trade...');
		} else {
			addLog('All leather traded'); 
			credits = credits + (leather * 2);
			leather = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('leather').innerHTML = leather;
		}
	} else if (leather > 9) {
		addLog('Ten leather traded'); 
		credits = credits + 20;
		leather = leather - 10;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
	}
};
function sellHundLeather() {
	if (leather < 100) {
		if (leather < 1) {
			addLog('You have no leather to trade...');
		} else {
			addLog('All leather traded'); 
			credits = credits + (leather * 2);
			leather = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('leather').innerHTML = leather;
		}
	} else if (leather > 99) {
		addLog('Hundred leather traded'); 
		credits = credits + 200;
		leather = leather - 100;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
	}
};
function sellAllLeather() {
	if (leather < 1) {
		addLog('You have no leather to trade...');
	} else {
		addLog('All leather traded'); 
		credits = credits + (leather * 2);
		leather = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('leather').innerHTML = leather;
	}
};


function sellOneFur() {
	if (fur < 1) {
		addLog('You have no fur to trade...');
	} else {
		addLog('One fur traded');
		credits = credits + 1;
		fur = fur - 1;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('fur').innerHTML = fur;	
	}
};
function sellTenFur() {
	if (fur < 10) {
		if (fur < 1) {
			addLog('You have no fur to trade...');
		} else {
			addLog('All fur traded'); 
			credits = credits + (fur);
			fur = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('fur').innerHTML = fur;
		}
	} else if (fur > 9) {
		addLog('Ten fur traded'); 
		credits = credits + 10;
		fur = fur - 10;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('fur').innerHTML = fur;
	}
};
function sellHundFur() {
	if (fur < 100) {
		if (fur < 1) {
			addLog('You have no fur to trade...');
		} else {
			addLog('All fur traded'); 
			credits = credits + (fur);
			fur = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('fur').innerHTML = fur;
		}
	} else if (fur > 99) {
		addLog('Hundred fur traded'); 
		credits = credits + 100;
		fur = fur - 100;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('fur').innerHTML = fur;
	}
};
function sellAllFur() {
	if (fur < 1) {
		addLog('You have no fur to trade...');
	} else {
		addLog('All fur traded'); 
		credits = credits + (fur);
		fur = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('fur').innerHTML = fur;
	}
};


function sellOneBone() {
	if (bones < 1) {
		addLog('You have no bones to trade...');
	} else {
		addLog('One bone traded');
		credits = credits + 5;
		bones = bones - 1;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('bones').innerHTML = bones;
	}
};
function sellTenBone() {
	if (bones < 10) {
		if (bones < 1) {
			addLog('You have no bones to trade...');
		} else {
			addLog('All bones traded'); 
			credits = credits + (bones * 5);
			bones = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('bones').innerHTML = bones;	
		}
	} else if (bones > 9) {
		addLog('Ten bones traded'); 
		credits = credits + 50;
		bones = bones - 10;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('bones').innerHTML = bones;
	}
};
function sellHundBone() {
	if (bones < 100) {
		if (bones < 1) {
			addLog('You have no bones to trade...');
		} else {
			addLog('All bones traded'); 
			credits = credits + (bones * 5);
			bones = 0;
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits;
			document.getElementById('bones').innerHTML = bones;	
		}
	} else if (bones > 99) {
		addLog('Hundred bones traded'); 
		credits = credits + 500;
		bones = bones - 100;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('bones').innerHTML = bones;
	}
};
function sellAllBone() {
	if (bones < 1) {
		addLog('You have no bones to trade...');
	} else {
		addLog('All bones traded'); 
		credits = credits + (bones * 5);
		bones = 0;
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits;
		document.getElementById('bones').innerHTML = bones;
	}
};



function craftOneBait() {
	if (meat < 1) {
		addLog('You have no meat to craft the bait...');
	} else {
		addLog('One bait crafted');
		meat = meat - 1;
		bait = bait + 1;
		document.getElementById('meat').innerHTML = meat;
		document.getElementById('bait').innerHTML = bait;
	}
};
function craftTenBait() {
	if (meat < 10) {
		if (meat < 1) {
			addLog('You have no meat to craft the bait...');
		} else {
			addLog(meat + ' bait crafted'); 
			bait = bait + meat;
			meat = 0;
			document.getElementById('meat').innerHTML = meat;
			document.getElementById('bait').innerHTML = bait;	
		}
	} else if (bones > 9) {
		addLog('Ten bait crafted'); 
		bait = bait + 10;
		meat = meat - 10;
		document.getElementById('meat').innerHTML = meat;
		document.getElementById('bait').innerHTML = bait;
	}
};
function craftHundBait() {
	if (meat < 100) {
		if (meat < 1) {
			addLog('You have no meat to craft the bait...');
		} else {
			addLog(meat + ' bait crafted'); 
			bait = bait + meat;
			meat = 0;
			document.getElementById('meat').innerHTML = meat;
			document.getElementById('bait').innerHTML = bait;	
		}
	} else if (bones > 99) {
		addLog('Ten bait crafted'); 
		bait = bait + 100;
		meat = meat - 100;
		document.getElementById('meat').innerHTML = meat;
		document.getElementById('bait').innerHTML = bait;
	}
};



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


	if (level == 3 && waitTime == 5000) {
		document.getElementById('buyGripSelf').style.display = 'block';
	} else {
		document.getElementById('buyGripSelf').style.display = 'none';
	}
	document.getElementById('credits').innerHTML = credits;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('buyTrap').innerHTML = 'TRAP (' + trapNum + ')';
	document.getElementById('bait').innerHTML = bait;
	document.getElementById('craftBait').style.visibility = 'hidden';
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
		bait: bait
	}
	localStorage.setItem('gameSave', JSON.stringify(gameSave));
	addLog('Game saved');
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
	trapPercentNum = 5;
	trapPercent = 20;
	bait = 0;
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
		if (item ==3) {
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
		addLog('A trap broke...');
	} else if (trapsBroken > 1) {
		addLog(trapsBroken + ' traps broke...');
	} else if (trapsBroken == 0 && trapNum > 0) {};
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