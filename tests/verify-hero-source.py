"""Verify that the approved orbit simulation was copied, with only integration selectors changed."""
import re
import subprocess
from pathlib import Path

source = subprocess.check_output([
    'git', 'show', 'f58c2d7:docs/de-xuat-hero-quy-dao/hero-quy-dao.html'
], text=True)
script = re.findall(r'<script>(.*?)</script>', source, re.S)[-1]
script = script[script.index("(function () {\n  'use strict';\n\n  var hero"):]
script = script.replace("  var header = hero.querySelector('.site-header');\n", '')
script = script.replace("getElementById('hero')", "getElementById('hero-main')")
script = script.replace('.hero', '.ho')
script = script.replace('var headerH = header.offsetHeight;',
                        'var headerH = 0;   // header chung của trang nằm ngoài khối hero')
actual = Path('demo/hero-orbit.js').read_text()
actual = actual[actual.index('(function'):]
assert script.strip() == actual.strip(), 'Approved simulation differs beyond the allowed integration changes'
print('PASS: approved orbit JS preserved; only selectors and external-header measurement changed')
