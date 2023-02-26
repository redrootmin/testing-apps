#!/usr/bin/env python3
import webview
webview.create_window('Furmark Linux gui', 'Minimum window size', 'html5-gui.html', fullscreen=True, min_size=(1280, 720))
webview.start()
