#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 
#проверяем что скрипт установки не запущен от пользователя root

if [ "$UID" -eq 0 ];then
tput setaf 1; echo "Этот скрипт не нужно запускать из под root!";tput sgr0;exit 1
else
tput setaf 2; echo "все хорошо этот скрипт не запущен из под root!"
fi

pass_user0="$1"
script_dir=$(cd $(dirname "$0") && pwd);
name_app=`cat "${script_dir}/name-app"`
echo "Папка программы $name_app:[$script_dir]"
image1="$script_dir/images/rosa-mesa-update512.png"
icon1="$script_dir/icons/mesa300.jpg"

#определяем какая система запустила rosa-mesa-switcher
linuxos_version=`cat "/etc/os-release" | grep "PRETTY_NAME" | sed 's/PRETTY_NAME=//g' | sed 's/"//g'`
linuxos_gnome="true"

if [ ! -e /usr/bin/gnome-shell ];then linuxos_gnome="false";fi

#проверяем что система совместима с ggs
if echo "${linuxos_version}" | grep -ow "ROSA Fresh Desktop" > /dev/null
then
tput setaf 2;echo "Операциооная система: ${linuxos_version} совместима с rosa-mesa-switcher"
tput sgr 0
linuxos_run0="rosa"
export linuxos_run=$linuxos_run0
linux_os_conf0="$linuxos_run_config"
export linux_os_conf=$linux_os_conf0

else
tput setaf 1;echo "Операциооная система: ${linuxos_version} не совместима с rosa-mesa-switcher"
tput sgr 0
GTK_THEME="Adwaita-dark" zenity --error --ellipsize  --timeout=5 --text="Данная операционная система [${linuxos_version}] не совместима с rosa-mesa-switcher"
exit 1
fi

if [[ "${pass_user0}" == "" ]];then
pass_user0=$(GTK_THEME="Adwaita-dark" zenity --entry --width=128 --height=128 --title="Запрос пароля" --text="Для работы скрипта ${version} требуется Ваш пароль superuser(root):" --hide-text)
fi
if [[ "${pass_user0}" == "" ]]
then
GTK_THEME="Adwaita-dark" zenity --error --text="Пароль не введён"
exit 0
else 
export pass_user=${pass_user0}
fi

# функция с предложением перезагрузиться.
function info_reboot () {
script_dir=$1
GTK_THEME="Adwaita-dark" ${YAD} --title="скрипт запущен в Wayland!" --image-on-top --picture --size=fit --filename="${script_dir}/images/xorg-wayland.png" --width=450 --height=327 --center --inc=256  --text-align=center --text="Данный скрипт работает только в сессии X.org" --timeout=10 --timeout-indicator=bottom
}

# функция с меню программы
function gui_app_generator () {
#переменные
script_dir=$1
KEY_GUI=`echo $RANDOM`
#загружаем список репозиториев из файла в массив
readarray -t repos_list < "${script_dir}/config/repos-list"
# tabs1
yad --center --window-icon=$icon1 --title="$name_app" --form --width=512 \
--image="$image1" --image-on-top \
--field="MESA-DEFAULT":fbtn "$script_dir/scripts/[rosa2021]mesa-rosa-default" \
--field="MESA-REDROOT-STABLE":fbtn "$script_dir/scripts/[rosa2021]mesa-redroot-stable" \
--field="MESA-REDROOT-RC":fbtn "$script_dir/scripts/[rosa2021]mesa-redroot-rc" \
--field="MESA-REDROOT-DEVEL":fbtn "$script_dir/scripts/[rosa2021]mesa-redroot-devel" \
--button="ВЫХОД:1"

#--button="ОБНОВЛЕНИЕ:0" --button="ВЫХОД:1"
select_button0="$?"
export select_button=$select_button0
}

# бесконечный чикл для формы программы
while true;do
gui_app_generator

# включение обнавления
if [[ ${select_button} == "0" ]];then
bash "$script_dir/manual_update.sh" $pass_user $name_script
fi

#проверка на выход из программы
if [[ $style_select == "" ]] || [[ ${select_button} == "1" ]];then
exit 0
fi

done

exit 0