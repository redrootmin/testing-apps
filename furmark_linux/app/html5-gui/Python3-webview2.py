#!/usr/bin/env python3
import webview
from gi.repository import Soup
webview.create_window('Minimum window size', 'Furmark Linux gui', 'index.html', min_size=(1280, 720))
webview.start()
