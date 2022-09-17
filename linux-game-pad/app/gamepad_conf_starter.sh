#!/bin/bash

#проверяем что скрипт установки не запущен от пользователя root
if [ "$UID" -eq 0 ];then
tput setaf 1
echo "Этот скрипт не нужно запускать из под root!"
tput sgr0
exit 1
else
tput setaf 2
echo "все хорошо этот скрипт не запущен из под root!"
tput sgr0
fi

app_dir=$(dirname $(readlink -f "$0"))
main_dir=`echo ${app_dir} | sed 's/\/app\>//g'`
utils_dir="${main_dir}/core-utils"
version=`cat ${main_dir}/version`
cd ${app_dir}
#переменные утилит и скриптов
YAD="${utils_dir}/yad"
#mangohud="${utils_dir}/./mangohud_portable"
#zenity="${utils_dir}/zenity"
bluetoothctl --timeout 5 scan on
bluetoothctl devices | sed 's/Device //g' | sed 's/ /-/g' > "${app_dir}/bt-devices"
readarray -t bt_devices_list_array < "${app_dir}/bt-devices"
bt_devices_list_array+=("MANUAL-BT-MAC" "DISABLE")
echo "${bt_devices_list_array[*]}"
time_reconnect_array=(1 2 3 4)
gamepad_service_array=(off on)
#resolution_array=(640x480 800x600 1024x768 1280x1024 1440x900 1680x1050 1920x1200 2560x1600 3840x2400 960x540 1280x720 1600x900 1920x1080 2560×1440 3840x2160)
#fullscreen_array=(window fullscreen fulldesktop)
#monitors_array=(OFF ON)
#monitoring_array=(native mangohud)

tput setaf 2
echo "Папка программы:[${app_dir}]"
echo "Общая папка программы и скриптов:[${main_dir}]"
echo "Папка утилит:[${utils_dir}]"
tput sgr0

# ${arr[*]} # Все записи в массиве
# ${!arr[*]}# Все индексы в массиве
# ${#arr[*]}# Количество записей в массиве
# ${#arr[0]}# Длина первой записи (нумерация с нуля)
# echo "BA:34:22:81:63:25-GamepadPlus" | cut -d "-" -f 1 (оставить только мак) 
# sudo sed -i 's/#IdleTimeout=30/IdleTimeout=0/g' /etc/bluetooth/input.conf (что бы блютуз не засыпал)
gamepad_conf=$(GTK_THEME="Adwaita-dark" $YAD --form --width=250 --posx=100 --posy=100 --title="${version}" \
--image-on-top --image="${main_dir}/image/gamepad-logo455.png" --window-icon="${main_dir}/icons/gamepad-icon48.png" \
--field="BT DEVICES":CB \
$(IFS=! ; echo "${bt_devices_list_array[*]}") \
--field="MANUAL BT-MAC":CBE \
$(IFS=! ; echo "##BT-MAC##") \
--field="SERVICE":CB \
$(IFS=! ; echo "${gamepad_service_array[*]}") \
--field="TIME RECONNECT":CB \
$(IFS=! ; echo "${time_reconnect_array[*]}"))
exit 0
if [ "$?" -eq "0" ];then
#определение переменных по умолчанию
test_api="-vulkan"
mode_status="-benchmark 0 -info 1 -sensors 1"
resolution_width="-width 640"
resolution_height="-height 480"
fullscreen_status=""
monitoring_status="-fps 1"
mangohud_status=""
monitoring_mangohud=""
temporal_status="-temporal 1"
monitors_status="-screen 0"
vulkan_rt=""
else
tput setaf 1
echo "Отмена выполнения теста!"
tput sgr0
exit 0
fi
#ПРОВЕРКА И ПРИМЕНЕНИЕ ВВЕДЕННЫХ ДАННЫХ

