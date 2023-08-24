#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 

#собираем данные о том в какой папке  находиться редактор
script_dir=$(cd $(dirname "$0") && pwd);
app_dir="${script_dir}/app"
icons_dir="${script_dir}/icons"
image_dir="${script_dir}/image"
#utils_dir="${script_dir}/core-utils"
name_desktop_file="shotcut-portable.desktop"
name_script_start="shotcut-portable-starter.sh"
name_icons="shotcut-logo512.png"
exec_full='env '"${script_dir}/${name_script_start}"' %F'
name_app=`cat "${script_dir}/name-app"`
run_app=`cat "${script_dir}/run-app"`
# Проверка что существует папка applications, если нет, создаем ее
if [ ! -d "/home/${USER}/.local/share/applications" ]
then
mkdir -p "/home/${USER}/.local/share/applications"
fi

#Создаем ярлык для скрипта
echo "[Desktop Entry]
Version=1.0
Type=Application
Name=${name_app}
Name[ru_RU]=${name_app}
GenericName=video editor
GenericName[ru]=нелинейный видеоредактор
Comment=Shotcut is a free, open source, cross-platform video editor.
Comment[ru]=Shotcut — это бесплатный кроссплатформенный, нелинейный видеоредактор с открытым исходным кодом с поддержкой ключивых кадров, анимации и множества спецэффектов.
Categories=AudioVideo;Video;AudioVideoEditing;
Exec=${exec_full}
TryExec=${script_dir}/${name_script_start}
Terminal=false
Icon=${icons_dir}/${name_icons}
StartupNotify=true
MimeType=application/vnd.mlt+xml;application/ogg;application/x-ogg;audio/ogg;audio/x-vorbis;audio/x-vorbis+ogg;video/ogg;video/x-ogm+ogg;video/x-theora+ogg;video/x-theora;audio/x-speex;audio/opus;application/x-flac;audio/flac;audio/x-flac;audio/x-ms-asf;audio/x-ms-asx;audio/x-ms-wax;audio/x-ms-wma;video/x-ms-asf;video/x-ms-asf-plugin;video/x-ms-asx;video/x-ms-wm;video/x-ms-wmv;video/x-ms-wmx;video/x-ms-wvx;video/x-msvideo;audio/x-pn-windows-acm;video/divx;video/msvideo;video/vnd.divx;video/x-avi;application/vnd.rn-realmedia;application/vnd.rn-realmedia-vbr;audio/vnd.rn-realaudio;audio/x-pn-realaudio;audio/x-pn-realaudio-plugin;audio/x-real-audio;audio/x-realaudio;video/vnd.rn-realvideo;audio/mpeg;audio/mpg;audio/mp1;audio/mp2;audio/mp3;audio/x-mp1;audio/x-mp2;audio/x-mp3;audio/x-mpeg;audio/x-mpg;video/mp2t;video/mpeg;video/mpeg-system;video/x-mpeg;video/x-mpeg2;video/x-mpeg-system;application/mpeg4-iod;application/mpeg4-muxcodetable;application/x-extension-m4a;application/x-extension-mp4;audio/aac;audio/m4a;audio/mp4;audio/x-m4a;audio/x-aac;video/mp4;video/mp4v-es;video/x-m4v;application/x-quicktime-media-link;application/x-quicktimeplayer;video/quicktime;application/x-matroska;audio/x-matroska;video/x-matroska;video/webm;audio/webm;audio/3gpp;audio/3gpp2;audio/AMR;audio/AMR-WB;audio/amr;audio/amr-wb;video/3gp;video/3gpp;video/3gpp2;x-scheme-handler/mms;x-scheme-handler/mmsh;x-scheme-handler/rtsp;x-scheme-handler/rtp;x-scheme-handler/rtmp;x-scheme-handler/icy;x-scheme-handler/icyx;x-content/video-vcd;x-content/video-svcd;x-content/video-dvd;x-content/audio-cdda;x-content/audio-player;application/x-cd-image;application/ram;application/xspf+xml;audio/mpegurl;audio/x-mpegurl;audio/scpls;audio/x-scpls;text/google-video-pointer;text/x-google-video-pointer;video/vnd.mpegurl;application/vnd.apple.mpegurl;application/vnd.ms-asf;application/vnd.ms-wpl;application/sdp;audio/dv;video/dv;audio/x-aiff;audio/x-pn-aiff;video/x-anim;video/x-nsv;video/fli;video/flv;video/x-flc;video/x-fli;video/x-flv;audio/wav;audio/x-pn-au;audio/x-pn-wav;audio/x-wav;audio/ac3;audio/eac3;audio/vnd.dts;audio/vnd.dts.hd;audio/vnd.dolby.heaac.1;audio/vnd.dolby.heaac.2;audio/vnd.dolby.mlp;audio/basic;audio/midi;audio/x-ape;audio/x-gsm;audio/x-musepack;audio/x-tta;audio/x-wavpack;audio/x-shorten;application/x-shockwave-flash;application/x-flash-video;misc/ultravox;image/vnd.rn-realpix;audio/x-it;audio/x-mod;audio/x-s3m;audio/x-xm;application/mxf;
StartupWMClass=Shotcut" > "${script_dir}/${name_desktop_file}"

cp -f "${script_dir}/${name_desktop_file}" "/home/$USER/.local/share/applications/"
#Даем права на запуск ярлыка в папке программы и копируем в папку с ярлыками пользователя
gio set "${script_dir}/${name_desktop_file}" "metadata::trusted" yes
gio set "/home/$USER/.local/share/applications/${name_desktop_file}" "metadata::trusted" yes

#даем права на запуск программы и ее скриптов
chmod +x "/home/$USER/.local/share/applications/${name_desktop_file}"
chmod +x "${script_dir}/${name_desktop_file}"
chmod +x "${script_dir}/${name_script_start}"
chmod +x "${app_dir}/${version_app}"
#chmod +x "${utils_dir}/yad"
#chmod +x "${utils_dir}/zenity"
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
