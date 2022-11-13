// delete .no-scripts error
window.onload = function () {
	var a = document.querySelector(".no-scripts");
	a.remove()
}

// ============= SLIDERS ============
const ms = document.querySelector(".main-slider"),
	mb = document.querySelectorAll(".main-slider__block"),
	ss = document.querySelectorAll(".second-slider");


// moving main slider --------------------------
for (i = 0; i < mb.length; i++) {
	mb[i].onclick = msmove;
}
function msmove() {
	var ind = 0;								//for main-sli   ex: main-slider__block [ind]
	var indss = 0;								//for second-sli ex: second-slider__block [ind] [indss]
	for (var i = 0; i < mb.length; i++) {
		if (this !== mb[i]) { }
		else { ind = i };
	};
	ms.style.left = 300 - ind * 200;
	for (i = 0; i < mb.length; i++) {
		ss[i].style.overflow = "hidden"
		ss[i].style.opacity = "0"
	}
	ss[ind].style.overflow = "visible"
	ss[ind].style.opacity = "1"
	var sb = ss[ind].querySelectorAll(".second-slider__block"); // let second slider block (elems in arr)

	// moving second slider ------------------------
	for (i = 0; i < sb.length; i++) {
		sb[i].onclick = ssmove;
	}
	var selected = 0;
	function ssmove() {
		for (var i = 0; i < sb.length; i++) {
			if (this !== sb[i]) { }
			else { indss = i };
		};
		ss[ind].style.top = 300 - indss * 140;
		console.log(ind + " " + indss);
		for (i = 0; i < sb.length; i++) {
			sb[i].style.marginTop = "0";
			sb[i].querySelector(".second-slider__icon").style.opacity = "0.8";
			sb[i].querySelector(".second-slider__icon").style.transform = "scale(1)";
			sb[i].firstElementChild.style.marginRight = "20px";
			// sb[i].lastElementChild.style.fontSize = "18px";
			// sb[i].lastElementChild.firstElementChild.style.fontSize = "18px";
		}
		sb[indss].style.marginTop = "170px";
		sb[indss].querySelector(".second-slider__icon").style.opacity = "1";
		sb[indss].querySelector(".second-slider__icon").style.transform = "scale(1.3)";
		sb[indss].firstElementChild.style.marginRight = "50px";
		// sb[indss].lastElementChild.style.fontSize = "22px";
		// sb[indss].lastElementChild.firstElementChild.style.fontSize = "22px";
	}

	// scrolling second sli -------------------------
	var scrl = 0;
	var scrlx = 0;
	elem = document;
	if (elem.addEventListener) {
		if ('onwheel' in document) {
			elem.addEventListener("wheel", onWheel);				// IE9+, FF17+, Ch31+
		} else if ('onmousewheel' in document) {
			elem.addEventListener("mousewheel", onWheel);			// устаревший вариант события
		} else {
			elem.addEventListener("MozMousePixelScroll", onWheel);		// Firefox < 17
		}
	} else {
		elem.attachEvent("onmousewheel", onWheel);					// IE8-
	}
	function onWheel(e) {
		delta = e.deltaY || e.detail || e.wheelDelta;
		if (sb.length > 1) {
			if (indss < 1) {
				if (delta > 0) { scrl++; indss++ }
			}
			else if (indss < sb.length - 1) {
				if (delta > 0) { scrl++; indss++ }
				else { scrl--; indss-- }
			}
			else {
				if (delta < 0) { scrl--; indss-- }
			}
			ss[ind].style.top = 300 - indss * 140;
			for (i = 0; i < sb.length; i++) {
				sb[i].style.marginTop = "0";
				sb[i].querySelector(".second-slider__icon").style.opacity = "0.8";
				sb[i].querySelector(".second-slider__icon").style.transform = "scale(1)";
				sb[i].firstElementChild.style.marginRight = "20px";
			}
			sb[indss].style.marginTop = "170px";
			sb[indss].querySelector(".second-slider__icon").style.opacity = "1";
			sb[indss].querySelector(".second-slider__icon").style.transform = "scale(1.3)";
			sb[indss].firstElementChild.style.marginRight = "50px";
		}
	}
}

