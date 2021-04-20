function changeText(obj, text, size) {
	obj.innerText = text;
	obj.style.fontSize = size;
}

document.getElementById('sellMeat').style.visibility = 'hidden';
document.getElementById('sellLeather').style.visibility = 'hidden';
document.getElementById('sellFur').style.visibility = 'hidden';
document.getElementById('sellBones').style.visibility = 'hidden';

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

var currency = 'Sceattas';

var hunt = 1;
var waitTime = 5000;
var ropeLength = 0;
var trapNum = 0;
var trapPrice = 100;

var huntNum = 'from 0 to 2';

var level = 0;

function hunting() {
	if (hunt == 1) {
		hunt = 0;
		addLog('Hunt begun. Lets hope you come back well and alive...'); 

		setTimeout (function() {

			if (level !== 3) {
				var meatGathered = Math.floor(Math.random() * 4);
				var leatherGathered = 0;
				var furGathered = 0;
				var bonesGathered = 0;
			} else if (level == 3) {
				var meatGathered = Math.floor(Math.random() * 4);
				var leatherGathered = Math.floor(Math.random() * 3);
				var furGathered = Math.floor(Math.random() * 3);
				var bonesGathered = Math.floor(Math.random() * 3);
				if (bonesGathered != 1) {
					bonesGathered = 0;
				};
			};
			console.log(level);

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
function buyTrap(obj) {
	if (credits < trapPrice) {
		addLog('Not enough Sceattas');
	} else {
		if (obj < 1) {
			obj.style.display = 'block';
		}
		credits = credits - trapPrice;
		trapNum = trapNum + 1;
		trapPrice = Math.ceil(trapPrice * 1.15);
		document.getElementById('credits').innerHTML = credits + " " + currency;
		if (trapNum == 1) {
			document.getElementById('buyRopeOne').style.display = 'block';
		}
	}
}
function buyRopeOne(obj) {
	if (fur < 20) {
		addLog('Not enough fur');
	} else {
		// obj.style.display = 'none';
		fur = fur - 20;
		document.getElementById('fur').innerHTML = fur;
		ropeLength = ropeLength + 1;
		obj.style.display = 'none'
		huntNum = 'from 1 to 3';
	}
}

function sellOneMeat() {
	if (meat < 1) {
		addLog('You have no meat to trade...');
	} else if (meat > 0) {
		addLog('One meat traded');
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
	} else if (meat > 9) {
		addLog('Ten meat traded'); 
		credits = credits + 10;
		meat = meat - 10;
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
function sellHundMeat() {
	if (meat < 100) {
		if (meat < 1) {
			addLog('You have no meat to trade...');
		} else {
			addLog('All meat traded'); 
			credits = credits + meat;
			meat = 0;
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
	} else if (meat > 99) {
		addLog('Ten meat traded'); 
		credits = credits + 100;
		meat = meat - 100;
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
	if (meat < 1) {
		addLog('You have no meat to trade...');
	} else {
		addLog('All meat traded'); 
		credits = credits + meat;
		meat = 0;
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



function sellOneLeather() {
	if (leather < 1) {
		addLog('You have no leather to trade...');
	} else {
		addLog('One leather traded');
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
			if (credits == 1) {
				currency = 'Sceat';
			} else {
				currency = 'Sceattas';
			};
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits + " " + currency;
			document.getElementById('leather').innerHTML = leather;
		}
	} else if (leather > 9) {
		addLog('Ten leather traded'); 
		credits = credits + 20;
		leather = leather - 10;
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
function sellHundLeather() {
	if (leather < 100) {
		if (leather < 1) {
			addLog('You have no leather to trade...');
		} else {
			addLog('All leather traded'); 
			credits = credits + (leather * 2);
			leather = 0;
			if (credits == 1) {
				currency = 'Sceat';
			} else {
				currency = 'Sceattas';
			};
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits + " " + currency;
			document.getElementById('leather').innerHTML = leather;
		}
	} else if (leather > 99) {
		addLog('Ten leather traded'); 
		credits = credits + 200;
		leather = leather - 100;
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
	if (leather < 1) {
		addLog('You have no leather to trade...');
	} else {
		addLog('All leather traded'); 
		credits = credits + (leather * 2);
		leather = 0;
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


function sellOneFur() {
	if (fur < 1) {
		addLog('You have no fur to trade...');
	} else {
		addLog('One fur traded');
		credits = credits + 1;
		fur = fur - 1;
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
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
			if (credits == 1) {
				currency = 'Sceat';
			} else {
				currency = 'Sceattas';
			};
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits + " " + currency;
			document.getElementById('fur').innerHTML = fur;
		}
	} else if (fur > 9) {
		addLog('Ten fur traded'); 
		credits = credits + 10;
		fur = fur - 10;
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
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
			if (credits == 1) {
				currency = 'Sceat';
			} else {
				currency = 'Sceattas';
			};
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits + " " + currency;
			document.getElementById('fur').innerHTML = fur;
		}
	} else if (fur > 99) {
		addLog('Ten fur traded'); 
		credits = credits + 100;
		fur = fur - 100;
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
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
		if (credits == 1) {
			currency = 'Sceat';
		} else {
			currency = 'Sceattas';
		};
		document.getElementById('balanceRow').style.display = 'block';
		document.getElementById('credits').innerHTML = credits + " " + currency;
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
function sellTenBone() {
	if (bones < 10) {
		if (bones < 1) {
			addLog('You have no bones to trade...');
		} else {
			addLog('All bones traded'); 
			credits = credits + (bones * 5);
			bones = 0;
			if (credits == 1) {
				currency = 'Sceat';
			} else {
				currency = 'Sceattas';
			};
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits + " " + currency;
			document.getElementById('bones').innerHTML = bones;	
		}
	} else if (bones > 9) {
		addLog('Ten bones traded'); 
		credits = credits + 50;
		bones = bones - 10;
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
function sellHundBone() {
	if (bones < 100) {
		if (bones < 1) {
			addLog('You have no bones to trade...');
		} else {
			addLog('All bones traded'); 
			credits = credits + (bones * 5);
			bones = 0;
			if (credits == 1) {
				currency = 'Sceat';
			} else {
				currency = 'Sceattas';
			};
			document.getElementById('balanceRow').style.display = 'block';
			document.getElementById('credits').innerHTML = credits + " " + currency;
			document.getElementById('bones').innerHTML = bones;	
		}
	} else if (bones > 99) {
		addLog('Ten bones traded'); 
		credits = credits + 500;
		bones = bones - 100;
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
	if (bones < 1) {
		addLog('You have no bones to trade...');
	} else {
		addLog('All bones traded'); 
		credits = credits + (bones * 5);
		bones = 0;
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
	if (typeof savedGame.trapNum !== "undefined") {trapNum = savedGame.trapNum;};
	if (typeof savedGame.trapPrice !== "undefined") {trapPrice = savedGame.trapPrice;};
	if (typeof savedGame.huntNum !== "undefined") {huntNum = savedGame.huntNum;};
	if (level == 1) {
		levelOne();
	}
	if (level == 2) {
		levelTwo();
	}
	if (level == 3) {
		levelThree();
	}
	if (ropeLength > 0 || trapNum == 0) {
		document.getElementById('buyRopeOne').style.display = 'none';
	} else if (ropeLength == 0 && trapNum > 0) {
		document.getElementById('buyRopeOne').style.display = 'block';
	}
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('buyTrap').innerHTML = 'TRAP (' + trapNum + ')'
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
		huntNum: huntNum
	}
	localStorage.setItem('gameSave', JSON.stringify(gameSave));
	addLog('Game saved');
};

function resetGame () {
	credits = 0;
	leather = 0;
	fur = 0;
	meat = 0;
	bones = 0;
	level = 0;
	waitTime = 5000;
	level = 0;
	ropeLength = 0;
	trapNum = 0;
	trapPrice = 100;
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
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('resTable').style.visibility = 'hidden';
	document.getElementById('buySword').style.display = 'block';
	saveGame();
	location.reload();
}

setInterval(function() {
	saveGame();
}, 30000);


function checkTraps() {
	console.log(trapNum);
	console.log(ropeLength);
	for (var i = 0; i < trapNum; i++) {
		var item = Math.floor(Math.random() * 4);
		var itemNum = Math.floor(Math.random() * 3) + ropeLength;
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
		if (ropeLength == 0) {
			if (item == 3) {
				if (itemNum != 1) {
					itemNum = 0;
				}
				bones = bones + itemNum;
				console.log('+' + itemNum + ' bones');
			}
		} else if (ropeLength > 0) {
			if (item == 3) {
				if (itemNum == 3) {
					itemNum = 1;
				}
				bones = bones + itemNum;
				console.log('+' + itemNum + ' bones');
			}
		}
	}
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('bones').innerHTML = bones;
}


function levelOne() {
	document.getElementById('sellMeat').style.visibility = 'visible';
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('meatRow').style.display = 'block';
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('resTable').style.visibility = 'visible';

	level = 1;
}
function levelTwo () {
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('sellMeat').style.visibility = 'visible';
	document.getElementById('balanceRow').style.display = 'block';
	document.getElementById('upgradesButton').style.visibility = 'visible';
	document.getElementById('buySword').style.display = 'block';
	document.getElementById('meatRow').style.display = 'block';
	document.getElementById('resTable').style.visibility = 'visible';

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
	document.getElementById('credits').innerHTML = credits + " " + currency;
	document.getElementById('meat').innerHTML = meat;
	document.getElementById('leather').innerHTML = leather;
	document.getElementById('fur').innerHTML = fur;
	document.getElementById('bones').innerHTML = bones;
	document.getElementById('buySword').style.display = 'none';
	document.getElementById('meatRow').style.display = 'block';
	document.getElementById('resTable').style.visibility = 'visible';
	level = 3;
}