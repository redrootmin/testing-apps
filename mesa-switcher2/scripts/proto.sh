#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License

#GUI for TRIM4SSD-portable...
#
HERE="$(dirname "$(readlink -f "$0")")"
#
yad --center --window-icon=$HERE/DATA/Icons/SSD.png --title="TRIM4SSD utility v1.5" --form --width=400 --text="                SSD TRIM utility (use weekly)
 ------------------------------------------------
        Mount filesystem FIRST using button
            below (unmount when finished)" \
--image="$HERE/DATA/Icons/SSD.png" \
--field=" ~~~~~ TRIM  NOW ~~~~~ ":fbtn "$HERE/DATA/fstrim.sh" \
--button="Mount":$HERE/DATA/cb_mount.sh --button="Unmount":$HERE/DATA/cb_umount.sh --button="About":$HERE/DATA/about.sh --button="QUIT!/$HERE/DATA/Icons/cancel-icon.png":1 --buttons-layout=right
