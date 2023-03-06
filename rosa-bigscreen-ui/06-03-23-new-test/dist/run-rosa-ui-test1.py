#!/usr/bin/env python3
import webview


if __name__ == '__main__':
    webview.create_window('ROSA-GAME-MODE-v001',
                          'index.html',
                          fullscreen=True)
    webview.start()

