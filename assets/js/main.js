var slides = document.getElementsByClassName("Slides");
var instrslides = document.getElementsByClassName("instructionSlides");
var quizslides = document.getElementsByClassName("quizQuestionsSlides");
var slideIndex = 1;
var instrSlideIndex = 1;
var quizSlideIndex = 1;
var total = 0;
let endQuiz = false;

var showSlides = function () {

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	currentslide = slides[slideIndex - 1];

	slides[slideIndex - 1].style.display = "block";
}

var currentslide;
var instructionSlides = function () {
	navigationbtnhandler();
	for (i = 0; i < instrslides.length; i++) {
		instrslides[i].style.display = "none";
	}
	currentslide = instrslides[instrSlideIndex - 1];

	instrslides[instrSlideIndex - 1].style.display = "block";
}

var currentslide1;
var quizQuestionsSlides = function () {
	navigationbtnhandler1();
	for (i = 0; i < quizslides.length; i++) {
		quizslides[i].style.display = "none";
	}
	currentslide = quizslides[quizSlideIndex - 1];

	quizslides[quizSlideIndex - 1].style.display = "block";
}

var navigationbtnhandler = function () {
	if (instrSlideIndex == 1) {
		$(".previousBtn").css("display", "none");
	}
	if (instrSlideIndex == 2) {
		$(".previousBtn").css("display", "block");
	}
	if (instrSlideIndex == 28) {
		$(".nextBtn").css("display", "none");
	}
	if (instrSlideIndex != 28) {
		$(".nextBtn").css("display", "block");
	}
}

var navigationbtnhandler1 = function () {
	if (quizSlideIndex == 1) {
		$(".quizpreviousQBtn").css("display", "none");
	}
	if (quizSlideIndex >= 2) {
		$(".quizpreviousQBtn").css("display", "block");
	}
	if (quizSlideIndex == 16) {
		$(".quiznextQBtn").css("display", "none");
	}
	if (quizSlideIndex != 16) {
		$(".quiznextQBtn").css("display", "block");
	}
}

var increment1 = 1;
$(document).on('click', '.nextBtn', function () {
	instructionSlides(instrSlideIndex++);
	increment1 = increment1 + 1;
	$(".pageIncrement").text(increment1);
	animationRestart();
});

$(document).on('click', '.previousBtn', function () {
	instructionSlides(instrSlideIndex--);
	increment1 = increment1 - 1;
	$(".pageIncrement").text(increment1);
	animationRestart();
});

$('#closeBtn').on('mouseover', function () {
	$('.closeBtn1').css('color', 'red');
});
$('#closeBtn').on('mouseout', function () {
	$('.closeBtn1').css('color', 'white');
});

var quizincrement1 = 1;
$(document).on('click', '.quiznextQBtn', function () {
	quizQuestionsSlides(quizSlideIndex++);
	quizincrement1 = quizincrement1 + 1;
	$(".quizQuestionNumber").text(quizincrement1);
});

$(document).on('click', '.quizpreviousQBtn', function () {
	quizQuestionsSlides(quizSlideIndex--);
	quizincrement1 = quizincrement1 - 1;
	$(".quizQuestionNumber").text(quizincrement1);
});

$(document).on('click', '.quizText', function () {
	$(".quizMainContainer").css("display", "block");
});

$(document).on('click', '.quizcloseBtn', function () {
	$(".quizMainContainer").css("display", "none");
});

$(document).on('click', '.quizcloseBtn', function () {
	$(".quizMainContainer").css("display", "none");
});

var HydrogenClicked = false;



var callanim = false;
/*
$(document).on('click', '.atomsClick', function () {
	// $('.atomsClick,.atomHDiv').css({ 'box-shadow': 'none', 'border-radius': '' });
	// $(this).css({ 'box-shadow': '0px 0px 12px 0px black', 'border-radius': '50%' });
	
	$('.icondown1').stop(true, true);
	$('.icondown').stop(true, true);
	$('.icontop1').stop(true, true);
	$('.icontop').stop(true, true);
	$('.iconleft1').stop(true, true);
	$('.iconleft').stop(true, true);
	$('.iconright1').stop(true, true);
	$('.iconright').stop(true, true);
	callanim = false;
	HydrogenClicked = false;
	$('.nucleusStructureDiv').css({ 'background-image': 'url(assets/images/nucleus.png)', 'width': '40px', 'height': '40px', 'top': '122px', 'left': '118px' });
});
*/

