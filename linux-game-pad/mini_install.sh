#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 

#собираем данные о том в какой папке  находиться редактор
script_dir=$(cd $(dirname "$0") && pwd);
app_dir="${script_dir}/app"
name_desktop_file1="gravity-mark-portable.desktop"
name_script_start1="gravity_mark_starter.sh"
name_app1=`cat ${script_dir}/version`
name_app_file="GravityMark.x64"
name_icons1="gravity-mark88.jpg"
list_categories="Utility;Games;"
exec_full1="bash -c "${app_dir}"/"${name_script_start1}""
Comment1="GravityMark GPU Benchmark, easily stress test any GPU, support API: OpenGL, OpenLG ES, Direct3d11, Direct3d12, Metal, Vulkan"
# Проверка что существует папка applications, если нет, создаем ее
if [ ! -d "/home/${USER}/.local/share/applications" ]
then
mkdir -p "/home/${USER}/.local/share/applications"
fi

#Создаем ярлык для скрипта запускающего тест FurMark
echo "[Desktop Entry]" > "${script_dir}/${name_desktop_file1}"
echo "Version=1.0" >> "${script_dir}/${name_desktop_file1}"
echo "Type=Application" >> "${script_dir}/${name_desktop_file1}"
echo "Name=${name_app1}" >> "${script_dir}/${name_desktop_file1}"
echo "Comment=${Comment1}" >> "${script_dir}/${name_desktop_file1}"
echo "Categories=${list_categories}" >> "${script_dir}/${name_desktop_file1}"
echo "Exec=${exec_full1}" >> "${script_dir}/${name_desktop_file1}"
echo "Terminal=true" >> "${script_dir}/${name_desktop_file1}"
echo "Icon=${script_dir}/icons/${name_icons1}" >> "${script_dir}/${name_desktop_file1}"
cp -f "${script_dir}/${name_desktop_file1}" "/home/$USER/.local/share/applications/"

#Даем права на запуск ярлыка в папке программы и копируем в папку с ярлыками пользователя
gio set "${script_dir}/${name_desktop_file1}" "metadata::trusted" yes
gio set "/home/$USER/.local/share/applications/${name_desktop_file1}" "metadata::trusted" yes
chmod +x "${script_dir}/${name_desktop_file1}"
chmod +x "/home/$USER/.local/share/applications/${name_desktop_file1}"

#даем права на запуск программы и ее скриптов
chmod +x "${app_dir}/${name_script_start1}"
chmod +x "${app_dir}/bin/${name_app_file}"
chmod +x "${script_dir}/core-utils/mangohud_portable"
chmod +x "${script_dir}/core-utils/libMangoHud_dlsym.so"
chmod +x "${script_dir}/core-utils/libMangoHud.so"
chmod +x "${script_dir}/core-utils/yad"
chmod +x "${script_dir}/core-utils/yad-icon-browser"
chmod +x "${script_dir}/core-utils/zenity"
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
