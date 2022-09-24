#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 

#собираем данные о том в какой папке  находиться редактор
script_dir=$(cd $(dirname "$0") && pwd);
app_dir="${script_dir}"
name_desktop_file="pipewire-simultaneous.desktop"
name_script_start="Pipewire-Simultaneous.sh"
name_app="Pipewire-Simultaneous"
name_app_file="Pipewire-Simultaneous.sh"
name_icons="pipewire.png"
list_categories="Audio;"
exec_full="bash -c "${script_dir}"/"${name_script_start}""

 
# Проверка что существует папка applications, если нет, создаем ее
if [ ! -d "/home/${USER}/.local/share/applications" ]
then
mkdir -p "/home/${USER}/.local/share/applications"
fi

# Проверка что существует папка autostart, если нет, создаем ее
if [ ! -d "/home/${USER}/.config/autostart" ]
then
mkdir -p "/home/${USER}/.config/autostart"
fi


#Создаем ярлык для скрипта
echo "[Desktop Entry]" > "${script_dir}/${name_desktop_file}"
echo "Version=1.0" >> "${script_dir}/${name_desktop_file}"
echo "Type=Application" >> "${script_dir}/${name_desktop_file}"
echo "Name=${name_app}" >> "${script_dir}/${name_desktop_file}"
echo "Comment=${list_categories}" >> "${script_dir}/${name_desktop_file}"
echo "Categories=${list_categories}" >> "${script_dir}/${name_desktop_file}"
echo "Exec=${exec_full}" >> "${script_dir}/${name_desktop_file}"
echo "Terminal=false" >> "${script_dir}/${name_desktop_file}"
echo "Icon=${script_dir}/${name_icons}" >> "${script_dir}/${name_desktop_file}"
#копирование ярлыка в папку программ пользователя
cp -f "${script_dir}/${name_desktop_file}" "/home/$USER/.local/share/applications/"
cp -f "${script_dir}/${name_desktop_file}" "/home/${USER}/.config/autostart"

#Даем права на запуск ярлыка в папке программы и копируем в папку с ярлыками пользователя
gio set "${script_dir}/${name_desktop_file}" "metadata::trusted" yes
gio set "/home/$USER/.local/share/applications/${name_desktop_file}" "metadata::trusted" yes
gio set "/home/${USER}/.config/autostart/${name_desktop_file}" "metadata::trusted" yes

#gio info "${script_dir}/name_desktop_file" | grep "metadata::trusted"
#даем права на запуск программы и ее скриптов
chmod +x "${script_dir}"/"${name_script_start}"
chmod +x "${script_dir}/${name_desktop_file}"
chmod +x "/home/${USER}/.config/autostart/${name_desktop_file}"
chmod +x "/home/$USER/.local/share/applications/${name_desktop_file}"
#chmod +x "${app_dir}/${name_app_file}"
#chmod +x "${app_dir}/resources/app/extensions/git/dist/askpass-empty.sh"
#chmod +x "${app_dir}/resources/app/extensions/git/dist/askpass.sh"
exit 0


#[Desktop Entry]
#Version=1.0
#Type=Application
#Name=Godot_portable
#Comment=Godot Engine is an open source cross-platform 2D and 3D game engine licensed by MIT that is being developed by the Godot Engine Community
#Categories=Utility;TextEditor;Development;IDE;
#Exec=bash -c /home/interselt/Yandex.Disk/bzu-gmb_temp/VSCodium/VSCodium_starter.sh
#Terminal=true
#Icon=/home/interselt/Yandex.Disk/bzu-gmb_temp/VSCodium/codium.png
#Name[ru_RU]=Godot_portable