#проверка какой выбран API
if echo "$gravity_mark_conf" | grep "Vulkan_RT"> /dev/null;then
echo "Тестировать будем:[Vulkan c Ray Tracing]"
test_api="-vulkan -raytracing 1"
vulkan_rt="RADV_PERFTEST=rt"
elif echo "$gravity_mark_conf" | grep "OpenGL"> /dev/null;then
echo "Тестировать будем:[OpenGL]"
test_api="-opengl"
else
if echo "$gravity_mark_conf" | grep "OpenGL_ES"> /dev/null;then
echo "Тестировать будем:[OpenGL_ES]"
test_api="-opengles"
temporal_status=""
fi
fi

#проверка режима теста
if echo "$gravity_mark_conf" | grep "Benchmark"> /dev/null;then
echo "Тестировать будем в режиме Бенчмарка!"
mode_status="-benchmark 1 -info 1 -sensors 1"
fi

#проверка на включения на всех мониторах
if echo "$gravity_mark_conf" | grep -ow "ON"> /dev/null;then
tput setaf 1
echo "Включен режим полного экрана и на всех мониторах!"
tput sgr0
fullscreen_status=""
resolution_width=""
resolution_height=""
monitors_status="-fullscreen 1 -screen 1"
else
#проверка на включение полного экрана
if echo "$gravity_mark_conf" | grep "fullscreen"> /dev/null;then
tput setaf 1
echo "Включен режим полного экрана и выбирается максимальное разрешение!"
fullscreen_status="-fullscreen 1 -screen 0"
resolution_width=""
resolution_height=""
tput sgr0

elif echo "$gravity_mark_conf" | grep "fulldesktop"> /dev/null;then
echo "Включен режим полного рабочего стола!"
resolution_width=""
resolution_height=""
fullscreen_status="-fulldesktop 1 -screen 0"

else

echo "Включен оконный режим!"
#проверка и добавление выбранного разрешения изображения теста
if echo "$gravity_mark_conf" | grep "640x480"> /dev/null;then
echo "Тестирование будет проводиться в разрешении:[640x480]"
else
resolution_width0=`echo "$gravity_mark_conf" | egrep -o "[0-9]+x[0-9]+" | cut -d x -f 1`
resolution_height0=`echo "$gravity_mark_conf" | egrep -o "[0-9]+x[0-9]+" | cut -d x -f 2`
echo "Тестировать будем:[$resolution_width0""x""$resolution_height0]"
resolution_width="-width $resolution_width0"
resolution_height="-height $resolution_height0"
    fi
  fi
fi
#проверка на включение вида Мониторинга
if echo "$gravity_mark_conf" | grep "mangohud"> /dev/null;then
monitoring_status=""
monitoring_mangohud="${mangohud}"
if echo "$gravity_mark_conf" | grep -ow "OpenGL" > /dev/null || echo "$gravity_mark_conf" | grep -ow "OpenGL_ES" > /dev/null
then
mangohud_status="--dlsym"
monitoring_status=""
monitoring_mangohud="${mangohud} ${mangohud_status}"
fi
echo "Включен режим Мониторинга [mangohud]!"
else
echo "Включен режим Мониторинга [Native]!"
fi

# старт теста
#runtest="${mangohud} ${mangohud_status} ${app_dir}/bin/./GravityMark.x64 ${test_status} ${resolution_width} ${resolution_height} ${fullscreen_status} ${mode_status}"
cd "${app_dir}/bin/"
runtest="${vulkan_rt} ${monitoring_mangohud} ./GravityMark.x64 ${fullscreen_status} ${monitors_status} ${temporal_status} ${test_api} ${mode_status} ${resolution_width} ${resolution_height} ${monitoring_status}"
echo "Запуск Теста со следующими параметрами:[${runtest}]"
eval $runtest

exit 0


#100% work commands-pack
#MANGOHUD=1 VK_LAYER_PATH=/home/gamer/Refresh2025-Benchmark VK_INSTANCE_LAYERS=VK_LAYER_MANGOHUD_overlay LD_LIBRARY_PATH="/home/gamer/Refresh2025-Benchmark" LD_PRELOAD="libMangoHud.so" vkcube

#corrent display resolution
#xdpyinfo -display :0.0 | grep dimensions | egrep -o "[0-9]+x[0-9]+ pixels" | egrep -o "[0-9]+x[0-9]+"
