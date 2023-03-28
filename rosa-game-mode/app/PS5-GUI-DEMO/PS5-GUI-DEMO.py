#!/usr/bin/env python3
import sys
import gi
gi.require_version('Soup', '2.4')

import webview

if __name__ == '__main__':
 webview.create_window('PS5-GUI-DEMO', 'index.html', fullscreen=True)
 webview.start()

