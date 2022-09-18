#!/bin/bash
#creator by RedRoot(Yaciyna Mikhail) for GAMER STATION [on linux] and Gaming Community OS Linux
# GPL-3.0 License

echo 'steampal_stable_9a24a2bf68596b860cb6710d9ea307a76c29a04d' > /$HOME/.steam/root/package/beta
#bluetoothctl --timeout 3 remove 98:B6:E8:6B:8D:0B
bluetoothctl --timeout 3 trust 98:B6:EA:6B:8D:0B
screen_native=`xdpyinfo -display :0.0 | grep dimensions | egrep -o "[0-9]+x[0-9]+ pixels" | egrep -o "[0-9]+x[0-9]+"`
resolution_x=`echo "$screen_native" | egrep -o "[0-9]+x[0-9]+" | cut -d x -f 1`
resolution_y=`echo "$screen_native" | egrep -o "[0-9]+x[0-9]+" | cut -d x -f 2`
echo "resolution_x:$resolution_x"
echo "resolution_y:$resolution_y"
gamescope -b -U -W "$resolution_x" -H "$resolution_y" --steam -f -- steam -steamos -gamepadui &while true;do sleep 1;echo "work bluetouch";bluetoothctl connect 98:B6:EA:6B:8D:0B;done
#steam -full -steamos -gamepadui &while true;do sleep 1;echo "work bluetouch";bluetoothctl connect 98:B6:E8:6B:8D:0B;done
