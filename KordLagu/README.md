Copy & create

```html
<!DOCTYPE html>
<html>
<head>

<title>PASTE-HERE</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="../css/main.css" type="text/css">

</head>
<body id="bodybody">

<script>
  var islabel = "";
  var is_list = 0; // to detect is a label list page or not
</script>

<div id="wrap2">
<h1 class="post-title">
<a id="titlehref">PASTE-HERE</a>
</h1>
<div id="main-mkd-post">
<div id="menu-post">
<div class="container-fontsize">
<button class="resizefontcss" id="upresize" onclick="resizefont('up')" type="button">▲</button>
<button class=" nobgcss" id="resizenormal" onclick="resizenormal()" type="button">Font</button>
<button class="resizefontcss" id="downresize" onclick="resizefont('down')" type="button">▼</button>
</div>
<span id="dark-mode-toggle" onclick="toggleDarkMode()">🌙</span>
</div>

<span id="test1"><pre> 
<span onclick="ChordHint(this.textContent,this)">

  PASTE-HERE-EXAMPLE
   Intro:
  Dm  A#  Dm  C  Dm

  Dm   A
  Hanya padamu Aku Meminta
  Gm   Dm
  Sesungguhnya kau pemurah
  A   Dm
  Ampuni Segala Dosaku
  PASTE-HERE-EXAMPLE
  
  
   
   By-kaitou_E😎🇲🇾♥️🇵🇸

</span>
</pre></span>

<button onclick="backHome()">
      🏠HOME
</button>
<button id="googlebutton" onclick="document.body.scrollTop = 0;document.documentElement.scrollTop = 0;" style="text-align:center;" title="Go to top">Go to top</button>
<br>
<br>

<div class="footerv2item" id="footerv2item" style="display: unset;">
<span class="divide">
<span id="minusminus" onclick="lambat();">-</span>
<a id="start"><span id="kecepatan">0</span></a>
<a id="pause" style="display:none;">STOP</a>
<span id="plusplus" onclick="cepat();">+</span>
<small style="display:block;padding-top:3px;font-size: 0.67em;">Autoscroll</small>
</span>
<span class="divide">
<span id="transposesection">
<a id="transposebutton" onclick="shiftPlus('src_id','test1')" value="Transpose +1"><i class="lefttranspose"></i></a>
<span id="runvalue">0</span>
<a class="transposebuttonminus" id="transposebutton" onclick="shiftMinus('src_id','test1')" value="Transpose -1"><i class="righttranspose"></i></a>
</span>
<small style="display:block;padding-top:3px;font-size: 0.67em;">Transpose</small>
</span>
</div>

<script type="text/javascript" src="../js/main.js">
</script>
<script src="../js/tootltipchord.js">
</script>
<script src="../js/NoSleep.min.js">
</script>

</body>
</html>
```
