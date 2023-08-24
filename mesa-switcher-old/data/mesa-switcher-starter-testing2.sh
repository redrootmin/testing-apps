#!/bin/bash

UI=$(cat <<EOF
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.body {
  background-color: #CECECE;
}
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}
/* Green */
.bar {
  border-color: #4CAF50;
  color: green;
  text-decoration: none;
}
.bar:hover {
  background-color: #4CAF50;
  color: white;
}
/* Blue */
.bl {
  border-color: #2196F3;
  color: dodgerblue;
  text-decoration: none;
}
.bl:hover {
  background: #2196F3;
  color: white;
  text-decoration: none;
}
/* Orange */
.bltop {
  border-color: #ff9800;
  color: orange;
  text-decoration: none;
}
.bltop:hover {
  background: #ff9800;
  color: white;
  text-decoration: none;
}
/* Red */
.restart{
  border-color: #f44336;
  color: red;
  text-decoration: none;
}
.restart:hover {
  background: #f44336;
  color: white;
}
/* Gray */
.default {
  border-color: #000000;
  color: black;
  text-decoration: none;
}
.default:hover {
  background: #000000;
  color: white;
  text-decoration: none;
}
</style>
<script type="text/javascript">
    if (document.addEventListener) { // IE >= 9; other browsers
        document.addEventListener('contextmenu', function(e) {
            //here you do nothing on right-click
            e.preventDefault();
        }, false);
    } else { // IE < 9
        document.attachEvent('oncontextmenu', function() {
            alert("You've tried to open context menu");
            window.event.returnValue = false;
        });
    }
</script>
</head>
<body class="body">
<div 
 style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" 
 unselectable="on"
 onselectstart="return false;" 
 onmousedown="return false;">
<h1>HTML Example</h1>
<a href="gg" class="btn bar">About</a>
<a href="bb" class="btn bl">List</a>
<a href="ee" class="btn bltop">Hmm</a>
<br></br>
<br></br>
<a href="rodrigues" class="btn restart">Rodrigues</a>
<a href="txt" class="btn default">Txt</a>
</div>
</body>
</html>
EOF
)

echo "$UI" | stdbuf -oL -eL yad --title="HTML example" \
                    --width=400 --height=250 \
                    --html \
                    --button=gtk-cancel:1 \
                    --print-uri 2>&1 \
| while read -r line; do
     case ${line##*/} in
      gg)
        yad --about ;;
      bb)
        yad --list --column=column hello there ;;
      ee)
        yad --text=hmm ;;
      rodrigues)
        yad --text=rodrigues ;;
      txt)
        echo "text" | yad --text-info ;;
      *) echo "unknown command" ;;
     esac
done

# полезные ссылки
# http://nixbox.com/projects/jquery-lavalamp/demos/original.html
# https://vertex-academy.com/tutorials/ru/ssylki/
# https://geekspace.info/cookbook/recipes/1
# https://p5js.org/
# https://semicolon.dev/tutorial/javascript/ps5-ui-js
# https://github.com/austinhallock/html5-virtual-game-controller
# https://gamedevelopment.tutsplus.com/tutorials/simple-xbox-controller-input-in-html5-with-pxgamepad--cms-24585
# https://gamedevelopment.tutsplus.com/tutorials/using-the-html5-gamepad-api-to-add-controller-support-to-browser-games--cms-21345
# https://html5css.ru/
# https://html5css.ru/howto/howto_js_full_page_tabs.php
#
#
#
#
#

