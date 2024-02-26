#!/usr/bin/env python3
import sys
import gi
gi.require_version('Soup', '2.4')

import webview

if __name__ == '__main__':
 webview.create_window('mesa-switcher-rosa', 'html-menu5.html', width=1280, height=720)
 webview.start()

