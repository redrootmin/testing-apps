#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 

#собираем данные о том в какой папке  находиться редактор
script_dir=$(cd $(dirname "$0") && pwd);
#app_dir="${script_dir}/app"
#name_desktop_file1="gravity-mark-portable.desktop"
#name_script_start1="gravity_mark_starter.sh"
#name_app1=`cat ${script_dir}/version`
#name_app_file="GravityMark.x64"
#name_icons1="gravity-mark88.jpg"
#list_categories="Utility;Games;"
#exec_full1="bash -c "${app_dir}"/"${name_script_start1}""
#Comment1="GravityMark GPU Benchmark, easily stress test any GPU, support API: OpenGL, OpenLG ES, Direct3d11, Direct3d12, Metal, Vulkan"
# Проверка что существует папка applications, если нет, создаем ее
if [ ! -d "/home/${USER}/.local/bin" ]
then
mkdir -p "/home/${USER}/.local/bin"
fi
cd "$script_dir"

#create amdvlk-gcn1 amd_icd32.json
echo '{
  "file_format_version": "1.0.0",
  "ICD": {
    "library_path": "'${script_dir}'/gcn1/lib32bit/amdvlk32.so",
    "api_version": "1.2.179"
  },
  "layer": {
    "name": "VK_LAYER_AMD_switchable_graphics_32",
    "type": "GLOBAL",
    "library_path": "'${script_dir}'/gcn1/lib32bit/amdvlk32.so",
    "api_version": "1.2.179",
    "implementation_version": "1",
    "description": "AMD switchable graphics layer",
    "functions": {
      "vkGetInstanceProcAddr": "vk_icdGetInstanceProcAddrSG",
      "vkGetDeviceProcAddr": "vk_icdGetDeviceProcAddrSG"
    },
    "disable_environment": {
      "DISABLE_LAYER_AMD_SWITCHABLE_GRAPHICS_1": "1"
    }
  }
}' > "${script_dir}/gcn1/lib32bit/amd_icd32.json"

#create amdvlk-gcn1 amd_icd64.json
echo '{
  "file_format_version": "1.0.0",
  "ICD": {
    "library_path": "'${script_dir}'/gcn1/lib64bit/amdvlk64.so",
    "api_version": "1.2.179"
  },
  "layer": {
    "name": "VK_LAYER_AMD_switchable_graphics_64",
    "type": "GLOBAL",
    "library_path": "'${script_dir}'/gcn1/64bit/amdvlk64.so",
    "api_version": "1.2.179",
    "implementation_version": "1",
    "description": "AMD switchable graphics layer",
    "functions": {
      "vkGetInstanceProcAddr": "vk_icdGetInstanceProcAddrSG",
      "vkGetDeviceProcAddr": "vk_icdGetDeviceProcAddrSG"
    },
    "disable_environment": {
      "DISABLE_LAYER_AMD_SWITCHABLE_GRAPHICS_1": "1"
    }
  }
}' > "${script_dir}/gcn1/lib64bit/amd_icd64.json"

#create amdvlk-gcn1
echo '#!/bin/bash
#creator by RedRoot(Yacyna Mehail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 
LD_PRELOAD="'${script_dir}'/gcn1/lib64bit/spvgen.so"
LD_LIBRARY_PATH="'${script_dir}'/gcn1/lib64bit"
vk_icd_amdvlk='${script_dir}'/gcn1/lib64bit/amd_icd64.json:'${script_dir}'/gcn1/lib32bit/amd_icd32.json

exec env "VK_ICD_FILENAMES=${vk_icd_amdvlk}" "$@"' > amdvlk-gcn1
#копируем скрипт запуска в папку исполняемых скриптом пользователя
cp -f amdvlk-gcn1 /home/$USER/.local/bin
#даем права на запуск программы и ее скриптов
chmod +x /home/$USER/.local/bin/amdvlk-gcn1

#create amdvlk-gcn1-test
echo '#!/bin/bash
#creator by RedRoot(Yacyna Mehail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 
LD_PRELOAD="'${script_dir}'/gcn1/lib64bit/spvgen.so:'${script_dir}'/test/libMangoHud.so"
LD_LIBRARY_PATH="'${script_dir}'/gcn1/lib64bit:'${script_dir}'/test/"
#vk_icd_amdvlk='${script_dir}'/gcn1/lib64bit/amd_icd64.json:'${script_dir}'/gcn1/lib32bit/amd_icd32.json

MANGOHUD_CONFIGFILE='${script_dir}'/test/MangoHud.conf VK_LAYER_PATH="'${script_dir}'/test" VK_INSTANCE_LAYERS=VK_LAYER_MANGOHUD_overlay LD_LIBRARY_PATH="${LD_LIBRARY_PATH}" LD_PRELOAD="${LD_PRELOAD}" amdvlk-gcn1 '${script_dir}'/test/./vulkan-smoketest --d --w 800 --h 600 --flush& sleep 10;killall "vulkan-smoketest"' > amdvlk-gcn1-test
#копируем скрипт запуска в папку исполняемых скриптом пользователя
cp -f amdvlk-gcn1-test /home/$USER/.local/bin
#даем права на запуск программы и ее скриптов
chmod +x /home/$USER/.local/bin/amdvlk-gcn1-test

