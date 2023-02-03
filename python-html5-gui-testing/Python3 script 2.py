#!/usr/bin/env python3
import webview

if __name__ == '__main__':
    webview.create_window('benchmark-gui',
                          './browser/index.html',
                          frameless=True)
    webview.start()