function atomsClick(){
	$('.icondown1').stop(true, true);
	$('.icondown').stop(true, true);
	$('.icontop1').stop(true, true);
	$('.icontop').stop(true, true);
	$('.iconleft1').stop(true, true);
	$('.iconleft').stop(true, true);
	$('.iconright1').stop(true, true);
	$('.iconright').stop(true, true);
	callanim = false;
	HydrogenClicked = false;
	$('.nucleusStructureDiv').css({ 'background-image': 'url(assets/images/nucleus.png)', 'width': '40px', 'height': '40px', 'top': '122px', 'left': '118px' });
}
$(document).on('click', '.atomCDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.neutronsValue,.electronValue").text("6");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4").css("display", "block");
	$('.elemName').text('Carbon');
	orbitRotation();
});

$(document).on('click', '.atomNDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.neutronsValue,.electronValue").text("7");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5").css("display", "block");
	$('.elemName').text('Nitrogen');
	orbitRotation();

});

$(document).on('click', '.atomHDiv1', function () {
	HydrogenClicked = true;
	// $('.atomHDiv,.atomsClick').css({ 'box-shadow': 'none', 'border-radius': '' });
	// $(this).css({ 'box-shadow': '0px 0px 12px 0px black', 'border-radius': '50%' });
	$('.nucleusStructureDiv').css({ 'background-image': 'url(assets/images/proton.png)', 'width': '14px', 'height': '14px', 'top': '133px', 'left': '134px' });
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("1");
	$(".blackScreenContainer").css("display", "block");
	$(".neutronsValue").text("0");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1").css("display", "block");
	$(".or1el1").css("display", "block");
	$('.elemName').text('Hydrogen');
	orbitRotation();
});

$(document).on('click', '.atomODiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.neutronsValue,.electronValue").text("8");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.orel6,.or2el6").css("display", "block");
	$('.elemName').text('Oxygen');
	orbitRotation();
});

$(document).on('click', '.atomSDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue,.neutronsValue").text("16");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el3,.or3el4,.or3el5,.or3el6").css("display", "block");
	$('.elemName').text('Sulphur');
	orbitRotation();
});

$(document).on('click', '.atomClDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("17");
	$('.neutronsValue').text("18");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el3,.or3el4,.or3el5,.or3el6,.or3el7").css("display", "block");
	$('.elemName').text('Chlorine');
});

$(document).on('click', '.atomCuDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("29");
	$(".neutronsValue").text("35");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el3,.or3el4,.or3el5,.or3el6,.or3el7,.or3el,.or3el9,.or3el10,.or3el11,.or3el12,.or3el13,.or3el14,.or3el15,.or3el16,.or3el17,.or3el18,.or4el1,.or3el8").css("display", "block");
	$('.elemName').text('Copper');
	orbitRotation();
});

$(document).on('click', '.atomPDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("15");
	$(".neutronsValue").text("16");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el3,.or3el4,.or3el5").css("display", "block");
	$('.elemName').text('Phosphorus');
	orbitRotation();
});

$(document).on('click', '.atomNaDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("11");
	$(".neutronsValue").text("12");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1").css("display", "block");
	$('.elemName').text('Sodium');
	orbitRotation();
});

$(document).on('click', '.atomCaDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.neutronsValue,.electronValue").text("20");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el3,.or3el4,.or3el9,.or3el10,.or3el11,.or3el12,.or4el1,.or4el2").css("display", "block");
	$('.elemName').text('Calcium');
	orbitRotation();
});

$(document).on('click', '.atomAiDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("13");
	$(".neutronsValue").text("14");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el3").css("display", "block");
	$('.elemName').text('Aluminium');
	orbitRotation();
});

$(document).on('click', '.atomMgDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.neutronsValue,.electronValue").text("12");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2").css("display", "block");
	$('.elemName').text('Magnesium');
	orbitRotation();
});

