#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 

# функция проверки окружения kvm
start_conf_create () {
#
# путь до главного каталога kmv
PATH_CORE_APP=$(cd $(dirname "$0") && pwd);
#|| echo "ошибка определения главного каталога kmv"
echo "Главный каталог kmv [$PATH_CORE_APP]"
cd "$PATH_CORE_APP"
# определение версии kmv
VERSION_KMV=`cat version` || echo "ошибка определения версии программы"
NAME_APP=`cat name-app` || echo "ошибка определения названия программы"
FULL_NAME_APP="$NAME_APP[$VERSION_KMV]"
echo "полное назваие программы - $FULL_NAME_APP"
# Проверка что существует папка конфигурации пользователя в его окружении, если нет, создаем ее и копируем туда конфиг по умолчанию
if [ ! -d "/home/${USER}/.kmv-config" ]
then
#! папки .kmv-config нет окружении пользователя, создаем!
tput setaf 1; echo "папки .kmv-config нет в окружении пользователя $USER, создаем";tput sgr0
mkdir -p "/home/${USER}/.kmv-config"
PATH_USER_CONF="/home/${USER}/.kmv-config"
cp -RT "$PATH_CORE_APP/data/.kmv-config" "$PATH_USER_CONF"
ln -s "/home/$USER/.kmv-config" "$PATH_CORE_APP/.kmv-config"
tput setaf 2; echo "папка конфигурации пользователя расположена [$PATH_USER_CONF]";tput sgr0
else
PATH_USER_CONF="/home/${USER}/.kmv-config"
tput setaf 2; echo "папка конфигурации пользователя расположена [$PATH_USER_CONF]";tput sgr0
fi

# Проверка что существует папка applications в окружении пользователя, если нет, создаем ее
if [ ! -d "/home/${USER}/.local/share/applications" ]
then
mkdir -p "/home/${USER}/.local/share/applications"
fi

LINUXOS_VERSION=`cat "/etc/os-release" | grep "PRETTY_NAME" | sed 's/PRETTY_NAME=//g' | sed 's/"//g'` || echo "["`$date`"]"" - Ошибка определения операционной системы в которой запускается " >> $PATH_USER_CONF/logs/kvm-core.log
}

start_conf_create

# подключение библиотек внешних
source "$PATH_CORE_APP/lib/lib-sys-kmv.sh" || echo "["`$date`"]"" - Ошибка загрузки системной библиотеки [/lib/lib-sys-kmv.sh]" >> $PATH_USER_CONF/logs/kvm-core.log
# проверяем что есть интернет
internet_check
#echo " есть связь с интернетом ? [$INTERNET]"
if [ "$INTERNET" == "no" ]; then 
tput setaf 1; echo "нет соединения с глобальной сетью, функционал $FULL_NAME_APP будет ограничен!";tput sgr0; 
else 
tput setaf 2; echo "есть соединение с глобальной сетью!";tput sgr0; 
fi

if echo "$LINUXOS_VERSION" | grep -ow "ROSA Fresh Desktop" > /dev/null; then 
tput setaf 2; echo "$FULL_NAME_APP поддерживает $LINUXOS_VERSION";tput sgr0
else
zenity --error --ellipsize  --timeout=5 --text="Данная операционная система $LINUXOS_VERSION не совместима с $FULL_NAME_APP"
fi
