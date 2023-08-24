#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 

link_script="$(dirname "$(readlink -f "$0")")"
echo "Скрипт запущен в папке: $HERE"
name_cut="/scripts"
app_path=`echo ${link_script} | sed "s|${name_cut}||g"`
echo "Папка программы: $app_path"
image1="$app_path/images/rosa-mesa-update512.png"
#
yad --center --window-icon=$HERE/DATA/Icons/SSD.png --title="Архивация игры Minetest" --form --width=400 \
--image="$image1" --image-on-top \
--field="Mesa-default":fbtn "$HERE/fstrim.sh" \
--field="СДЕЛАТЬ АРХИВАЦИЮ СОХРАНЕНИЙ В ОБЛАКО YANDEX":fbtn "$HERE/fstrim.sh" \
--field="ЗАГРУЗИТЬ СОХРАНЕНИЯ ИЗ ОБЛОКА YANDEX":fbtn "$HERE/fstrim.sh" \
--field="ВОССТАНОВИТЬ ДАННЫЕ ИЗ БОЛЕЕ СТАРОГО ЛОКАЛЬНОГО АРХИВА":fbtn "$HERE/fstrim.sh" \
--field="ВОССТАНОВИТЬ ДАННЫЕ ИЗ БОЛЕЕ СТАРОГО АРХИВА В YANDEX ОБЛАКЕ":fbtn "$HERE/fstrim.sh" \
--button="О СКРИПТЕ":$HERE/about.sh --button="ВЫХОД":1 --buttons-layout=right
