#!/usr/bin/env python3
import sys
import gi
gi.require_version('Soup', '2.4')
import webview


if __name__ == '__main__':
    webview.create_window('gamepad-test2',
                          'html5-gamepad-test2.html', width=800, height=600)
    webview.start()

