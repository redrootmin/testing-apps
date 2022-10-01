#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License
#game_pad_dir=$(cd $(dirname "$0") && pwd);mac=`cat $game_pad_dir/pad-mac`;while true;do echo "connect game-pad:${mac}";sleep 3;bluetoothctl connect ${mac};done
game_pad_dir=$(cd $(dirname "$0") && pwd)
mac=`cat $game_pad_dir/pad-mac`
while true
do 
sleep 5
#bluetoothctl --timeout 3 scan on
bluetoothctl connect ${mac}
done
#game_pad_dir=$(cd $(dirname "$0") && pwd);mac=`cat $game_pad_dir/pad-mac`;bluetoothctl connect ${mac}
exit 0
