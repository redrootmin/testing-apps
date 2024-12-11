label start:
    call load_setup from _call_load_setup
    jump battle_loop

label battle_loop:
    call battle from _call_battle
    $ restorehp()
    $ restoremp()
    jump battle_loop
