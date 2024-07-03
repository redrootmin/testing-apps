#!/usr/bin/env python3
import os
import sys
import gi
import glob
gi.require_version('Soup', '2.4')
import webview

class Api():
  def log(self, value):
    print(value)

webview.create_window("Test", html="<button onclick='pywebview.api.log(\"Woah dude!\")'>Click me</button>", js_api=Api())
webview.start()