$(document).on('click', '.atomFeDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("26");
	$(".neutronsValue").text("30");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el5,.or3el6,.or3el7,.or3el8,.or3el9,.or3el10,.or3el13,.or3el14,.or3el15,.or3el16,.or3el17,.or3el18,.or4el1,.or4el3").css("display", "block");
	$('.elemName').text('Iron');
	orbitRotation();
});

$(document).on('click', '.atomMnDiv1', function () {
	atomsClick();
	$(".blackScreenContainer5").css("display", "none");
	$(".blackScreenContainer2").css("display", "none");
	$(".blackScreenContainer3").css("display", "none");
	$(".protonsValue,.electronValue").text("25");
	$(".neutronsValue").text("30");
	$(".blackScreenContainer").css("display", "block");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4,.electrons").css("display", "none");
	$(".orbitDiv1,.orbitDiv2,.orbitDiv3,.orbitDiv4").css("display", "block");
	$(".or1el1,.or1el2,.or2el1,.or2el2,.or2el3,.or2el4,.or2el5,.or2el6,.or2el7,.or2el8,.or3el1,.or3el2,.or3el9,.or3el5,.or3el6,.or3el7,.or3el10,.or3el11,.or3el12,.or3el13,.or3el14,.or3el17,.or3el18,.or4el1,.or4el3").css("display", "block");
	$('.elemName').text('Manganese');
	orbitRotation();
});

var animationRestart = function () {
	$('.leftPanelDoor').css({ width: '50%' }).css('border', 'none');
	$('.rightPanelDoor').css({ width: '50%' }).css('border', 'none');
}

$(document).on('click', '.instructionPanelDoorDiv,.instruction15PanelDoorDiv,.instruction24PanelDoorDiv', function () {
	$('.leftPanelDoor').animate({ width: '4px' }, 1000).css('border', '1px solid black');
	$('.rightPanelDoor').animate({ width: '4px' }, 1000).css('border', '1px solid black');
});

$(document).on('click', '.nucleusStructureDiv', function (event) {
	if (HydrogenClicked) {
		$('.protonsNeutronDiv').css('display', 'none');
		$('.hydroAtom').css('display', 'block');

	} else {
		$('.protonsNeutronDiv').css('display', 'block');
		$('.hydroAtom').css('display', 'none');
	}
	$(".blackScreenContainer2").css("display", "block");
	$(".bigProtonsValue").text($(".protonsValue").text());
	$(".bigNeutronsValue").text($(".neutronsValue").text());
});

// var click = {};
// $('.InstructionContainer').draggable({
// 	start: function (e, ui) {
// 		click.x = e.clientX;
// 		click.y = e.clientY;
// 	},
// 	drag: function (e, ui) {
// 		var original = ui.originalPosition;
// 		var last = (e.pageX - click.x + original.left) / zoom;
// 		var last1 = (e.pageY - click.y + original.top) / zoom;
// 		if (last1 > 546 && last > 670) {
// 			ui.position = {
// 				left: 670,
// 				top: 546
// 			};
// 		} else if (last1 < 0 && last > 670) {
// 			ui.position = {
// 				left: 670,
// 				top: 0
// 			};
// 		} else if (last < 0 && last1 < 0) {
// 			ui.position = {
// 				left: 0,
// 				top: 0
// 			};
// 		} else if (last < 0 && last1 > 546) {
// 			ui.position = {
// 				left: 0,
// 				top: 546
// 			};
// 		} else if (last1 > 546) {
// 			ui.position = {
// 				left: last,
// 				top: 546
// 			};
// 		} else if (last1 < 0) {
// 			ui.position = {
// 				left: last,
// 				top: 0
// 			};
// 		} else if (last > 670) {
// 			ui.position = {
// 				left: 670,
// 				top: last1
// 			};
// 		} else if (last < 0) {
// 			ui.position = {
// 				left: 0,
// 				top: last1
// 			};
// 		} else {
// 			ui.position = {
// 				left: last,
// 				top: last1
// 			};
// 		}
// 	}
// });

var rightmovement = 135;
var rightmovement1 = 180;
var leftmovement = 5;
var leftmovement1 = -35;
var tomovement = 25;
var tomovement1 = -25;
var downmovement = 145;
var downmovement1 = 190;
var gifanimatortimeright;
var gifanimatortimeleft;
var gifanimatortimetop;
var gifanimatortimedown;
var gifanimatortimeright1;
var gifanimatortimeleft1;
var gifanimatortimetop1;
var gifanimatortimedown1;


