// Note: cannot fully pass jslint

// eslint-disable-next-line spaced-comment
/*jslint white: true, multivar: true, this: true,
browser: true, bitwise: true, for: true, bitwise: true */
/* jshint strict: true */
// eslint-disable-next-line spaced-comment
/*global alert console Element HTMLInputElement window */ //jshint ignore:line
/* jshint enforceall: true */
// jshint singleGroups:false
/* eslint
	"no-alert": 2,
	"no-array-constructor": 2,
	"no-bitwise": 2,
	"no-caller": 2,
	"no-case-declarations": 2,
	"no-catch-shadow": 2,
	"no-class-assign": 2,
	"no-cond-assign": 2,
	"no-confusing-arrow": 2,
	"no-console": 2,
	"no-const-assign": 2,
	"no-constant-condition": 2,
	"no-continue": 0,
	"no-control-regex": 2,
	"no-debugger": 2,
	"no-delete-var": 2,
	"no-div-regex": 2,
	"no-dupe-class-members": 2,
	"no-dupe-keys": 2,
	"no-dupe-args": 2,
	"no-duplicate-case": 2,
	"no-else-return": 2,
	"no-empty": 2,
	"no-empty-character-class": 2,
	"no-empty-function": 2,
	"no-empty-pattern": 2,
	"no-eq-null": 2,
	"no-eval": 2,
	"no-ex-assign": 2,
	"no-extend-native": 2,
	"no-extra-bind": 2,
	"no-extra-boolean-cast": 2,
	"no-extra-label": 2,
	"no-extra-parens": 0,
	"no-extra-semi": 2,
	"no-fallthrough": 2,
	"no-floating-decimal": 2,
	"no-func-assign": 2,
	"no-implicit-coercion": 2,
	"no-implicit-globals": 2,
	"no-implied-eval": 2,
	"no-inline-comments": 0,
	"no-inner-declarations": 2,
	"no-invalid-regexp": 2,
	"no-invalid-this": 2,
	"no-irregular-whitespace": 2,
	"no-iterator": 2,
	"no-label-var": 2,
	"no-labels": 2,
	"no-lone-blocks": 2,
	"no-lonely-if": 2,
	"no-loop-func": 2,
	"no-mixed-requires": 2,
	"no-mixed-spaces-and-tabs": 2,
	"linebreak-style": [2, "windows"],
	"no-multi-spaces": 2,
	"no-multi-str": 2,
	"no-multiple-empty-lines": 2,
	"no-native-reassign": 2,
	"no-negated-condition": 2,
	"no-negated-in-lhs": 2,
	"no-nested-ternary": 2,
	"no-new": 2,
	"no-new-func": 2,
	"no-new-object": 2,
	"no-new-require": 2,
	"no-new-symbol": 2,
	"no-new-wrappers": 2,
	"no-obj-calls": 2,
	"no-octal": 2,
	"no-octal-escape": 2,
	"no-param-reassign": 2,
	"no-path-concat": 2,
	"no-plusplus": 0,
	"no-process-env": 2,
	"no-process-exit": 2,
	"no-proto": 2,
	"no-redeclare": 2,
	"no-regex-spaces": 2,
	"no-restricted-imports": 2,
	"no-restricted-modules": 2,
	"no-restricted-syntax": 2,
	"no-return-assign": 2,
	"no-script-url": 2,
	"no-self-assign": 2,
	"no-self-compare": 2,
	"no-sequences": 2,
	"no-shadow": 2,
	"no-shadow-restricted-names": 2,
	"no-whitespace-before-property": 2,
	"no-spaced-func": 2,
	"no-sparse-arrays": 2,
	"no-sync": 2,
	"no-ternary": 0,
	"no-trailing-spaces": 2,
	"no-this-before-super": 2,
	"no-throw-literal": 2,
	"no-undef": 2,
	"no-undef-init": 2,
	"no-undefined": 2,
	"no-unexpected-multiline": 2,
	"no-underscore-dangle": 2,
	"no-unmodified-loop-condition": 2,
	"no-unneeded-ternary": 2,
	"no-unreachable": 2,
	"no-unused-expressions": [2, { "allowTernary": true }],
	"no-unused-labels": 2,
	"no-unused-vars": 2,
	"no-use-before-define": 2,
	"no-useless-call": 2,
	"no-useless-concat": 2,
	"no-useless-constructor": 2,
	"no-void": 2,
	"no-var": 0,
	"no-warning-comments": 2,
	"no-with": 2,
	"no-magic-numbers": 0,

	"array-bracket-spacing": 2,
	"array-callback-return": 2,
	"arrow-body-style": 2,
	"arrow-parens": 2,
	"arrow-spacing": 2,
	"accessor-pairs": 2,
	"block-scoped-var": 2,
	"block-spacing": 2,
	"brace-style": [2, "1tbs", { "allowSingleLine": true }],
	"callback-return": 2,
	"camelcase": 2,
	"comma-dangle": 2,
	"comma-spacing": 2,
	"comma-style": 2,
	"complexity": [2, 11],
	"computed-property-spacing": 2,
	"consistent-return": 2,
	"consistent-this": 2,
	"constructor-super": 2,
	"curly": 2,
	"default-case": 2,
	"dot-location": 2,
	"dot-notation": 2,
	"eol-last": 2,
	"eqeqeq": [2, "allow-null"],
	"func-names": 2,
	"func-style": [2, "declaration"],
	"generator-star-spacing": 2,
	"global-require": 2,
	"guard-for-in": 2,
	"handle-callback-err": 2,
	"id-length": 0,
	"indent": 0,
	"init-declarations": 0,
	"jsx-quotes": 2,
	"key-spacing": 2,
	"keyword-spacing": 2,
	"lines-around-comment": 0,
	"max-depth": 2,
	"max-len": 2,
	"max-nested-callbacks": 2,
	"max-params": 2,
	"max-statements": 0,
	"new-cap": 2,
	"new-parens": 2,
	"newline-after-var": 0,
	"newline-per-chained-call": [2, {"ignoreChainWithDepth": 4}]
	"object-curly-spacing": [2, "never"],
	"object-shorthand": 2,
	"one-var": 0,
	"one-var-declaration-per-line": 2,
	"operator-assignment": 2,
	"operator-linebreak": [2, "after", { "overrides":
		{ "?": "before", ":": "before" } }],
	"padded-blocks": 0,
	"prefer-arrow-callback": 0,
	"prefer-const": 2,
	"prefer-reflect": 0,
	"prefer-rest-params": 0,
	"prefer-spread": 2,
	"prefer-template": 0,
	"quote-props": 2,
	"quotes": 2,
	"radix": 2,
	"id-match": 2,
	"id-blacklist": 2,
	"require-jsdoc": 0,
	"require-yield": 2,
	"semi": 2,
	"semi-spacing": 2,
	"sort-vars": 2,
	"sort-imports": 2,
	"space-before-function-paren": 0,
	"space-in-parens": 2,
	"space-infix-ops": 2,
	"space-unary-ops": 2,
	"spaced-comment": 2,
	"strict": 2,
	"template-curly-spacing": 2,
	"use-isnan": 2,
	"valid-jsdoc": 2,
	"valid-typeof": 2,
	"vars-on-top": 0,
	"wrap-iife": 2,
	"wrap-regex": 2,
	"yield-star-spacing": 2,
	"yoda": 2 */

