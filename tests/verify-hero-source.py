"""Compare the approved Introduction v3 with the explicitly allowed demo adapters."""
import re
import subprocess
from pathlib import Path

source = subprocess.check_output([
    'git', 'show', 'ea269d0ca391893d26d523d6e326b43e001682a5:docs/de-xuat-gioi-thieu/trang-chu-gioi-thieu.html'
], encoding='utf-8')
script = re.findall(r'<script>(.*?)</script>', source, re.S)[-1]
script = script[script.index('  var hero ='):]
script = script.replace("  var header = hero.querySelector('.site-header');\n", '')
script = script.replace("getElementById('hero')", "getElementById('hero-main')")
script = script.replace('.hero', '.ho')
script = script.replace('.about', '.gt').replace('.slot-frame', '.gt__slot-frame')
script = script.replace('--about-top', '--gt-top')
script = script.replace('var headerH = header.offsetHeight;',
                        'var headerH = 0;   // header chung của trang nằm ngoài khối hero')
script = script.replace(
    '    var vh = window.innerHeight, aH = about.offsetHeight;\n'
    '    var top = Math.max(0, Math.round((vh - aH) / 2));',
    '    // Chừa chỗ cho thanh dính trên đỉnh trang (đánh dấu data-sticky-top, ví dụ thanh điều khiển bản xem thử)\n'
    '    var off = 0;\n'
    "    [].forEach.call(document.querySelectorAll('[data-sticky-top]'), function (el) { off = Math.max(off, el.offsetHeight); });\n"
    '    var vh = window.innerHeight - off, aH = about.offsetHeight;\n'
    '    var top = off + Math.max(0, Math.round((vh - aH) / 2));')
script = script.replace(
    '  new ResizeObserver(relayout).observe(about);',
    "  if ('ResizeObserver' in window) new ResizeObserver(relayout).observe(about);\n"
    '  window.addEventListener(\'resize\', relayout);   // đổi chiều cao cửa sổ (thanh địa chỉ điện thoại) làm đổi nhịp đứng yên')
actual = Path('demo/hero-orbit.js').read_text(encoding='utf-8')
actual = actual[actual.index('  var hero ='):]
assert script.strip() == actual.strip(), 'Approved simulation differs beyond the allowed integration changes'
print('PASS: approved Introduction v3 JS preserved; selectors, external header, sticky toolbar and resize adapters only')