function gifanimatorright1() {
	$('.iconright1').css({ 'filter': 'brightness(1)', 'left': "175px" });
	$('.iconright1').animate({ 'left': "145px" }, 1000, function () {
		$('.iconright1').css({ 'filter': 'brightness(0)' });
		gifanimatortimeright1 = setTimeout(() => {
			if (callanim == true) {
				gifanimatorright1();
			}

		}, 200);
	});
}



function gifanimatorleft1() {

	$('.iconleft1').css({ 'filter': 'brightness(1)', 'left': "-30px" });
	$('.iconleft1').animate({ 'left': "0px" }, 1000, function () {
		$('.iconleft1').css({ 'filter': 'brightness(0)' });
		gifanimatortimeleft1 = setTimeout(() => {
			if (callanim == true) {
				gifanimatorleft1();
			}
		}, 200);
	});

}

function gifanimatortop1() {
	$('.icontop1').css({ 'filter': 'brightness(1)', 'top': "-5px" });
	$('.icontop1').animate({ 'top': "25px" }, 1000, function () {
		$('.icontop1').css({ 'filter': 'brightness(0)' });
		gifanimatortimetop1 = setTimeout(() => {
			if (callanim == true) {
				gifanimatortop1();
			}
		}, 200);
	});
}


function gifanimatordown1() {
	$('.icondown1').css({ 'filter': 'brightness(1)', 'top': "190px" });
	$('.icondown1').animate({ 'top': "160px" }, 1000, function () {
		$('.icondown1').css({ 'filter': 'brightness(0)' });
		gifanimatortimedown1 = setTimeout(() => {
			if (callanim == true) {
				gifanimatordown1();
			}
		}, 200);
	});
}

function gifanimatorright() {
	$('.iconright').css({ 'filter': 'brightness(1)', 'left': "145px" });
	$('.iconright').animate({ 'left': "175px" }, 1000, function () {
		$('.iconright').css({ 'filter': 'brightness(0)' });
		gifanimatortimeright = setTimeout(() => {
			if (callanim == true) {
				gifanimatorright();
			}
		}, 200);
	});
}


function gifanimatorleft() {
	$('.iconleft').css({ 'filter': 'brightness(1)', 'left': "0px" });
	$('.iconleft').animate({ 'left': "-30px" }, 1000, function () {
		$('.iconleft').css({ 'filter': 'brightness(0)' });
		gifanimatortimeleft = setTimeout(() => {
			if (callanim == true) {
				gifanimatorleft();
			}
		}, 200);
	});

}

function gifanimatortop() {
	$('.icontop').css({ 'filter': 'brightness(1)', 'top': "25px" });
	$('.icontop').animate({ 'top': "-5px" }, 1000, function () {
		$('.icontop').css({ 'filter': 'brightness(0)' });
		gifanimatortimetop = setTimeout(() => {
			if (callanim == true) {
				gifanimatortop();
			}
		}, 200);
	});
}

function gifanimatordown() {
	$('.icondown').css({ 'filter': 'brightness(1)', 'top': "160px" });
	$('.icondown').animate({ 'top': "190px" }, 1000, function () {
		$('.icondown').css({ 'filter': 'brightness(0)' });
		gifanimatortimedown = setTimeout(() => {
			if (callanim == true) {
				gifanimatordown();
			}
		}, 200);
	});

}

$(document).on('click', '.protons', function () {
	$('.icondown').stop(true, true);
	$('.icontop').stop(true, true);
	$('.iconleft').stop(true, true);
	$('.iconright').stop(true, true);

	callanim = true

	gifanimatorright();
	gifanimatorleft();
	gifanimatortop();
	gifanimatordown();
	$(".blackScreenContainer3").css("display", "block");
});

$(document).on('click', '.neutrons', function () {
	$('.icondown').stop(true, true);
	$('.icontop').stop(true, true);
	$('.iconleft').stop(true, true);
	$('.iconright').stop(true, true);
	$(".blackScreenContainer4").css("display", "block");
});