(function useStrict() {
"use strict";

function def(v) {
return typeof v !== "undefined";
}

/* function ndef(v) {
return typeof v === "undefined";
} */

// is null or undefined
function isnou(v) {
// eslint-disable-next-line no-eq-null
return v == null; // jshint ignore:line
}

function isok(v) {
// eslint-disable-next-line no-eq-null
return v != null; // jshint ignore:line
}

function isnum(v) {
return typeof v === "number";
}

function getTarget(e) {
	function gettrg(r) {
		return r ? r.srcElement || r.target : null;
	}
return gettrg(e) || gettrg(window.event);
}

function fixAddEvent(o) {
if (o && !o.addEventListener) {
	o.addEventListener = function addEventListenerFix(e, f) {
		this.attachEvent("on" + e, f);
	};
}
return o;
}

// jshint ignore:start
// eslint-disable-next-line no-unused-vars
function log(m) {
// eslint-disable-next-line no-console
if (def(window.console)) { console.log(m); }  /* else {
	document.body.appendChild(document.createElement("br"));
	document.body.appendChild(document.createTextNode(m));
} */
}
// jshint ignore:end

// ============= shims ================
// can be safely removed if no old browsers support is needed
/* eslint-disable no-extend-native */

if (!Object.prototype.hasOwnProperty) {
// jshint freeze:false
// jshint -W001
Object.prototype.hasOwnProperty = function hasOwnPropertyFix(prop) {
	return def(this[prop]);
};
}

if (!Array.prototype.forEach) {
Array.prototype.forEach = function forEachFix(cback, thisArg) {
	var T, k;
	if (isnou(this)) {
		throw new TypeError("this is null or not defined");
	}
	var O = Object(this);
	// eslint-disable-next-line no-bitwise
	var len = O.length >>> 0; // jshint ignore:line
	if (typeof cback !== "function") {
		throw new TypeError(cback + " is not a function");
	}
	if (arguments.length > 1) { T = thisArg; }
	k = 0;
	var kValue;
	while (k < len) {
		if (O.hasOwnProperty(k)) {
			kValue = O[k];
			// jshint ignore:start
			cback.call ? cback.call(T, kValue, k, O) : cback(kValue, k, O);
			// jshint ignore:end
			k++;
		}
	}
};
}

if (!Array.prototype.every) {
Array.prototype.every = function everyFix(callbackfn, thisArg) {
	var T, k;
	if (isnou(this)) {
		throw new TypeError("this is null or not defined");
	}
	var O = Object(this);
	// eslint-disable-next-line no-bitwise
	var len = O.length >>> 0;
	if (typeof callbackfn !== "function") { throw new TypeError(); }
	if (arguments.length > 1) { T = thisArg; }
	k = 0;
	var kValue, testResult;
	while (k < len) {
		if (O.hasOwnProperty(k)) {
			kValue = O[k];
			testResult = callbackfn.call
				? callbackfn.call(T, kValue, k, O) // jshint ignore:line
				: callbackfn(kValue, k, O);
			if (!testResult) { return false; }
		}
		k++;
	}
	return true;
};
}

if (!Array.prototype.indexOf) {
Array.prototype.indexOf = function indexOfFix(searchElement, fromIndex) {
	var k;
	if (isnou(this)) {
		throw new TypeError("\"this\" is null or not defined");
	}
	var O = Object(this);
	// eslint-disable-next-line no-bitwise
	var len = O.length >>> 0;
	if (len === 0) { return -1; }
	var n = Number(fromIndex) || 0;
	if (Math.abs(n) === Infinity) { n = 0; }
	if (n >= len) { return -1; }
	k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	while (k < len) {
		if (O.hasOwnProperty(k) && O[k] === searchElement) { return k; }
		k++;
	}
	return -1;
};
}

if (!window.getComputedStyle) {
	window.getComputedStyle = function getComputedStyleFix(element) {
		return element.currentStyle;
	};
}

var hasEventListen = def(window.Element) && Element.prototype.addEventListener;

if (!hasEventListen && def(window.Element)) {
fixAddEvent(Element.prototype);
}
// jshint freeze:true
/* eslint-enable no-extend-native */

var ieInputs = [],
	ieTimerID;

function ieInputTimerFunc() {
var j;
if (ieInputs.every(function eachInput(e, i) {
	// log("timerFunc: t.ieValue = \"" + t.ieValue + "\" t.value = \"" +
	//  t.value + "\"");
	if (e.ieValue === e.value) { return true; }
	j = i;
	// log("clearInterval: " + t.ieValue + " !== " + t.value);
	return false;
})) { return; }
var e = ieInputs[j];
e.ieValue = e.value;
ieInputs = ieInputs.slice(0, j);
ieInputs.concat(ieInputs.slice(j + 1, 333333));
if (ieInputs.length === 0) {
	clearInterval(ieTimerID);
	ieTimerID = null;
}
var ev = {};
ev.srcElement = e;
e.ieFunc(ev);
}

function ieInputsetTimer(t) {
if (ieInputs.indexOf(t) >= 0) { return; }
t.ieValue = t.value;
ieInputs[ieInputs.length] = t;
if (ieInputs.length === 1) {
	ieTimerID = setInterval(ieInputTimerFunc, 1000);
}
}

function ieInputaddEventInput(e, f) {
if (hasEventListen) { return; }
/* running ancient version of IE.
old Internet Explorer doesn't support Input event, need to use
onpropertychange.
but there is more: in the strict mode, old IE versions have a bug:
after changing of value of input element with js code, first keystroke in
that element will be IGNORED. that will screw this page up, so I'm forced
to use timer to detect user's input. I don't want to switch to transitional.

fuck microsoft. */
e.setValue = function setVal(nv) {
	var n = String(nv), // important!
		that = this;
	that.ieValue = n;
	that.value = n;
	ieInputsetTimer(that);
};
e.ieValue = e.value;
e.ieFunc = f;
e.attachEvent("onpropertychange", function ieInputPropChanged(ev) {
	var evn = ev || event,
		t = evn.srcElement;
	if (evn.propertyName !== "value" || String(t.ieValue) === t.value) {
		return;
	}
	t.ieValue = e.value;
	t.ieFunc(evn);
});
ieInputsetTimer(e);
}

// ============= shims end =================

// ========== actual script begin =============

function $(elid) {
return fixAddEvent(document.getElementById(elid));
}

function str(s) {
return isok(s) ? s : "";
}

function findParent(node, tag) {
var n = node;
while (n) {
	if (n.tagName.toLowerCase() === tag) { break; }
	n = n.parentNode;
}
return n;
}

function addClick(e, f) {
var m = e;
if (typeof m === "string") { m = $(e); }
fixAddEvent(m).addEventListener("click", f);
}

function addEventInput(e, f) {
e.setValue = function setVal(nv) { this.value = nv; }; // jshint ignore:line
if (hasEventListen) { e.addEventListener("input", f); }
if (ieInputaddEventInput) { ieInputaddEventInput(e, f); }
}

function getText(elem) {
if (def(elem.textContent)) { return elem.textContent; }
if (def(elem.innerText)) { return elem.innerText; }
return null;
}

function setText(elem, text) {
if (def(elem.textContent)) { elem.textContent = text; } else
if (def(elem.innerText)) { elem.innerText = text; }
}

function removeChildren(e) {
var c = e.firstChild;
while (c) {
	e.removeChild(c);
	c = e.firstChild;
}
}

function addCell(row, text) {
var c = row.insertCell(-1);
setText(c, text);
return c;
}

function createDocumentFragment() {
var r = null;
try {
	r = document.createDocumentFragment();
} catch (ignore) {
	//
}
return r;
}

function minmax(a, b, max) {
var	c = isnum(a),
	d = isnum(b);
if (!c && !d) { return null; }
if (c && d) { return (a > b === max) ? a : b; }
return c ? a : b;
}

var
	ie6OrLower = null;

function isIE6OrLower() {
if (ie6OrLower === null) {
	var d = document.createElement("div");
	d.innerHTML = "<!--[if lte IE 6]><i></i><![endif]-->";
	ie6OrLower = d.getElementsByTagName("i").length === 1;
}
return ie6OrLower;
}

var
	numbersmods = 16,
	rights = ["kick", "nextmap", "map", "maprestart", "gametype",
		"mbmode", "ban", "tempban, removetempban, tempbanlist",
		"forceteam", "vstr", "campaign, campaignfile", "poll",
		"removeban", "shuffle", "mute", "settk"];

function updateUI(e, b) {
$("reset").disabled = b;
e.className = b ? "" : "invnum";
}

function rightsOfBoxes(boxes) {
var j = 0;
boxes.forEach(function calcinn(e, i) {
	// eslint-disable-next-line no-bitwise
	if (e.checked) { j += 1 << i; }
});
return j;
}

function isValidCfg(v) {
// eslint-disable-next-line no-bitwise
return !isNaN(v) && (v % 1) === 0 && v >= (1 << 31) && v <= -((1 << 31) - 1);
}

function rightsToStr(rv) {
var z = "";
if (isValidCfg(rv)) {
	rights.forEach(function smodtostr(el, ii) {
		// eslint-disable-next-line no-bitwise
		if ((1 << ii) & rv) {
			if (z) { z += ", "; }
			z += el;
		}
	});
}
return z;
}

function calculate() {
var e = $("result");
e.setValue(rightsOfBoxes($("flags").boxes));
updateUI(e, true);
}

function checkRow(row, c, b) {
var r = row || findParent(c, "tr");
r.className = b ? "chkrow" : "";
if (b !== null) { c.checked = b; }
}

function checkRights(boxes, value) {
boxes.forEach(function chkchkbx(el, i) {
	// eslint-disable-next-line no-bitwise
	checkRow(null, el, (1 << i) & value);
});
}

function checkAll(ev) {
/* eslint-disable sort-vars */
var t = getTarget(ev).parentNode.id === "buttons",
	s = t ? "dlgflags" : "flags",
	c = $(s).boxes,
	b = c.every(function isEveryChecked(e) { return e.checked; });
/* eslint-enable sort-vars */
c.forEach(function doCheckAll(e) { checkRow(null, e, !b); });
if (!t) { calculate(); }
}

function reset() {
calculate();
}

function flagsClick(ev) {
var b,
	inp = false,
	r = getTarget(ev);
switch (r.tagName.toLowerCase()) {
	case "input":
		b = r;
		r = findParent(r, "tr");
		inp = true;
		break;
	case "td":
		r = r.parentNode;
		b = r.firstChild.firstChild;
		break;
	case "tr":
		b = r.firstChild.firstChild;
		break;
	default:
		// fuck this shit, I'll be a stripper...
		return false;
}
checkRow(r, b, inp ? null : !b.checked);
if (findParent(r, "table").id === "flags") { calculate(); }
return true;
}

function lineToPos(lines, line, iehack) {
/* calculating pos from line is tricky:
	calculating pos for modifying text content in ie, and for any purpose in
		other browsers (Opera, Firefox...) performing in normal way, adding 1
		per	every	line.
	calculating for selection text in Internet Explorer ONLY requires NOT adding
		1 per line.
	Good job, Microsoft. */
var r = 0;
lines.every(function lineToPosInn(e, i) {
	if (i === line) { return false; }
	r += e.length;
	return true;
});
return iehack ? r : r + line;
}

function selectLine(tarea, line) {
/* eslint-disable sort-vars */
var v = tarea.value,
	a = v.split("\n"),
	b = def(tarea.selectionStart),
	s, x;
/* eslint-enable sort-vars */
s = lineToPos(a, line, !b);
x = s + a[line].length;
if (b) {
	// normal way: Opera, Firefox...
	tarea.focus();
	tarea.selectionStart = s;
	tarea.selectionEnd = x;
	return true;
}
if (tarea.createTextRange) {
	// perversion: internet explorer
	tarea.focus();
	var r = tarea.createTextRange();
	r.collapse(true);
	r.moveEnd("character", x);
	r.moveStart("character", s);
	r.select();
	return true;
}
return true;
}

function fillLinesCell(c) {

	function addEx(st, tag) {
	if (isnou(st)) { return; }
	var i = st,
		u = document.createElement(tag);
	if (tag === "a") {
		u.href = "#/";
		i++;
	}
	setText(u, i);
	c.appendChild(u);
	}

var r = c.parentNode,
	// eslint-disable-next-line sort-vars
	o = r.obj,
	s = o.lnCfg,
	t = o.lnPass;
/* don't change to if (s || t) because 0 evalutes to false in same
	way as undefined or null does! */
if (isok(s) || isok(t)) {
	if (s > t) {
		var x = s;
		s = t;
		t = x;
	}
	addEx(s, "a");
	if (isok(s) && isok(t)) { addEx(", ", "span"); }
	addEx(t, "a");
} else { setText(c, ""); }
}

function updateLinesCell(row) {
var c = row.cells[1];
removeChildren(c);
fillLinesCell(c);
}

function shiftLineNumbers(row, line) {
var b, i, o, r,
	t = row.parentNode.rows;

	function shift(ln) {
	if (isnou(ln) || ln < line) { return false; }
	b = true;
	return true;
	}

for (i = 0; i < t.length; i++) {
	r = t[i];
	if (row === r) { continue; } // already handled
	b = false;
	o = r.obj;
	if (shift(o.lnPass)) { o.lnPass++; }
	if (shift(o.lnCfg)) { o.lnCfg++; }
	if (b) { updateLinesCell(r); }
}
}

function updateConfig(ev, password) {
/* eslint-disable sort-vars */
var
	f = $("dlgflags"),
	t = getTarget(ev),
	r = password ? findParent(t, "tr") : f.row,
	o = r.obj,
	n = password ? o.lnPass : o.lnCfg,
	nl = isnou(n),
	ta = $("config"),
	v = ta.value,
	a = v.split("\n"),
	s = 0,
	d = password ? t.value : rightsOfBoxes(f.boxes),
	x;
/* eslint-enable sort-vars */

	function findInsert() {
	/* there is no line for this thing in a config yet, and that's gonna be
	tricky. Have to calculate where to insert a new line.
	first: try to insert it just around of "buddy" smod line (password for
	config,	config for password) */
	if (password && isok(o.lnCfg)) {
		n = o.lnCfg + 1;
		return;
	}
	if (!password && isok(o.lnPass)) {
		n = o.lnPass;
		o.lnPass++;
		return;
	}
	var bd = r.parentNode,
		i, i1, i2, inc, oo;

		function doit(dir) {
		if (dir) {
			i2 = -1;
			inc = -1;
		} else {
			i2 = bd.rows.length;
			inc = 1;
		}
		i1 = r.sectionRowIndex + inc;
		for (i = i1; i !== i2; i += inc) {
			oo = bd.rows[i].obj;
			n = minmax(oo.lnCfg, oo.lnPass, dir);
			if (n === null) { continue; }
			if (dir) { n++; }
			return true;
		}
		return false;
		}

	/* second: try to insert right after some previous smod, i.e. smod 6 after
	smod 5, if there is no 5, search for 4, then 3, 2... etc
	third: try to insert right before some next smod, i.e. smod 6 before
	smod 7, if there is no 7, search for 8, then 9, 10... etc */
	if (doit(true) || doit(false)) { return; }
	/* fourth: no smods at all, let's insert new one right in the middle... */
	n = Math.floor(a.length / 2);
	}

if (nl) {
	findInsert();
	if (password) { o.lnPass = n; } else { o.lnCfg = n; }
}
s = lineToPos(a, n, false);
x = s;
if (nl) {
	updateLinesCell(r);
	/* since new line was added, all lines below got new numbers. Have to modify
	variables and UI elements to reflect those changes. */
	shiftLineNumbers(r, n);
} else { x += a[n].length; }
var ss = nl ? "\n" : "";
var z = "seta g_" + (password ? "smodAdminPassword" : "smodConfig") + "_";
v = v.slice(0, s) + z + (r.sectionRowIndex + 1) + " \"" + d + "\"" + ss +
	v.slice(x, 555555);
ta.setValue(v);
if (password) { return; }
o.config = d;
setText(r.cells[2], rightsToStr(d));
}

function createCmdDlg() {
if ($("dlgflags")) { return; }
var c = $("btnclose");

	function closeClick(e) {
	if (getTarget(e).id === "btnok") { updateConfig(e, false); }
	$("dlgback").className = "dlgback dispnone";
	document.body.className = "";
	}

addClick(c, closeClick);
addClick("btnok", closeClick);
addClick("btncancel", closeClick);
addClick(window, function windowClick(e) {
	var b = $("dlgback");
	if (getTarget(e) === b) { b.className = "dispnone"; }
});
var f = $("flags").cloneNode(true);
f.id = "dlgflags";
var n = f.getElementsByTagName("INPUT");
// getElementsByTagName returns a collection, but we need an array
f.boxes = [];
var i;
for (i = 0; i < n.length; i++) { f.boxes[i] = n[i]; }
$("dlgcontent").appendChild(f);
/* DOM specifications says no events should be copied via cloneNode() and
	browsers follow that.
	Except IE: cloned table and button get events from original elems,
	therefore without additional checking they get second event instances,
	therefore each listener will be called twice,
	therefore checkbox that isn't checked will be checked and then unchecked,
	therefore it will not be possible to check/uncheck rows.
	Good job, Microsoft. */
if (hasEventListen) { addClick(f, flagsClick); }

f = $("checkall").cloneNode();
$("buttons").appendChild(f);
if (hasEventListen) { addClick(f, checkAll); }
}

function smodsClick(ev) {
var i,
 r = getTarget(ev);
switch (r.tagName.toLowerCase()) {
	case "td":
		if (r.cellIndex !== 2) { return true; }
		break;
	case "a":
		/* line numbers is displayed to a user as one-based,
		 but script needs zero-based numbers */
		i = Number(getText(getTarget(ev))) - 1;
		selectLine($("config"), i);
		return false;
	default: return true;
}
r = r.parentNode;
createCmdDlg();
var t = $("dlgflags");
t.row = r;
checkRights(t.boxes, r.obj.config);
setText($("dlgtitle"), getText($("dlgtitletext")) +
 (Number(r.sectionRowIndex) +	1));
// dialog stuff
t = $("dlgback");
t.className = "dlgback dispflex";
if (window.getComputedStyle(t).display !== "flex") {
	if (isIE6OrLower()) {
		t.className = "dlgback dlgbackie6";
		// oh crap...
		t.style.height = document.body.scrollHeight + "px";
		document.body.className = "nomargin";
	}
	var d = $("dlgframe"),
		s = minmax(document.documentElement.offsetHeight,
			window.innerHeight, true),
		x = d.style;
	x.position = "relative";
	x.width = 600;
	s	= (s - d.clientHeight) / 2;
	if (isIE6OrLower()) {
		s += minmax(document.body.scrollTop, document.documentElement.scrollTop,
			true);
	}
	x.top = s;
}
return false;
}

function resultKeyPress(ev) {
var e = ev || window.event,
	k = isnou(e.which) ? e.keyCode : e.which;
if (k === null || k < 32 || e.ctrlKey || e.altKey) { return true; }
k = String.fromCharCode(k);
if ((k >= "0" && k <= "9") || k === "-") { return true; }
if (e.preventDefault) { e.preventDefault(); }
return false;
}

function resultInput() {
// log("resultInput");
var e = $("result"),
	v = Number(e.value),
// eslint-disable-next-line sort-vars
	b = isValidCfg(v);
updateUI(e, b);
if (!b) { return; }
checkRights($("flags").boxes, v);
}

function passInput(e) {
updateConfig(e, true);
}

function configScroll() {
var b = createDocumentFragment(),
	c = $("config"),
	d = $("linenumbersinn"),
	f = b || d,
	i,
	l = c.value.split("\n").length;


	function yPxToLine(v) {
	return Math.round(((c.scrollTop + v) * l) / c.scrollHeight);
	}

var
	x = yPxToLine(0),
	y = yPxToLine(c.clientHeight);

removeChildren(d);
for (i = x; i < y; i++) {
	f.appendChild(document.createTextNode(String(i + 1)));
	f.appendChild(document.createElement("br"));
}
if (b) { d.appendChild(f); }
/* calculate offset from top pixel of line to actual pixel where line is
 currently displayed, since textbox can show top line particially.
 We have to adjust line numbers bar according to non-integral textarea
 line drawing. */
x = c.scrollTop - ((x * c.scrollHeight) / l);
i = c.clientHeight;
$("linenumbers").style.height = (i + 4)	+ "px";
d.style.top = Math.round(2 - x) + "px";
}

var
	lastHeight = 0;

function configMouseMove() {
var c = $("config");
if (lastHeight === c.clientHeight) { return; }
// log(c.clientHeight);
configScroll();
lastHeight = c.clientHeight;
}

function configInput() {
var a = [],
	c = $("config"),
	l = c.value.split("\n"),
	m, n, o,
	p = /seta\ g_smodAdminPassword_(\d+)\ +"(.*)"/,
	r = /seta\ g_smodConfig_(\d+)\ +"(-?\d+)"/;

for (n = 0; n < numbersmods; n++) { a[n] = {}; }

l.forEach(function scanCfg(e, i) {

	function geto(re) {
	m = re.exec(e);
	if (!m) { return false; }
	n = Number(m[1]);
	if (n < 1 || n > numbersmods) { return false; }
	o = a[n - 1];
	return true;
	}

	if (geto(r)) {
		o.lnCfg = i;
		o.config = m[2];
		return;
	}
	if (m || !geto(p)) { return; }
	o.lnPass = i;
	o.password = m[2];
});

var b = $("smods").tBodies[0];
a.forEach(function addsmods(e, i) {
	r = b.rows[i];
	r.obj = e;
	updateLinesCell(r);
	setText(r.cells[2], rightsToStr(Number(e.config)));
	r.cells[3].firstChild.setValue(str(e.password));
	e.password = null; // no need anymore
});
configScroll();
}

function copyPaste(e) {
var b = false,
	c = getTarget(e).id,
	i = $("result");
i.focus();
i.select();
try {
	b = document.execCommand(c);
} catch (ignore) {
	//
}
if (b) { return; }
// eslint-disable-next-line no-alert
alert("It seems that your browser doesn't support this operation yet.\n" +
	"You can use keyboard shortcuts or browser menu to copy or paste text.");
}

function init() {
var a = $("flags"),
	b = a.tBodies[0];
a.boxes = [];
removeChildren(b); // remove dummy elements

if (!hasEventListen) { $("result").focus(); } // old IE crash fix
var f = hasEventListen ? document.createElement("tbody") : b;

rights.forEach(function inittbl(ignore, i) {
	var cb = document.createElement("input"),
		r = f.insertRow(-1);
	a.boxes[i] = cb;
	cb.type = "checkbox";
	r.insertCell(-1).appendChild(cb);

	addCell(r, i);
	// eslint-disable-next-line no-bitwise
	addCell(r, 1 << i);
	addCell(r, rights[i]);
	f.appendChild(r);
});
if (hasEventListen) { b.parentNode.replaceChild(f, b); }

b = $("smods").tBodies[0];
var c = document.createElement("tbody");
if (!hasEventListen) { b.parentNode.replaceChild(c, b); }
var i, r, x;

	function add(st) {
	return addCell(r, str(st));
	}

for (i = 0; i < numbersmods; i++) {
	r = c.insertRow(-1);
	r.obj = {};
	add(i + 1);
	add("");
	add("");
	x = document.createElement("input");
	x.className = "smodseditor";
	r.insertCell(-1).appendChild(x);
	addEventInput(x, passInput);

	c.appendChild(r);
}
if (hasEventListen) { b.parentNode.replaceChild(c, b); }

addClick("checkall", checkAll);
addClick("reset", reset);
addClick("copy", copyPaste);
addClick("flags", flagsClick);
addClick("paste", copyPaste);
var e = $("result");
e.addEventListener("keypress", resultKeyPress);
addEventInput(e, resultInput);
addEventInput($("config"), configInput);
addClick("smods", smodsClick);

c = $("config");
c.wrap = "off";
var	n = $("linenumbers"),
	s = n.style,
	y = window.getComputedStyle(c);
s.lineHeight = y.lineHeight;
s.fontSize = y.fontSize;
c.addEventListener("scroll", configScroll);
c.addEventListener("mousemove", configMouseMove);
configScroll();
return false;
}

init();

}());
