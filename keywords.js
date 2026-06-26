/* mikrorayonservis.az – səhifəyə görə açar sözlər */
window.ALI_KEYWORDS = {
  home: [
    'mikrorayonservis.az',
    'MikrorayonServis',
    'ремонт кондиционеров Баку',
    'монтаж кондиционеров',
    'kondisioner təmiri Bakı',
    'kondisioner quraşdırılması',
    'kondisioner servisi Bakı',
    'kondisioner ustası',
    'HVAC Bakı',
    'VRF sistemləri',
    'VRV sistemləri',
    'çiller sistemi',
    'havalandırma sistemləri',
    'freon doldurulması',
    'split kondisioner servisi',
    'kombi təmiri Bakı',
    '24/7 kondisioner servisi',
    'zəmanətli HVAC xidməti'
  ],
  services: [
    'kondisioner təmiri',
    'kondisioner quraşdırılması',
    'freon doldurulması',
    'kondisioner servisi Bakı',
    'split kondisioner servisi',
    'kaset tipli kondisioner',
    'kanal tipli kondisioner',
    'VRF sistemlərinin quraşdırılması',
    'VRV sistemlərinin servisi',
    'kombi təmiri',
    'kombi servisi',
    'havalandırma sistemləri',
    'HVAC həlləri',
    'texniki baxış',
    'diaqnostika',
    'mikrorayonservis.az'
  ],
  about: [
    'MikrorayonServis',
    'mikrorayonservis.az',
    'kondisioner servisi Bakı',
    'HVAC şirkəti',
    'peşəkar ustalar',
    'zəmanətli xidmət',
    'müştəri məmnuniyyəti',
    'orijinal ehtiyat hissələri',
    'VRF və VRV mütəxəssisləri',
    'ремонт кондиционеров Баку',
    'etibarlı servis xidməti'
  ],
  contact: [
    'MikrorayonServis əlaqə',
    'mikrorayonservis.az',
    'kondisioner ustası Bakı',
    '+994 55 477 03 27',
    '055 477 03 27',
    'WhatsApp əlaqə',
    '24/7 servis xidməti',
    'təcili texniki dəstək',
    'kondisioner servisi',
    'pulsuz məsləhət'
  ]
};

(function() {
  'use strict';

  function renderPageKeywords() {
    var container = document.getElementById('pageKeywords');
    if (!container || !window.ALI_KEYWORDS) return;

    var page = container.getAttribute('data-keywords-page') || 'home';
    var keywords = window.ALI_KEYWORDS[page] || window.ALI_KEYWORDS.home;

    if (!keywords || keywords.length === 0) return;

    container.innerHTML = keywords.map(function(kw) {
      var safeKeyword = kw.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
      });
      return '<span class="keyword-tag">' + safeKeyword + '</span>';
    }).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPageKeywords);
  } else {
    renderPageKeywords();
  }
})();