$(document).on('click', '.electrons', function () {
	callanim = true
	$('.icondown1').stop(true, true);
	$('.icontop1').stop(true, true);
	$('.iconleft1').stop(true, true);
	$('.iconright1').stop(true, true);
	gifanimatorright1();
	gifanimatorleft1();
	gifanimatortop1();
	gifanimatordown1();
	$(".blackScreenContainer5").css("display", "block");
});

var $elie1 = $(".orbitDiv1"), $elie2 = $(".orbitDiv2"), $elie3 = $(".orbitDiv3"), $elie4 = $(".orbitDiv4"), degree1 = 0, degree2 = 0, degree3 = 0, degree4 = 0, timer1, timer2, timer3, timer4;
function rotate1() {

	objectrotate = true;
	$elie1.css({ WebkitTransform: 'rotate(' + degree1 + 'deg)' });
	$elie1.css({ '-moz-transform': 'rotate(' + degree1 + 'deg)' });

	timer1 = setTimeout(function () {
		--degree1; rotate1();
	}, 25);

}
function rotate2() {

	objectrotate = true;

	$elie2.css({ WebkitTransform: 'rotate(' + degree2 + 'deg)' });
	$elie2.css({ '-moz-transform': 'rotate(' + degree2 + 'deg)' });

	timer2 = setTimeout(function () {
		--degree2; rotate2();
	}, 35);

}
function rotate3() {

	objectrotate = true;

	$elie3.css({ WebkitTransform: 'rotate(' + degree3 + 'deg)' });
	$elie3.css({ '-moz-transform': 'rotate(' + degree3 + 'deg)' });
	timer3 = setTimeout(function () {
		--degree3; rotate3();
	}, 45);

}
function rotate4() {

	objectrotate = true;

	$elie4.css({ WebkitTransform: 'rotate(' + degree4 + 'deg)' });
	$elie4.css({ '-moz-transform': 'rotate(' + degree4 + 'deg)' });

	timer4 = setTimeout(function () {
		--degree4; rotate4();
	}, 55);

}

function rotate() {
	rotate1();
	rotate2();
	rotate3();
	rotate4();
}

var objectrotate = false;

$(".animationOnDiv").on('click', function () {

	if (objectrotate == true) {

		if ($('.blackScreenContainer').css('display') == 'block') {
			$('.insdeaniation_off').css('display', 'block')
			$('.insdeaniation_on').css('display', 'none')
		}

		clearTimeout(timer1);
		clearTimeout(timer2);
		clearTimeout(timer3);
		clearTimeout(timer4);
		callanim = false;
		clearTimeout(gifanimatortimeright);
		clearTimeout(gifanimatortimeleft);
		clearTimeout(gifanimatortimedown);
		clearTimeout(gifanimatortimetop);
		clearTimeout(gifanimatortimeright1);
		clearTimeout(gifanimatortimeleft1);
		clearTimeout(gifanimatortimedown1);
		clearTimeout(gifanimatortimetop1);
		//callanim=false;
		setTimeout(function () {
			objectrotate = false;
		}, 15)

	} else {
		$('.insdeaniation_off').css('display', 'none')
		$('.insdeaniation_on').css('display', 'block')
		gifanimatorright();
		gifanimatorleft();
		gifanimatortop();
		gifanimatordown();
		callanim = true;
		gifanimatorright1();
		gifanimatorleft1();
		gifanimatortop1();
		gifanimatordown1();
		rotate();
	}

});


var orbitRotation = function () {
	callanim = false;
	clearTimeout(timer1);
	clearTimeout(timer2);
	clearTimeout(timer3);
	clearTimeout(timer4);
	rotate();
}

$(document).on('click', '.objectivesText', function () {
	$(".objectivesDiv").css("display", "block");
});

$(document).on('click', '.objectiveTitle1', function () {
	$(".objectivesDiv").css("display", "none");
});

$(document).on('click', '.instructionClose', function () {
	$(".instructionContentDiv,.instructionClose").css({ "display": "none" }, 1000);
	$(".InstructionContainer").animate({ height: '70px' }, 1000);
	$(".instructionClose1").css({ "display": "block" }, 1000);
});

$(document).on('click', '.instructionClose1', function () {
	$(".instructionContentDiv,.instructionClose").css({ "display": "block" }, 1000);
	$(".InstructionContainer").animate({ height: '571px' }, 1000);
	$(".instructionClose1").css({ "display": "none" }, 1000);
});

