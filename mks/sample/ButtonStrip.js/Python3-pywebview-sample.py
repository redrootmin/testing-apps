#!/usr/bin/env python3
import sys
import gi
gi.require_version('Soup', '2.4')

import webview

if __name__ == '__main__':
 webview.create_window('web_app_test', 'index.html', frameless=True, easy_drag=True)
 webview.start()

