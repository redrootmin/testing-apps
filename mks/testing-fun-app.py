#!/usr/bin/env python3
import sys
import gi
gi.require_version('Soup', '2.4')

import webview

if __name__ == '__main__':
 webview.create_window('Mesa-Kernel-switcher[MKS Utility]', './ui/html5-test/index.html', frameless=False, easy_drag=True)
 webview.start()