$(document).on('click', '.at1', function () {
	$(".at1").css("display", "none");
	$(".at2").css("display", "block");
});

$(document).on('click', '.at2', function () {
	$(".at2").css("display", "none");
	$(".at1").css("display", "block");
});


$(document).ready(function () {
	let quizSlides = $('.quizQuestionsSlides');
	quizSlides = shuffle(quizSlides);
	$('.quizContentDiv').html('');
	$('.quizContentDiv').html(quizSlides);
	for (let index = 0; index < quizSlides.length; index++) {
		const element = quizSlides[index];
		var options = $(element).find('.radioDivmain');
		options = shuffle(options);
		$($('.qustOptions')[index]).html('');
		$($('.qustOptions')[index]).html(options);
		for (let index = 0; index < options.length; index++) {
			const element = options[index];
			if (index == 0) {
				$(element).find('.options').html('a')
			} else if (index == 1) {
				$(element).find('.options').html('b')
			} else if (index == 2) {
				$(element).find('.options').html('c')
			} else if (index == 3) {
				$(element).find('.options').html('d')
			} else if (index == 4) {
				$(element).find('.options').html('e')
			}
		}
	}
	showSlides(slideIndex);
	instructionSlides(instrSlideIndex);
	quizQuestionsSlides(quizSlideIndex);
});

