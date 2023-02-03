#!/usr/bin/env python3
import webview


if __name__ == '__main__':
    webview.create_window('RosaBigScreenGameManager',
                          'html5-xmb5.html',
                          fullscreen=True)
    webview.start()

