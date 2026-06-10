/* TeknoSoHome.az – səhifəyə görə açar sözlər */
window.ALI_KEYWORDS = {
home: [
'kondisioner təmiri',
'kondisioner quraşdırılması',
'kondisioner servisi Bakı',
'kondisioner ustası',
'VRF sistemləri',
'VRV sistemləri',
'havalandırma sistemləri',
'HVAC xidmətləri',
'freon doldurulması',
'24/7 servis',
'zəmanətli xidmət',
'TeknoSoHome'
],

services: [
'kondisioner təmiri',
'kondisioner quraşdırılması',
'freon doldurulması',
'kondisioner servisi',
'split kondisioner servisi',
'kaset tipli kondisioner',
'kanal tipli kondisioner',
'VRF sistemlərinin quraşdırılması',
'VRV sistemlərinin servisi',
'havalandırma sistemləri',
'HVAC həlləri',
'texniki baxış',
'diaqnostika',
'profilaktik servis'
],

about: [
'TeknoSoHome',
'kondisioner servisi Bakı',
'HVAC şirkəti',
'peşəkar ustalar',
'zəmanətli xidmət',
'müştəri məmnuniyyəti',
'orijinal ehtiyat hissələri',
'müasir avadanlıqlar',
'havalandırma sistemləri',
'VRF və VRV mütəxəssisləri',
'etibarlı servis xidməti'
],

contact: [
'TeknoSoHome əlaqə',
'kondisioner ustası Bakı',
'055 246 74 77',
'+994 55 246 74 77',
'WhatsApp əlaqə',
'24/7 servis xidməti',
'təcili texniki dəstək',
'kondisioner servisi',
'havalandırma sistemləri',
'pulsuz məsləhət'
]
};

(function () {
'use strict';

function renderPageKeywords() {
var container = document.getElementById('pageKeywords');
if (!container || !window.ALI_KEYWORDS) return;

```
var page = container.getAttribute('data-keywords-page') || 'home';
var keywords = window.ALI_KEYWORDS[page] || window.ALI_KEYWORDS.home;

container.innerHTML = keywords.map(function (kw) {
  return '<span class="keyword-tag">' + kw + '</span>';
}).join('');
```

}

document.addEventListener('DOMContentLoaded', renderPageKeywords);
})();
