#!/bin/bash
#creator by RedRoot(Yacyna Mehail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 
# app: [GGS]gnome-gui-switcher

#определяем какая система запустила ggs
linuxos_version=`cat "/etc/os-release" | grep "PRETTY_NAME" | sed 's/PRETTY_NAME=//g' | sed 's/"//g'`
linuxos_gnome="true"

#проверяем что система совместима с mesa-switcher
  if echo "${linuxos_version}" | grep -ow "ROSA Fresh Desktop 12.2" > /dev/null;then
  tput setaf 2;echo "Операциооная система: ${linuxos_version} совместима с Mesa-switcher"
  tput sgr 0
  linuxos_run0="rosa"
  export linuxos_run=${linuxos_version}
  else 
  tput setaf 1;echo "Операциооная система: ${linuxos_version} не совместима с Mesa-switcher!"
  tput sgr 0
  exit 1
fi

#проверяем что скрипт установки не запущен от пользователя root
if [ "$UID" -eq 0 ];then
  tput setaf 1; echo "Этот скрипт не нужно запускать из под root!";tput sgr0;exit 1
  else
  tput setaf 2; echo "все хорошо этот скрипт не запущен из под root!"
fi

#Определение переменныех утилит и скриптов
export time_sleep="2"
pass_user0="$1"
pass_user0="123"
script_dir0=$(dirname $(readlink -f "$0"))
utils_dir0="${script_dir0}/core-utils"
version0=`cat "${script_dir0}/config/name_version"`
export utils_dir=${utils_dir0}
export version="Mesa-Switcher[${version0}]"
export script_dir=${script_dir0}
icon1="$script_dir/icons/preferences-plugin.svg"
image1="$script_dir/images/ggs-logo-v1.png"
image2="$script_dir/images/ggs-in-development.png"
YAD0="${utils_dir}/yad"
zenity0="${utils_dir}/zenity"
export YAD=${YAD0}
export zenity=${zenity0}
html5_menu_app0=`cat "$script_dir/config/html/html-menu5.html"`
export html5_menu_app=$html5_menu_app0
echo "$html5_menu_app"
#определяем какая версия скрипта запущена (стабильная/тестовая)
name_script0=`basename "$0"`
name_script=`echo ${name_script0} | sed 's/\.sh\>//g'`
echo "$name_script" > "${script_dir}/config/run-script"
echo "запущен скрипт: $name_script"
#проверяем какой тип сессии (вайланд/Хорг)
if echo $XDG_SESSION_TYPE | grep -ow "x11" > /dev/null
      then
      # запрос пароля супер пользователя (если его не передал модуль обнавления), который дальше будет поставляться где требуется в качестве глобальной переменной, до конца работы скрипта

      if [[ "${pass_user0}" == "" ]];then
        pass_user0=$(GTK_THEME="Adwaita-dark" ${zenity} --entry --width=128 --height=128 --title="Запрос пароля" --text="Для работы скрипта ${version} требуется Ваш пароль superuser(root):" --hide-text)
      fi

        if [[ "${pass_user0}" == "" ]]
        then
        GTK_THEME="Adwaita-dark" ${zenity} --error --text="Пароль не введён"
        exit 0
        else 
        export pass_user=${pass_user0}
        fi
  else
        GTK_THEME="Adwaita-dark" ${YAD} --title="скрипт запущен в Wayland!" --image-on-top --picture --size=fit --filename="${script_dir}/images/xorg-wayland.png" --width=450 --height=327 --center --inc=256  --text-align=center --text="Данный скрипт работает только в сессии X.org" --timeout=10 --timeout-indicator=bottom
        exit 0
fi

#функция для проверки пакетов на установку, если нужно установлевает


installing_status=`cat "${script_dir}/config/install-status"`
if [[ "$installing_status" == "true" ]]
then
tput setaf 2
echo "Основные пакеты для ${version} уже установлены!"
tput sgr 0

else
##################################################################################
# установка  обновление системы

##################################################################################

echo "true" > "${script_dir}/config/install-status"
fi

# функция рекомендации перезагрузки системы
function ggs_rebooting () {
GTK_THEME="Adwaita-dark" ${YAD} --title="$version" --image-on-top --picture --size=fit --filename="${script_dir}/icons/gnome-ext-pack.png" --width=327 --height=327 --center --inc=256  --text-align=center --text="ТРЕБУЕТСЯ ПЕРЕАГРУЗКА СИСТЕМЫ!" --timeout=5 --timeout-indicator=bottom 
}

# функция отключения всех дополнений
function gnome_ext_configure () {
mesa_install_run="$1" 
(
echo "test"
) | ${zenity} --progress --title="НАСТРОЙКА СИСТЕМЫ $gnome_version" --text="идет установка $mesa_install_run, ожидайте." --percentage=0 --no-cancel --auto-close --pulsate
}

function html5-menu-app2 () {
echo "$html5_menu_app" | stdbuf -oL -eL yad  --html \
--width=830 --height=313 --print-uri 2>&1 \
--button=cancel:1 --center --undecorated \
--splash --print-uri 2>&1 --window-icon="$icon1" \
| while read -r line; do
export mesa_for_installing="${line##*/}"
     tput setaf 2;echo "${line##*/}";tput sgr 0
     case ${mesa_for_installing} in
      mesa-default)
        echo "начинаем установку ${mesa_for_installing}"
        ;;
      mesa-backports)
        echo "начинаем установку ${mesa_for_installing}"
        ;;
      mesa-fidel-git)
        echo "начинаем установку ${mesa_for_installing}"
        ;;
      mesa-fidel-git-devel)
        echo "начинаем установку ${mesa_for_installing}"
        ;;

      *) echo "неизвестная комманда" 
      ;;
     esac
done
}

# бесконечный цикл для формы программы
html5-menu-app2

exit 0

#if [[ "$installing_status" == "true" ]]
#  then
#  tput setaf 2
#  echo "core-utils уже установлены!"
#  tput sgr 0
#  else
#  #проверка что есть интернет
#  ip_test="8.8.8.8"
#  if ping -c 1 -w 1 ${ip_test} | grep -wo "100% packet loss" > /dev/null
#  then
#  tput setaf 1 
#  echo "ДЛЯ ПЕРВОГО ЗАПУСКА ПРОГРАММЫ ТРЕБУЕТСЯ ИНТЕРНЕТ!"
#  exit 0
#  else
# if [ ! -e /$script_dir/core-utils/yad ];then
#cd "$script_dir"
#wget https://github.com/redrootmin/bzu-gmb-modules/releases/download/v1/core-utils-lite-v1.tar.xz
#tar -xpJf "$script_dir/core-utils-lite-v1.tar.xz"
#rm -f "$script_dir/core-utils-lite-v1.tar.xz"
#fi
#  fi

#fi
#<ul>
#        <li><a href="">Что-то</a></li>
# </ul>