#create amdvlk amd_icd32.json
echo '{
  "file_format_version": "1.0.0",
  "ICD": {
    "library_path": "'${script_dir}'/new-gpu/lib32bit/amdvlk32.so",
    "api_version": "1.3.212"
  },
  "layer": {
    "name": "VK_LAYER_AMD_switchable_graphics_32",
    "type": "GLOBAL",
    "library_path": "'${script_dir}'/new-gpu/lib32bit/amdvlk32.so",
    "api_version": "1.3.212",
    "implementation_version": "1",
    "description": "AMD switchable graphics layer",
    "functions": {
      "vkGetInstanceProcAddr": "vk_icdGetInstanceProcAddrSG",
      "vkGetDeviceProcAddr": "vk_icdGetDeviceProcAddrSG"
    },
    "disable_environment": {
      "DISABLE_LAYER_AMD_SWITCHABLE_GRAPHICS_1": "1"
    }
  }
}' > "${script_dir}/new-gpu/lib32bit/amd_icd32.json"

#create amdvlk amd_icd64.json
echo '{
  "file_format_version": "1.0.0",
  "ICD": {
    "library_path": "'${script_dir}'/new-gpu/lib64bit/amdvlk64.so",
    "api_version": "1.3.212"
  },
  "layer": {
    "name": "VK_LAYER_AMD_switchable_graphics_64",
    "type": "GLOBAL",
    "library_path": "'${script_dir}'/new-gpu/64bit/amdvlk64.so",
    "api_version": "1.3.212",
    "implementation_version": "1",
    "description": "AMD switchable graphics layer",
    "functions": {
      "vkGetInstanceProcAddr": "vk_icdGetInstanceProcAddrSG",
      "vkGetDeviceProcAddr": "vk_icdGetDeviceProcAddrSG"
    },
    "disable_environment": {
      "DISABLE_LAYER_AMD_SWITCHABLE_GRAPHICS_1": "1"
    }
  }
}' > "${script_dir}/new-gpu/lib64bit/amd_icd64.json"

#create amdvlk
echo '#!/bin/bash
#creator by RedRoot(Yacyna Mehail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 
LD_PRELOAD="'${script_dir}'/new-gpu/lib64bit/spvgen.so"
LD_LIBRARY_PATH="'${script_dir}'/new-gpu/lib64bit"
vk_icd_amdvlk='${script_dir}'/new-gpu/lib64bit/amd_icd64.json:'${script_dir}'/new-gpu/lib32bit/amd_icd32.json

exec env "VK_ICD_FILENAMES=${vk_icd_amdvlk}" "$@"' > amdvlk
#копируем скрипт запуска в папку исполняемых скриптом пользователя
cp -f amdvlk /home/$USER/.local/bin
#даем права на запуск программы и ее скриптов
chmod +x /home/$USER/.local/bin/amdvlk

#create amdvlk-test
echo '#!/bin/bash
#creator by RedRoot(Yacyna Mehail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License 
LD_PRELOAD="'${script_dir}'/new-gpu/lib64bit/spvgen.so:'${script_dir}'/test/libMangoHud.so"
LD_LIBRARY_PATH="'${script_dir}'/new-gpu/lib64bit:'${script_dir}'/test/"
#vk_icd_amdvlk='${script_dir}'/new-gpu/lib64bit/amd_icd64.json:'${script_dir}'/new-gpu/lib32bit/amd_icd32.json

MANGOHUD_CONFIGFILE='${script_dir}'/test/MangoHud.conf VK_LAYER_PATH="'${script_dir}'/test" VK_INSTANCE_LAYERS=VK_LAYER_MANGOHUD_overlay LD_LIBRARY_PATH="${LD_LIBRARY_PATH}" LD_PRELOAD="${LD_PRELOAD}" amdvlk '${script_dir}'/test/./vulkan-smoketest --d --w 800 --h 600 --flush& sleep 10;killall "vulkan-smoketest"' > amdvlk-test
#копируем скрипт запуска в папку исполняемых скриптом пользователя
cp -f amdvlk-test /home/$USER/.local/bin
#даем права на запуск программы и ее скриптов
chmod +x /home/$USER/.local/bin/amdvlk-test


#create mangohud vulkan layer conf
echo '{
    "file_format_version" : "1.0.0",
    "layer" : {
      "name": "VK_LAYER_MANGOHUD_overlay",
      "type": "GLOBAL",
      "api_version": "1.2.135",
      "library_path": "'${script_dir}'/test/libMangoHud.so",
      "implementation_version": "1",
      "description": "Vulkan Hud Overlay",
      "functions": {
         "vkGetInstanceProcAddr": "overlay_GetInstanceProcAddr",
         "vkGetDeviceProcAddr": "overlay_GetDeviceProcAddr"
      },
      "enable_environment": {
        "MANGOHUD": "1"
      },
      "disable_environment": {
        "DISABLE_MANGOHUD": "1"
      }
    }
}' > "${script_dir}/test/MangoHud.json"

exit 0

mangohud ./vulkan-smoketest --d --w 800 --h 600 --flush& sleep 10;killall "vulkan-smoketest"

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
