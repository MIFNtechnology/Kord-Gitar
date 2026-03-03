function toggleDarkMode() {
const body = document.body;
body.classList.toggle('dark-mode');

if (body.classList.contains('dark-mode')) {
document.getElementById('dark-mode-toggle').textContent = '🌞'; // Sun
  
 document.getElementById('resizenormal').style.setProperty('color', 'white', 'important');
  
document.getElementById('main-mkd-post').style.setProperty('background-color', 'black', 'important');
document.getElementById('main-mkd-post').style.setProperty('color', 'white', 'important');

} else {
document.getElementById('dark-mode-toggle').textContent = '🌙'; // Moon
document.getElementById('resizenormal').style.setProperty('color', 'black', 'important');
document.getElementById('main-mkd-post').style.setProperty('color', 'black', 'important');
document.getElementById('main-mkd-post').style.setProperty('background-color', 'white', 'important');
}
}

if(is_list == 0){ // Not working on label LIST page
var div123 = document.getElementById("test1");
if (document.getElementsByClassName("beta").length){
//do nothing
}
else if (document.getElementsByClassName("alpha").length){
// do nothing 
}else if(islabel == "Guitar Pro"){
//do nothing
}else{
div123.innerHTML = div123.innerHTML.replace(/(Aaug|Daug|D#m7|E#m7|F#m7|G#m7|A#m7|B#m7|Dm7|Em7|Fm7|Gm7|Am7|Bm7|C#maj7|D#maj7|E#maj7|Fmaj7|Gmaj7|Amaj7|Bmaj7|Cmaj7|Dmaj7|Emaj7|F#maj7|G#maj7|A#maj7|Aadd9|Badd9|Cadd9|Dadd9|Eadd9|Fadd9|Gadd9|Amaj7|Bmaj7|Cmaj7|Dmaj7|Emaj7|Fmaj7|Gmaj7|Asus4|Bsus4|Csus4|Dsus4|Esus4|Fsus4|Gsus4|A#m|B#m|C#m|D#m|E#m|F#m|G#m|A#7|B#7|C#7|D#7|E#7|F#7|G#7|A#5|B#5|C#5|D#5|E#5|F#5|G#5|A#m7|B#m7|C#m7|D#m7|E#m7|F#m7|G#m7|A#|B#|C#|D#|E#|F#|G#|A7|B7|C7|D7|E7|F7|G7|A6|B6|C6|D6|E6|F6|G6|A5|B5|C5|D5|E5|F5|G5|Abm|Bbm|Cbm|Dbm|Ebm|Fbm|Gbm|Bdim|\bAb\b|Bb|Cb|Db|\bEb\b|Fb|Gb|\bAm\b|Bm|Cm|Dm|\bEm\b|Fm|Gm|\bA\b|\bB\b|\bC\b|\bD\b|\bE\b|\bF\b|\bG\b)/g, function(match) {
return "<span class='colorchord' onclick='ChordHint(this.textContent,this)'>" + match + "<span class='tootltipchord'></span></span>";
});
}
}

function resizefont(type){
  	//var el = document.getElementById("test1");
      var el = document.querySelector("#test1 *");
 	 var currsize = window.getComputedStyle(el, null).getPropertyValue('font-size');
  
  	if(type == 'up'){
  		document.getElementById("test1").style.fontSize = (parseInt(currsize) + 1)+'px';
	  }
  
  	if(type == 'down'){
  		document.getElementById("test1").style.fontSize = (parseInt(currsize) - 1)+'px';
	  }
  }
function resizelarge() {
    document.getElementById("test1").style.fontSize = "large";

    var normal = document.getElementById("resizenormal");
	var large = document.getElementById("resizelarge");
    if (normal.style.display === "none") {
        normal.style.display = "";
		large.style.display = "none";
    } else {
        normal.style.display = "none";
		large.style.display = "block";
    }
}

function resizenormal() {
    document.getElementById("test1").style.fontSize = "16px";

   var normal = document.getElementById("resizenormal");
	var large = document.getElementById("resizelarge");
    if (normal.style.display === "none") {
        normal.style.display = "";
	//	large.style.display = "none";
    } else {
      //  normal.style.display = "none";
		//large.style.display = "";
    }
 
}

function playaBack() {
window.location.href = "*/";
interval = interval ? clearInterval(interval) : setInterval(scroll, 100 / speed);
}
function backHome() {
window.location.href = "../index.html";
interval = interval ? clearInterval(interval) : setInterval(scroll, 100 / speed);
}

var result143 = document.getElementById('titlehref').innerHTML;
var resultlast143= result143.replace('Chord','');
resultlast143 = resultlast143.replace(/\(.*?\)/g, '');

function starScroll() {
window.scrollBy(0, 1), scrolldelay = setTimeout(starScroll, 250)
}

function cepat() {
starScroll(), valSpeed = document.getElementById("kecepatan").innerHTML, hitSpeed = +valSpeed + 17, document.getElementById("kecepatan").innerHTML = hitSpeed;
//, document.getElementById("chordku").setAttribute("class", "stickyChord"), document.getElementById("sidebar").setAttribute("class", "sidebar section hidethis");
if (valSpeed < 17) {
//  window.scrollTo('', 100)
}
}

function lambat() {
clearTimeout(scrolldelay), valSpeed = document.getElementById("kecepatan").innerHTML, hitSpeed = +valSpeed - 17;
if (valSpeed < 0) {
 //document.getElementById("chordku").removeAttribute("class"), document.getElementById("sidebar").setAttribute("class", "sidebar section")
}
if (valSpeed > 17) {
document.getElementById("kecepatan").innerHTML = hitSpeed

} else {
document.getElementById("kecepatan").innerHTML = 0;
}
}