function shuffle(array) {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

$(document).on('click', '.radioDivmain', function () {
	var optionselected = $(this).attr('class').split(' ')[1];
	let tempoptionselected = $(this).attr('class').split(' ')[1];
	$($(this).children('.radioDiv')).css('background', 'grey');
	for (var i = 0; i < $(this).siblings('.radioDivmain').length; i++) {
		// if (quizSlideIndex == 8) {
		if ($($('.quizQuestionsSlides')[quizSlideIndex - 1]).hasClass('multiselect')) {
			if ($(this).children('.radioDiv').hasClass('checkBoxSelected')) {
				$(this).children('.radioDiv').removeClass('checkBoxSelected');
				$($(this).children('.radioDiv')).css('background', 'none');
			} else {
				$(this).children('.radioDiv').addClass('checkBoxSelected');
				$($(this).children('.radioDiv')).css('background', 'grey');
			}
		} else {
			$($(this).siblings('.radioDivmain')[i]).children('.radioDiv').css('background', 'none');
		}
	}

	if (optionselected != "" && $($(this).parent().parent()).attr('selected-answer') != "") {
		if ($($(this).parent().parent()).hasClass('multiselect')) {
			optionselected = $($(this).parent().parent()).attr('selected-answer') + ',' + optionselected;
		} else {
			optionselected = optionselected;
		}

	}
	$($(this).parent().parent()).attr('selected-answer', optionselected);
	if (!$(this).children('.radioDiv').hasClass('checkBoxSelected') && $($('.quizQuestionsSlides')[quizSlideIndex - 1]).hasClass('multiselect')) {
		let tempremoveArr = $($(this).parent().parent()).attr('selected-answer').split(',');
		let tempIndexVal;
		tempremoveArr = tempremoveArr.filter(function (a) { return a !== tempoptionselected })
		// for (let index = 0; index < tempremoveArr.length; index++) {
		// 	tempIndexVal = tempremoveArr.indexOf(tempoptionselected, 0);
		// 	console.log(tempIndexVal);
		// 	tempremoveArr.splice(tempIndexVal, 1);
		// }
		optionselected = tempremoveArr.join(',');
		$($(this).parent().parent()).attr('selected-answer', optionselected);
	}

});

var answer1 = "";
$(document).on('click', '.showQuestionListText', function () {
	// showQuestionSlstDiv
	$(".showQuestionSlstDiv").css("display", "block");
	$(".quiznextQBtn").css("display", "none");
	$(".quizpreviousQBtn").css("display", "none");
	var answer;
	for (var i = 0; i < $('.markQuestionsDiv').length; i++) {
		answer1 = "";
		for (let index = 0; index < $($('.quizQuestionsSlides')[i]).attr('selected-answer').split(',').length; index++) {
			const element = $($('.quizQuestionsSlides')[i]).attr('selected-answer').split(',')[index];
			if (element != '') {
				let tempVar = $($('.quizQuestionsSlides')[i]).find($('.' + element));
				answer = $(tempVar).find('.options').text();
				answer1 += $(tempVar).find('.options').text();
			}
			if (element == '') {
				answer = '';
				answer1 += '';
			}
			if (answer1 != "") {
				answer1 = answer1 + ",";
			}
		}
		if ($())
			if ($($('.quizQuestionsSlides')[i]).attr('marked') == 'true') {

				$($('.markQuestionsDiv')[i]).css('background', 'grey')
			} else {

				$($('.markQuestionsDiv')[i]).css('background', 'white')
			}
		answer1 = answer1.slice(0, -1);
		if ($($('.quizQuestionsSlides')[i]).children('.qustOptions').children('.radioDivmain').children('.radioDiv1').length == 4) {
			$($($('.markQuestionsDiv')[i]).find('span')).text('Q.' + (i + 1) + '.' + answer1);
		} else {
			$($($('.markQuestionsDiv')[i]).find('span')).text('Q.' + (i + 1) + '.' + answer)
		}
	}
});

$(document).on('click', '.endQuizText', function () {
	$(".endQuizDiv,.quizoverlay").css("display", "block");
	// $(".quizContentDiv").css("background", "#d3d3e8");

});

$(document).on('click', '.endQuizText1', function () {
	$(".endQuizDiv,.quizoverlay").css("display", "block");
	// $(".quizContentDiv").css("background", "#d3d3e8");

});

$(document).on('click', '.endQuizNo', function () {
	$(".endQuizDiv,.quizoverlay").css("display", "none");
	$(".quizContentDiv").css("background", "white");
});


$(document).on('click', '.endQuizYes', function () {
	endQuiz = true;
	$('.quizoverlay').css("display", "none");
	$(".quizContentDiv").css("background", "white");
	$(".endQuizText").text("Quiz submitted");
	$(".endQuizText,.radioDivmain").css('pointer-events', 'none');
	$(".endQuizText1").css('pointer-events', 'none');
	$(".optionAnswers").css('pointer-events', 'none');
	// $(".endQuizText1").disable();
	$(".endQuizText1").text("Quiz submitted");
	// showQuestionSlstDiv
	// $(".showQuestionSlstDiv").css("display","block");
	var answer;
	for (var i = 0; i < $('.markQuestionsDiv').length; i++) {
		answer1 = "";
		for (let index = 0; index < $($('.quizQuestionsSlides')[i]).attr('selected-answer').split(',').length; index++) {
			let element = $($('.quizQuestionsSlides')[i]).attr('selected-answer').split(',')[index];
			if ($($('.quizQuestionsSlides')[i]).hasClass('multiselect')) {
				let element1 = $($('.quizQuestionsSlides')[i]).attr('correct-answer').split(',').sort();
				let element2 = $($('.quizQuestionsSlides')[i]).attr('selected-answer').split(',').sort();
				if (arrayCompare(element1, element2)) {
					total++;
					$($($('.quizQuestionsSlides')[i]).find('.corectorincorrect')).attr('src', 'assets/images/right.png');
					$($($('.markQuestionsDiv')[i]).find('img')).attr('src', 'assets/images/right.png');
				} else {
					$($($('.quizQuestionsSlides')[i]).find('.corectorincorrect')).attr('src', 'assets/images/wrong.png')
					$($($('.markQuestionsDiv')[i]).find('img')).attr('src', 'assets/images/wrong.png');
				}
				for (let index = 0; index < $($('.quizQuestionsSlides')[i]).attr('correct-answer').split(',').length; index++) {
					let element3 = $($('.quizQuestionsSlides')[i]).attr('correct-answer').split(',')[index];
					$($($($('.quizQuestionsSlides')[i]).find('.' + element3).children('.corectorincorrectanswer'))).attr('src', 'assets/images/right.png')
				}
				break;
			} else {
				if (element == $($('.quizQuestionsSlides')[i]).attr('correct-answer')) {
					total++;
					$($($('.quizQuestionsSlides')[i]).find('.corectorincorrect')).attr('src', 'assets/images/right.png')
				} else {
					$($($('.quizQuestionsSlides')[i]).find('.corectorincorrect')).attr('src', 'assets/images/wrong.png')
				}
				$($($($('.quizQuestionsSlides')[i]).find('.' + $($('.quizQuestionsSlides')[i]).attr('correct-answer')).children('.corectorincorrectanswer'))).attr('src', 'assets/images/right.png')
			}

			if (element == $($('.quizQuestionsSlides')[i]).attr('correct-answer')) {
				$($($('.markQuestionsDiv')[i]).find('img')).attr('src', 'assets/images/right.png');
			} else {
				$($($('.markQuestionsDiv')[i]).find('img')).attr('src', 'assets/images/wrong.png');
			}
		}
	}
	var answer;
	for (var i = 0; i < $('.markQuestionsDiv').length; i++) {
		answer1 = "";
		for (let index = 0; index < $($('.quizQuestionsSlides')[i]).attr('selected-answer').split(',').length; index++) {
			const element = $($('.quizQuestionsSlides')[i]).attr('selected-answer').split(',')[index];
			if (element != '') {
				let tempVar = $($('.quizQuestionsSlides')[i]).find($('.' + element));
				answer = $(tempVar).find('.options').text();
				answer1 += $(tempVar).find('.options').text();
			}
			if (element == '') {
				answer = '';
				answer1 += '';
			}
			if (answer1 != "") {
				answer1 = answer1 + ",";
			}
		}
		if ($())
			if ($($('.quizQuestionsSlides')[i]).attr('marked') == 'true') {

				$($('.markQuestionsDiv')[i]).css('background', 'grey')
			} else {

				$($('.markQuestionsDiv')[i]).css('background', 'white')
			}
		answer1 = answer1.slice(0, -1);
		if ($($('.quizQuestionsSlides')[i]).children('.qustOptions').children('.radioDivmain').children('.radioDiv1').length == 4) {
			$($($('.markQuestionsDiv')[i]).find('span')).text('Q.' + (i + 1) + '.' + answer1);
		} else {
			$($($('.markQuestionsDiv')[i]).find('span')).text('Q.' + (i + 1) + '.' + answer)
		}
	}
	$(".endQuizDiv").css("display", "none");
	$(".quizResultsDiv").css("display", "block");
	$('#total').text(total);
});

function arrayCompare(_arr1, _arr2) {
	if (
		!Array.isArray(_arr1)
		|| !Array.isArray(_arr2)
		|| _arr1.length !== _arr2.length
	) {
		return false;
	}

	// .concat() to not mutate arguments
	const arr1 = _arr1.concat().sort();
	const arr2 = _arr2.concat().sort();

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}



$(document).on('click', '.markQuestionsDiv', function () {
	$(".showQuestionSlstDiv").css("display", "none");
	var ss = $(this).attr('class').split(' ')[1];
	var myArr = ss.split('mq')[1];
	// myArr.replace(',','')
	quizSlideIndex = myArr;
	quizincrement1 = parseInt(myArr);
	quizQuestionsSlides(quizSlideIndex);
	$(".quizQuestionNumber").text(quizSlideIndex);
});

$(document).on('click', '.quizText', function () {
	$(".quizMainContainer").css("display", "block");
})

$(document).on('click', '.backtomainQuiz', function () {
	$(".showQuestionSlstDiv").css("display", "none");
	quizQuestionsSlides(quizSlideIndex);
});

$(document).on('click', '.markButton', function () {
	if (!endQuiz) {
		if ($($(this).parent()).attr('marked') == 'true') {
			$($(this).parent()).attr('marked', 'false')
			$(this).css('background', 'white')
		} else {
			$($(this).parent()).attr('marked', 'true')
			$(this).css('background', 'grey')
		}
	}
});

$(document).on('click', '.earlierScreenDiv', function () {
	orbitRotation();
	if ($('.blackScreenContainer4').css('display') == 'block') {

		$(".blackScreenContainer4").css("display", "none");
		$(".blackScreenContainer2").css("display", "block");
	}
	else if ($('.blackScreenContainer3').css('display') == 'block') {
		$(".blackScreenContainer2").css("display", "block");
		$(".blackScreenContainer3").css("display", "none");
	} else {
		$(".blackScreenContainer5").css("display", "none");
		$(".blackScreenContainer2").css("display", "none");
	}
});