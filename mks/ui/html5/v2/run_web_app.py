#!/usr/bin/env python3
import os
import sys
import gi
import glob
gi.require_version('Soup', '2.4')
import webview


filename_list = glob.glob('*.html')
filename = filename_list[0]
print(filename)
if __name__ == '__main__':
 webview.create_window('web_app_test', (filename), frameless=False, easy_drag=True)
 webview.start()

